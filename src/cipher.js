window.cipher ={/*esto es un objeto se tiene que crear dos metodos de cifrar y descifrar dentro de este objeto, los metodos son funciones un metodo esta dentro de un objeto*/
  encode:(offset, string)=>{/*Metodo encode(offset,string)*/
    let tamano=string.length;/*Declara y calcula el tamaño de la cadena*/
    let offsetTwo=parseInt(offset);/*Convierte el offset en un numero entero */
    let ascii;/*Declara la variable ascci donde se guardara el codigo ascci del caracter introducido*/
    let ciffer;/*Declara la variable ciffer que es donde se guardara el codigo ascci del caracter cifrado*/
    let ascciEncrypted="";/*Declara la variable ascciEncrypted donde se guarda el caracter cifrado*/
    for (let i=0;i<tamano;i++){/*realiza un ciclo desde o hasta tamano-1*/
      ascii=string.charCodeAt(i);/*Guarda el codigo ascci del caracter con indice i de la cadena introducida*/
      ciffer=(ascii-65+offsetTwo)%26+65;/*formula para el cifrado cesar*/
      ascciEncrypted=ascciEncrypted+String.fromCharCode(ciffer);/*Obtiene los caracteres cifrados, se concatenan para ontener la cadena y no solo un caracter*/
    }
    return ascciEncrypted;
  },

   decode:(offset, string)=>{
   let tamano=string.length;/*Declara y calcula el tamaño de la cadena*/
   let n=parseInt(offset);/*Convierte el offset en un numero entero */
   let ascii;/*Declara la variable ascci donde se guardara el codigo ascci del caracter introducido*/
   let ciffer;/*Declara la variable ciffer que es donde se guardara el codigo ascci del caracter cifrado*/
   let b="";/*Declara la variable b donde se guarda el caracter cifrado*/
   for (let i=0;i<tamano;i++){/*realiza un ciclo desde o hasta tamano-1*/
     /*console.log(i);/*solo para pruebas*/
     ascii=string.charCodeAt(i);/*Guarda el codigo ascci del caracter con indice i de la cadena introducida*/
     /*console.log(ascii);/*solo para pruebas*/
     /*console.log(ascii);/*solo para pruebas*/
     /*console.log(offset);/*solo para pruebas*/
     /*console.log(n);/*solo para pruebas*/
     ciffer=(ascii-65+n);/*formula para el cifrado cesar*/
    /*console.log(ciffer);/*solo para pruebas*/
     b=b+String.fromCharCode(ciffer);/*Obtiene los caracteres cifrados, se concatenan para ontener la cadena y no solo un caracter*/
     }
    /*console.log(b); *solo para pruebas*/
    return b;
    },
};





/*cipher.encode();*/
