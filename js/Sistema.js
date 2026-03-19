let nameUser = localStorage.getItem("nome")
let idadeUser = localStorage.getItem("idade")

let resTN = document.getElementById("resTextB")
resTN.innerHTML = `${nameUser} Agora Vamos "Criar" <br> seus boletos , coloque as <br> informações abaixo.`

let resTN2 = document.getElementById("resTextN")
resTN2.innerHTML = `Olá ${nameUser}! vamos ver apenas um sistema  <br> de criação de boletos,
Que você poderá ver no seu perfil, <br> clicando lá em cima e indo na área de perfil.`

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

//biblioteca com IA//
let res = document.getElementById("lista-resultados");
// 🔹 OPÇÃO 1 - INVESTIMENTOS
function primeiraOpcao() {

    let sobraDoSalario = Number(document.getElementById("sobras").value)
    let realRenda = Number(document.getElementById("rendaReal").value);
    let investe = document.getElementById("investe").value;

    if (realRenda >= 2000 && investe === "sim" && sobraDoSalario >= 300) {

        res.innerHTML = `
        <div class="ask col-md-8">
            <h2>🚀 Fase de Crescimento Acelerado</h2>

            <div class="card p-3 mb-3">
                <h5>📊 Seu cenário</h5>
                <p>Renda: R$ ${realRenda}</p>
                <p>Sobra: R$ ${sobraDoSalario}</p>
                <p>👉 Você já está na frente de 90% das pessoas.</p>
            </div>

            <div class="card p-3 mb-3">
                <h5>📘 Aula: Estratégia</h5>
                <p>Invista todo o valor que sobra + aumente aos poucos.</p>
                <p>Ex: R$ ${sobraDoSalario}/mês → R$ ${(sobraDoSalario * 12)}</p>
            </div>

            <div class="card p-3 mb-3">
                <h5>🎥 Aula</h5>
           <iframe width="350" height="200" 
src="https://www.youtube.com/embed/tpOQn-YZ5Ag" 
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen>
</iframe>
                <p>Como acelerar seus investimentos.</p>
            </div>

            <div class="card p-3">
                <h5>🎯 Missão</h5>
                <p>Aumentar seu investimento em +R$100</p>
            </div>
        </div>
        `;
    }

    else if (investe === "sim") {

        res.innerHTML = `
        <div class="ask col-md-8">
            <h2>⚙️ Ajustando sua estratégia</h2>

            <div class="card p-3 mb-3">
                <p>Você investe, mas sobra pouco: R$ ${sobraDoSalario}</p>
            </div>

            <div class="card p-3 mb-3">
                <h5>📘 Aula</h5>
                <p>Corte gastos + invista automaticamente.</p>
            </div>

            <div class="card p-3 mb-3">
                <h5>🎥 Aula</h5>
          <iframe width="350" height="150" 
src="https://www.youtube.com/embed/3-5Ujc5dyhE" 
frameborder="0" allowfullscreen></iframe>
            </div>

            <div class="card p-3">
                <h5>🎯 Missão</h5>
                <p>Fazer sobrar +R$50</p>
            </div>
        </div>
        `;
    }

    else if (sobraDoSalario > 0) {

        res.innerHTML = `
        <div class="ask col-md-8">
            <h2>💰 Dinheiro parado</h2>

            <div class="card p-3 mb-3">
                <p>Sobra: R$ ${sobraDoSalario}</p>
            </div>

            <div class="card p-3 mb-3">
                <h5>📊 Simulação</h5>
                <p>1 ano: R$ ${(sobraDoSalario * 12)}</p>
            </div>

            <div class="card p-3 mb-3">
                <h5>🎥 Aula</h5>
            <iframe width="350" height="150" 
src="https://www.youtube.com/embed/18GRtRzOrMM" 
frameborder="0" allowfullscreen></iframe>
            </div>

            <div class="card p-3">
                <h5>🎯 Missão</h5>
                <p>Fazer primeiro investimento</p>
            </div>
        </div>
        `;
    }

    else {

        res.innerHTML = `
        <div class="ask col-md-8">
            <h2>⚠️ Sem controle financeiro</h2>

            <div class="card p-3 mb-3">
                <p>Não sobra dinheiro no mês.</p>
            </div>

            <div class="card p-3 mb-3">
                <h5>📘 Aula</h5>
                <p>Organização antes de investir.</p>
            </div>

            <div class="card p-3 mb-3">
                <h5>🎥 Aula</h5>
          <iframe width="350" height="150" 
src="https://www.youtube.com/embed/tpOQn-YZ5Ag" 
frameborder="0" allowfullscreen></iframe>
            </div>

            <div class="card p-3">
                <h5>🎯 Missão</h5>
                <p>Fazer sobrar R$20</p>
            </div>
        </div>
        `;
    }
}


