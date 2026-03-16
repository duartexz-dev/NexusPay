function confirmar() {

    let nome = document.getElementById("nome").value
    let idade = Number(document.getElementById("idade").value)
    const res = document.getElementById("result")
    let btn = document.getElementById("btn-ocult")
    let btn2 = document.getElementById("btn-ocult2")

    if (idade >= 18 && idade <= 100) {

        res.innerHTML = `Olá ${nome}! dados confirmados.`
        btn.style.display = "flex"
        btn2.style.display = "none"

    } else if (!nome || !idade) {

        res.innerHTML = "Preencha todos os dados para continuar!"
        alert("Preencha todos os dados!")

    }

    localStorage.setItem("nome", nome)
    localStorage.setItem("idade", idade)

}