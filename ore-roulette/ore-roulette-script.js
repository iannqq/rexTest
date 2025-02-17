document.addEventListener("DOMContentLoaded", function () {
  // Define ore lists for each tier and world
  const ores = {
    // Transcendent
    "Transcendent-World1": ["Transcendent Ore 1 (World 1)", "Transcendent Ore 2 (World 1)"],
    "Transcendent-Subworld1": ["Transcendent Ore 1 (Subworld 1)", "Transcendent Ore 2 (Subworld 1)"],
    "Transcendent-World2": ["Transcendent Ore 1 (World 2)", "Transcendent Ore 2 (World 2)"],
    "Transcendent-Aesteria": ["Transcendent Ore 1 (Aesteria)", "Transcendent Ore 2 (Aesteria)"],
    "Transcendent-Lucernia": ["Transcendent Ore 1 (Lucernia)", "Transcendent Ore 2 (Lucernia)"],

    // Enigmatic
    "Enigmatic-World1": ["Enigmatic Ore 1 (World 1)", "Enigmatic Ore 2 (World 1)"],
    "Enigmatic-Subworld1": ["Enigmatic Ore 1 (Subworld 1)", "Enigmatic Ore 2 (Subworld 1)"],
    "Enigmatic-World2": ["Enigmatic Ore 1 (World 2)", "Enigmatic Ore 2 (World 2)"],
    "Enigmatic-Aesteria": ["Enigmatic Ore 1 (Aesteria)", "Enigmatic Ore 2 (Aesteria)"],
    "Enigmatic-Lucernia": ["Enigmatic Ore 1 (Lucernia)", "Enigmatic Ore 2 (Lucernia)"],

    // Unfathomable
    "Unfathomable-World1": ["Unfathomable Ore 1 (World 1)", "Unfathomable Ore 2 (World 1)"],
    "Unfathomable-Subworld1": ["Unfathomable Ore 1 (Subworld 1)", "Unfathomable Ore 2 (Subworld 1)"],
    "Unfathomable-World2": ["Unfathomable Ore 1 (World 2)", "Unfathomable Ore 2 (World 2)"],
    "Unfathomable-Aesteria": ["Unfathomable Ore 1 (Aesteria)", "Unfathomable Ore 2 (Aesteria)"],
    "Unfathomable-Lucernia": ["Unfathomable Ore 1 (Lucernia)", "Unfathomable Ore 2 (Lucernia)"],

    // Otherworldly
    "Otherworldly-World1": ["Otherworldly Ore 1 (World 1)", "Otherworldly Ore 2 (World 1)"],
    "Otherworldly-Subworld1": ["Otherworldly Ore 1 (Subworld 1)", "Otherworldly Ore 2 (Subworld 1)"],
    "Otherworldly-World2": ["Otherworldly Ore 1 (World 2)", "Otherworldly Ore 2 (World 2)"],
    "Otherworldly-Aesteria": ["Otherworldly Ore 1 (Aesteria)", "Otherworldly Ore 2 (Aesteria)"],
    "Otherworldly-Lucernia": ["Otherworldly Ore 1 (Lucernia)", "Otherworldly Ore 2 (Lucernia)"],

    // Zenith
    "Zenith-World1": ["Zenith Ore 1 (World 1)", "Zenith Ore 2 (World 1)"],
    "Zenith-Subworld1": ["Zenith Ore 1 (Subworld 1)", "Zenith Ore 2 (Subworld 1)"],
    "Zenith-World2": ["Zenith Ore 1 (World 2)", "Zenith Ore 2 (World 2)"],
    "Zenith-Aesteria": ["Zenith Ore 1 (Aesteria)", "Zenith Ore 2 (Aesteria)"],
    "Zenith-Lucernia": ["Zenith Ore 1 (Lucernia)", "Zenith Ore 2 (Lucernia)"],
  };

  // Define cave-exclusive ores for each world
  const caveExclusiveOres = {
    "World1": ["Cave-Exclusive Ore 1 (World 1)", "Cave-Exclusive Ore 2 (World 1)"],
    "Subworld1": ["Cave-Exclusive Ore 1 (Subworld 1)", "Cave-Exclusive Ore 2 (Subworld 1)"],
    "World2": ["Cave-Exclusive Ore 1 (World 2)", "Cave-Exclusive Ore 2 (World 2)"],
    "Aesteria": ["Cave-Exclusive Ore 1 (Aesteria)", "Cave-Exclusive Ore 2 (Aesteria)"],
    "Lucernia": ["Cave-Exclusive Ore 1 (Lucernia)", "Cave-Exclusive Ore 2 (Lucernia)"],
  };

  // Helper function to pick a random item from an array
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Roll ore based on selected tiers and worlds
  function rollOre() {
    let oreOptions = [];
    const enableCaveExclusives = document.getElementById("enableCaveExclusives").checked;

    // Combine ore options based on checkboxes
    document.querySelectorAll('.ore-tier:checked').forEach(checkbox => {
      const [tier, world] = checkbox.value.split("-");
      oreOptions.push(...ores[checkbox.value]);

      // Add cave-exclusive ores if enabled
      if (enableCaveExclusives) {
        oreOptions.push(...caveExclusiveOres[world]);
      }
    });

    // Check if at least one option is selected
    if (oreOptions.length === 0) {
      alert("Please select at least one ore tier and world!");
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
