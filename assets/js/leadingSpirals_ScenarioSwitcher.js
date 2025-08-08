const scenarios = ["Broken", "Warped", "Aligned"];

// Display names for the webpage
const fieldDisplayNames = [
"Particle Density",
"Angular Momentum Transfer",
"Positive Radial Velocity",
"Negative Radial Velocity"
];

// Corresponding filenames
const fieldFileNames = [
"Density",
"Angular_Momentum",
"Radial_Velocity_positive",
"Radial_Velocity_negative"
];

let currentScenarioIndex = 1; // start at Broken
let currentFieldIndex = 1;    // start at Density

function toFileName(text) {
return text;
}

function updateImage() {
const scenarioName = scenarios[currentScenarioIndex];
const fieldDisplay = fieldDisplayNames[currentFieldIndex];
const fieldFile = fieldFileNames[currentFieldIndex];

document.getElementById("fieldName").innerText = fieldDisplay;
document.getElementById("displayImage").src =
    `images/LeadingSpirals/${toFileName(scenarioName)}_${toFileName(fieldFile)}.png`;

updateActiveButton();
}

function setScenario(index) {
currentScenarioIndex = index;
updateImage();
}

function prevField() {
currentFieldIndex = (currentFieldIndex - 1 + fieldDisplayNames.length) % fieldDisplayNames.length;
updateImage();
}

function nextField() {
currentFieldIndex = (currentFieldIndex + 1) % fieldDisplayNames.length;
updateImage();
}

function updateActiveButton() {
const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((btn, i) => {
    btn.classList.toggle("active", i === currentScenarioIndex);
});
}

// Initial display
updateImage();

// Preload all scenario + field combinations
function preloadAllImages() {
    scenarios.forEach(scenario => {
    fieldFileNames.forEach(field => {
        const img = new Image();
        img.src = `images/LeadingSpirals/${toFileName(scenario)}_${toFileName(field)}.png`;
        });
    });
}

// Call preload function
setTimeout(preloadAllImages, 1000);