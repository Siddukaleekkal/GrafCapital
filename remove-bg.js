const Jimp = require('jimp');

async function processImage() {
  const image = await Jimp.read('public/logo.png');
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    const red = this.bitmap.data[idx + 0];
    const green = this.bitmap.data[idx + 1];
    const blue = this.bitmap.data[idx + 2];

    // More accurate perceptual luminance
    const lum = (red * 0.299) + (green * 0.587) + (blue * 0.114);

    // Strict threshold: Anything dark is fully transparent
    if (lum < 80) {
      this.bitmap.data[idx + 3] = 0;
    } else {
      // The text/logo
      this.bitmap.data[idx + 0] = 255;
      this.bitmap.data[idx + 1] = 255;
      this.bitmap.data[idx + 2] = 255;
      // Fade the edges smoothly using alpha
      const alpha = Math.min(255, (lum - 80) * 1.45);
      this.bitmap.data[idx + 3] = alpha;
    }
  });

  // optionally crop empty space around it
  image.autocrop();

  await image.writeAsync('public/logo-transparent.png');
  console.log('Image processed perfectly!');
}

processImage().catch(console.error);
