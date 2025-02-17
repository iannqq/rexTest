document.addEventListener("DOMContentLoaded", function () {
  // Define ore lists for each tier
  const transcendentOres = ["Transcendent Ore 1", "Transcendent Ore 2", "Transcendent Ore 3"];
  const enigmaticOres = ["Enigmatic Ore 1", "Enigmatic Ore 2", "Enigmatic Ore 3"];
  const unfathomableOres = ["Unfathomable Ore 1", "Unfathomable Ore 2", "Unfathomable Ore 3"];
  const otherworldlyOres = ["Chrysalis", "Machina (Divine Cave)", "Epinephrine", "NILNAL (nil Cave)", "Retina", "Observatorium (Enchanted Cave)", "Overseer"];
  const zenithOres = ["Zanarchium"];

  // Helper function to pick a random item from an array
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Roll ore based on selected tiers
  function rollOre() {
    let oreOptions = [];

    // Combine ore options based on checkboxes
    document.querySelectorAll('.ore-tier:checked').forEach(checkbox => {
      switch (checkbox.value) {
        case "Transcendent":
          oreOptions.push(...transcendentOres);
          break;
        case "Enigmatic":
          oreOptions.push(...enigmaticOres);
          break;
        case "Unfathomable":
          oreOptions.push(...unfathomableOres);
          break;
        case "Otherworldly":
          oreOptions.push(...otherworldlyOres);
          break;
        case "Zenith":
          oreOptions.push(...zenithOres);
          break;
      }
    });

    // Check if at least one tier is selected
    if (oreOptions.length === 0) {
      alert("Please select at least one ore tier!");
      return;
    }

    // Randomly choose an ore from the combined list
    const selectedOre = getRandomItem(oreOptions);

    // Update the webpage with the result
    document.getElementById("selectedOre").textContent = selectedOre;
  }

  // Event listener for Roll Ore button
  document.getElementById("rollOreButton").addEventListener("click", rollOre);

  // Check All and Uncheck All functionality
  document.getElementById("checkAllButton").addEventListener("click", () => {
    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
      checkbox.checked = true;
    });
  });

  document.getElementById("uncheckAllButton").addEventListener("click", () => {
    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
      checkbox.checked = false;
    });
  });
});
