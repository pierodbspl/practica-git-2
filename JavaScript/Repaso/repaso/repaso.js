
var estado = 1;

function cambiarCosas(){


    var encabezado = document.getElementById("miEncabezado");
    var encabezado2 = document.getElementById("miEncabezado2");
    var imagen =document.getElementById("miImagen");
    var miInput = document.getElementById("prueba");
    var collection = document.getElementsByTagName("li");    

    if(estado ==1){
        imagen.setAttribute("src", "img/ironMan2.avif");
        imagen.setAttribute("alt", "imagen de Iron Man 2");
        imagen.setAttribute("width", "500px;");
        encabezado.setAttribute("class","fondoRojo");
        encabezado.innerHTML = " HOLA " + miInput.value;
        encabezado2.innerHTML = "HASTA EL LUNES";        
        encabezado.style.color = "white";
        encabezado2.classList.remove("fondoRojo");
        encabezado2.classList.add("fondoVerde");
        for (let i = 0; i < collection.length; i++) {
            collection[i].innerHTML = "CAMBIADO LI " + i;
            collection[i].classList.add("fondoVerde");
            collection[i].classList.remove("fondoRojo");
        }
        
        estado = 2;
    }else{
        imagen.setAttribute("src", "img/ironMan1.webp");
        imagen.setAttribute("alt", "imagen de Iron Man 1");
        imagen.setAttribute("width", "200px;");  
        encabezado.setAttribute("class","fondoVerde");        
        encabezado.innerHTML = " COMO TE LLAMAS? ";
        encabezado.style.color = "black";
        encabezado2.innerHTML = "YA ES VIERNES";
        encabezado2.classList.remove("fondoVerde");
        encabezado2.classList.add("fondoRojo");            
        miInput.value="";
        for (let i = 0; i < collection.length; i++) {
            collection[i].innerHTML = "PRUEBA LI " + i ;
            collection[i].classList.remove("fondoVerde");
            collection[i].classList.add("fondoRojo");
        }        
        estado = 1;
    }
    

}