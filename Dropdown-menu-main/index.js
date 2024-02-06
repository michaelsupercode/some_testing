const btn = document.querySelector("button");
const nav = document.querySelector("nav");
const img = document.querySelector("img");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");

  img.src.includes("./menu.png")
    ? (img.src = "./close.png")
    : (img.src = "./menu.png");
});

