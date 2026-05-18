let produtos = [];
let precos = [];
let posicao = 0;
let quantidade = 0;


function adicionar(){
    let produto = document.getElementById("produto").value;
    let preco = document.getElementById("preco").value;
    let crr = cor();
    if (crr === 0) {
        return;
    }
    else{
        produtos.push(produto);
        precos.push(preco); 
        quantidade = quantidade + 1;
        document.getElementById("quantidade").textContent = quantidade;  
    }
     
}

function mostrar(){
    let text = document.getElementById("lista").textContent;
    document.getElementById("lista").textContent = text + "Produto: " + produtos[posicao] + " - R$ " + precos[posicao] + " | ";
    posicao = posicao + 1;
    cor();
    calcular();
    limpar();
    caro();
}

function cor(){
    let produto = document.getElementById("produto").value;
    let preço = document.getElementById("preco").value;
    if (produto == "" || preço == "") {
        document.getElementById("mensagem").style.color = "red";
        document.getElementById("mensagem").textContent = "por favor, preencha todos os campos.";
    } else if (preço <= 0) {
        document.getElementById("mensagem").style.color = "red";
        document.getElementById("mensagem").textContent = "O preço deve ser um valor acima de zero.";
    } else if (produto.length < 3) {
        document.getElementById("mensagem").style.color = "red";
        document.getElementById("mensagem").textContent = "O nome do produto deve ter mais caracteres doque 3.";
        return 0;
    } else {
        document.getElementById("mensagem").style.color = "green";
        document.getElementById("mensagem").textContent = "Produto cadastrado!!";
        return 1;
    }
}

function limpar(){
    if (produtos.length > 0) {
        let valor = precos[produtos.length - 1];
        let text = document.getElementById("total").textContent;
        document.getElementById("total").textContent = "R$" + (text.replace("R$", "") - valor).toFixed(2);
        produtos.pop();
        precos.pop();
        listaProdutos.textContent = "";
        posicao = --posicao;
        for (let i = 0; i < posicao; i++) {
            let text = document.getElementById("lista");
            document.getElementById("lista").textContent = text + " " + produtos[i] + " - R$" + precos[i] + " | ";
        }
        quantidade = quantidade - 1;

        document.getElementById("quantidade").textContent = quantidade;
        document.getElementById("mensagem").style.color = "green";
        document.getElementById("mensagem").textContent = "Último produto cadastrado removido com sucesso!";
    } else {
        document.getElementById("mensagem").style.color = "red";
        document.getElementById("mensagem").textContent = "Não há produtos para ser removidos!!";
    }
}




function caro(){
    let maiscaro = 0;
    let maiscaronome = "";
    for (i = 0; i < precos.length; i++) {
        if (maiscaro > precos[i]) {
            maiscaro = precos[i]
            maiscaro = produtos[i]
        }
    }
}