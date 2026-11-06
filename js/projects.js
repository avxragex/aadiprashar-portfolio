// Projects array
const PROJECTS = [
    // Artworks
    {
        title: "Amethyst",
        type: "art",
        date: "2025-07-01",
        time: "4 Days",
        status: "finished",
        url: "artwork.html",
        icon: "bi-diamond-fill art-finished",
        thumbnail: "images/artworks/thumbnails/amethyst-thumb.png"
    },
    {
        title: "Ichigo Kurosaki",
        type: "art",
        date: "2026-04-11",
        time: "3 Days",
        status: "working",
        url: "artwork.html",
        icon: "bi-diamond-fill art-finished",
        thumbnail: "images/artworks/thumbnails/ichigo-kurosaki.png"
    },
    {
        title: "Lightning McQueen",
        type: "art",
        date: "2026-02-10",
        time: "4 Days",
        status: "finished",
        url: "artwork.html",
        icon: "bi-diamond-fill art-finished",
        thumbnail: "images/artworks/thumbnails/cars.png"
    },
    {
        title: "Grey Portrait",
        type: "art",
        date: "2024-09-29",
        time: "2 Days",
        status: "finished",
        url: "artwork.html",
        icon: "bi-diamond-fill art-finished",
        thumbnail: "images/artworks/thumbnails/grey-portrait.png"
    },
    {
        title: "Face Colour Study",
        type: "art",
        date: "2025-09-24",
        time: "1 Day",
        status: "working",
        url: "artwork.html",
        icon: "bi-diamond-fill art-finished",
        thumbnail: "images/artworks/thumbnails/face-colour-sketch.png"
    },
    {
        title: "Line Art Study",
        type: "art",
        date: "2025-09-30",
        time: "1 Day",
        status: "working",
        url: "artwork.html",
        icon: "bi-circle-fill art-study",
        thumbnail: "images/artworks/thumbnails/body-sketch.png"
    },
    {
        title: "Portrait Study",
        type: "art",
        date: "2025-06-28",
        time: "1 Day",
        status: "study",
        url: "artwork.html",
        icon: "bi-circle-fill art-study",
        thumbnail: "images/artworks/thumbnails/portrait-sketch.png"
    },
    {
        title: "Portrait Study II",
        type: "art",
        date: "2025-07-06",
        time: "1 Day",
        status: "study",
        url: "artwork.html",
        icon: "bi-circle-fill art-study",
        thumbnail: "images/artworks/thumbnails/portrait-sketch-2.png"
    },
    {
        title: "Portrait Study III",
        type: "art",
        date: "2025-09-27",
        time: "1 Day",
        status: "study",
        url: "artwork.html",
        icon: "bi-circle-fill art-study",
        thumbnail: "images/artworks/thumbnails/portrait-sketch-2.png"
    },

    // Websites
    {
        title: "Mochi Donuts",
        type: "web",
        date: "2026-04-12",
        time: "2 Months",
        status: "finished",
        url: "website.html",
        icon: "bi-diamond website",
        thumbnail: "images/websites/thumbnails/mochi-donuts-thumb.png"
    }

    // Games
]

// Sectors of the different types of work
const SECTORS = {
    art: { start: 0, end: 1/2, name: "Artwork" },
    web: { start: 1/2, end: 4/5, name: "Website" },
    game: { start: 4/5, end: 1, name: "Game" }
}
