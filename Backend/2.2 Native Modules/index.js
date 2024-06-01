const fs = require("fs");

fs.writeFile("./ejulu.txt","Asama is cute", err => {
    if (err){
        console.log(err);
    }else{
        console.log("File written successfully")
    }
})

fs.readFile("./ejulu.txt",(error, data) =>{
    if(error){
        console.log(error);
    }else{
        console.log("File constent:" + data);
    }
})