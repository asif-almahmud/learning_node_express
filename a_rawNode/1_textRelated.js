const fs = require("fs");

//-> Synchronous

// let text = fs.readFileSync("../files/input.txt", "utf-8");

// text = `text overlapped :- ${text}`;

// fs.writeFileSync("../files/input.txt", text);

// text = `copied text :- ${text}`;

// fs.writeFileSync("../files/output.txt", text);

//-> Asynchronous

fs.readFile("../files/input.txt", "utf-8", (error, result) => {
   // error: If something goes wrong while reading the content of the file
   // result: If successful, then the read content of the file will be copied in the result

   if (error) {
      console.log({ error });
   } else {
      console.log({ result });
      fs.writeFile(
         "../files/output2.txt",
         "new text from the asynchronous way",
         "utf-8",
         (error) => {
            //   By default this file just accepts an error variable
            console.log({ errorFromAsyncWriteFile: error });
         }
      );
   }
});
