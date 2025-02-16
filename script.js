/* 
  Empty arrays for each world.
  You can add your items to these arrays later.
*/

// Pickaxes
const world1Pickaxes   = ["A"];  // World 1
const subworld1Pickaxes = ["A"];  // Subworld 1
const world2Pickaxes   = ["A"];  // World 2
const aesteriaPickaxes = ["A"];  // Aesteria
const lucerniaPickaxes = ["A"];  // Lucernia

// Left-Hand Gears
const world1LeftGears   = ["A"];
const subworld1LeftGears = ["A"];
const world2LeftGears   = ["A"];
const aesteriaLeftGears = ["A"];
const lucerniaLeftGears = ["A"];

// Right-Hand Gears
const world1RightGears   = ["A"];
const subworld1RightGears = ["A"];
const world2RightGears   = ["A"];
const aesteriaRightGears = ["A"];
const lucerniaRightGears = ["A"];

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
      default:
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
      default:
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
      default:
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

// Set up the event listener for the button
document.getElementById("generateButton").addEventListener("click", generateLoadout);
