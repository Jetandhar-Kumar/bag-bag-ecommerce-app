// Customize the carousel auto-slide interval
var myCarousel = document.querySelector("#myCarousel");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 4000,
  pause: "hover",
  wrap: true,
});

window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  setTimeout(() => {
    loader.classList.add("hide");
  }, 300);
});

// aos animation run
AOS.init();
