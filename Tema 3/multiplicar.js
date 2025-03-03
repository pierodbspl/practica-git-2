function multiplicacion(a,b){

    var a = prompt ("Numero 1", 0)
    var b = prompt ("Numero 2", 0)

    var c = a * b;

    alert("El resultado de la multiplicación " + a + " por " + b + " es igual a: " + c);
}

function mayor(){
    var a = parseInt(prompt ("Numero 1", 0))
    var b = parseInt(prompt ("Numero 2", 0))

    if(a > b){
        alert ("El numero " + a + " es mayor que " + b);
    } else {
        alert ("El numero " + b + " es mayor que " + a);
    }
}