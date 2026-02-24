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

    // Create the transparent logo with ONLY the labels we want to KEEP
    // We want to KEEP Label 3, 4, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18
    // We want to REMOVE Label 1, 2, 5, 7.
    const transparentImage = await new Jimp(w, h, 0x00000000);

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const lbl = labels[w * y + x];
            // Exclude background (0), arc (1, 2), dots (5, 7)
            if (lbl > 0 && lbl !== 1 && lbl !== 2 && lbl !== 5 && lbl !== 7) {
                // It's the letters. Make them clean white and fully opaque.
                transparentImage.setPixelColor(0xFFFFFFFF, x, y);
            }
        }
    }

    await transparentImage.writeAsync('public/logo-transparent.png');
    await transparentImage.writeAsync('public/logo.png');
    console.log('Successfully created logo without arc/dots and without autocrop!');
}

processImage().catch(console.error);
