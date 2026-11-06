// Only using artworks
const ARTWORKS = PROJECTS.filter(project => project.type === "art");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const index = ARTWORKS.findIndex(project => project.id === id);
const project = ARTWORKS[index];

// Update all the artwork info
document.querySelector("#piece-number").textContent = "Number " + (index + 1);
document.querySelector("#piece-title").textContent = project.title;
document.querySelector("#piece-status").textContent = project.status;
document.querySelector("#piece-date").textContent = project.date;
document.querySelector("#piece-time").textContent = project.time;
document.querySelector("#piece-description").textContent = project.description;

// Update the image
const image = document.querySelector("#piece-image");
console.log(project.image);
image.src = project.image;
image.alt = project.title;
