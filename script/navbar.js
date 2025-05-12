// navbar.js

fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    // Active Link Highlight
    const links = document.querySelectorAll("#mainNavbar .nav-link");
    links.forEach((link) => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      }
    });

    // Sticky Navbar
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("mainNavbar");
      if (window.scrollY > 50) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    });

    // Theme Toggle
    const themeToggle = document.getElementById("themeToggle");

    // Default System Theme Detection
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.classList.add("dark-mode");
      themeToggle.checked = true;
    }

    // Manual Toggle Switch
    themeToggle.addEventListener("change", () => {
      document.body.classList.toggle("dark-mode");
    });
  })
  .catch((err) => console.error("Navbar load failed:", err));
