const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");

const btn1Event = () => {
  btn1.classList.toggle("hidden");
  btn2.classList.toggle("hidden");
};
const btn2Event = () => {
  btn1.classList.toggle("hidden");
  btn2.classList.toggle("hidden");
};
btn1.addEventListener("click", btn2Event);

btn2.addEventListener("click", btn1Event);
