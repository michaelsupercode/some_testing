const btn = document.querySelector("button");
const nav = document.querySelector("nav");
const img = document.querySelector("img");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");

  img.src.includes("./menue.png")
  ? (img.src = "./menue.png")
  : (img.src = "./closed.png")

});

