const Jimp = require('jimp');

Jimp.read("./test.png", function (err, image) {
  console.log(Jimp.intToRGBA(image.getPixelColor(0, 0))); // returns the colour of that pixel e.g. 0xFFFFFFFF
});