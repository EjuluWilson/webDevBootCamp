/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      name: "url",
      type: "input",
      message: "Enter the URL to convert to QR-Code.",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!

    //generate and save the image
    var qr_svg = qr.image(answers.url, { type: "png" });

    qr_svg.pipe(fs.createWriteStream("./url.png"));

    fs.writeFile("./URL.txt", answers.url, (err) => {
      if (err) {
        throw err;
      } else {
        console.log("succefuly writen file");
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
