const btn = document.getElementById("btn-menu");
const contenedorNavbar = document.getElementById("contenedor-navbar");

btn.addEventListener("click", () => {
  contenedorNavbar.classList.toggle("active");
});

contenedorNavbar.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target === contenedorNavbar) {
    contenedorNavbar.classList.remove("active");
  }
});
