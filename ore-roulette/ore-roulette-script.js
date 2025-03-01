document.addEventListener("DOMContentLoaded", function () {
  // Define ore lists for each tier and world
  const ores = {
    // Transcendent
    "Transcendent-World1": ["Pasivium", "Pastelorium", "Azuryl", "Glacielle", "Spristium", "Erodimium", "Quandrium", "Lucidium", "Speatrium", "Sentient Viscera", "Aether", "Trinitium", "Luminatite", "Scarfyte", "Exoretic", "Albinite", "Suncindium", "Cleopatrite", "Xynarium", "Vulkavium"],
    "Transcendent-Subworld1": ["Lunar Neomandelite", "Soundstrocity", "Lunar Aurora", "Lunar Trinitium", "Illuminyx", "Vaporwave Pulsar", "Orb of Discontent", "Σ", "the unfunny", "CHICKEN Crystal", "the funny"],
    "Transcendent-World2": ["Plasmonium", "Stazenium", "Coselnix", "Heart of the Frosted", "Catastormite", "Contravexium", "Spiritian", "Twilight Mist", "Unsteady Filaments", "Rigel", "Galactic Rupture", "Icarus", "Andromidium", "Magicis Floreat", "NOO S-Sing. T1"],
    "Transcendent-Aesteria": ["Plasmitan", "Panselinos", "Puppet Master", "Lovessence", "Sentimentium", "Exsanguinatia", "Arachnoxium", "Oculatum", "Spiritbound Tomb", "The All-Seeing", "Nightmare Complex", "Feux Follets", "Glacial Monolith", "Glaceiaflux", "The Express", "Toyblast", "Luxe", "Sandstorm", "Sunlypse", "Nautitan", "Swirlpool", "Spectrus", "Praefectus", "Hollowed", "Trudgium", "Corerupted", "Aphantasia", "Apparition", "North Star", "Behemoth Snowflake", "Dynafrost"],
    "Transcendent-Lucernia": ["Xuě", "Snowglobe III", "Froidure", "Antlerice", "Chandelabra", "Ornaswirl"],

    // Enigmatic
    "Enigmatic-World1": ["Gradience", "Vaporwave Crystal", "Cybernetium", "Bulbalescense", "Runealith", "Candilium", "Polarium", "Eclipsicle", "Inkonium", "Ravenmare", "Elementium", "Musereign", "Magnetyx", "Glitzar", "Dyronsinite", "Gargantium", "Ω", "Elbrus' Pride"],
    "Enigmatic-Subworld1": ["Flare of Transcendence", "Lunar Vitriol", "Lunar Ω", "Surrenial", "RGB Pulsar", "Lunar Quasar V", "Lunar Aether", "SHOWER CRYSTAL", "garlic bread crystal"],
    "Enigmatic-World2": ["Continuum Rift", "Terminus", "Placongela", "Frostrainium", "Neomandelite", "Vitriol", "Celestivian", "Unearthly Cubes", "Coronal Flare", "Gravitaticor", "Voyanesia", "Obliveracy"],
    "Enigmatic-Aesteria": ["Thalassus", "Phantomalgamation", "Amare", "Albuca Spiralis", "Exospinel", "Ectoplasmado", "Soulshade", "Poltergeist", "Cryonstelar", "Divinis", "Gelidoluar", "Yuletide Star", "Sunflower", "Lux Aestiva", "The Odyssey", "Frutiflux", "Velrathis", "Celestival", "The Flying Dutchman", "Lucifyx", "Umbrasmare",  "Noxilenciosa", "The North Pole"],
    "Enigmatic-Lucernia": ["Crystalia", "Tsukilunica", "Borealiheim", "Frostress", "Polaris", "Cryoscope", "Algifica", "Angelicus", "Verdafrost"],

    // Unfathomable
    "Unfathomable-World1": ["Endozivite", "Inclemetite", "Terratomere", "Illusory Bubblegram", "Nyctophyte", "Idolium", "Scribbal", "Dynamo of Fate"],
    "Unfathomable-Subworld1": ["Lunar Voidirinite", "Armageddium", "Lunar Quasar 618", "a flare v2", "Corrodine Pulsar"],
    "Unfathomable-World2": ["The Cylinder", "Caelarius", "Acrimony", "NOO P α", "Quasar 618"],
    "Unfathomable-Aesteria": ["Ephemryst", "Coruscentia", "UNFUN", "Vocarus", "Grimonolith", "Sombermoor", "Frostblossom"],
    "Unfathomable-Lucernia": ["Wishtree", "Yuki Onna", "Cocytus", "Polarctica", "Asminthia", "Wintburg"],

    // Otherworldly
    "Otherworldly-World1": ["Chrysalis"],
    "Otherworldly-Subworld1": ["Epinephrine"],
    "Otherworldly-World2": ["Retina"],
    "Otherworldly-Aesteria": ["Overseer"],

    // Zenith
    "Zenith-World1": ["Zanarchium"],
  };


  // Define cave-exclusive ores for each tier and world
  const caveExclusiveOres = {
    "Transcendent-World1-Cave": ["Ophanim (Gilded Cave)", "Altovite (Frozen Cave)", "Hallowed Prism (Elemental Cave)"],
    "Transcendent-Subworld1-Cave": ["Lunar Andromidium (Interstellar Cave)", "R136a1 (Interstellar Cave)", "Lunar Lawrencium (Radioactive Cave)", "Ascended Flare (Magmatic Cave)", "Lunar Gargantium (Magmatic Cave)"],
    "Transcendent-World2-Cave": ["Lavortia (Luminous Cave)"],
    "Transcendent-Aesteria-Cave": ["Amalton (Soulseek Cave)", "Cursed Flesh (Fractured Cave", "Bathophobia (Fractured Cave)", "Vigilance (Fractured Cave)"],

    "Enigmatic-World1-Cave": ["π (Prismatic Cave)", "Void Reaver (Void Cave)", "Cerlustrium (Frozen Cave)"],
    "Enigmatic-Subworld1-Cave": ["Lunar HR 5171 A (Interstellar Cave)", "Oganesson (Radioactive)", "Acessinite (nil Cave)", "Lunar Coronal Flare (Magmatic Cave)", "Genuinium (nil Cave)", "Fire Crystal (nil Cave)", "Pandorite (nil Cave)", "HD 160529 (Interstellar Cave)"],
    "Enigmatic-World2-Cave": ["Hyperheated Quasar (Gilded Cave)", "Cygnus (Galactic Cave)"],
    "Enigmatic-Aesteria-Cave": ["Heretic's Cage (Soulseek Cave)", "Amorisene (Heartstring Cave)", "Aurora Polaris (Frost Floor Cave)"],

    "Unfathomable-World1-Cave": ["Empress of Light (Geode Cave)"],
    "Unfathomable-Subworld1-Cave": ["Laniakea Supercluster (Interstellar Cave)"],
    "Unfathomable-World2-Cave": ["Exdeus (Unstable Cave)"],

    "Otherworldly-World1-Cave": ["Machina (Divine Cave)"],
    "Otherworldly-Subworld1-Cave": ["NILNAL (nil Cave)"],
    "Otherworldly-World2-Cave": ["Observatorium (Enchanted Cave)"],
  };

  // Helper function to pick a random item from an array
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Roll ore based on selected tiers and worlds
  function rollOre() {
    let oreOptions = [];

    // Combine ore options based on checkboxes
    document.querySelectorAll('.ore-tier:checked').forEach(checkbox => {
      oreOptions.push(...ores[checkbox.value]);
    });

    // Add cave-exclusive ores if enabled
    document.querySelectorAll('.cave-tier:checked').forEach(checkbox => {
      oreOptions.push(...caveExclusiveOres[checkbox.value]);
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
