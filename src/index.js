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

const showHideMessage=()=>{
  showHideMessagePage.classList.remove('disappear');
  hidePage.classList.add('disappear');
  let string=document.getElementById("message-to-hide").value;/*Obtiene le valor de la variable string*/
  let offset=document.getElementById("hide-key").value;/*Obtiene le valor de la variable offset*/
  /*window.cipher.encode(offset,string);//invoca al metodo que se ecnuntra en window.cipher , hay que escribir la "ruta" hacua */
  document.getElementById("hide-message").innerHTML = window.cipher.encode(offset,string);
}

const showDiscoverMessage=()=>{
  showDiscoverMessagePage.classList.remove('disappear');
  discoverPage.classList.add('disappear');
  const string=document.getElementById("message-to-discover").value;/*Obtiene le valor de la variable string*/
  const offset=document.getElementById("discover-key").value;/*Obtiene le valor de la variable offset*/
  /*window.cipher.encode(offset,string);/*invoca al metodo que se ecnuntra en window.cipher , hay que escribir la "ruta" hacua */
  document.getElementById("discover-message").innerHTML = window.cipher.decode(offset,string);
}

/*Declaracion de eventos*/
startButton.addEventListener('click',menuPage);
hide.addEventListener('click',showHidePage);
discover.addEventListener('click',showDiscoverPage);
hideButton.addEventListener('click',showHideMessage);
discoverButton.addEventListener('click',showDiscoverMessage);
