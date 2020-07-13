# Markdown Links

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Instalação](#2-Instalação)
* [3. Como utilizar](#3-Como-utilizar)
* [4. Autoria](#4-Autoria)


***

## 1. Prefácio

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc) e é muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
`README.md`).

Os arquivos `Markdown` normalmente contém _links_ que podem estar
quebrados, ou que já não são válidos, prejudicando muito o valor da
informação que está ali.

Uma comunidade open source nos propôs criar uma ferramenta, usando
[Node.js](https://nodejs.org/), que leia e analise arquivos no formato
`Markdown`, para verificar os arquivos que contenham links e mostrar algumas
estatísticas.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## 2. Instalação

* Para usar esta biblioteca, você deve ter instalado o Node.js no seu computador.

* npm install -g gisele-cesar/SAP004-md-links

## 3. Como utilizar

Após instalar a biblioteca, é possível utilizá-la chamando pela linha de comando:
md-links < arquivo > 

Exemplo: md-links README.md

## 4.Autoria

Projeto desenvolvido por Gisele Cesar durante o Bootcamp da Laboratória.
