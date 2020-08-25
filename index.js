const tesseract = require("node-tesseract-ocr");

const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
};

tesseract
  .recognize("../../../Capture.png", config)
  .then((text) => {
    console.log(text);
  })
  .catch((error) => {
    console.log(error.message);
  });
