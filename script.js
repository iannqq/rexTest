const loadouts = [
    "Sniper + SMG",
    "Shotgun + Pistol",
    "AR + Grenades",
    "LMG + Knife",
    "Crossbow + Revolver",
    "Rocket Launcher + Shield"
];

document.getElementById("generate").addEventListener("click", function() {
    const randomLoadout = loadouts[Math.floor(Math.random() * loadouts.length)];
    document.getElementById("loadout").textContent = "Your Loadout: " + randomLoadout;
});
