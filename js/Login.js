function confirmLogin() {

    const email = JSON.parse(localStorage.getItem("email"))
    const senha = JSON.parse(localStorage.getItem("senha"))

    let emailC = document.getElementById("email").value
    let senhaC = document.getElementById("senha").value
    let btn1 = document.getElementById("btnConfirm")
    let btn2 = document.getElementById("btnEnter")

    if (!email || !email.includes("@gmail.com") || !senha) {
        alert("Coloque todas as informações porfavor.")
    } else if (emailC === email && senhaC === senha) {

        alert("Senha e Email constam no nosso sistema!")
        btn1.style.display = "none"
        btn2.style.display = "flex"

    } else {
        alert("Informações incorretas.")
    }



}

