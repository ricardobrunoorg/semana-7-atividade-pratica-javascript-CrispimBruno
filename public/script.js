let nome = prompt("Qual é o seu nome?");
let rendaInput = prompt("Qual a sua renda mensal?");
while (isNaN(Number(rendaInput)) || rendaInput === "") {
    rendaInput = prompt("Valor inválido! Digite sua renda mensal (apenas números):");
}
let renda = Number(rendaInput);

let qtdDespesasInput = prompt("Quantas despesas você quer informar?");
while (isNaN(Number(qtdDespesasInput)) || qtdDespesasInput === "") {
    qtdDespesasInput = prompt("Valor inválido! Digite a quantidade de despesas:");
}

let qtdDespesas = Number(qtdDespesasInput);
let totalDespesas = 0;

for (let i = 1; i <= qtdDespesas; i++) {
    let valorDespesa = prompt("Digite o valor da Despesa " + i + ":");

    while (isNaN(Number(valorDespesa)) || valorDespesa === "") {
        valorDespesa = prompt("Erro! Digite um número válido para a Despesa " + i + ":");
    }
    
    totalDespesas += Number(valorDespesa);
}

let mensagemClassificacao = "";
let sobra = renda - totalDespesas;

if (totalDespesas > renda) {
    mensagemClassificacao = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    let margemSeguranca = renda * 0.30;

    if (sobra >= margemSeguranca) {
        mensagemClassificacao = "✅ Ótimo: boa margem de sobra.";
    } else {
        mensagemClassificacao = "🙂 Ok: dá para melhorar a sobra.";
    }
}

let resumo = ` Nome: ${nome}
Renda: R$ ${renda.toFixed(2)}
Total de Despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
Mensagem: ${mensagemClassificacao}`;

alert(resumo);
console.log(resumo);