//función para cambiar páginas
function welcomePage(){
  document.getElementById("welcomeBox").style.display = "none";
  document.getElementById("btnBox").style.display = "block";

};

//función que dice al botón codificar qué debe hacer: traemos el botón con el ID
document.getElementById("encode").addEventListener("click", () => {
  //message: vamos a guardar el texto ingresado por el usuario
  let message = (document.getElementById("textoInicial").value).toUpperCase();
  //con offset vamos a guardar el número de dificultad
  let offset = document.getElementById("key").value;
  offset = parseInt(offset);

  //coloca el mensaje encriptado en un recuadro
  document.getElementById("descifrado").innerHTML = (cipher.encode(message, offset));
}),

//Función que decodifica texto: traemos el boton con el ID
document.getElementById("uncode").addEventListener("click", () => {
  //message: vamos a guardar el texto ingresado por el usuario
  let message = document.getElementById("textoInicial").value.toUpperCase();
  //con offset vamos a guardar el número de dificultad
  let offset = document.getElementById("key").value;
  offset = parseInt(offset);

  //coloca el mensaje encriptado en un recuadro
  document.getElementById("descifrado").innerHTML = (cipher.decode(message, offset));
});

//botón de limpiar
