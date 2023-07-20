const analyzer = {
  getWordCount: (text) => {
    const sinPal = 0
    if (text.length === 0){
      return sinPal
    }
    const palabras = text.trim().split(" ")
    return palabras.length;
  },

  getCharacterCount: (text) => {
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    const sinEsp = text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_'{|}~\s]/g, "")

    return sinEsp.length;  // la s elimina espacios
    
  },
  getAverageWordLength: (text) => {
    const palabras = text.trim().split(" ");
    const promedio = text.replace(/\s/g, "").length/palabras.length;
    const total = promedio.toFixed(2);
    return parseFloat (total)
  },

  getNumberCount: (text) => {
    const num = /\D+/g; 
    const numero = text.match(num)
    if (numero !== isNaN ) {
      return numero.length
    }
    else { 
      return 0
    }
  

    /*const num = text.replace(/[^0-9]+/g, ""); //busca digitos del 0al9  /g busca en toda la cadena 
    const numero = num.trim().split(" ")
    const total = numero.length
    return  parseFloat (total)*/   //split (para dividir) trim,    // "hola   como estas" -> {"hola","  como","estas"}
  
    // {"567", "hola"} Number () -> {567,NaN}
    // filter. !NaN

    
  },

  getNumberSum: (text) => {
    let suma = 0;
    const numero = text.trim().split(" ");
    for (let i=0; i<numero.length; i++){
      const char = numero[i]
      if (!isNaN(char) && char !== "")
        suma = suma + (char*1);
    }
    return suma 

  },
};

export default analyzer;