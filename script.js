function calcular_maior(){
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

function limpar_maior(){
    document.getElementById("numero1").value = " ";
    document.getElementById("numero2").value = " ";
    document.getElementById("numero3").value = " ";
    document.getElementById("maiorNumero").value = " ";
}

function calcular_media(){
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value); 
    var numero3 = parseInt(document.getElementById("numero3").value); 
    var numero4 = parseInt(document.getElementById("numero4").value); 
    var mediaConta = document.getElementById("mediaConta");

    if (isNaN(numero1)) numero1=0;
    if (isNaN(numero2)) numero2=0;
    if (isNaN(numero3)) numero3=0;
    if (isNaN(numero4)) numero4=0;

    mediaConta.value = (numero1 + numero2 + numero3 + numero4) / 4;
}

function limpar_media(){
    document.getElementById("numero1").value = " ";
    document.getElementById("numero2").value = " ";
    document.getElementById("numero3").value = " ";
    document.getElementById("numero4").value = " ";
    document.getElementById("mediaConta").value = " ";
}

function calcular_parcelas(){
    valor = parseInt(document.getElementById("valor").value);
    parcela = parseInt(document.getElementById("parcela").value);
    var listaParcelas = document.getElementById("lista");

    if(isNaN(valor)) v=0;
    if(isNaN(parcela)) p=0;

    if(parcela > 0 && parcela <= 10){

        var valorParcela = valor / parcela;

    for(i = 1; i <= parcela; i++){

        listaParcelas.innerHTML = "Parcela " + i + " = R$ " + valorParcela.toFixed(2) + "<br>" + "Total = R$ " + valor.toFixed(2) + "<br>";
    }
    }else{
        alert("❌ As parcelas devem ser de 1 a 10!");
    }
}

function limpar_parcelas(){
    document.getElementById("valor").value = " ";
    document.getElementById("parcela").value = " ";
}

function calcular(){
    valor = parseInt(document.getElementById("valor").value);
    parcela = parseInt(document.getElementById("parcela").value);
    var listaParcelas = document.getElementById("lista");
    var soma;

    if(isNaN(valor)) v=0;
    if(isNaN(parcela)) p=0;

    if(parcela > 0 && parcela <= 5){

        var valorParcela = valor / parcela;

    for(i = 1; i <= parcela; i++){

        listaParcelas.innerHTML = "Parcela " + i + " = R$ " + valorParcela.toFixed(2) + "<br>" + "Total = R$ " + valor.toFixed(2) + "<br>";
    }
    }else if(parcela > 5 && parcela <= 10 ){
    
        var valorParcela = valor / parcela;
        soma = 0;

    for(i = 1; i <= parcela; i++){

        valorParcela = valorParcela * 1.02;
        soma = soma + valorParcela;

        listaParcelas.innerHTML = "Parcela " + i + " = R$ " + valorParcela.toFixed(2) + "<br>" + "Total com Juros = R$ " + soma.toFixed(2) + "<br>";
    }
    }else {
        alert("❌ As parcelas devem ser de 1 a 10!");
    }
}

function limpar(){
    document.getElementById("valor").value = " ";
    document.getElementById("parcela").value = " ";
    document.getElementById("parcela").value = " ";
}