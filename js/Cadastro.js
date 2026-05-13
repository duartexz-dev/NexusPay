
function criar() {

    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    if (!email || !email.includes("@gmail.com") || !senha) {
        alert("Coloque todas as informações porfavor.")
    } else {

        alert("Parabéns , sua conta está cadastrada no nosso sistema!")
        alert("Vamos,te direcionar para o login principal!")
        window.open("/MoneyFree/html/login.html")

        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("senha", JSON.stringify(senha));

    }


}