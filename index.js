//declaración de las variables y arreglos vacías
let message;
let offset;


//función que dice al botón codificar qué debe hacer
function encodeText(){
//message: vamos a guardar el texto ingresado por el usuario
message = document.getElementById("textoInicial").value;
//con offset vamos a guardar el número de dificultad
offset = document.getElementById("key").value;
// resultado
newCode = cipher.encode(message, offset);
//coloca el mensaje encriptado en un recuadro
document.getElementById("descifrado").innerHTML = (newCode.toUpperCase());  
//toma el root del html
root.innerHTML= newCode
};

//Función que decodifica texto
function uncodeText(){
//message: guarda el texto ingresado por el usuario
message = document.getElementById("textoInicial").value;
//offset: guardamos el número de dificultad
offset = document.getElementById("key").value;
// resultado
let newCode = cipher.decode(message, offset);
//coloca el mensaje encriptado en un recuadro
document.getElementById("descifrado").innerHTML = (newCode.toUpperCase());
//toma el root del html
root.innerHTML= newCode
};



/*
//probar que vuelva a cargar el abcdario
for(i=0; i<message.length; i++){
 message.push(fromCharCode(message.length));
}


let primeraParte=(message.charCodeAt(i))-97+offset)
while=(primeraParte < 0){
  primeraParte = primeraParte + 26
}

let segundaParte = primeraParte % 26 +97 */