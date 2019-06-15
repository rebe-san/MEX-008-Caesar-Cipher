window.cipher ={//Cipher es objeto se tiene que crear dos metodos de cifrar y descifrar dentro de este objeto, los metodos son funciones que estan dentro de un objeto
  encode:(offset, string)=>{//Metodo encode(offset,string)
    let ascciEncrypted="";//Declara la variable ascciEncrypted donde se guarda el caracter cifrado
    for (let i=0;i<string.length;i++){//realiza un ciclo for desde 0 hasta tamano-1
      let ascci=string.charCodeAt(i);
      let ciffer;
      if(97<=ascci<=122)
      {
        ciffer=(string.charCodeAt(i)-97+parseInt(offset))%26+97;//formula para el cifrado cesar
      }

      else if(65<=ascci<=90)
      {
        ciffer=(string.charCodeAt(i)-65+parseInt(offset))%26+65;//formula para el cifrado cesar
      }

      ascciEncrypted=ascciEncrypted+String.fromCharCode(ciffer);
    }
    return ascciEncrypted;
  },
   decode:(offset, string)=>{//Metodo decode(offset,string)
   let ascciiDecrypted="";//Declara la variable ascciDecrypted donde se guarda el caracter descifrado
   for (let i=0;i<string.length;i++){//realiza un ciclo  for desde o hasta tamano-1
     let ciffer=90-(90-string.charCodeAt(i)+parseInt(offset))%26;//formula para el descifrado cesar
     ascciiDecrypted=ascciiDecrypted+String.fromCharCode(ciffer);
     }
    return ascciiDecrypted;
    },
};
