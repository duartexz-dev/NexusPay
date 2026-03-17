let nameUser = localStorage.getItem("nome")
let idadeUser = localStorage.getItem("idade")

let resTN = document.getElementById("resTextB")
resTN.innerHTML = `${nameUser} Agora Vamos "Criar" <br> seus boletos , coloque as <br> informações abaixo.`

let resTN2 = document.getElementById("resTextN")
resTN2.innerHTML = `${nameUser} Coloque sua Renda!`

let boletos = [

]

// CONFIRMAR RENDA
function confirmar() {
    let renda = Number(document.getElementById("Renda").value)

    if (renda > 0) {
        alert("dados confirmados!")
        localStorage.setItem("Renda", renda)
    } else {
        alert("Preencha todos os dados por favor!")
    }
}

// CRIAR BOLETO
function criar() {
    let nomeB = document.getElementById("nomeB").value
    let valorB = Number(document.getElementById("valorB").value)
    let res = document.getElementById("lista-boletos")

    let Renda = Number(localStorage.getItem("Renda"))

    if (!nomeB || valorB <= 0) {
        alert("Preencha todos os dados!")
        return
    }

    if (isNaN(Renda)) {
        alert("Defina sua renda primeiro!")
        return
    }

    boletos.push({
        nome: nomeB,
        valor: valorB
    })

    if (valorB <= Renda) {
        res.innerHTML += `<li class="list-group-item"> Nome: ${nomeB}, Valor: ${valorB}R$ <strong>✅</strong></li>`

        Renda -= valorB
        localStorage.setItem("Renda", Renda)

    } else {
        res.innerHTML += `<li class="list-group-item"> Nome: ${nomeB}, Valor: ${valorB}R$ <strong>❌</strong></li>`
    }

    localStorage.setItem("contas", JSON.stringify(boletos))
}