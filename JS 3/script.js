function idade1() {
    let idade = document.getElementById("idad").value;
    if (idade <= 12) {
        resultado.textContent = "Criança";
        resultado.style.color = "red";
    } else if (idade >= 12 && idade <= 17) {
        resultado.textContent = "Adolescente";
        resultado.style.color = "blue";
    } else if (idade >= 18 && idade <= 59) {
        resultado.textContent = "Adulto";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Idoso";
        resultado.style.color = "purple";
    }
}


function login1() {
    let user = document.getElementById("usuario").value;
    let password = document.getElementById("senha").value;

    if (user === "admin" && password === "1234") {
        alert("Login realizado com sucesso!");
        // Login com sucesso: Redireciona para a home
        window.location.href = "index.html"; 
    } else if (user === "" && password !== "") {
        resultadologin.textContent = "Por favor, preencha o campo de usuário!";
        resultadologin.style.color = "red";
    } else if (user !== "" && password === "") {
        resultadologin.textContent = "Por favor, preencha o campo de senha!";
        resultadologin.style.color = "red";
    } else {
        resultadologin.textContent = "Usuário ou senha incorretos!";
        resultadologin.style.color = "red";
    }
}


function calcular() {
    let valor = document.getElementById("pre").value;
    let vip = document.getElementById("desc").value;
    let cupom = document.getElementById("cupom").value;
    let desconto = 0;
    if (valor >= 500 && vip === "sim") {
        alert("Desconto de 20% aplicado!! Valor final: R$" + (valor * 0.20))
    } else if (valor >= 300 && vip === "nao" && cupom === "sim") {
        alert("Desconto de 10% aplicado!! Valor final: R$" + (valor * 0.10))
    } else if (valor < 300 && vip === "não") {
        alert("Nenhum cupom aplicado")
    } else {
        alert("error")
    }
}


function nota1(){
    let nota = document.getElementById("nota").value;
    let freq = document.getElementById("freq").value;
    if ((!nota || nota <= 0) || ((!freq || freq <= 0) || (nota > 100 || freq > 100))) {
        alert("VALORES INVALIDOS")
        return;
    }
    if (nota == 0 && freq == 0) {
        alert("Preencha todos os campos")
    }
    else if (nota >= 60 && freq >= 75) {
        alert("Aprovado")
    }
    else if (nota >= 40 && nota <60 && freq >= 75) {
        alert("Recuperação")
    }
    else if (nota < 40 || freq < 75) {
        alert("Reprovado")
    }
    else if (nota == 0 && freq == 0) {
        alert("Preencha todos os campos")
    }
}
