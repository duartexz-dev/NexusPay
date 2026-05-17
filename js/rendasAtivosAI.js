/* ========================================================
   NEXUSPAY - AUTOMATED ASSET YIELD (AI ENGINE)
   ======================================================== */

// Note: This script runs in home.html alongside Home.js.
// It leverages the global showToast system defined in Home.js.

//==============================//
// RENDA FIXA / CDI
//==============================//
function rendaFixa() {
    const data = new Date();
    const dia = data.getDate();
    const hoje = data.toLocaleDateString();

    // PEGA O ULTIMO RENDIMENTO
    const ultimoRendimento = localStorage.getItem("ultimoRendimentoCDI");

    // BLOQUEIA SE JÁ RENDEU HOJE
    if (ultimoRendimento === hoje) {
        showToast("O CDI já rendeu hoje! Volte amanhã para novas análises.", "error");
        return;
    }

    // SALVA A DATA DE HOJE
    localStorage.setItem("ultimoRendimentoCDI", hoje);

    // ELEMENTOS
    const cdi = document.getElementById("cdiValor");
    if (!cdi) return;
    
    const cdiValor = Number(cdi.innerText) || 0;

    // APLICA O RENDIMENTO (0.1%)
    const rendimento = cdiValor * 0.001;
    const novoValor = cdiValor + rendimento;

    // MOSTRA NA TELA
    cdi.innerText = novoValor.toFixed(2);

    // SALVA
    localStorage.setItem("cdiSaldo", novoValor.toFixed(2));

    // HISTÓRICO
    atualizarMovis(
        dia,
        "Rendimento Automático - CDI",
        "Renda Fixa",
        rendimento.toFixed(2)
    );

    showToast(`Rendimento CDI aplicado: +R$ ${rendimento.toFixed(2)}`, "success");
    
    // Recalcula o patrimônio geral
    recalcularPatrimonio();
}

//==============================//
// BITCOIN
//==============================//
function rendimentoBtc() {
    const data = new Date();
    const dia = data.getDate();
    const hoje = data.toLocaleDateString();

    const ultimoBTC = localStorage.getItem("ultimoRendimentoBTC");

    // BLOQUEIA 1 VEZ POR DIA
    if (ultimoBTC === hoje) {
        showToast("O Bitcoin já foi atualizado hoje!", "error");
        return;
    }

    // SALVA DATA
    localStorage.setItem("ultimoRendimentoBTC", hoje);

    // ELEMENTOS
    const btc = document.getElementById("btcValor");
    if (!btc) return;
    
    const btcValor = Number(btc.innerText) || 0;

    // RENDIMENTO BTC (0.2%)
    const rendimento = btcValor * 0.002;
    const novoValor = btcValor + rendimento;

    // ATUALIZA TELA
    btc.innerText = novoValor.toFixed(2);

    // SALVA
    localStorage.setItem("btnSaldo", novoValor.toFixed(2));

    // HISTÓRICO
    atualizarMovis(
        dia,
        "Lucro de Mineração - BTC",
        "Criptomoeda",
        rendimento.toFixed(2)
    );

    showToast(`Bitcoin atualizado: +R$ ${rendimento.toFixed(2)}`, "success");
    
    // Recalcula o patrimônio geral
    recalcularPatrimonio();
}

//==============================//
// RENDA VARIÁVEL / AÇÕES
//==============================//
function rendimentoAcoes() {
    const data = new Date();
    const dia = data.getDate();
    const hoje = data.toLocaleDateString();

    const ultimoAcoes = localStorage.getItem("ultimoRendimentoAcoes");

    // BLOQUEIA 1 VEZ POR DIA
    if (ultimoAcoes === hoje) {
        showToast("As Ações já renderam hoje!", "error");
        return;
    }

    // SALVA DATA
    localStorage.setItem("ultimoRendimentoAcoes", hoje);

    // ELEMENTOS
    const acoes = document.getElementById("acoesValor");
    if (!acoes) return;
    
    const acoesValor = Number(acoes.innerText) || 0;

    // RENDIMENTO AÇÕES (0.5%)
    const rendimento = acoesValor * 0.005;
    const novoValor = acoesValor + rendimento;

    // ATUALIZA TELA
    acoes.innerText = novoValor.toFixed(2);

    // SALVA
    localStorage.setItem("acoesSaldo", novoValor.toFixed(2));

    // HISTÓRICO
    atualizarMovis(
        dia,
        "Rendimento Dividendos - Ações",
        "Renda Variável",
        rendimento.toFixed(2)
    );

    showToast(`Ações atualizadas: +R$ ${rendimento.toFixed(2)}`, "success");
    
    // Recalcula o patrimônio geral
    recalcularPatrimonio();
}

//==============================//
// ATUALIZAR TODOS ATIVOS (Lógica Otimizada)
//==============================//
function atAtivos() {
    const btcVal = Number(localStorage.getItem("btnSaldo")) || 0;
    const cdiVal = Number(localStorage.getItem("cdiSaldo")) || 0;
    const acoesVal = Number(localStorage.getItem("acoesSaldo")) || 0;

    if (btcVal === 0 && cdiVal === 0 && acoesVal === 0) {
        showToast("Você não possui ativos investidos para render!", "error");
        return;
    }

    // Processa rendimentos sequencialmente sem interromper a execução
    let rendeuAlgum = false;
    const hoje = new Date().toLocaleDateString();

    // CDI
    if (cdiVal > 0 && localStorage.getItem("ultimoRendimentoCDI") !== hoje) {
        rendaFixa();
        rendeuAlgum = true;
    }
    // BTC
    if (btcVal > 0 && localStorage.getItem("ultimoRendimentoBTC") !== hoje) {
        // Delay slighty for visual stack effect
        setTimeout(() => rendimentoBtc(), 300);
        rendeuAlgum = true;
    }
    // Ações
    if (acoesVal > 0 && localStorage.getItem("ultimoRendimentoAcoes") !== hoje) {
        setTimeout(() => rendimentoAcoes(), 600);
        rendeuAlgum = true;
    }

    if (!rendeuAlgum) {
        showToast("Todos os seus ativos já renderam por hoje. Volte amanhã!", "info");
    }
}