// Loadout Lists
const pickaxes = ["Default", "Poly Pickaxe", "Miner's Mallet", "Steel Sickle", "Stone Ravager", "Big Slammer", "Darkstone", "Crystalized Pickaxe", "Trinity Claymore", "57 Leaf Clover"];
const leftHandGears = ["Core Frag", "Blazuine Molotov", "Accretium Fireball", "Temporum Timebomb", "Neptunium Nuke", "Combustal Clusterbomb", "Erodimium Bomb", "Suncindium Flashbang", "Luminatite Lantern", "Polarium Tunneller", "The Inktorb"];
const rightHandGears = ["Flashlight", "Jump Coil", "Speed Coil", "Thundarian Coil", "Acceleratium Coil", "Candilium Candle", "Elementonic"];

// Function to generate random loadout
function generateLoadout() {
    const randomPickaxe = pickaxes[Math.floor(Math.random() * pickaxes.length)];
    const randomLeftGear = leftHandGears[Math.floor(Math.random() * leftHandGears.length)];
    const randomRightGear = rightHandGears[Math.floor(Math.random() * rightHandGears.length)];

    document.getElementById("pickaxe").textContent = randomPickaxe;
    document.getElementById("leftGear").textContent = randomLeftGear;
    document.getElementById("rightGear").textContent = randomRightGear;
}

// Event Listener for the button
document.getElementById("generateButton").addEventListener("click", generateLoadout);
