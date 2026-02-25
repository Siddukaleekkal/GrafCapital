import { NextResponse } from "next/server";
import YahooFinance from "yahoo-finance2";

const yahooFinance = new YahooFinance();

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const symbolsParam = searchParams.get("symbols");

    if (!symbolsParam) {
        return NextResponse.json({ error: "No symbols provided" }, { status: 400 });
    }

    const symbols = symbolsParam.split(",");

    try {
        const quotes = await yahooFinance.quote(symbols) as any[];

        // Fetch historical data for all symbols to build the 10-day chart
        const period1 = new Date();
        period1.setDate(period1.getDate() - 14); // get enough days for 10 trading days

        const chartPromises = symbols.map(async (symbol) => {
            try {
                const history = await yahooFinance.historical(symbol, {
                    period1,
                    interval: "1d",
                }) as any[];
                return {
                    symbol,
                    history: history.slice(-10).map((h: any) => h.close), // last 10 days
                };
            } catch (err) {
                console.error(`Failed to fetch history for ${symbol}`, err);
                return { symbol, history: [] };
            }
        });

        const charts = await Promise.all(chartPromises);
        const chartMap = Object.fromEntries(charts.map(c => [c.symbol, c.history]));

        const result = quotes.map((q: any) => ({
            symbol: q.symbol,
            price: q.regularMarketPrice,
            dailyChange: q.regularMarketChange,
            dailyChangePercent: q.regularMarketChangePercent,
            ytdReturn: q.ytdReturn || q.regularMarketChangePercent, // YTD return fallback
            pltmEps: q.epsTrailingTwelveMonths,
            divYield: q.dividendYield,
            marketCap: q.marketCap ? q.marketCap / 1e9 : 0,
            volume: q.regularMarketVolume ? q.regularMarketVolume / 1e6 : 0,
            chartData: chartMap[q.symbol] || [q.regularMarketPrice],
        }));

        return NextResponse.json(result);
    } catch (error) {
        console.error("Failed to fetch finance data:", error);
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
}
