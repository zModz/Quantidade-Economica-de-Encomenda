var calcForm = document.forms["calculator"];
var consum = calcForm.elements["consumo"];
var cust = calcForm.elements["custo"];
var unidad = calcForm.elements["unidade"];
var poss = calcForm.elements["posse"];

var btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    var perc = 0.0;

    var calc1 = 0.0; 
    var calc2 = 0.0; 
    var calc3 = 0.0;
    var total = 0.0;
    var encoTotal = 0.0;

    calc1 = 2 * parseFloat(consum.value) * parseFloat(cust.value);
    console.log("Calc1: " + calc1);
    perc = parseFloat(poss.value) / 100;
    calc2 = parseFloat(unidad.value) * perc;
    console.log("Calc2: " + calc2);
    calc3 = calc1 / calc2;
    console.log("Calc3: " + calc3);

    total = Math.sqrt(calc3);
    encoTotal = parseFloat(consum.value) / total
    

    document.getElementById("total").innerHTML = "Resultado: " + Math.round(total * 100) / 100 + "€";
    document.getElementById("enco").innerHTML = "Encomendas necessarias: " + Math.round(encoTotal * 1) / 1;
});

