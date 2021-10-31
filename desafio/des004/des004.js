function verificar(){
    var produto = window.prompt('Qual produto gostaria de comprar?')
    var preço = window.prompt(`Quanto custa o valor do ${produto} que está comprando?`)
    var pagamento = window.prompt(`Qual valor você deu para pagar o seu ${preço} ?`)
    var troco = pagamento - preço
    var resultado = window.prompt(`
    Você comprou um ${produto} que custou ${preço}.
    Deu ${pagamento} em dinheiro e vai receber ${troco} de troco.
    Volte sempre!`)
}