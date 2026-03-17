let nameUser = localStorage.getItem("nome");
let idadeUser = localStorage.getItem("idade");

let contas = JSON.parse(localStorage.getItem("contas"))

let resP = document.getElementById("PerfilNome")
let resPN = document.getElementById("resNome");
let resPI = document.getElementById("resIdade");
let resContas = document.getElementById("lista-boletos")

resContas.innerHTML = ""

contas.forEach(conta => {
    resContas.innerHTML += `
    <li class="list-group-item">
    Nome: ${conta.nome}, Valor: ${conta.valor}R$
    </li>`
})


resPN.innerHTML = `Name: ${nameUser}`;
resPI.innerHTML = `Age: ${idadeUser}`;
