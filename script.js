const carro01 = document.getElementById('nome-carro01');
const potencia01 = document.getElementById('potencia-carro01');
const peso01 = document.getElementById('peso-carro01');
const larguraPneu01 = document.getElementById('largura-pneu-carro-01');
const aroPneu01 = document.getElementById('aro-pneu-carro-01');
const alturaPneu01 = document.getElementById('altura-pneu-carro-01');
const torque01 = document.getElementById('torque-carro01');
const rpmTorque01 = document.getElementById('rpm-torque-carro01');
const backgroundCarro01 = document.getElementById('carro01');

const notaPesoXPotenciaCarro01 = document.querySelector('.nota-pesoXpotencia-carro01');
const notaDiametroCarro01 = document.querySelector('.nota-diametroPneu-carro01');
const notaRpmXTorqueCarro01 = document.querySelector('.nota-rpmXtorque-carro01');
const notaMediaGeralCarro01 = document.querySelector('.nota-mediaGeral-carro01');

const carro02 = document.getElementById('nome-carro02');
const potencia02 = document.getElementById('potencia-carro02');
const peso02 = document.getElementById('peso-carro02');
const larguraPneu02 = document.getElementById('largura-pneu-carro-02');
const aroPneu02 = document.getElementById('aro-pneu-carro-02');
const alturaPneu02 = document.getElementById('altura-pneu-carro-02');
const torque02 = document.getElementById('torque-carro02');
const rpmTorque02 = document.getElementById('rpm-torque-carro02');
const backgroundCarro02 = document.getElementById('carro02');

const notaPesoXPotenciaCarro02 = document.querySelector('.nota-pesoXpotencia-carro02');
const notaDiametroCarro02 = document.querySelector('.nota-diametroPneu-carro02');
const notaRpmXTorqueCarro02 = document.querySelector('.nota-rpmXtorque-carro02');
const notaMediaGeralCarro02 = document.querySelector('.nota-mediaGeral-carro02');

const botaoResultado = document.getElementById('botao-comparar');
const textResultado = document.getElementById('texto-resultado');

const resultadoRacha = document.querySelector(".resultado-racha");
const botoesLimpar = document.querySelector(".botoes-limpar");

const botaoLimparCarro01 = document.getElementById('botao-limpar-carro01');
const botaoLimparCarro02 = document.getElementById('botao-limpar-carro02');

let pesoXpotencia01;
let conversaoCm01;
let rpmXtorque01;
let mediaGeral01;

let pesoXpotencia02;
let conversaoCm02;
let rpmXtorque02;
let mediaGeral02;

function pontuacao(texto){
    const regex = /[,]/g;
    return texto.replace(regex, ".")
}

function contaCarro01(){
    pesoXpotencia01 = peso01.value / potencia01.value;
    conversaoCm01 = (((aroPneu01.value * 2.54) + (2 * (((larguraPneu01.value / 10) * (alturaPneu01.value)) / 100)))) / 10;
    rpmXtorque01 = (rpmTorque01.value / pontuacao(torque01.value)) / 10;
    mediaGeral01 = (pesoXpotencia01 + conversaoCm01 + rpmXtorque01) / 3;
    return mediaGeral01;
}

function contaCarro02(){
    pesoXpotencia02 = peso02.value / potencia02.value;
    conversaoCm02 = (((aroPneu02.value * 2.54) + (2 * (((larguraPneu02.value / 10) * (alturaPneu02.value)) / 100)))) / 10;
    rpmXtorque02 = (rpmTorque02.value / pontuacao(torque02.value)) / 10;
    mediaGeral02 = (pesoXpotencia02 + conversaoCm02 + rpmXtorque02) / 3;
    return mediaGeral02;
}

function tabelaResultados(){
    notaPesoXPotenciaCarro01.innerHTML = `Relação peso X potência:  <strong>${pesoXpotencia01.toFixed(4)}</strong>`;
    notaDiametroCarro01.innerHTML = `Diâmetro total da roda em cm: <strong>${conversaoCm01.toFixed(4)}</strong>`;
    notaRpmXTorqueCarro01.innerHTML = `Relação do RPM de torque máximo com o torque: <strong>${rpmXtorque01.toFixed(4)}</strong>`;
    notaMediaGeralCarro01.innerHTML = `Média geral dos valores: <strong>${mediaGeral01.toFixed(4)}</strong>`;
    notaPesoXPotenciaCarro02.innerHTML = `Relação peso X potência: <strong>${pesoXpotencia02.toFixed(4)}</strong>`;
    notaDiametroCarro02.innerHTML = `Diâmetro total da roda em cm dividido por 10: <strong>${conversaoCm02.toFixed(4)}</strong>`;
    notaRpmXTorqueCarro02.innerHTML = `Relação do RPM de torque máximo com o torque: <strong>${rpmXtorque02.toFixed(4)}</strong>`;
    notaMediaGeralCarro02.innerHTML = `Média geral dos valores: <strong>${mediaGeral02.toFixed(4)}</strong>`;
    resultadoRacha.style.display = "flex";
    botoesLimpar.style.display = "flex";
}

function resultado(){
    if (contaCarro01() > contaCarro02()){
        textResultado.innerText = "O carro " + carro02.value + " ganharia este racha.";
        tabelaResultados();
        backgroundCarro02.style.backgroundColor = "green";
        backgroundCarro01.style.backgroundColor = "rgb(218, 218, 218)";
    } else if(contaCarro01() < contaCarro02()){
        textResultado.innerText = "O carro " + carro01.value + " ganharia este racha.";
        tabelaResultados();
        backgroundCarro01.style.backgroundColor = "green";
        backgroundCarro02.style.backgroundColor = "rgb(218, 218, 218)";
    }
}
    
botaoResultado.onclick = function(){
    contaCarro01();
    console.log("A nota do carro " + carro01.value + " é " + mediaGeral01);
    contaCarro02();
    console.log("A nota do carro " + carro02.value + " é " + mediaGeral02);
    resultado();
}

botaoLimparCarro01.addEventListener('click', function(){
    carro01.value = "";
    potencia01.value = "";
    peso01.value = "";
    larguraPneu01.value = "";
    aroPneu01.value = "";
    alturaPneu01.value = "";
    torque01.value = "";
    rpmTorque01.value =  "";
    backgroundCarro02.style.backgroundColor = "rgb(218, 218, 218)";
    backgroundCarro02.style.backgroundColor = "rgb(218, 218, 218)";
    resultadoRacha.style.display = "none";
})

botaoLimparCarro02.addEventListener('click', function(){
    carro02.value = "";
    potencia02.value = "";
    peso02.value = "";
    larguraPneu02.value = "";
    aroPneu02.value = "";
    alturaPneu02.value = "";
    torque02.value = "";
    rpmTorque02.value =  "";
    backgroundCarro02.style.backgroundColor = "rgb(218, 218, 218)";
    backgroundCarro02.style.backgroundColor = "rgb(218, 218, 218)";
    resultadoRacha.style.display = "none";
})