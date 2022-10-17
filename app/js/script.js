const btn1=document.querySelector('.btn-1')
const btn2=document.querySelector('.btn-2')
const run=()=>{
 btn1.classList.add('.hidden')
}
const runs=()=>{
  btn2.classList.remove('.hidden')
 }
btn1.addEventListener('click',run)

}
btn2.addEventListener('click',runs)


