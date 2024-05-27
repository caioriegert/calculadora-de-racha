const carro01 = document.getElementById('nome-carro01');
const potencia01 = document.getElementById('potencia-carro01');
const peso01 = document.getElementById('peso-carro01');
const larguraPneu01 = document.getElementById('largura-pneu-carro-01');
const aroPneu01 = document.getElementById('aro-pneu-carro-01');
const alturaPneu01 = document.getElementById('altura-pneu-carro-01');
const torque01 = document.getElementById('torque-carro01');
const rpmTorque01 = document.getElementById('rpm-torque-carro01');

const carro02 = document.getElementById('nome-carro02');
const potencia02 = document.getElementById('potencia-carro02');
const peso02 = document.getElementById('peso-carro02');
const larguraPneu02 = document.getElementById('largura-pneu-carro-02');
const aroPneu02 = document.getElementById('aro-pneu-carro-02');
const alturaPneu02 = document.getElementById('altura-pneu-carro-02');
const torque02 = document.getElementById('torque-carro02');
const rpmTorque02 = document.getElementById('rpm-torque-carro02');

const botaoResultado = document.getElementById('botao-comparar');

let pesoXpotencia01;
let conversaoCm01;
let rpmXtorque01;
let mediaGeral01;

let pesoXpotencia02;
let conversaoCm02;
let rpmXtorque02;
let mediaGeral02;


/*
function contaCarro(potencia, peso, larguraPneu, aroPneu, alturaPneu, torque, rpm){
    const pesoXpotencia = peso / potencia;
    function diametroPneu(){
        const conversaoCm = (larguraPneu /10) * (aroPneu * 2.54) + ((alturaPneu * larguraPneu) / 100 / 10) / 10;
        return conversaoCm
    }
    const rpmXtorque = (rpm / torque) / 10;
    const mediaGeral = (pesoXpotencia + diametroPneu + rpmXtorque) / 3;
    return mediaGeral;
}

function contaCarro01(){
    return contaCarro(parseFloat(potencia01.value), parseFloat(peso01.value), parseFloat(larguraPneu01.value), parseFloat(aroPneu01.value), parseFloat(alturaPneu01.value), parseFloat(torque01.value), parseFloat(rpmTorque01.value))
}

function contaCarro02(){
    return contaCarro(potencia02, peso02, larguraPneu02, aroPneu02, alturaPneu02, torque02, rpmTorque02)
}
*/

function contaCarro01(){
    pesoXpotencia01 = peso01.value / potencia01.value;
    console.log(pesoXpotencia01);
    conversaoCm01 = (((aroPneu01.value * 2.54) + (2 * (((larguraPneu01.value / 10) * (alturaPneu01.value)) / 100)))) / 10;
    console.log(conversaoCm01);
    rpmXtorque01 = (rpmTorque01.value / torque01.value) / 10;
    console.log(rpmXtorque01);
    mediaGeral01 = (pesoXpotencia01 + conversaoCm01 + rpmXtorque01) / 3;
    return mediaGeral01;
}

function contaCarro02(){
    pesoXpotencia02 = peso02.value / potencia02.value;
    console.log(pesoXpotencia02);
    conversaoCm02 = (((aroPneu02.value * 2.54) + (2 * (((larguraPneu02.value / 10) * (alturaPneu02.value)) / 100)))) / 10;
    console.log(conversaoCm02);
    rpmXtorque02 = (rpmTorque02.value / torque02.value) / 10;
    console.log(rpmXtorque02);
    mediaGeral02 = (pesoXpotencia02 + conversaoCm02 + rpmXtorque02) / 3;
    return mediaGeral02;
}

function resultado(){
    if (contaCarro01() > contaCarro02()){
        alert("o carro " + carro01.value + " perderia este racha.")
    } else if(contaCarro01() < contaCarro02()){
        alert("o carro " + carro02.value + " perderia este racha.")
    }
}
    
botaoResultado.onclick = function(){
    contaCarro01();
    console.log("A nota do carro " + carro01.value + " é " + mediaGeral01);
    contaCarro02();
    console.log("A nota do carro " + carro02.value + " é " + mediaGeral02);
    resultado();
}
