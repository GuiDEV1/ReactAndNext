"use strict";
// string
let nome = "João";
//console.log(nome);
//nome = 10;
//numbers
let idade = 22;
// idade = "ana"
idade = 22.6;
//console.log(idade);
//booleans
let possuiHobbies = true;
//possuiHobbies = 1
//console.log(possuiHobbies);
//tipos Explícitos
let minhaIdade;
minhaIdade = 22;
//console.log(typeof minhaIdade);
//minhaIdade = 'idade é 27';
//array
let hobbies = ["jogar", "Assitir", "Esportes"];
//console.log(hobbies[0]);
//console.log(typeof hobbies);
hobbies = [100, 200, 300];
//console.log(hobbies);
//tuplas
let endereco = ["Av: Paulista", 359, "Edificio B", true];
endereco = ["Av: Brasil", 35, "Mercado big bom", false];
//console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Amarelo"] = 3] = "Amarelo";
    Cor[Cor["vermelho"] = 4] = "vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Cinza;
//console.log(minhaCor);
//console.log(Cor.Azul);
//console.log(Cor.Amarelo);
//console.log(Cor.vermelho);
var Colors;
(function (Colors) {
    Colors["black"] = "#000";
    Colors["white"] = "#ffffff";
})(Colors || (Colors = {}));
console.log(Colors.white);
console.log(Colors.white);
var Cardapio;
(function (Cardapio) {
    Cardapio[Cardapio["FrangoGrelhado"] = 1] = "FrangoGrelhado";
    Cardapio[Cardapio["CarneAssada"] = 2] = "CarneAssada";
    Cardapio[Cardapio["Costela"] = 3] = "Costela";
})(Cardapio || (Cardapio = {}));
function selecionaMenu(pedido) {
    switch (pedido) {
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
let carro = "Ferrari";
console.log(carro);
carro = {
    marca: "Ferrari",
    ano: 2022
};
console.log(carro);
