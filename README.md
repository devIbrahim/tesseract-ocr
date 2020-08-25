# Text-based image to text convertor.

### How to use this

- Install the Tesseract project from here: https://github.com/tesseract-ocr/tesseract/wiki
- Copy the path of tessdata/eng.traineddata file & make an environment variable named "TESSDATA_PREFIX" and put the copied path in the value of this variable.
- Reopen your terminal / VSCode if necessary.

- In the index.js file, put the link/path of the image you want to read as the tesseract.recognize function's first argument.
- RUN "npm start" & you'll see the result text in the console.
