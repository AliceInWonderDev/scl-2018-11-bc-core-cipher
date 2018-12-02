//declaración de las variables y arreglos vacías
let message;
let offset;
let string = [];
let code = [];


//función que dice al botón codificar qué debe hacer
function encodeText(){
//con message vamos a guardar el texto ingresado por el usuario
message =   
document.getElementById("textoInicial").value;
//con offset vamos a guardar el número de dificultad
offset =
document.getElementById("key").value;
//for:recorrerá el mensaje
  for(i = 0; i<message.length; i++){
//convertiremos el message en ASCII y se guarda en un arreglo
string.push((message.charCodeAt(i))-65+offset%26+65);
//se convierte el ASCII en letras y se guarda
code.push(String.fromCharCode(string[i]));
  }
//el método join permite unir elementos de un array en una cadena y los muestra
newCode = code.join("");
//coloca el mensaje encriptado en un recuadro
document.getElementById("descifrado").innerHTML = (newCode.toUpperCase());  
}

//Función que decodifica texto
function uncodeText(){
//message: guarda el texto ingresado por el usuario
  message = document.getElementById("textoInicial").value;
//offset: guardamos el número de dificultad
offset = document.getElementById("key").value;
//recorramos el mensaje con el for
for(i = 0; i< message.length; i++){
//convertimos el mensaje ASCII y recorré el nivel de dificultad, además se guarda en un arreglo
string.push((message.charCodeAt(i))+65-offset%26-65);
//Convierte el ASCII en letras y se guarda
code.push(String.fromCharCode(string[i]));
}
//coloca el mensaje desencriptado en un recuadro abajo
newCode = code.join("");
  document.getElementById("descifrado").innerHTML = (newCode.toUpperCase());
}