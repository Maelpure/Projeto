let produtos = [
    "Mouse",
    "Teclado",
    "Monitor",
    "Gabinete",
    "Placa de Vídeo",
];
let precos = [];
let posicao = 0;

function verprodutos() {
    let produtosList = document.getElementById("produtos");
    produtosList.textContent = "";

    for (posicao = 0; posicao < produtos.length; posicao++) {
        let texto = document.createElement("li");
        texto.textContent = produtos[posicao];
        produtosList.appendChild(texto);
    }
}
function calcularprodutos() {
    let total = 0;
    for (let i = 1; i <= 5; i++) {
        let checkbox = document.getElementById("produto" + i);
        if (checkbox.checked) {
            total += parseFloat(checkbox.value);
        }
    }
    document.getElementById("total").textContent = "O valor total da compra é: R$ " + total;
    document.getElementById("total").style.fontSize = "x-large";
}
function acessarsistema() {
    let tentativas = 0;
    let senha = prompt("Digite a senha para acessar o sistema:");
    while (senha !== "1234" && tentativas < 3) {
        tentativas++;
        senha = prompt("Senha incorreta. Tente novamente:" + "  Tentativas:" + tentativas);
    }
    if (senha === "1234") {
        document.getElementById("sistema").textContent = "Acesso concedido. Bem-vindo ao sistema!" + "  Tentativas:" + tentativas;
        document.getElementById("sistema").style.fontSize = "x-large";
        document.getElementById("sistema").style.color = "green";
    } else {
        document.getElementById("sistema").textContent = "Número máximo de tentativas excedido.";
        document.getElementById("sistema").style.fontSize = "x-large";
        document.getElementById("sistema").style.color = "red";
    }
}

function gerarnotas() {
    let alunos = ["Ana", "Carlos", "Marina", "João", "Fernanda", "Gabriela", "Alice", "Lorenzo",
        "Lara"];
    let notas = [8, 7, 9, 4, 8, 6, 1, 6, 5];
    let somanotas = 0;

    let relatorio = document.getElementById("relatorio");
    let media = document.getElementById("media");
    let th = document.createElement("th");
    th.textContent = "Aluno";
    th.textContent = "Nota";
    relatorio.textContent = "";

    for (let i = 0; i < alunos.length; i++) {
        somanotas += notas[i];
        let nome = document.createElement("tr");
        let tdNome = document.createElement("td");
        tdNome.textContent = alunos[i];
        let tdNota = document.createElement("td");
        tdNota.textContent = notas[i];
        nome.appendChild(tdNome);
        nome.appendChild(tdNota);
        relatorio.appendChild(nome);
        if (notas[i] >= 6) {
            tdNota.style.color = "green";
        } else {
            tdNota.style.color = "red";
        }
    }
    media.textContent = "Média das notas: " + (somanotas / alunos.length).toFixed(2);
}
valor = []
function conferir() {
    let resultado = document.getElementById("resultado1");
    let valor = 0;
    let pp = prompt("Digite o valor:");
    while (pp != 0) {
        valor += Number(pp);
        pp = prompt("Digite o valor:");
    }
    resultado.textContent = (valor);
}