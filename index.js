// informações de vitoria e derrota 

let quantidadeDeVitorias = 98
let quantidadeDeDerrotas = 21

//Função para calcular o Ranque do jogador 

function calcularNivelDoJogador( vitorias,derrotas ) {
    let saldoDeVitorias = vitorias-derrotas
    let nivel

    if ( vitorias < 10 ) {
        nivel = "Ferro"
    } else if ( vitorias >= 11 && vitorias <= 20 ) {
        nivel = "Bronze"
    } else if ( vitorias >= 21 && vitorias <= 50 ) {
        nivel = "Prata"
    } else if ( vitorias >= 51 && vitorias <= 80 ) {
        nivel = "Ouro"
    } else if ( vitorias >= 81 && vitorias <= 90 ) {
        nivel = "Diamante"
    } else if( vitorias >= 91 && vitorias <= 100 ) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    } 

    return { saldoDeVitorias, nivel }
}

let resultado = calcularNivelDoJogador ( quantidadeDeVitorias, quantidadeDeDerrotas )

// Saída

console . log ( " O Herói tem um saldo de " + resultado.saldoDeVitorias + " está no nivel de " + resultado.nivel )