const nav=document.querySelector('.harm');
const switc=()=>{
 nav.innerHTML='<img src="./app/images/menu-hamburger.svg" alt="">'?  nav.innerHTML='<img src="./app/images/close-bold.svg" alt="">':     nav.innerHTML='<img src="./app/images/menu-hamburger.svg" alt="">'
   
}
nav.addEventListener('click',switc)
