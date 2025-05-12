// Show Gallery After 1 Seconds
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const gallery = document.getElementById("gallery");
    gallery.style.display = "block";
    gallery.style.opacity = 0;
    gallery.style.transition = "opacity 1s ease";

    setTimeout(function () {
      gallery.style.opacity = 1;
    }, 50);
  }, 300);
});

window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  setTimeout(() => {
    loader.classList.add("hide");
  }, 300); // Delay for smoothness
});
