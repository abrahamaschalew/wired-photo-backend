const fs = require("fs");
const path = require("path");

const readFiles = async () => {
  try {
    let files = await fs.promises.readdir(path.join(__dirname, "./photos"), {
      withFileTypes: true,
    });
    files.map((file, index) => {
      files[index] = file.name;
    });
    return files;
  } catch (error) {
    console.error(error.message, error.name); // pass exception object to err handler
  }
};

exports.readFiles = readFiles;
