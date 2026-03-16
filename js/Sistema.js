let nameUser = localStorage.getItem("nome")
let idadeUser = localStorage.getItem("idade")
let resTN = document.getElementById("resTextB")
resTN.innerHTML = `${nameUser} Agora Vamos "Criar" <br> seus boletos , coloque as <br> informações abaixo.`
let resTN2 = document.getElementById("resTextN")
resTN2.innerHTML = `${nameUser} Coloque sua Renda!`

let boletos = [
    { nome: "FirstBoleto", valor: 1, id: 1 }
]

let renda = Number(document.getElementById("Renda").value)

function confirmar() {
    if (renda <= 0 || !renda) {
        alert("Preencha todos os dados porfavor!")
    } else if (renda) {

        alert("dados confirmados!")
        localStorage.setItem("renda", renda)

    }

}


function criar() {
    let nomeB = document.getElementById("nomeB").value
    let valorB = Number(document.getElementById("valorB").value)
    let res = document.getElementById("lista-boletos")

    console.log(renda)

    if (nomeB && valorB) {

        boletos.push({

            nome: nomeB,
            valor: valorB,
            id: boletos.length + 1

        })
    }

    if (valorB < renda) {
        res.innerHTML += ` <li class="list-group-item"> Nome:${nomeB}, Valor: ${valorB}R$  <strong>✅</strong></li> `
        renda -= valorB
        localStorage.setItem("Renda", renda)




    } if (valorB > renda) {

        res.innerHTML += ` <li class="list-group-item"> Nome: ${nomeB}, Valor: ${valorB}R$  <strong>❌</strong></li> `
    }

}
console.log(boletos)


let valores = [

    { nome: "asd", valor: 100 },
    { nome: "aqhdf", valor: 100 },
    { nome: "aqwe", valor: 100 }

]



