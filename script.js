// This function runs when the page loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio website loaded successfully!");

  // Simple interaction example
  const heading = document.querySelector("h1");

  heading.addEventListener("click", () => {
    alert("Thanks for visiting my portfolio!");
  });
});
