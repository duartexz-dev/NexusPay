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


// 🔹 OPÇÃO 1
function primeiraOpcao() {

    let realRenda = Number(document.getElementById("rendaReal").value);
    let investe = document.getElementById("investe").value;

    if (realRenda >= 2000 && investe === "sim") {

        res.innerHTML = `
        <h3>💸 ${nameUser}, ajuste seus gastos</h3>

        <p>Você já investe e tem uma boa renda, mas pode melhorar seus resultados.</p>

        <h5>📚 O que fazer?</h5>
        <p>Corte gastos desnecessários como assinaturas, delivery e compras impulsivas.</p>

        <div class="alert alert-warning">
            💡 Revise seus gastos mensais e elimine o que não usa.
        </div>

        <a href="https://blog.nubank.com.br/como-economizar-dinheiro/" target="_blank">
            🔗 Ver dicas completas
        </a>

        <br><br>

        <iframe width="100%" height="250"
        src="https://www.youtube.com/embed/V1R7z0r9R2k">
        </iframe>
        `;

    } else {

        res.innerHTML = `
        <h3>⚠️ ${nameUser}, comece pelo controle</h3>

        <p>Antes de qualquer coisa, você precisa organizar sua vida financeira.</p>

        <h5>📚 O que fazer?</h5>
        <p>Anote todos os seus gastos e entenda para onde seu dinheiro está indo.</p>

        <div class="alert alert-info">
            💡 Controle financeiro é o primeiro passo para crescer.
        </div>

        <a href="https://www.serasa.com.br/ensina/como-organizar-as-financas/" target="_blank">
            🔗 Aprender a se organizar
        </a>

        <br><br>

        <iframe width="100%" height="250"
        src="https://www.youtube.com/embed/4Z6yYVd-8lA">
        </iframe>
        `;
    }
}


// 🔹 OPÇÃO 2
function segundaOpcao() {

    let realRenda = Number(document.getElementById("rendaReal").value);

    if (realRenda < 2000) {

        res.innerHTML = `
        <h3>💰 ${nameUser}, aumente sua renda</h3>

        <p>Sua renda atual pode estar te limitando.</p>

        <h5>📚 O que fazer?</h5>
        <p>Busque renda extra com internet, vendas ou serviços.</p>

        <ul>
            <li>💻 Freelancer</li>
            <li>📱 Vendas online</li>
            <li>🎥 Criar conteúdo</li>
        </ul>

        <div class="alert alert-success">
            💡 Comece com algo simples hoje mesmo.
        </div>

        <a href="https://blog.nubank.com.br/como-ganhar-dinheiro-extra/" target="_blank">
            🔗 Ver ideias
        </a>

        <br><br>

        <iframe width="100%" height="250"
        src="https://www.youtube.com/embed/2QZ2pYyR7h0">
        </iframe>
        `;

    } else {

        res.innerHTML = `
        <h3>🚀 ${nameUser}, escale sua renda</h3>

        <p>Você já ganha bem, agora foque em crescer mais.</p>

        <h5>📚 O que fazer?</h5>
        <p>Crie múltiplas fontes de renda e não dependa só de uma.</p>

        <div class="alert alert-info">
            💡 Invista em conhecimento e novas oportunidades.
        </div>

        <a href="https://www.infomoney.com.br/guias/renda-extra/" target="_blank">
            🔗 Aprender mais
        </a>
        `;
    }
}


// 🔹 OPÇÃO 3
function terceiraOpcao() {

    let realRenda = Number(document.getElementById("rendaReal").value);
    let investe = document.getElementById("investe").value;

    if (investe === "sim") {

        res.innerHTML = `
        <h3>🔥 ${nameUser}, você já investe</h3>

        <p>Agora é hora de evoluir.</p>

        <h5>📚 O que fazer?</h5>
        <p>Diversifique seus investimentos para crescer mais.</p>

        <div class="alert alert-success">
            💡 Estude ações e fundos imobiliários.
        </div>

        <a href="https://www.xpi.com.br/educacao-financeira/" target="_blank">
            🔗 Conteúdo avançado
        </a>

        <br><br>

        <iframe width="100%" height="250"
        src="https://www.youtube.com/embed/F2y7gJYkKkQ">
        </iframe>
        `;

    } else if (realRenda >= 2000) {

        res.innerHTML = `
        <h3>📈 ${nameUser}, comece a investir</h3>

        <p>Você já pode dar os primeiros passos.</p>

        <h5>📚 O que fazer?</h5>
        <p>Comece com investimentos simples e seguros.</p>

        <div class="alert alert-info">
            💡 Tesouro Direto e CDB são boas opções.
        </div>

        <a href="https://www.infomoney.com.br/guias/investimentos-para-iniciantes/" target="_blank">
            🔗 Aprender
        </a>
        `;

    } else {

        res.innerHTML = `
        <h3>⚠️ ${nameUser}, ainda não é o momento</h3>

        <p>Organize sua renda antes de investir.</p>

        <div class="alert alert-warning">
            💡 Primeiro controle, depois investimento.
        </div>
        `;
    }
}