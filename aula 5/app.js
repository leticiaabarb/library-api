const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..' , 'teste.json');

const pessoas = [
    {nome: 'Joao'},
    {nome: 'Maria'},
    {nome: 'Eduardo'},
    {nome: 'Luiza'},
];

const json = JSON.stringify(pessoas, '', 2);