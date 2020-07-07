const fs = require('fs');


module.exports = (path) => {
  // const regex = /\[(.*)\]\((http.*)\)/gm;
  // console.log(regex);
  let arrLinks = [];
  let obj = [];

  fs.readFile(path, 'utf8', function (err, data) {
    if (err) {
      (`erro de leitura de arquivo ${err}`);
    } else {
      arrLinks = data.match(/\[(.*)\]\((ht.*)\)/gm);
      arrLinks.forEach(link => {
        obj.push({
          text: `${link.match(/(?<=\[).+?(?=\])/g)}`,
          href: `${link.match(/(?<=\().+?(?=\))/g)}`,
          file: path.replace('[]', '')
        })
        console.log(obj);
      })
    }
    //Enviando para o console o resultado da leitura
    // console.log(data);
  });
};

module.exports('README.md');
