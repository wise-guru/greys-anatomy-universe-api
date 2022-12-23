const toggleButton = document.querySelector(".toggle");
const sidebar = document.querySelector(".col-sm-2");
const sidebarContainer = document.querySelector(".sidebar");
const navbarLinks = document.querySelector(".navbar-links");
const closeButton = document.querySelector(".close-btn");
const body = document.body;

function closeNav() {
  sidebar.style.left = "-100%";
}

function openNav() {
  sidebar.style.left = "0";
}

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  sidebar.classList.toggle("active");
  sidebarContainer.classList.toggle("active");
  body.classList.toggle("sidebar");

  if (body.classList.contains("sidebar")) {
    openNav();
  } else {
    closeNav();
  }
});

closeButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  sidebar.classList.toggle("active");
  sidebarContainer.classList.toggle("active");
  body.classList.toggle("sidebar");
  closeNav();
});
