import fs from "fs";

export default async function fileOperations(req,res) {
  try {
  
    fs.writeFile("example2.txt", "Hello from Node.js", (err) => {
      if (err) throw err;
      console.log("File created successfully");
    });

    fs.watch("example.txt", (eventType, filename) => {
      console.log(`File ${filename} changed with event: ${eventType}`);
    });

    fs.readFile("example2.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log("File content:", data);
    });


    fs.appendFile("example2.txt", "\nNew line added", (err) => {
      if (err) throw err;
      console.log("Data appended");
    });

    fs.stat("example2.txt", (err, stats) => {
      if (err) throw err;

      console.log("File size:", stats.size);
      console.log("Is file:", stats.isFile());
      console.log("Is directory:", stats.isDirectory());
    });

    fs.rename("example2.txt", "newExample.txt", (err) => {
      if (err) throw err;
      console.log("File renamed");
    });

    fs.mkdir("testFolder2", (err) => {
      if (err) throw err;
      console.log("Directory created");
    });

    fs.readdir("./", (err, files) => {
      if (err) throw err;
      console.log("Files in directory:", files);
    });

    fs.rmdir("testFolder2", (err) => {
      if (err) throw err;
      console.log("Directory removed");
    });

    fs.unlink("newExample.txt", (err) => {
      if (err) throw err;
      console.log("File deleted");
    });

    res.send("Files Created");
  } catch (err) {
    console.error(err);
  }
}