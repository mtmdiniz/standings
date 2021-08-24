var paulo = {
    Nome: "Paulo",
    Vitorias: 0,
    Empates: 0,
    Derrotas: 0,
    Pontos: 0
}

var rafa = {
    Nome: "Rafa",
    Vitorias: 0,
    Empates: 0,
    Derrotas: 0,
    Pontos: 0
}

jogadores = [paulo, rafa]

function adicionarJogadores(jogador){
    var html = ''
    var tabela = document.querySelector('#jogadores')
    console.log(tabela)
    for(i = 0; i < 2; i++){
        html += "<tr><td>" + jogador[i].Nome + "</td>"
        html += "<td>" + jogador[i].Vitorias + "</td>"
        html += "<td>" + jogador[i].Empates + "</td>"
        html += "<td>" + jogador[i].Derrotas + "</td>"
        html += "<td>" + jogador[i].Pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    tabela.innerHTML = html
}

adicionarJogadores(jogadores)

function pontos(jogador){
    return (jogador.Vitorias * 3) + jogador.Empates
}

function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.Vitorias++
    jogador.Pontos = pontos(jogador)
    adicionarJogadores(jogadores)
}

function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.Empates++
    jogador.Pontos = pontos(jogador)
    adicionarJogadores(jogadores)
}

function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.Derrotas++
    adicionarJogadores(jogadores)
}
