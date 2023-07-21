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
    const textSplit = text.split(' ')
    let suma = 0
    for(let i= 0; i < textSplit.length; i++ ){
      
      if(Number(textSplit[i])){
        suma = suma + 1
      }
    }
    return suma 
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