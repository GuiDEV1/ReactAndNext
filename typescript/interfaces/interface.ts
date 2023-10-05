interface Humano {
    nome: string
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string): void
}


function boasVindas(pessoa: Humano) {
    console.log(`Seja bem vindo ${pessoa.nome}`);  
}

function mudarNome(pessoa: Humano) {
   pessoa.nome = "Lucia";
}

const pessoa: Humano = {
    nome: "James",
    idade: 15 ,
    saudar(sobrenome: string) {
       console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);  
    }
}

boasVindas(pessoa);
mudarNome(pessoa);
boasVindas(pessoa);
//boasVindas({nome: "Gilberto", idade: 49, xyz: true});
pessoa.saudar("Skywalker");

// Usando interfaces com classes

class Cliente implements Humano {
  nome: string = ""
  ultimaCompra: Date = new Date;
  saudar(sobrenome: string) {
    console.log(`Olá meu nome é ${this.nome} ${sobrenome}`);
  }
}

const meuCliente = new Cliente();
meuCliente.nome = "ireneu";
meuCliente.saudar("Steaming");
console.log(meuCliente.ultimaCompra);

// Interface Função

interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo;

potencia = function(base: number, exp: number): number  {
 return base ** exp;
}

console.log(potencia(3,10));
console.log(3 ** 10);
console.log(Math.pow(3,10));