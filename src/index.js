/*Declaracion de variables*/
const root=document.getElementById("root");
const menu=document.getElementById("menu");
const startButton=document.getElementById("start-button")
const hide=document.getElementById("hide-button-1");
const discover=document.getElementById("discover-button-1");
const hidePage=document.getElementById("hide-page");
const discoverPage=document.getElementById("discover-page");
const hideButton=document.getElementById("hide-button-2");
const discoverButton=document.getElementById("discover-button-2");
const showHideMessagePage=document.getElementById("show-hide-message-page");
const showDiscoverMessagePage=document.getElementById("show-discover-message-page");
const startBackButton=document.getElementById("start-back-button-one");
const menuBackButton=document.getElementById("menu-back-button-one");
const startBackButtonTwo=document.getElementById("start-back-button-two");
const menuBackButtonTwo=document.getElementById("menu-back-button-two");

/*Declaracion de funciones*/
const menuPage = () => {
  menu.classList.remove('disappear');
  root.classList.add('disappear');
}

const showHidePage=()=>{
  hidePage.classList.remove('disappear');
  menu.classList.add('disappear');
}

const showDiscoverPage=()=>{
  discoverPage.classList.remove('disappear');
  menu.classList.add('disappear');
}
/*Invoca a la funcion encode*/
const showHideMessage=()=>{

  showHideMessagePage.classList.remove('disappear');
  hidePage.classList.add('disappear');
  let string=document.getElementById("message-to-hide");/*Obtiene el valor de la variable string*/
  let offset=document.getElementById("hide-key");/*Obtiene el valor de la variable offset*/
  document.getElementById("hide-message").innerHTML = window.cipher.encode(offset.value,string.value);
  document.getElementById("message-to-hide").value = ''; //borra el contenido de la caja de texto
  document.getElementById("hide-key").value='';
}
/*Invoca a la funcion decode*/
const showDiscoverMessage=()=>{
  showDiscoverMessagePage.classList.remove('disappear');
  discoverPage.classList.add('disappear');
  const string=document.getElementById("message-to-discover");/*Obtiene el valor de la variable string*/
  const offset=document.getElementById("discover-key");/*Obtiene el valor de la variable offset*/
  document.getElementById("discover-message").innerHTML = window.cipher.decode(offset.value,string.value);
  document.getElementById("message-to-discover").value='';
  document.getElementById("discover-key").value='';
}

const beginBack=()=>{
  root.classList.remove('disappear');
  showHideMessagePage.classList.add('disappear');
  showDiscoverMessagePage.classList.add('disappear');
}

const menuBack=()=>{
  menu.classList.remove('disappear');
  showHideMessagePage.classList.add('disappear');
  showDiscoverMessagePage.classList.add('disappear');
}

/*Declaracion de eventos*/
startButton.addEventListener('click',menuPage);
hide.addEventListener('click',showHidePage);
discover.addEventListener('click',showDiscoverPage);
hideButton.addEventListener('click',showHideMessage);
discoverButton.addEventListener('click',showDiscoverMessage);
startBackButton.addEventListener('click',beginBack);
menuBackButton.addEventListener('click',menuBack);
startBackButtonTwo.addEventListener('click',beginBack);
menuBackButtonTwo.addEventListener('click',menuBack);
