/**
 * APP FLEX
 * @author Professor José de Assis
 */

function calcular() {
    //Entrada
    //Variável etanol recebe o conteúdo da caixa input
    let etanol = frmFlex.inputetanol.value
    console.log(etanol) //Teste e apoio a lógica
    let gasolina = frmFlex.inputgasolina.value
    console.log(gasolina) //Teste e apoio a lógica

    //Processamento
    //Se valor do litro do Etanol custar até 70% do valor da gasolina = abastecer com Etanol

    if (etanol < 0.7 * gasolina) {
        console.log("Abasteça com etanol")
        // a linha abaixo troca a imagem no html
        document.getElementById("status").src="./img/etanol.png"
    } else {
        console.log("Abasteça com gasolina")
        document.getElementById("status").src="./img/gasolina.png"        
    }
}

function limpar(){
    document.getElementById("status").src="./img/neutro.png"
}