// Script for portfolio website
// Role: Software Engineering

// Smooth scrolling for internal links
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Console message (to show JS is working)
console.log("Portfolio loaded successfully");
