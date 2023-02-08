function calcular(){
    var aux;
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value); 
    var numero3 = parseInt(document.getElementById("numero3").value); 
    var maiorNumero = document.getElementById("maiorNumero");

    if (isNaN(numero1)) numero1=0;
    if (isNaN(numero2)) numero2=0;
    if (isNaN(numero3)) numero3=0;

    if (numero1>numero2) {
        aux = numero1;
        numero1 = numero2;
        numero2 = aux;
        }
        if (numero1>numero3) {
        aux = numero1;
        numero1 = numero3;
        numero3 = aux;
        }
        if (numero2>numero3) {
        aux = numero2;
        numero2 = numero3;
        numero3 = aux;
        }
        maiorNumero.value = numero3;  
}

function limpar(){
    document.getElementById("numero1").value = " ";
    document.getElementById("numero2").value = " ";
    document.getElementById("numero3").value = " ";
    document.getElementById("maiorNumero").value = " ";
}