//callback
function downloadFile(filename, callback) {
  setTimeout(() => {
    console.log("downloading file");
    callback(filename);
  }, 2000);
}

function processDownloadedFile(filename) {
  console.log("downloaded :" + filename);
}

//promise
function fetchData(condition) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (condition) {
        resolve("It was a success");
      } else {
        reject("It was a desaster");
      }
    }, 2000);
  });
}

//calls
downloadFile("file1.txt", processDownloadedFile);
console.log("My name is Ejulu Wilson\n");

fetchData(true)
  .then((data) => {
    console.log(data);
    return fetchData(false);
  })
  .then((data) => console.log(data))
  .catch((data) => console.log(data + "\n"))
  .finally((data) => console.log("We move on regardless\n"));
