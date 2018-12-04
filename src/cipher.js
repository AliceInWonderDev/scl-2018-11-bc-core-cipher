
  //declaración de las variables y arreglos vacías 
  let code = [];
  let i;
  let str = [];
  let newCode;
window.cipher = {
 encode: (message, offset) => { 
  //for: recorrerá el mensaje
    for(i = 0; i<message.length; i++){
  //convertiremos el message en ASCII y se guarda en un arreglo
  str.push((message.charCodeAt(i))-65+offset%26+65);
  //se convierte el ASCII en letras y se guarda. El push es para agregar
  code.push(String.fromCharCode(str[i]));
    }
  //el método join permite unir elementos de un array en una cadena y los muestra como string
  newCode = code.join("");

  return newCode;
  },
  
 decode: (message, offset) => { 
  //recorramos el mensaje con el for
  for(i = 0; i< message.length; i++){
  //convertimos el mensaje ASCII y recorré el nivel de dificultad, además se guarda en un arreglo
  str.push((message.charCodeAt(i))+65-offset%26-65);
  //Convierte el ASCII en letras y se guarda. El push es para agregar
  code.push(String.fromCharCode(str[i]));
  }
  //coloca el mensaje desencriptado en un recuadro abajo
  newCode = code.join("");
  return newCode;
  }   
};
