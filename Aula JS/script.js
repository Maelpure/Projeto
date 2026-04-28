
function caixinhaleticia() {
    let A = 1064;
    let B = 1024;
    let C = 10
    let idade = 67 + B - A - 10;
    alert(idade);
}

function caixinha() {
    let nome = "Emanuel";
    alert("Olá Mundo!!");
    alert("Meu nome é " + nome);
}

function caixinha2() {
    let texto = document.getElementById("cortext");
    texto.textContent = "Você Clicou!!";
    texto.style.backgroundColor = "yellowgreen";
    texto.style.fontSize = "50px";
    texto.style.justifySelf = "center";
    texto.style.textAlign = "center";
    texto.style.width = "25%";
    texto.style.borderRadius = "10px";
    texto.style.border = "1px solid white";
    texto.style.marginBottom = "50px";
    texto.style.marginTop = "50px";
}

function funçao() {
    let par = document.getElementById("paragrafo");
    let cax = document.getElementById("caixa");
    let escrita = par.textContent;
    cax.value = escrita;
}

function soma() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = Number(num1) + Number(num2);
    let local = document.getElementById("resultado2");
    local.textContent = resultado;
}





function alterartext()
 {
   let texto = document.getElementById("altext2")
   texto.textContent = "Alpha"
 }
 function alterartext2()
 {
   let texto = document.getElementById("altext2")
   texto.style.fontSize = "50px"
 }
 function alterartext3()
 {
   let texto = document.getElementById("altext2")
   texto.style.color = "crimson"
 }

 function divs2()
 {
   let texto = document.getElementById("div1");
   texto.style.color = "red";
   let texto2 = document.getElementById("div2");
   texto2.style.color = "purple";

 }
 function funçao2(){
   let par = document.getElementById("paragrafo2");
   let cax3 = document.getElementById("caixa3");
   let cax = document.getElementById("caixa2");
   let escrita = par.textContent
   cax3.value = escrita;
   cax.value = escrita;

 }

 function aline()  {
  const alice = document.getElementById("ali");
  lice1.textContent = alice.value;
  lice1.style.color = "purple";
  lice1.style.backgroundColor = "white";
  
}

 function soma3()
 {
   let num1 = document.getElementById("num11").value;
   let num2 = document.getElementById("num22").value;
   let resultado = Number(num1) + Number(num2);
   let local = document.getElementById("resultadoo");
   local.textContent = resultado;
   
 }
function aviso2() {
  document.getElementById("resultadoo").textContent = " "
}
function tudo(){
 const mudar = document.getElementById("corbody");
 mudar.style.color = ("orange");
 mudar.style.background = ("cadetblue");
 mudar.style.fontSize = ("20px");

}
