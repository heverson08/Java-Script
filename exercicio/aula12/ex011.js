var idade = 17
console.log(`você tem ${idade} anos. `)
if (idade < 16) {
    console.log('Não vota')
}else if (idade < 18 || idade > 65){
    console.log('O seu voto opcional')
}else{
    console.log('O seu voto obrigatório')
}