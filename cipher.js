window.cipher = {
  encode: (textoInicial, key) => {
      let texto = "";

      for (let i = 0; i < textoInicial.length; i++) {
          let str = textoInicial.charCodeAt(i);
          if (str >= 65 && str <= 90) {
              let code = (str - 65 + key) % 26 + 65;
              texto += String.fromCharCode(code);

          }else{
            texto += String.fromCharCode(str);
          }
      }
      return texto;
  },

  decode: (textoInicial, key) => {
      let texto = "";
      for (let i = 0; i < textoInicial.length; i++) {
          let str = textoInicial.charCodeAt(i);
          if (str >= 65 && str <= 90) {
              let code = (str + 65 - key) % 26 + 65;
              texto += String.fromCharCode(code);
          }else{
            texto += String.fromCharCode(str);
          }
      }
      return texto;
  }
};