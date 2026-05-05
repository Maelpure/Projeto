function button () {
    let numero = 10
    alert(numero)
}
function button1 () {
    let nome = "Emanuel"
    alert(nome)
}
function usuario () {
    let input = document.getElementById("input").value;
    if (input == "ok") {
    alert("Correto!!");
    } 
}

function usuario1 () {
    let input1 = document.getElementById("input1").value;
    if (input1 == "5") {
    alert("Correto!!");
    } else {
    alert("Incorreto!!");
    }
}
function usuario2 () {
    let input2 = document.getElementById("input2").value;
    if (input2 == "admin") {
    resultado.textContent = "Correto!!";
    resultado.style.color = "green";
    } else {
    resultado.textContent = "Incorreto!!";
    resultado.style.color = "red";
    }
}
function mudarTexto() {
    let input3 = document.getElementById("input3").value;
    if (input3 == "mudar texto") {
        document.getElementById("resultado1").textContent = "Texto nada legal!!!!!!!";
    }
}
function mudarCor() {
    let input4 = document.getElementById("input4").value;
    let cordiv = document.getElementById("cordiv");
    if (input4 == "Vermelho") {
        cordiv.style.backgroundColor = "red";
        cordiv.style.color = "white";
        cordiv.style.borderRadius = "10px";
        cordiv.style.padding = "10px";
        cordiv.style.width = "300px";
    } else if (input4 == "Verde") {
        cordiv.style.backgroundColor = "green";
        cordiv.style.color = "white";
        cordiv.style.borderRadius = "10px";
        cordiv.style.padding = "10px";
        cordiv.style.width = "300px";
    } else if (input4 == "Azul") {
        cordiv.style.backgroundColor = "blue";
        cordiv.style.color = "white";
        cordiv.style.borderRadius = "10px";
        cordiv.style.padding = "10px";
        cordiv.style.width = "300px";
    }
}
function usuario3 () {
    let input5 = document.getElementById("input5").value;
    if (input5 >= "10") {
    resultado3.textContent = "Correto!!";
    resultado3.style.color = "green";
    } else {
    resultado3.textContent = "Incorreto!!";
    resultado3.style.color = "red";
    }
}
function usuario4 () {
    let input6 = document.getElementById("input6").value;
    if (input6 <= "10") {
    resultado4.textContent = "Correto!!";
    resultado4.style.color = "green";
    } else {
    resultado4.textContent = "Incorreto!!";
    resultado4.style.color = "red";
    }
}
function usuario5 () {
    let input7 = document.getElementById("input7").value;
    if (input7 == "2205") {
        resultado5.textContent = "Correto!!";
        resultado5.style.color = "green";
    } else {
        resultado5.textContent = "Incorreto!!";
        resultado5.style.color = "red";
    }
}
function mudarFundo () {
    let input8 = document.getElementById("input8").value;
    if (input8 == "escuro") {
        body1.style.backgroundColor = "black";
        body1.style.color = "white";
    }
}
function mudartextcor () {
    let input9 = document.getElementById("input9").value;
    if (input9 == "lice") {
        resultado6.textContent = "Lice beta";
        resultado6.style.color = "purple";
        h21.textContent = "Digite gabi para mudar texto e cor:";
    }
    if (input9 == "gabi") {
        resultado6.textContent = "Gabi beta";
        resultado6.style.color = "pink";
        h21.textContent = "Digite lice para mudar texto e cor:";
    }
}
function mudarElementos () {
    let input10 = document.getElementById("input10").value;
    if (input10 == "mudar") {
        body1.style.backgroundColor = "lightgray";
        body1.style.color = "black";
        resultado7.textContent = "Correto!! Elementos mudados!!";
        resultado7.style.color = "green";
    }
}
function usuario6 () {
    let input11 = document.getElementById("input11").value;
    if (input11 > "20") {
        resultado8.style.fontSize = "50px";
    }
}
function usuario7 () {
    let input12 = document.getElementById("input12").value;
    if (input12 == "Mael") {
        alert("Correto!!");
        alert("Seja bem-vindo admin Mael!!");
    }
}
function usuario8 () {
    let input13 = document.getElementById("input13").value;
    if (input13 == "okk") {
        resultado9.textContent = "Correto!!";
        resultado9.style.color = "green";
        resultado9.style.fontSize = "30px";
    }
}
function usuario9 () {
    let input14 = document.getElementById("input14").value;
    if (input14 > "100") {
        body1.style.backgroundColor = "darkgray";
        body1.style.color = "white";
    }
}
function usuario10 () {
    let input15 = document.getElementById("input15").value;
    if (input15 == "copiar") {
        resultado10.textContent = "copiar";
    } else {
        resultado10.textContent = "Erro: Digite 'copiar'";
        resultado10.style.color = "red";
    }
}
function usuario11 () {
    let input16 = document.getElementById("input16").value;
    if (input16 == "mudar") {
        cordiv1.style.backgroundColor = "purple";
        cordiv1.style.color = "white";
        cordiv1.style.borderRadius = "10px";
        cordiv1.style.padding = "10px";
        cordiv1.style.width = "100px";
        cordiv1.style.textAlign = "center";

        cordiv2.style.backgroundColor = "crimson";
        cordiv2.style.color = "white";
        cordiv2.style.borderRadius = "10px";
        cordiv2.style.padding = "10px";
        cordiv2.style.width = "100px";
        cordiv2.style.textAlign = "center";
    }
}
function usuario12 () {
    let input17 = document.getElementById("input17").value;
    if (input17 == "mudar") {
        body1.style.backgroundColor = "darkblue";
        body1.style.color = "white";
        resultado11.textContent = "Correto!!";
        resultado11.style.color = "green";
    }
}