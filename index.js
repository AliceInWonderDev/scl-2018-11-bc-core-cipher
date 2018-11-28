//Función para mostrar la segunda página 
/*function next(){
document.getElementById("root").innerHTML = "Instrucciones:<br>Primero elige el nivel de dificultad y luego escribe -Sin signos de puntuación ni ñ- la dirección de tu pŕoxima fiesta ";
document.getElementById("total").style.display ="block";

}
//función para ocultar la primera página

function cifer(){
document.getElementById("total").innerHTML = "hello";
document.getElementById("root").style.display ="block";
}
*/

window.onload = () => {
//obtengo mi div que contendrá mi código js en html
const ingresarContenedor = document.getElementById("ingresar");
    document.getElementById("cifrar").addEventListener("click", (evento) => {
        evento.preventDefault();
let contenedorUno = document.getElementById("ingresar").value;
        console.log(contenedorUno);
let contenedorDos= document.getElementById("resultado").value;
        console.log(contenedorDos);
//elemento div que contenga datos ingresados
const ingresar = document.createElement("div")
contenedorUno.classList.add("ingresarContenedor");
ingresarContenedor.appendChild(ingresar)

//para imprimir datos de usuarios
const contenedorIngresar = document.createElement("p");
contenedorIngresar.classList.add("texto");
let valorContenedor = document.createTextNode(ingresar);

//asignamos padre al valor que ingresó el usuario

contenedorIngresar.appendChild(valorContenedor);
ingresar.appendChild(contenedorIngresar);
    });
}