// 🔹 OPÇÃO 2 - AUMENTAR RENDA
function segundaOpcao() {

    let realRenda = Number(document.getElementById("rendaReal").value);
    let sobraDoSalario = Number(document.getElementById("sobras").value)

    if (realRenda < 2000 && sobraDoSalario <= 0) {

        res.innerHTML = `
        <div class="ask col-md-8">
            <h2>🔥 Renda Extra URGENTE</h2>

            <div class="card p-3 mb-3">
                <p>Você precisa aumentar renda imediatamente.</p>
            </div>

            <div class="card p-3 mb-3">
                <h5>📱 Ideias</h5>
                <ul>
                    <li>Revenda</li>
                    <li>Freelance</li>
                    <li>Serviços simples</li>
                </ul>
            </div>

            <div class="card p-3 mb-3">
                <h5>📊 Exemplo</h5>
                <p>R$20/dia → R$600/mês</p>
            </div>

            <div class="card p-3 mb-3">
                <h5>🎥 Aula</h5>
                <iframe width="350" height="150" 
src="https://www.youtube.com/embed/SJ7-ImU4UYc" 
frameborder="0" allowfullscreen></iframe>
            </div>

            <div class="card p-3">
                <h5>🎯 Missão</h5>
                <p>Ganhar R$50 essa semana</p>
            </div>
        </div>
        `;
    }

    else if (realRenda >= 2000 && sobraDoSalario > 0) {

        res.innerHTML = `
        <div class="ask col-md-8">
            <h2>🚀 Escalar renda</h2>

            <div class="card p-3 mb-3">
                <p>Você já tem base, agora é crescer.</p>
            </div>

            <div class="card p-3 mb-3">
                <h5>📘 Aula</h5>
                <p>Crie múltiplas fontes de renda.</p>
            </div>

            <div class="card p-3 mb-3">
                <h5>🎥 Aula</h5>
            <iframe width="350" height="150" 
src="https://www.youtube.com/embed/tpOQn-YZ5Ag" 
frameborder="0" allowfullscreen></iframe>
            </div>

            <div class="card p-3">
                <h5>🎯 Missão</h5>
                <p>Criar nova renda</p>
            </div>
        </div>
        `;
    }

    else {

        res.innerHTML = `
        <div class="ask col-md-8">
            <h2>💡 Melhorar renda</h2>

            <div class="card p-3 mb-3">
                <p>Sempre busque aumentar ganhos.</p>
            </div>

            <div class="card p-3 mb-3">
                <h5>🎥 Aula</h5>
              <iframe width="350" height="150" 
src="https://www.youtube.com/embed/tpOQn-YZ5Ag" 
frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        `;
    }
}


// 🔹 OPÇÃO 3 - EVOLUIR INVESTIMENTOS
function terceiraOpcao() {

    let realRenda = Number(document.getElementById("rendaReal").value);
    let investe = document.getElementById("investe").value;
    let sobraDoSalario = Number(document.getElementById("sobras").value)

    if (investe === "sim" && sobraDoSalario > 0) {

        res.innerHTML = `
        <div class="ask col-md-8">
            <h2>📈 Evolução dos investimentos</h2>

            <div class="card p-3 mb-3">
                <p>Você já investe e sobra dinheiro.</p>
            </div>

            <div class="card p-3 mb-3">
                <h5>📊 Simulação</h5>
                <p>R$ ${sobraDoSalario}/mês → R$ ${(sobraDoSalario * 12)}</p>
            </div>

            <div class="card p-3 mb-3">
                <h5>🎥 Aula</h5>
       <iframe width="350" height="150" 
src="https://www.youtube.com/embed/eMDgWLWOX84" 
frameborder="0" allowfullscreen></iframe>
            </div>

            <div class="card p-3">
                <h5>🎯 Missão</h5>
                <p>Dobrar investimento</p>
            </div>
        </div>
        `;
    }

    else if (realRenda >= 2000) {

        res.innerHTML = `
        <div class="ask col-md-8">
            <h2>🚀 Começar a investir</h2>

            <div class="card p-3 mb-3">
                <p>Você já pode começar.</p>
            </div>

            <div class="card p-3 mb-3">
                <h5>🎥 Aula</h5>
             <iframe width="350" height="150" 
src="https://www.youtube.com/embed/vLiuSHlx8Eo" 
frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        `;
    }

    else {

        res.innerHTML = `
        <div class="ask col-md-8">
            <h2>⚠️ Preparação</h2>

            <div class="card p-3 mb-3">
                <p>Organize antes de investir.</p>
            </div>

            <div class="card p-3">
                <h5>🎯 Missão</h5>
                <p>Guardar R$100</p>
            </div>
            
        </div>
        `;
    }
}