const images = document.querySelectorAll(".image");
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

images.forEach((image) => {
  image.addEventListener("click", () => {
    lightbox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.querySelector("img").src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});
