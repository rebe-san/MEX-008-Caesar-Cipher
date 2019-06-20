//Declaracion de variables
const root=document.getElementById("root");//Pagina de Inicio
const menu=document.getElementById("menu");//Pagina con Menu
const startButton=document.getElementById("start-button")//Boton de Inicio
const hide=document.getElementById("hide-button-1");//Boton que lleva a la pagina de cifradp
const discover=document.getElementById("discover-button-1");//Boton que lleva a la pagina de descifradp
const hidePage=document.getElementById("hide-page");//Pagina de cifrado
const discoverPage=document.getElementById("discover-page");//Pagina de Descifrado
const hideButton=document.getElementById("hide-button-2");//Boton para Cifrar
const discoverButton=document.getElementById("discover-button-2");//Boton para Descifrar
const showHideMessagePage=document.getElementById("show-hide-message-page");//Pagina que muestra el mensaje cifrado
const showDiscoverMessagePage=document.getElementById("show-discover-message-page");//Pagina que muestra el mensaje descifrado
const startBackButtonOne=document.getElementById("start-back-button-one");//Boton que lleva a la Pagina de Inicio
const menuBackButtonOne=document.getElementById("menu-back-button-one");//Boton que lleva a la Pagina de Menu
const startBackButtonTwo=document.getElementById("start-back-button-two");//Boton que lleva a la Pagina de Inicio
const menuBackButtonTwo=document.getElementById("menu-back-button-two");//Boton que lleva a la Pagina de Menu
//Declaracion de funciones
//Muestra el Menu
const menuPage = () => {
  menu.classList.remove('disappear');
  root.classList.add('disappear');
}
//Muestra la pagina de cifrado
const showHidePage=()=>{
  hidePage.classList.remove('disappear');
  menu.classList.add('disappear');
}
//Muestra la pagina de descifrado
const showDiscoverPage=()=>{
  discoverPage.classList.remove('disappear');
  menu.classList.add('disappear');
}
//Invoca a la funcion encode
const showHideMessage=()=>{
  showHideMessagePage.classList.remove('disappear');
  hidePage.classList.add('disappear');
  let string=document.getElementById("message-to-hide");//Guarda el valor de la variable string
  let offset=document.getElementById("hide-key");//Guarda el valor de la variable offset
  document.getElementById("hide-message").innerHTML = window.cipher.encode(offset.value,string.value);//muestra el mensaje cifrado
  document.getElementById("message-to-hide").value = ''; //Borra el contenido de la caja de texto
  document.getElementById("hide-key").value='';//Borra el contenido de la caja de texto
}
//Invoca a la funcion decode y muestra el mensaje descifrado
const showDiscoverMessage=()=>{
  showDiscoverMessagePage.classList.remove('disappear');
  discoverPage.classList.add('disappear');
  const string=document.getElementById("message-to-discover");//Guarda el valor de la variable string
  const offset=document.getElementById("discover-key");//Guarda el valor de la variable offset
  document.getElementById("discover-message").innerHTML = window.cipher.decode(offset.value,string.value);//muestra el mensaje descifrado
  document.getElementById("message-to-discover").value='';//Borra el contenido de la caja de texto
  document.getElementById("discover-key").value='';//Borra el contenido de la caja de texto
}
//Regresa al inicio de la Pagina
const beginBack=()=>{
  root.classList.remove('disappear');
  showHideMessagePage.classList.add('disappear');
  showDiscoverMessagePage.classList.add('disappear');
}
//Regresa al Menu
const menuBack=()=>{
  menu.classList.remove('disappear');
  showHideMessagePage.classList.add('disappear');
  showDiscoverMessagePage.classList.add('disappear');
}
//Declaracion de eventos
startButton.addEventListener('click',menuPage);
hide.addEventListener('click',showHidePage);
discover.addEventListener('click',showDiscoverPage);
hideButton.addEventListener('click',showHideMessage);
discoverButton.addEventListener('click',showDiscoverMessage);
startBackButtonOne.addEventListener('click',beginBack);
menuBackButtonOne.addEventListener('click',menuBack);
startBackButtonTwo.addEventListener('click',beginBack);
menuBackButtonTwo.addEventListener('click',menuBack);
