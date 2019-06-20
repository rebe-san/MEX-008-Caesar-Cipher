window.cipher ={//Objeto Cipher
//Metodo encode(offset,string)
  encode:(offset, string)=>{
    let charEncrypted="";
    for (let i=0;i<string.length;i++){
      let cipherCode;
      let asciiCode=string.charCodeAt(i);
      if(97<=asciiCode && asciiCode<=122)//Cifra letras minusculas
      {
        cipherCode=(asciiCode-97+parseInt(offset))%26+97;
      }
      else if(65<=asciiCode && asciiCode<=90)//Cifra letras mayusculas
      {
        cipherCode=(asciiCode-65+parseInt(offset))%26+65;
      }
      else if(32<=asciiCode && asciiCode<=64)//Cifra caracteres no alfabeticos
      {
        cipherCode=(asciiCode-32+parseInt(offset))%33+32;
      }
      charEncrypted=charEncrypted+String.fromCharCode(cipherCode);//Cadena Cifrada
    }
    return charEncrypted;//Regresa el resultado obtenido ṕor el metodo encode al invocar la funcion
    },
  //Metodo decode(offset,string)
   decode:(offset, string)=>{
     let charDecrypted="";
     for (let i=0;i<string.length;i++){
       let cipherCode;
       let asciiCode=string.charCodeAt(i);
       if(97<=asciiCode && asciiCode<=122)//Descifra letras minusculas
       {
         cipherCode=122-(122-asciiCode+parseInt(offset))%26;
       }
       else if(65<=asciiCode && asciiCode<=90)//Descifra letras mayusculas
       {
         cipherCode=90-(90-asciiCode+parseInt(offset))%26;
       }
       else if(32<=asciiCode && asciiCode<=64)//Descifra caracteres no alfabeticos
       {
         cipherCode=64-(64-asciiCode+parseInt(offset))%33;
       }
       charDecrypted=charDecrypted+String.fromCharCode(cipherCode);//Cadena Descifrada
     }
     return charDecrypted;//Regresa el resultado obtenido ṕor el metodo decode al invocar la funcion
   },
 };
