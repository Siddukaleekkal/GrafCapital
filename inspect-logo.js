const Jimp = require('jimp');

async function processImage() {
    const image = await Jimp.read('public/logo-transparent.png');
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    console.log(`Dimensions: ${w}x${h}`);

    // We want to remove the top semi-circle. 
    // Let's find connected components of alpha > 128
    const labels = new Int32Array(w * h);
    let currentLabel = 1;
    const components = {};

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const idx = (w * y + x) << 2;
            const a = image.bitmap.data[idx + 3];
            if (a > 128 && labels[w * y + x] === 0) {
                // BFS to find all pixels in this component
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
                    // Check neighbors
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

    console.log(`Found ${currentLabel - 1} components`);
    let logs = [];
    for (let c in components) {
        logs.push(`Component ${c}: pixels=${components[c].pixels}, top=${components[c].minY}, left=${components[c].minX}, bottom=${components[c].maxY}, right=${components[c].maxX}`);
    }
    console.log(logs.join('\n'));

}

processImage().catch(console.error);
