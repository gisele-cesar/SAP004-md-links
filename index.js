const fs = require('fs');
const path = require('path');

const mdLinks = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) {
        return reject(`File not found`);
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
        })
        return resolve(array);
      }
    });
  })
};

module.exports = mdLinks;
