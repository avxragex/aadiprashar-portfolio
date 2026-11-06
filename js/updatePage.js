// Only using artworks
const ARTWORKS = PROJECTS.filter(project => project.type === "art");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const index = ARTWORKS.findIndex(project => project.id === id);
const project = ARTWORKS[index];

// If artwork is found
if (project) {
    // Update all the artwork info
    document.querySelector("#piece-number").textContent = "Number " + (index + 1);
    document.querySelector("#piece-title").textContent = project.title;
    document.querySelector("#piece-status").textContent = project.status;
    document.querySelector("#piece-date").textContent = project.date;
    document.querySelector("#piece-time").textContent = project.time;
    document.querySelector("#piece-description").textContent = project.description;

    // Update the image
    const image = document.querySelector("#piece-image");
    image.src = project.image;
    image.alt = project.title;

    // Previous and next buttons
    const prev = ARTWORKS[index - 1];
    const next = ARTWORKS[index + 1];

    const prevButton = document.querySelector("#piece-prev");
    const nextButton = document.querySelector("#piece-next");

    // Check if artwork exists
    if (ARTWORKS[index - 1]) {
        prevButton.href = prev.url;
        prevButton.classList.remove("disabled");
    } 
    else {
        // disable button if nothing before
        prevButton.removeAttribute("href");
        prevButton.classList.add("disabled");
    }

    if (ARTWORKS[index + 1]) {
        nextButton.href = next.url;
        nextButton.classList.remove("disabled");
    } 
    else {
        // disable button if nothing in front
        nextButton.removeAttribute("href");
        nextButton.classList.add("disabled");
    }
    
} 

// Error prevention
else {
    document.querySelector("#piece-title").textContent = "Artwork not found";
    document.querySelector("#piece-description").textContent = "Invalid link: Artwork not found. Go back to the orrery.";
}