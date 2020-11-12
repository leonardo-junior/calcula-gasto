const valoresMensal = document.getElementById('valoresMensal');
const valorPago1 = document.getElementById('valorPago1');
const valorPago2 = document.getElementById('valorPago2');
const bSomaGastoMensal = document.getElementById('bCalculeMensal');
const bCalculateTotal = document.getElementById('bCalculeTotal');
const bSomar1 = document.getElementById('bSomar1');
const bSomar2 = document.getElementById('bSomar2');
const result = document.getElementById('result');
const resultSoma1 = document.getElementById('resultSoma1');
const resultSoma2 = document.getElementById('resultSoma2');
const resultSomaMensal = document.getElementById('resultSomaMensal');


let valorTotalMensal = 0;
let pago1 = 0;
let pago2 = 0;
let valorFinalPessoa1 = 0;
let valorFinalPessoa2 = 0;

bSomar1.onclick = function () {
    pago1 += Number(valorPago1.value);
    resultSoma1.innerHTML = `A pessoa 1 ajudou com R$ ${pago1}`;
};
bSomar2.onclick = function () {
    pago2 += Number(valorPago2.value);
    resultSoma2.innerHTML = `A pessoa 2 ajudou com R$ ${pago2}`;
};
bSomaGastoMensal.onclick = function () {
    valorTotalMensal += Number(valoresMensal.value);
    resultSomaMensal.innerHTML = `O valor Total do mês é ${valorTotalMensal} reais`;
};

bCalculateTotal.onclick = function () {
    let gastoMens = valorTotalMensal;
    let valPCada = gastoMens / 2;
    valorFinalPessoa1 = valPCada - pago1;
    valorFinalPessoa2 = valPCada - pago2;
    if (valorFinalPessoa1 >= 0 && valorFinalPessoa2 >= 0) {
        result.innerText = `A pessoa 1 deve pagar ${valorFinalPessoa1} e a pessoa 2 deve pagar ${valorFinalPessoa2}`;
    } else if (valorFinalPessoa1 < 0) {
        result.innerText = `A pessoa 1 deve receber da Pessoa 2 ${valorFinalPessoa1 * -1} e a pessoa 2 deve pagar de contas ${valorFinalPessoa2 + valorFinalPessoa1}`;
    } else if (valorFinalPessoa2 < 0) {
        result.innerText = `A pessoa 1 deve receber da Pessoa 2 ${valorFinalPessoa2 * -1} e a pessoa 2 deve pagar de contas ${valorFinalPessoa1 + valorFinalPessoa2}`;
    }
};