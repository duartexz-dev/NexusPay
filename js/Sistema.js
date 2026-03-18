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

let res = document.getElementById("lista-resultados");


//biblioteca com IA//
// 🔹 OPÇÃO 1 - INVESTIMENTOS
function primeiraOpcao() {

    let realRenda = Number(document.getElementById("rendaReal").value);
    let investe = document.getElementById("investe").value;
    let qtdAinvestir = Number(document.getElementById("investimento").value);

    let sugestao = (realRenda * 0.2).toFixed(2);

    if (realRenda >= 2000 && investe === "sim") {

        res.innerHTML = `
        <div class="ask col-md-8">

            <h2>💸 Evolução Financeira</h2>
            <p class="text-secondary">Você já investe. Agora o foco é crescer de verdade.</p>

            <hr>

            <div class="card p-3 mb-3">
                <h5>📊 Seu cenário</h5>
                <p>Renda mensal: <b>R$ ${realRenda}</b></p>
                <p>Valor ideal para investir: <b>R$ ${sugestao}</b></p>
            </div>

            <div class="card p-3 mb-3">
                <h5>🏦 Exemplos de investimentos</h5>
                <ul>
                    <li>CDB 100% a 120% do CDI</li>
                    <li>Tesouro Selic (baixo risco)</li>
                    <li>Fundos imobiliários (renda mensal)</li>
                    <li>Ações de empresas grandes</li>
                </ul>
            </div>

            <div class="card p-3 mb-3">
                <h5>📈 Estratégia simples</h5>
                <ul>
                    <li>Parte segura → renda fixa</li>
                    <li>Parte crescimento → ações</li>
                    <li>Parte renda → FIIs</li>
                </ul>
            </div>

            <div class="alert alert-success">
                💡 Quanto mais você investe com consistência, mais rápido o dinheiro cresce.
            </div>

            <div class="card p-3">
                <h5>🎯 Objetivo</h5>
                <p>Criar uma renda passiva no futuro.</p>
            </div>

        </div>
        `;

    } else if (qtdAinvestir > 0) {

        res.innerHTML = `
        <div class="ask col-md-8">

            <h2>📈 Organização para investir</h2>
            <p class="text-secondary">Você quer investir, mas precisa estruturar melhor.</p>

            <hr>

            <div class="card p-3 mb-3">
                <h5>💰 Seu valor disponível</h5>
                <p>Você pode investir <b>R$ ${qtdAinvestir}</b> por mês.</p>
            </div>

            <div class="card p-3 mb-3">
                <h5>📊 Exemplos simples</h5>
                <ul>
                    <li>Guardar em conta que rende</li>
                    <li>CDB básico (seguro)</li>
                    <li>Aplicar aos poucos todo mês</li>
                </ul>
            </div>

            <div class="alert alert-info">
                💡 O importante não é o valor, é começar.
            </div>

            <div class="card p-3">
                <h5>🧠 Missão</h5>
                <p>Fazer seu primeiro investimento ainda esse mês.</p>
            </div>

        </div>
        `;

    } else {

        res.innerHTML = `
        <div class="ask col-md-8">

            <h2>📊 Controle financeiro</h2>
            <p class="text-secondary">Antes de investir, você precisa organizar sua vida.</p>

            <hr>

            <div class="card p-3 mb-3">
                <h5>📌 Exemplo de organização</h5>
                <ul>
                    <li>Anotar todos os gastos</li>
                    <li>Separar o essencial do supérfluo</li>
                    <li>Evitar compras por impulso</li>
                </ul>
            </div>

            <div class="card p-3 mb-3">
                <h5>💡 Ideias simples</h5>
                <ul>
                    <li>Guardar R$5 por dia</li>
                    <li>Cortar um gasto desnecessário</li>
                    <li>Criar uma reserva</li>
                </ul>
            </div>

            <div class="alert alert-warning">
                💡 Organização vem antes do investimento.
            </div>

        </div>
        `;
    }
}


// 🔹 OPÇÃO 2 - AUMENTAR RENDA
function segundaOpcao() {

    let realRenda = Number(document.getElementById("rendaReal").value);

    if (realRenda < 2000) {

        res.innerHTML = `
        <div class="ask col-md-8">

            <h2>💰 Aumentar renda</h2>
            <p class="text-secondary">Seu foco agora é ganhar mais dinheiro.</p>

            <hr>

            <div class="card p-3 mb-3">
                <h5>📱 Ideias reais</h5>
                <ul>
                    <li>Revender produtos (Shopee)</li>
                    <li>Fazer serviços simples</li>
                    <li>Editar vídeos ou imagens</li>
                </ul>
            </div>

            <div class="card p-3 mb-3">
                <h5>💡 Exemplos</h5>
                <ul>
                    <li>Ganhar R$20 por dia já muda sua renda</li>
                    <li>Fazer pequenas vendas online</li>
                </ul>
            </div>

            <div class="alert alert-success">
                💡 Pequenas rendas viram grandes resultados.
            </div>

        </div>
        `;

    } else {

        res.innerHTML = `
        <div class="ask col-md-8">

            <h2>🚀 Escalar renda</h2>
            <p class="text-secondary">Você já ganha dinheiro. Agora precisa aumentar.</p>

            <hr>

            <div class="card p-3 mb-3">
                <h5>📊 Ideias</h5>
                <ul>
                    <li>Criar renda extra online</li>
                    <li>Freelance (sites, design)</li>
                    <li>Vendas digitais</li>
                </ul>
            </div>

            <div class="card p-3 mb-3">
                <h5>💡 Estratégia</h5>
                <ul>
                    <li>Ter mais de uma renda</li>
                    <li>Automatizar ganhos</li>
                </ul>
            </div>

            <div class="alert alert-info">
                💡 Nunca dependa de uma renda só.
            </div>

        </div>
        `;
    }
}


// 🔹 OPÇÃO 3 - COMEÇAR / EVOLUIR INVESTIMENTOS
function terceiraOpcao() {

    let realRenda = Number(document.getElementById("rendaReal").value);
    let investe = document.getElementById("investe").value;

    if (investe === "sim") {

        res.innerHTML = `
        <div class="ask col-md-8">

            <h2>🔥 Melhorar investimentos</h2>

            <div class="card p-3 mb-3">
                <h5>📊 Opções</h5>
                <ul>
                    <li>Renda fixa</li>
                    <li>Fundos imobiliários</li>
                    <li>Ações</li>
                </ul>
            </div>

            <div class="alert alert-success">
                💡 Reinvestir aumenta seus ganhos.
            </div>

        </div>
        `;

    } else if (realRenda >= 2000) {

        res.innerHTML = `
        <div class="ask col-md-8">

            <h2>📈 Começar a investir</h2>

            <div class="card p-3 mb-3">
                <h5>📌 Opções seguras</h5>
                <ul>
                    <li>CDB</li>
                    <li>Tesouro Selic</li>
                    <li>Conta que rende</li>
                </ul>
            </div>

            <div class="alert alert-info">
                💡 Comece simples e evolua depois.
            </div>

        </div>
        `;

    } else {

        res.innerHTML = `
        <div class="ask col-md-8">

            <h2>⚠️ Preparação</h2>

            <div class="card p-3 mb-3">
                <h5>📌 Antes de investir</h5>
                <ul>
                    <li>Organizar dinheiro</li>
                    <li>Criar reserva</li>
                </ul>
            </div>

            <div class="alert alert-warning">
                💡 Base forte primeiro.
            </div>

        </div>
        `;
    }
}