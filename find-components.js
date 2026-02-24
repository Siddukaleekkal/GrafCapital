const Jimp = require('jimp');

async function processImage() {
    const image = await Jimp.read('public/Graf Capital Inverted.png');
    const w = image.bitmap.width;
    const h = image.bitmap.height;

    const labels = new Int32Array(w * h);
    let currentLabel = 1;
    const components = {};

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const idx = (w * y + x) << 2;
            const r = image.bitmap.data[idx];
            // Graf Capital Inverted.png. Assuming it's a solid PNG with black/white or similar
            // White pixels have red > 64.
            if (r > 64 && labels[w * y + x] === 0) {
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
                            if (labels[w * ny + nx] === 0 && image.bitmap.data[((w * ny + nx) << 2)] > 64) {
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

    // Create a debug image where label 1 is red, label 2 is green, label 3 is blue
    const debugImage = await new Jimp(w, h, 0x000000FF);
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const lbl = labels[w * y + x];
            if (lbl > 0) {
                let col = 0xFFFFFFFF;
                if (lbl === 1) col = 0xFF0000FF;
                if (lbl === 2) col = 0x00FF00FF;
                if (lbl === 3) col = 0x0000FFFF;
                if (lbl === 4) col = 0xFFFF00FF;
                debugImage.setPixelColor(col, x, y);
            }
        }
    }
    await debugImage.writeAsync('public/debug-components.png');

    // Let's also print all components with > 50 pixels
    for (let c in components) {
        if (components[c].pixels > 50) {
            console.log(`Label ${c}: pixels=${components[c].pixels} minY=${components[c].minY} maxY=${components[c].maxY} minX=${components[c].minX} maxX=${components[c].maxX}`);
        }
    }
}

processImage().catch(console.error);
