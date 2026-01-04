const menuToggle = document.querySelector(".menu-toggle");
const navCon = document.querySelector(".nav-con");

const changeBtn = () => {
  console.log("changed button");
  menuToggle.classList.toggle("is-active");
};

const showNav = () => {
  changeBtn();
  console.log("show navbar");
  navCon.classList.toggle("is-active");
};
menuToggle.addEventListener("click", showNav);
