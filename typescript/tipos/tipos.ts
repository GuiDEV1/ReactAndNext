// string
let nome: string = "João";
//console.log(nome);
//nome = 10;

//numbers
let idade: number = 22;
// idade = "ana"
idade = 22.6;

//console.log(idade);

//booleans
let possuiHobbies: boolean = true;
//possuiHobbies = 1
//console.log(possuiHobbies);

//tipos Explícitos
let minhaIdade: number;
minhaIdade = 22;
//console.log(typeof minhaIdade);
//minhaIdade = 'idade é 27';

//array
let hobbies: any[] = ["jogar", "Assitir", "Esportes"];
//console.log(hobbies[0]);
//console.log(typeof hobbies);

hobbies = [100, 200, 300];
//console.log(hobbies);

//tuplas
let endereco: [string, number, string, boolean] = ["Av: Paulista", 359, "Edificio B", true];
endereco = ["Av: Brasil", 35, "Mercado big bom", false];
//console.log(endereco);

// enums

enum Cor {
  Cinza,
  Verde = 100,
  Azul = 2,
  Amarelo,
  vermelho
}

let minhaCor: Cor = Cor.Cinza;
//console.log(minhaCor);
//console.log(Cor.Azul);
//console.log(Cor.Amarelo);
//console.log(Cor.vermelho);

enum Colors {
    black = "#000",
    white = "#ffffff"
}

console.log(Colors.white);
console.log(Colors.white);

enum Cardapio {
  FrangoGrelhado = 1,
  CarneAssada = 2,
  Costela = 3
}

  function selecionaMenu (pedido: number) {
     switch(pedido) {
       case Cardapio.FrangoGrelhado:
        console.log("Pedido numero 1: Frango grelhado com batatas e arroz");
       break;
       case Cardapio.CarneAssada:
        console.log("Pedido numero 2: Carne assada com cebola feijão e arroz");
       break;  
       case Cardapio.Costela:
        console.log("Pedido numero 3: Costelas com molho Barbecue e pure");
     }
  }

selecionaMenu(3);

// any
let carro: any = "Ferrari";
 console.log(carro);
  carro = {
    marca: "Ferrari",
    ano: 2022
  }
console.log(carro);










