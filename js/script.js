// toggle menu
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

// --- Dark Mode Logic ---

const modeToggleBtn = document.querySelector(".light-mode");
const modeIcon = document.querySelector(".light-mode-items");
const body = document.body;

const updateIcon = () => {
  if (body.classList.contains("dark-mode")) {
    modeIcon.classList.remove("fa-moon");
    modeIcon.classList.add("fa-sun");
  } else {
    modeIcon.classList.remove("fa-sun");
    modeIcon.classList.add("fa-moon");
  }
};

const toggleDarkMode = () => {
  body.classList.toggle("dark-mode");
  updateIcon();

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark"){
  body.classList.add("dark-mode");
  updateIcon();
}

modeToggleBtn.addEventListener("click", toggleDarkMode);
