#!/usr/bin/env node

const mdLinks = require('./index');

mdLinks(process.argv[2])
  .then(array => {
    if (typeof array === 'undefined') {
      console.log('Não há links aqui');
    } else {
      array.forEach(obj => {
        console.log(`text: ${obj.text} | href: ${obj.href} | file: ${obj.file} `)
      });
    }
  })
  .catch(error => console.log(error));
//const [, , ...args] = process.argv;

//console.log(`Hello World ${args}`)
