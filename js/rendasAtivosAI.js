
//==============================//
// RENDA FIXA / CDI
// Feito por AI//sorry
//==============================//

function rendaFixa() {

    const data = new Date()

    let dia = data.getDate()

    // DATA COMPLETA DE HOJE
    let hoje = data.toLocaleDateString()

    // PEGA O ULTIMO RENDIMENTO
    let ultimoRendimento = localStorage.getItem("ultimoRendimentoCDI")

    // BLOQUEIA SE JÁ RENDEU HOJE
    if (ultimoRendimento === hoje) {

        alert("O CDI já rendeu hoje! Volte amanhã.")

        return
    }

    // SALVA A DATA DE HOJE
    localStorage.setItem("ultimoRendimentoCDI", hoje)

    // ELEMENTOS
    let cdi = document.getElementById("cdiValor")

    let cdiValor = Number(cdi.innerText)

    // APLICA O RENDIMENTO
    let rendimento = cdiValor * 0.002

    let novoValor = cdiValor + rendimento

    // MOSTRA NA TELA
    cdi.innerText = novoValor.toFixed(2)

    // SALVA
    localStorage.setItem("cdiSaldo", novoValor.toFixed(2))

    // HISTÓRICO
    atualizarMovis(
        dia,
        "Rendimento CDI",
        "Renda Fixa • Feito por AI",
        rendimento.toFixed(2)
    )

    alert("Rendimento aplicado com sucesso!")

}

//==============================//
// BITCOIN
// Feito por AI
//==============================//

function rendimentoBtc() {

    const data = new Date()

    let dia = data.getDate()

    let hoje = data.toLocaleDateString()

    let ultimoBTC = localStorage.getItem("ultimoRendimentoBTC")

    // BLOQUEIA 1 VEZ POR DIA
    if (ultimoBTC === hoje) {

        alert("O Bitcoin já foi atualizado hoje!")

        return
    }

    // SALVA DATA
    localStorage.setItem("ultimoRendimentoBTC", hoje)

    // ELEMENTOS
    let btc = document.getElementById("btcValor")

    let btcValor = Number(btc.innerText)

    // RENDIMENTO BTC (5%)
    let rendimento = btcValor * 0.005

    let novoValor = btcValor + rendimento

    // ATUALIZA TELA
    btc.innerText = novoValor.toFixed(2)

    // SALVA
    localStorage.setItem("btnSaldo", novoValor.toFixed(2))

    // HISTÓRICO
    atualizarMovis(
        dia,
        "Lucro Bitcoin",
        "Criptomoeda • Feito por AI",
        rendimento.toFixed(2)
    )

    alert("Bitcoin atualizado!")

}



//==============================//
// RENDA VARIÁVEL / AÇÕES
// Feito por AI
//==============================//

function rendimentoAcoes() {

    const data = new Date()

    let dia = data.getDate()

    let hoje = data.toLocaleDateString()

    let ultimoAcoes = localStorage.getItem("ultimoRendimentoAcoes")

    // BLOQUEIA 1 VEZ POR DIA
    if (ultimoAcoes === hoje) {

        alert("As ações já renderam hoje!")

        return
    }

    // SALVA DATA
    localStorage.setItem("ultimoRendimentoAcoes", hoje)

    // ELEMENTOS
    let acoes = document.getElementById("acoesValor")

    let acoesValor = Number(acoes.innerText)

    // RENDIMENTO AÇÕES (3%)
    let rendimento = acoesValor * 0.003

    let novoValor = acoesValor + rendimento

    // ATUALIZA TELA
    acoes.innerText = novoValor.toFixed(2)

    // SALVA
    localStorage.setItem("acoesSaldo", novoValor.toFixed(2))

    // HISTÓRICO
    atualizarMovis(
        dia,
        "Lucro Ações",
        "Renda Variável • Feito por AI",
        rendimento.toFixed(2)
    )

    alert("Renda variável atualizada!")

}

function atAtivos() {

    rendimentoAcoes()
    rendimentoBtc()
    rendaFixa()
    s
}