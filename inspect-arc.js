const Jimp = require('jimp');

async function processImage() {
    const image = await Jimp.read('public/logo-transparent.png');
    const w = image.bitmap.width;
    const h = image.bitmap.height;

    // Let's erase based on distance from the center.
    // The GC text is centrally located, but the arc is an outer circle.
    // A circular mask from the center out to a certain radius?
    // Or we can just do connected components but don't delete based on minY.
    // The arc is a specific arc. Let's find its center. It looks like it's roughly centered at width/2.
    // Actually, how thick is the arc? We can just do a FloodFill from the top left corner to remove the arc if it touches? No it's white.
    // Let me just delete all pixels above y=X, but the arc curves down around the letters.

    const labels = new Int32Array(w * h);
    let currentLabel = 1;
    const components = {};

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const idx = (w * y + x) << 2;
            const a = image.bitmap.data[idx + 3];
            if (a > 64 && labels[w * y + x] === 0) {
                const queue = [{ x, y }];
                labels[w * y + x] = currentLabel;
                components[currentLabel] = {
                    pixels: 1,
                    minY: y, maxY: y,
                    minX: x, maxX: x
                };
                let head = 0;

                while (head < queue.length) {
                    const pt = queue[head++];
                    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]];
                    for (let d of dirs) {
                        const nx = pt.x + d[0];
                        const ny = pt.y + d[1];
                        if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
                            if (labels[w * ny + nx] === 0 && image.bitmap.data[((w * ny + nx) << 2) + 3] > 64) {
                                labels[w * ny + nx] = currentLabel;
                                components[currentLabel].pixels++;
                                components[currentLabel].minY = Math.min(components[currentLabel].minY, ny);
                                components[currentLabel].maxY = Math.max(components[currentLabel].maxY, ny);
                                components[currentLabel].minX = Math.min(components[currentLabel].minX, nx);
                                components[currentLabel].maxX = Math.max(components[currentLabel].maxX, nx);
                                queue.push({ x: nx, y: ny });
                            }
                        }
                    }
                }
                currentLabel++;
            }
        }
    }

    let logs = [];
    for (let c in components) {
        if (components[c].pixels > 50) {
            logs.push(`Label ${c}: pixels=${components[c].pixels} minY=${components[c].minY} maxY=${components[c].maxY} minX=${components[c].minX} maxX=${components[c].maxX}`);
        }
    }
    console.log(logs.join("\n"));
}

processImage().catch(console.error);
