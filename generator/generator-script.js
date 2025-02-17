document.addEventListener("DOMContentLoaded", function () {
  // Pickaxe Arrays
  const world1Pickaxes = ["Default", "Poly Pickaxe", "Miner's Mallet", "Steel Sickle", "Stone Ravager", "Big Slammer", "Darkstone", "Crystalized Pickaxe", "Trinity Claymore", "57 Leaf Clover"];
  const subworld1Pickaxes = ["Lunar Trinity Claymore", "Nostalgic Axe", "NilAxe"];
  const world2Pickaxes = ["Permafrost Pick", "Poison Pick", "Electraver", "Dimensional Scythe", "Celestial Smasher", "Moon Scepter", "Soul Scythe", "Prism of Chaos"];
  const aesteriaPickaxes = ["Christmas Crusher"];
  const lucerniaPickaxes = ["Shimmering Starsearcher"];

  // Left-Hand Gear Arrays
  const world1LeftGears = ["Core Frag", "Blazuine Molotov", "Accretium Fireball", "Temporum Timebomb", "Neptunium Nuke", "Combustal Clusterbomb", "Erodimium Bomb", "Suncindium Flashbang", "Luminatite Lantern", "Polarium Tunneller", "The Inktorb"];
  const subworld1LeftGears = ["Lutetium Superball", "Electrolyx Stun Grenade", "Vaporwave Vaporizer", "Soundstrocity Subwoofer", "RGB C4"];
  const world2LeftGears = ["Matterbomb", "Shattering Heart", "Spiral Striker", "T1 Terraformer", "Coronal Carpetbomb", "Cube Collector", "Obliveracy Oblitorator", "Subspace Tripmine"];
  const aesteriaLeftGears = ["Sugarcoated Candycrusher", "Coal Smokebomb", "Witch's Brew", "Love Letter", "Phantasm Lantern", "Heartbreaker", "Freeze Frag", "Paradise Parasol"];
  const lucerniaLeftGears = [""];

  // Right-Hand Gear Arrays
  const world1RightGears = ["Flashlight", "Jump Coil", "Speed Coil", "Thundarian Coil", "Acceleratium Coil", "Candilium Candle", "Elementonic"];
  const subworld1RightGears = ["Ambrosia Salad", "Illuminyx Illuminator"];
  const world2RightGears = ["Vitriol Vigor"];
  const aesteriaRightGears = ["Frost Coil", "Winged Coil", "Lustrous Ribbon"];
  const lucerniaRightGears = [""];

  // Helper function to pick a random item from an array
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Generate loadout based on selected options
  function generateLoadout() {
    let pickaxeOptions = [];
    let leftGearOptions = [];
    let rightGearOptions = [];

    // Combine Pickaxe options based on checkboxes
    document.querySelectorAll('.pickaxe-world:checked').forEach(checkbox => {
      switch (checkbox.value) {
        case "World 1":
          pickaxeOptions.push(...world1Pickaxes);
          break;
        case "Subworld 1":
          pickaxeOptions.push(...subworld1Pickaxes);
          break;
        case "World 2":
          pickaxeOptions.push(...world2Pickaxes);
          break;
        case "Aesteria":
          pickaxeOptions.push(...aesteriaPickaxes);
          break;
        case "Lucernia":
          pickaxeOptions.push(...lucerniaPickaxes);
          break;
      }
    });

    // Combine Left-Hand Gear options
    document.querySelectorAll('.leftgear-world:checked').forEach(checkbox => {
      switch (checkbox.value) {
        case "World 1":
          leftGearOptions.push(...world1LeftGears);
          break;
        case "Subworld 1":
          leftGearOptions.push(...subworld1LeftGears);
          break;
        case "World 2":
          leftGearOptions.push(...world2LeftGears);
          break;
        case "Aesteria":
          leftGearOptions.push(...aesteriaLeftGears);
          break;
        case "Lucernia":
          leftGearOptions.push(...lucerniaLeftGears);
          break;
      }
    });

    // Combine Right-Hand Gear options
    document.querySelectorAll('.rightgear-world:checked').forEach(checkbox => {
      switch (checkbox.value) {
        case "World 1":
          rightGearOptions.push(...world1RightGears);
          break;
        case "Subworld 1":
          rightGearOptions.push(...subworld1RightGears);
          break;
        case "World 2":
          rightGearOptions.push(...world2RightGears);
          break;
        case "Aesteria":
          rightGearOptions.push(...aesteriaRightGears);
          break;
        case "Lucernia":
          rightGearOptions.push(...lucerniaRightGears);
          break;
      }
    });

    // Check that each category has at least one option
    if (pickaxeOptions.length === 0 || leftGearOptions.length === 0 || rightGearOptions.length === 0) {
      alert("Please select at least one option in each category!");
      return;
    }

    // Randomly choose an item from each combined list
    const selectedPickaxe = getRandomItem(pickaxeOptions);
    const selectedLeftGear = getRandomItem(leftGearOptions);
    const selectedRightGear = getRandomItem(rightGearOptions);

    // Update the webpage with the results
    document.getElementById("pickaxe").textContent = selectedPickaxe;
    document.getElementById("leftGear").textContent = selectedLeftGear;
    document.getElementById("rightGear").textContent = selectedRightGear;
  }

  // Event listener for Generate Loadout button
  document.getElementById("generateButton").addEventListener("click", generateLoadout);

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
