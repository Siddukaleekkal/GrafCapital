"use client";

import { useState, useEffect } from "react";
import { FinancialTable, type MarketIndex } from "@/components/ui/financial-markets-table";

export function FundMakeup() {
  const [indices, setIndices] = useState<MarketIndex[]>([
    {
      id: "ASML", name: "ASML Holding", country: "Netherlands", countryCode: "NL",
      ytdReturn: 28.5, pltmEps: 21.05, divYield: 0.72, marketCap: 350.2, volume: 1.2,
      chartData: [875.2, 880.1, 878.5, 882.3, 890.1, 885.6, 892.4, 895.8, 902.1, 910.4],
      price: 910.40, dailyChange: 8.30, dailyChangePercent: 0.92
    },
    {
      id: "TSM", name: "Taiwan Semiconductor", country: "Taiwan", countryCode: "TW",
      ytdReturn: 42.1, pltmEps: 5.62, divYield: 1.45, marketCap: 750.6, volume: 15.4,
      chartData: [135.2, 137.8, 136.5, 140.2, 142.1, 141.5, 144.8, 146.2, 148.5, 150.2],
      price: 150.20, dailyChange: 1.70, dailyChangePercent: 1.15
    },
    {
      id: "KLAC", name: "KLA Corporation", country: "USA", countryCode: "US",
      ytdReturn: 31.2, pltmEps: 24.15, divYield: 0.85, marketCap: 85.4, volume: 0.8,
      chartData: [640.5, 642.1, 645.8, 643.2, 648.9, 650.1, 655.4, 658.2, 660.5, 665.8],
      price: 665.80, dailyChange: 5.30, dailyChangePercent: 0.80
    },
    {
      id: "VRT", name: "Vertiv Holdings", country: "USA", countryCode: "US",
      ytdReturn: 55.4, pltmEps: 1.25, divYield: 0.12, marketCap: 30.2, volume: 4.5,
      chartData: [82.5, 84.1, 83.8, 86.2, 88.5, 87.9, 90.1, 92.4, 91.8, 94.2],
      price: 94.20, dailyChange: 2.40, dailyChangePercent: 2.61
    },
    {
      id: "MPWR", name: "Monolithic Power", country: "USA", countryCode: "US",
      ytdReturn: 24.8, pltmEps: 10.45, divYield: 0.45, marketCap: 32.5, volume: 0.6,
      chartData: [680.2, 685.4, 683.1, 690.5, 688.2, 695.4, 698.8, 702.1, 705.5, 712.4],
      price: 712.40, dailyChange: 6.90, dailyChangePercent: 0.98
    },
    {
      id: "ON", name: "ON Semiconductor", country: "USA", countryCode: "US",
      ytdReturn: 15.6, pltmEps: 4.85, divYield: 0.00, marketCap: 35.8, volume: 6.2,
      chartData: [70.5, 71.2, 70.8, 72.5, 74.1, 73.8, 75.2, 74.9, 76.5, 78.1],
      price: 78.10, dailyChange: 1.60, dailyChangePercent: 2.09
    },
    {
      id: "SPAXX", name: "Fidelity Gov Money", country: "USA", countryCode: "US",
      ytdReturn: 1.05, pltmEps: null, divYield: 4.95, marketCap: 320.5, volume: 0.0,
      chartData: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
      price: 1.00, dailyChange: 0.00, dailyChangePercent: 0.00
    }
  ]);

  // Fetch real data updates
  useEffect(() => {
    const fetchRealData = async () => {
      try {
        const symbols = "ASML,TSM,KLAC,VRT,MPWR,ON,SPAXX";
        const res = await fetch(`/api/finance?symbols=${symbols}`);
        if (!res.ok) return;
        const result = await res.json();

        setIndices(prev => prev.map(index => {
          const fetched = result.find((r: any) => r.symbol === index.id);
          if (fetched) {
            return {
              ...index,
              price: fetched.price || index.price,
              dailyChange: fetched.dailyChange || index.dailyChange,
              dailyChangePercent: fetched.dailyChangePercent || index.dailyChangePercent,
              ytdReturn: fetched.ytdReturn !== undefined ? fetched.ytdReturn : index.ytdReturn,
              pltmEps: fetched.pltmEps || index.pltmEps,
              divYield: fetched.divYield || index.divYield,
              marketCap: fetched.marketCap || index.marketCap,
              volume: fetched.volume || index.volume,
              chartData: fetched.chartData && fetched.chartData.length > 0 ? fetched.chartData : index.chartData,
            };
          }
          return index;
        }));
      } catch (err) {
        console.error(err);
      }
    };

    fetchRealData();
    const interval = setInterval(fetchRealData, 15000); // Poll every 15s

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="performance" className="py-32 bg-white border-y border-black/5 text-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-graf-gold mb-4 relative">
            <span className="absolute -left-12 top-1/2 w-8 h-[1px] bg-graf-gold" />
            Fund Architecture
            <span className="absolute -right-12 top-1/2 w-8 h-[1px] bg-graf-gold" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-light leading-tight text-black mb-6">
            Core Equities
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg text-gray-600 font-light leading-relaxed">
            Real-time telemetry from core equities illustrating multi-day chart trends, daily performance, and essential financial metrics.
          </p>
        </div>

        <FinancialTable
          title="Equity"
          indices={indices}
        />
      </div>
    </section>
  );
}
