document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

      // ✅ Active link logic after header is inserted
      const currentPage = window.location.pathname.split("/").pop(); // e.g. about.html
      const navLinks = document.querySelectorAll(".left a");

      navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage || (linkPage === "index.html" && currentPage === "")) {
          link.classList.add("active");
        }
      });
    });
});
