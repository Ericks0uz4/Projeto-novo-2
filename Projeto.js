class Funcionario {
    _ID = 0
    constructor (nome) {
        this.nome = nome
    }
// O constructor serve para criar e inicializar um objeto criado a partir de uma classe.
    setarID(novoID){
        if (typeof novoID == "string") {
            this._ID = novoID
        }
    }

    get  _ID (){
        return this._ID
    }
// O get (pegar) serve para obter e retornar o valor “setado”.
    set _ID (x) {
        if (typeof x == "string") {
            this.ID
        }
    }
   // O set (atribuir) receber os dados dos atributos e injetá-los.
}

let p1 = new Funcionario ("Leo");
let p2 = new Funcionario ("Laisa");
let p3 = new Funcionario ("Isaias");
let p4 = new Funcionario ("Ligia");

p1._ID = 1234
p2._ID = 1098
p3._ID = 5431
p4._ID = 2454

class Cliente extends Funcionario {
    constructor (Cliente) {
    Super(nome)
    this.Cliente = Cliente

}
}
p1.Cliente =("Maria");
p2.Cliente = ("Neymar");
p3.Cliente =("Geovane");
p4.Cliente = ("Talia");


class Pedido  {
    constructor (Pedido) {
    this.Pedido = Pedido }

}

p1.Pedido = ("Pizza de Calabresa")
p2.Pedido = ("Pizza de Atum")
p3.Pedido = ("Pizza de Frango")
p4.Pedido = ("Pizza de Milho")

//console.log() Imprime o texto no console como uma mensagem log.

console.log (`${p1.nome} de ID ${p1._ID} Atribuiu o atendimento o(a) ${p1.Cliente} que pediu ${p1.Pedido}`)
console.log (`${p2.nome} de ID ${p2._ID} Atribuiu o atendimento o(a) ${p2.Cliente} que pediu ${p2.Pedido}`)
console.log (`${p3.nome} de ID ${p3._ID} Atribuiu o atendimento o(a) ${p3.Cliente} que pediu ${p3.Pedido}`)
console.log (`${p4.nome} de ID ${p4._ID} Atribuiu o atendimento o(a) ${p4.Cliente} que pediu ${p4.Pedido}`)

class Entrega {
    constructor(Entrega){
        this.Entrega = Entrega
    }
}

p1.Entrega = ("na Rua dos Anjos")
p2.Entrega = ("na Rua Clayton Cecon")
p3.Entrega = ("na Rua Lagoa Grande")
p4.Entrega = ("na Rua Tecelões de Baixo")

console.log (`Funcionario ${p1.nome} de id ${p1._ID} enviou o pedido da cliente ${p1.Cliente}  que mora ${p1.Entrega}`)
console.log (`Funcionaria ${p2.nome} de id ${p2._ID} enviou o pedido do cliente ${p2.Cliente} que mora ${p2.Entrega}`)
console.log (`Funcionario ${p3.nome} de id ${p3._ID} enviou o pedido da cliente ${p3.Cliente}  que mora ${p3.Entrega}`)
console.log (`Funcionaria ${p4.nome} de id ${p4._ID} enviou o pedido do cliente ${p4.Cliente} que mora ${p4.Entrega}`)

class Pagamento  {
    constructor (TipoPagamento) {
        this.TipoPagamento = TipoPagamento
    }
}

p1.TipoPagamento = ("Cartão de Débito")
p2.TipoPagamento = ("Cartão de Crédito")
p3.TipoPagamento = ("Pix")
p4.TipoPagamento = ("Dinheiro")


console.log (`Cliente ${p1.Cliente} efetuou o pagamento via ${p1.TipoPagamento}`)
console.log (`Cliente ${p2.Cliente} efetuou o pagamento via ${p3.TipoPagamento}`)
console.log (`Cliente ${p3.Cliente} efetuou o pagamento via ${p2.TipoPagamento}`)
console.log (`Cliente ${p4.Cliente} efetuou o pagamento via ${p4.TipoPagamento}`)


//Possivel erro no Código
let p7;
try {
    p7 = carlos;
    }
    catch (error)  {
    console.error(error.message)
    }


//Alerta Do site, usando o comando Alert
    alert("bem vindo a pizzaria")