document.addEventListener("DOMContentLoaded", function () {
  // Add click event listeners to all toggle headings
  const toggles = document.querySelectorAll(".toggle");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const content = toggle.nextElementSibling;
      content.classList.toggle("active");
    });
  });
});
