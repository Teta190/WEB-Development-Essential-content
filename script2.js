// on the click on the humburger
// show the mobile navigation

function mobileNav() {
  let mobileClick = document.getElementById("mobile_click");
  let showMenu = document.querySelector("nav ul");

  mobileClick.addEventListener("click", () => {
    showMenu.classList.toggle("active");
  });
}
mobileNav();
