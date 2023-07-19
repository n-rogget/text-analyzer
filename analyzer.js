const analyzer = {
  getWordCount: (text) => {
    const sinPal = 0
    if (text.length === 0){
      return sinPal
    }
    const palabras = text.split(" ")
    return palabras.length;
  },

  getCharacterCount: (text) => {
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    return text.replace(/\s/g, "").length;  // la s elimina espacios
    
  },
  getAverageWordLength: (text) => {
    const palabras = text.split(" ")
    return text.replace(/\s/g, "").length/palabras.length
    
       
  },
  getNumberCount: (text) => {
    const number = 0;
    if (text.length === 0) {
      return number;
    }
    const num = text.replace(/[^0-9]+/g, "") //busca digitos del 0al9  /g busca en toda la cadena 
    return num
    
  },
  getNumberSum: (text) => {
    const number = 0;
    if (text.length === 0) {
      return number;
    }
    const num = text.replace(/[^0-9]+/g, "") //busca digitos del 0al9  /g busca en toda la cadena 
    return num + num
  },
};

export default analyzer;