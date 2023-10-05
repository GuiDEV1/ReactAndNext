"use strict";
function boasVindas(pessoa) {
    console.log(`Seja bem vindo ${pessoa.nome}`);
}
function mudarNome(pessoa) {
    pessoa.nome = "Lucia";
}
const pessoa = {
    nome: "James",
    idade: 15,
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
};
boasVindas(pessoa);
mudarNome(pessoa);
boasVindas(pessoa);
//boasVindas({nome: "Gilberto", idade: 49, xyz: true});
pessoa.saudar("Skywalker");
// Usando interfaces com classes
class Cliente {
    constructor() {
        this.nome = "";
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log(`Olá meu nome é ${this.nome} ${sobrenome}`);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "ireneu";
meuCliente.saudar("Steaming");
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    return base ** exp;
};
console.log(potencia(3, 10));
console.log(3 ** 10);
console.log(Math.pow(3, 10));
