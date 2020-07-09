const fs = require('fs');
const path = require('path');

/* const directoryPath = path.join(__dirname, "files");

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    console.log("Error getting directory information.")
  } else {
    const filesMd = files.filter(function (file) {
      return path.extname(file === '.md')
    })
    filesMd.forEach(function (file) {
      console.log(file)
    })
  }
}); */

const mdLinks = (path) => {
  // const regex = /\[(.*)\]\((http.*)\)/gm;
  // console.log(regex);
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) {
        return reject(`File not found`);
        // (`erro de leitura de arquivo ${err}`);
      } else {
        const regexLinks = data.match(/\[(.*)\]\((ht.*)\)/gm);
        let array = [];
        regexLinks.map((link) => {
          const obj = {
            text: `${link.match(/(?<=\[).+?(?=\])/g)}`,
            href: `${link.match(/(?<=\().+?(?=\))/g)}`,
            file: path.replace('[]', '')
          };
          array.push(obj);
          // console.log(obj);
        })
        return resolve(array);
      }
    });
  })

};

module.exports = mdLinks;
