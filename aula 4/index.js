// file system 

const fs = require('fs').promises; // serve para manipulacao de arquivos // vai retornar uma promise, ou seja, promete q algo sera entrege dali, ou seja, precisa ser tratado dps com then e catch
const path = require('path');

// quando pedimos para o fs fazer a leitura de um arq ele leva um certo tempo
// n queremos q ele retorne o valor para nós antes de terminar de ler os arquivos
// entao queremos q ele leia os arquivos e nos mostre. 
// Por isso usaremos promises, pq queremos q ele leia um arq, mas ele nao vai ler tao rapiod
// ou seja, se pedirmos para ele retornar o valor sem promises, ele provavelmente daria um 
// erro, pq n teve tempo suficiente para ler o arquivo. Mas se usarmos uma promisse ele
// entendera q eu prometo (estou basicamente dizendo isso) prometo q irei retornar algo
// por isso voce pode aguardar. E só retornar algo após ler esses arquivos

// diferença entre then e catch e async e await

// criar funcao para encontrar o caminho certo do arquivo:


async function readdir(rootDir) { //ele vai usar async e await, pq o fs esta sendo chamado como promise, e aq eu indico, la embaixo q ele eh uma promise dizendo "await" espere ate q essa função seja executada, q ela leia os arquivos
    rootDir = rootDir || path.resolve(__dirname); // faz uma verificacao para saber se o arq foi mesmo passado
    const files = await fs.readdir(rootDir) //aq ele efetivamente le o arq usando a funcao q esta dentro da biblioteca FS
    walk(files) //conforme ele lê, ele chama uma função q anda pelos arquivos
}
 
function walk(files) {
    for (let file of files) {
        console.log(file);
    }
}

readdir();