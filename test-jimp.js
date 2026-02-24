const Jimp = require('jimp');

async function processImage() {
  const image = await Jimp.read('public/logo-transparent.png');
  console.log(`Dimensions: ${image.bitmap.width}x${image.bitmap.height}`);
}

processImage().catch(console.error);
