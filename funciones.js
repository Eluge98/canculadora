var total = 0;
var reset = false;
var contador = 1;
var punto = true;

function botones(numero){

    if(document.calculadora.valor.value=='0.' || reset == true){
        document.calculadora.valor.value=numero;
        if(total==0){
            total = numero;
        }else{
           total += numero;
        }
        reset = false;
        punto=false;
        console.log(total);
    }else{
        document.calculadora.valor.value+=numero;
        total += numero;
        reset = false;
        console.log(total);
    }
}

function decimal(simbolo){
    if(punto==false){
        document.calculadora.valor.value+=simbolo;
        total += simbolo;
        reset = false;
        punto=true;
        console.log(total);
    }
}

function cuentas(simbolo){
    total = eval(total);
    total += simbolo;
    reset=true;
    console.log(total);
}

function resultado(){
    document.calculadora.valor.value=eval(total);
    total = eval(total);
    tabla()
    console.log(total);
    reset = true;
    punto = true;
    contador++;
}

function borrar(){
    total = 0;
}

function tabla(){
    var table = document.getElementById("tabla");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = contador;
    cell2.innerHTML = total;
}

