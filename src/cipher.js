window.cipher ={//Cipher es objeto se tiene que crear dos metodos de cifrar y descifrar dentro de este objeto, los metodos son funciones que estan dentro de un objeto
//Metodo encode(offset,string)
  encode:(offset, string)=>{
    let charEncrypted="";
    for (let i=0;i<string.length;i++){
      let cipherCode;
      let asciiCode=string.charCodeAt(i);
      if(97<=asciiCode && asciiCode<=122)
      {
        cipherCode=(string.charCodeAt(i)-97+parseInt(offset))%26+97;
      }

      else if(65<=asciiCode && asciiCode<=90)
      {
        cipherCode=(string.charCodeAt(i)-65+parseInt(offset))%26+65;
      }
      charEncrypted=charEncrypted+String.fromCharCode(cipherCode);
    }
    return charEncrypted;
  },
  //Metodo decode(offset,string)
   decode:(offset, string)=>{
   let charDecrypted="";
   for (let i=0;i<string.length;i++){
     let cipherCode=90-(90-string.charCodeAt(i)+parseInt(offset))%26;
     charDecrypted=charDecrypted+String.fromCharCode(cipherCode);
     }
    return charDecrypted;
    },
};
