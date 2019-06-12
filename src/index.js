const root=document.getElementById("root");
const menu=document.getElementById("menu");
const startButton=document.getElementById("start-button")
const hide=document.getElementById("hide");
const discover=document.getElementById("discover");
const hidePage=document.getElementById("hide-page");
const discoverPage=document.getElementById("discover-page");
const hideButton=document.getElementById("hide-button");
const discoverButton=document.getElementById("discover-button");
const showHideMessage=document.getElementById("hide-message");
const showDiscoverMessage=document.getElementById("discover-message");


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

const hideMessage=()=>{
  showHideMessage.classList.remove('disappear');
  hidePage.classList.add('disappear');
  const string=document.getElementById("message-to-hide").value;/*Obtiene le valor de la variable string*/
  const offset=document.getElementById("hide-key").value;/*Obtiene le valor de la variable offset*/
  window.cipher.encode(offset,string);/*invoca al metodo que se ecnuntra en window.cipher , hay que escribir la "ruta" hacia donde esta el codigo*/
}

const discoverMessage=()=>{
  showDiscoverMessage.classList.remove('disappear');
  discoverPage.classList.add('disappear');
}

startButton.addEventListener('click',menuPage);
hide.addEventListener('click',showHidePage);
discover.addEventListener('click',showDiscoverPage);
hideButton.addEventListener('click',hideMessage);
discoverButton.addEventListener('click',discoverMessage);
