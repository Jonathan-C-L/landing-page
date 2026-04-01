function showSection(id){
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  // close mobile nav
  document.getElementById("nav-links").classList.remove("open");
}

document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("open");
});
