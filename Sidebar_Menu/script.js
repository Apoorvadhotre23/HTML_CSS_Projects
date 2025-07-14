// Selecting elements
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".xicon");
const sidebar = document.querySelector(".sidebar-menu");

// Show sidebar
menuIcon.addEventListener("click", () => {
  sidebar.classList.remove("hide");
});

// Hide sidebar
closeIcon.addEventListener("click", () => {
  sidebar.classList.add("hide");
});
