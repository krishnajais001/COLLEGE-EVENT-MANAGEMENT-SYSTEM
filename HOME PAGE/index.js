let openMenu = document.getElementById("open-menu");
let closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", function() {
    closeMenu.style.display = "block";
    openMenu.style.display = "none";
});

closeMenu.addEventListener("click", function() {
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
});



function showMessage(event) {
  event.preventDefault();
  document.getElementById("successMessage").style.display = "block";
}