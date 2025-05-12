// footer.js
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;

    const footer = document.getElementById("mainFooter");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            footer.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(footer);
  })
  .catch((error) => console.error("Footer load error:", error));
