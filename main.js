// import { naoCasado } from "./arrays.js";

var calcForm = document.forms["calcutalor"];
var civil = calcForm.elements["civil"];
var defici = calcForm.elements["defici"];
var depende = calcForm.elements["depende"];
var base = calcForm.elements["base"];
var almoco = calcForm.elements["almo"];
var dias = calcForm.elements["days"];
var retencao = calcForm.elements["perc"];
var insentacao = calcForm.elements["inse"];
var dioturnidade = calcForm.elements["diot"];

var btn = document.getElementById("btn");

var civilArr = ["Solteiro", "Casado"];
for(var i = 0; i < civilArr.length; i++) {
    var opt = civilArr[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    civil.appendChild(el);
}

var defiArr = ["Sim", "Não"];
for(var i = 0; i < defiArr.length; i++) {
    var opt = defiArr[i];
    var et = document.createElement("option");
    et.textContent = opt;
    et.value = opt;
    defici.appendChild(et);
}

var dependeArr = [0, 1, 2, 3, 4, 5];
for(var i = 0; i < dependeArr.length; i++) {
    var opt = dependeArr[i];
    var en = document.createElement("option");
    en.textContent = opt;
    en.value = opt;
    depende.appendChild(en);
}

function calcBruto(){
    // Salario Base + (SubAlmo*Dias)
    var bruto = 0.0;
    var sub = 0.0;

    sub = parseFloat(almo.value) * parseInt(dias.value);
    bruto = parseFloat(base.value) + sub;

    console.log(bruto);
    return bruto;
}

function calcBrutoDesc(){
    if (!parseFloat(almo.value) > 4.77) return;
    // SubAlmo - 4.77
    // Salario Base + (SubAlmo*Dias)
    var brutoDesc = 0.0;
    var sub = 0.0;
    var subDesc = 0.0;

    sub = parseFloat(almo.value) - 4.77;
    subDesc = sub * parseInt(dias.value);
    brutoDesc = parseFloat(base.value) + subDesc;

    console.log(bruto);
    return brutoDesc;
}

function calcRet(){
    var dep = new Array();
    dep["0"] = 0;
    dep["1"] = 1;
    dep["2"] = 2;
    dep["3"] = 3;
    dep["4"] = 4;
    dep["5"] = 5;
    var d = dep[depende.value];
    console.log(d);
    
    var civ = new Array();
    civ["Solteiro"] = 0;
    civ["Casado"] = 1;
    var c = civ[civil.value];
    console.log(c);

    var def = new Array();
    def["Sim"] = 0;
    def["Não"] = 1;
    var f = def[defici.value];
    console.log(f);

    if(c == 0 || f == 1){
        if (calcBruto() <= 710.00) {
            retencao.value = naoCasado[0][d].toString();
            console.log(calcBruto() + " " + naoCasado[0][d]);
        }

        if (calcBruto() > 710.00 || calcBruto() <= 720.00){
            retencao.value = naoCasado[1][d].toString();
            console.log(calcBruto() + " " + naoCasado[1][d]);
        }

        if (calcBruto() > 720.00 || calcBruto() <= 740.00){
            retencao.value = naoCasado[2][d].toString();
            console.log(calcBruto() + " " + naoCasado[2][d]);
        } 
        
        if (calcBruto() > 740.00 || calcBruto() <= 754.00){
            retencao.value = naoCasado[3][d].toString();
            console.log(calcBruto() + " " + naoCasado[3][d]);
        }

        if (calcBruto() > 754.00 || calcBruto() <= 822.00){
            retencao.value = naoCasado[4][d].toString();
            console.log(calcBruto() + " " + naoCasado[4][d]);
        } 
        
        if (calcBruto() > 822.00 || calcBruto() <= 931.00){
            retencao.value = naoCasado[5][d].toString();
            console.log(calcBruto() + " " + naoCasado[5][d]);
        }

        if (calcBruto() > 931.00 || calcBruto <= 1015.00){
            retencao.value = naoCasado[6][d].toString();
            console.log(calcBruto() + " " + naoCasado[6][d]);
        }
    }

    console.log(naoCasado);
}

function calcPerc(){
    // Salario*Perc 
    var ret = 0.0;
    var perc = 0.0;

    perc = parseFloat(retencao.value) / 100;
    ret = calcBruto() * perc;

    return ret;
}

function calcSS(){
    // Salario*11%
    var ss = 0.0;

    ss = calcBruto() * 0.11;

    return ss;
}

btn.addEventListener("click", () => {
    // Salario + Bruto - Retenção - SS
    var total = 0.0;
    var totalDesc = 0.0;

    total = calcBruto() - calcPerc() - calcSS();
    totalDesc = calcBrutoDesc + parseFloat(insentacao.value) + parseFloat(dioturnidade.value) - calcPerc() - calcSS();
    console.log(calcBruto() + " - " + calcPerc() + " - " + calcSS());

    document.getElementById("slrBruto").innerHTML = "Salario Bruto: " + calcBruto() + "€";
    document.getElementById("total").innerHTML = "Retultado: " + total + "€";
});


/************ THX ALEX@ItzJustGig **********/
var naoCasado = [
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [1.8, 0.2, 0.0, 0.0, 0.0, 0.0],
    [4.5, 0.6, 0.0, 0.0, 0.0, 0.0],
    [6.3, 0.8, 0.0, 0.0, 0.0, 0.0],
    [7.9, 4.5, 1.0, 0.0, 0.0, 0.0],
    [10.1, 6.7, 3.5, 0.0, 0.0, 0.0],
    [11.3, 7.9, 5.7, 1.4, 0.0, 0.0],
    [12.1, 8.8, 6.5, 3.3, 0.0, 0.0],
    [13.1, 10.7, 8.3, 5.1, 2.7, 0.2],
    [14.1, 11.8, 9.3, 6.1, 3.6, 1.2],
    [15.2, 12.8, 10.5, 7.0, 4.6, 2.2],
    [16.2, 13.8, 11.4, 8.0, 6.5, 4.0],
    [17.2, 14.8, 12.3, 10.0, 7.5, 5.0],
    [18.6, 16.3, 14.8, 11.4, 8.9, 6.5],
    [19.9, 18.2, 17.3, 14.5, 12.5, 11.7],
    [20.9, 19.3, 18.2, 15.5, 14.5, 12.5],
    [21.9, 20.2, 19.2, 16.4, 15.5, 13.5],
    [22.8, 21.3, 20.3, 17.5, 16.5, 14.5],
    [23.8, 22.2, 21.3, 18.5, 17.6, 15.5],
    [24.8, 24.2, 22.2, 20.4, 18.5, 17.6],
    [25.8, 25.1, 23.3, 21.4, 19.4, 18.5],
    [27.0, 26.4, 24.5, 22.5, 20.6, 19.6],
    [28.6, 28.3, 26.8, 25.2, 24.6, 23.0],
    [29.7, 29.5, 27.7, 26.2, 25.6, 25.0],
    [31.4, 31.0, 29.4, 27.6, 27.0, 26.5],
    [32.3, 31.8, 31.3, 28.9, 28.0, 27.4],
    [33.3, 32.8, 32.2, 29.8, 29.2, 28.4],
    [35.3, 34.9, 34.1, 32.2, 31.8, 31.5],
    [36.3, 35.9, 35.5, 34.2, 32.8, 32.4],
    [38.2, 37.8, 37.4, 36.2, 35.8, 34.4],
    [39.2, 38.8, 38.4, 37.5, 36.7, 35.4],
    [40.2, 39.8, 39.4, 38.5, 38.1, 36.4],
    [41.2, 40.8, 40.4, 39.5, 39.1, 37.3],
    [41.9, 41.7, 41.4, 40.5, 40.1, 38.5],
    [42.9, 42.7, 42.3, 41.4, 41.1, 39.7],
    [43.8, 43.6, 43.3, 42.4, 42.0, 40.7]
];
/*******************************************/