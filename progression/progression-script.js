document.addEventListener("DOMContentLoaded", function () {
  // Add click event listeners to all toggle headings
  const toggles = document.querySelectorAll(".toggle");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector(".toggle-icon");

      // Toggle content visibility
      content.classList.toggle("active");

      // Rotate the toggle icon
      if (content.classList.contains("active")) {
        icon.style.transform = "rotate(180deg)";
      } else {
        icon.style.transform = "rotate(0deg)";
      }
    });
  });
});
