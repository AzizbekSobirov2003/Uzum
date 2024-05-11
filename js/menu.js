let katpage = document.querySelector(".katpage");
let iksbtn = document.querySelector(".iksbtn");
let katalogmenu = document.querySelector(".katalogmenu");
let pages = document.querySelector(".pages");

katpage.addEventListener("click", function () {
  katalogmenu.style.display = "flex";
  iksbtn.style.display = "flex";
  katpage.style.display = "none";
  pages.style.display = "none";
});
function buttact() {
  katalogmenu.style.display = "flex";
  iksbtn.style.display = "flex";
  katpage.style.display = "none";
  pages.style.display = "none";
}
iksbtn.addEventListener("click", function () {
  katpage.style.display = "flex";
  katalogmenu.style.display = "none";
  iksbtn.style.display = "none";
  pages.style.display = "flex";
});
