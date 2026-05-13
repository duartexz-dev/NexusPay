function confirm() {

    const email = JSON.parse(localStorage.getItem("email"))
    const senha = JSON.parse(localStorage.getItem("senha"))

    let emailC = document.getElementById("email").value
    let senhaC = document.getElementById("senha").value


    if (!email || !email.includes("@gmail.com") || !senha) {
        alert("Coloque todas as informações porfavor.")
    } else if (emailC === email && senhaC === senha) {

        alert("Senha e Email constam no nosso sistema!")
        window.location.href = "./Home.html"

    } else {
        alert("Informações incorretas.")
    }



}