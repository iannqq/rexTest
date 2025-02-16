// Lists for each world and category

// Pickaxes
const W1Pickaxes = ["Default", "Poly Pickaxe", "Miner's Mallet", "Steel Sickle", "Stone Ravager", "Big Slammer", "Darkstone", "Crystalized Pickaxe", "Trinity Claymore", "57 Leaf Clover"];
const W2Pickaxes = ["W2 Pickaxe A", "W2 Pickaxe B", "W2 Pickaxe C"];

// Left-Hand Gears
const W1LeftGears = ["Core Frag", "Blazuine Molotov", "Accretium Fireball", "Temporum Timebomb", "Neptunium Nuke", "Combustal Clusterbomb", "Erodimium Bomb", "Suncindium Flashbang", "Luminatite Lantern", "Polarium Tunneller", "The Inktorb"];
const W2LeftGears = ["W2 Left Gear A", "W2 Left Gear B"];

// Right-Hand Gears
const W1RightGears = ["Flashlight", "Jump Coil", "Speed Coil", "Thundarian Coil", "Acceleratium Coil", "Candilium Candle", "Elementonic"];
const W2RightGears = ["W2 Right Gear A", "W2 Right Gear B"];

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
    if (checkbox.value === "W1") {
      pickaxeOptions.push(...W1Pickaxes);
    }
    if (checkbox.value === "W2") {
      pickaxeOptions.push(...W2Pickaxes);
    }
  });
  
  // Combine Left-Hand Gear options
  document.querySelectorAll('.leftgear-world:checked').forEach(checkbox => {
    if (checkbox.value === "W1") {
      leftGearOptions.push(...W1LeftGears);
    }
    if (checkbox.value === "W2") {
      leftGearOptions.push(...W2LeftGears);
    }
  });
  
  // Combine Right-Hand Gear options
  document.querySelectorAll('.rightgear-world:checked').forEach(checkbox => {
    if (checkbox.value === "W1") {
      rightGearOptions.push(...W1RightGears);
    }
    if (checkbox.value === "W2") {
      rightGearOptions.push(...W2RightGears);
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

// Set up the event listener for the button
document.getElementById("generateButton").addEventListener("click", generateLoadout);
