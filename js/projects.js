// Projects array
const PROJECTS = [
    // Artworks
    {
        id: "amethyst",
        title: "Amethyst",
        type: "art",
        date: "2025-07-01",
        time: "4 Days",
        status: "finished",
        url: "artwork.html?id=amethyst",
        icon: "bi-diamond-fill art-finished",
        thumbnail: "images/artworks/thumbnails/amethyst.png",
        image: "images/artworks/amethyst.png",
        description: "This was one of my first coloured pieces where I decided to pay thorough attention to colour study, and actually experiment with it. Before this, I typically preferred only sketches, or grayscale rather than fully coloured pieces."
    },
    {
        id: "ichigo",
        title: "Ichigo Kurosaki",
        type: "art",
        date: "2026-04-11",
        time: "3 Days",
        status: "working",
        url: "artwork.html?id=ichigo",
        icon: "bi-diamond-fill art-finished",
        thumbnail: "images/artworks/thumbnails/ichigo-kurosaki.png",
        image: "images/artworks/ichigo-kurosaki.png",
        description: "A redraw of a drawing I made when I was a kid. I was a fan of Bleach and this character, and tried focusing on the proportions, and colour work; both of which I wasn't able to fully portray in my original artwork from years ago."
    },
    {
        id: "mcqueen",
        title: "Lightning McQueen",
        type: "art",
        date: "2026-02-10",
        time: "4 Days",
        status: "finished",
        url: "artwork.html?id=mcqueen",
        icon: "bi-diamond-fill art-finished",
        thumbnail: "images/artworks/thumbnails/cars.png",
        image: "images/artworks/cars.png",
        description: "A quick draw of Lightning McQueen I did, trying to focus on a softer look, experimenting with a colour style I typically don't go for."
    },
    {
        id: "greyscale",
        title: "Grey Portrait",
        type: "art",
        date: "2024-09-29",
        time: "2 Days",
        status: "finished",
        url: "artwork.html?id=greyscale",
        icon: "bi-diamond-fill art-finished",
        thumbnail: "images/artworks/thumbnails/grey-portrait.png",
        image: "images/artworks/grey-portrait.png",
        description: "An old portrait in which I tried very little variation, sticking with a grayish / mundane palette. Really stuck to the proportions are a bit off which becomes clearer to me the more time passes."
    },
    {
        id: "heart",
        title: "Heart",
        type: "art",
        date: "2025-09-24",
        time: "1 Day",
        status: "working",
        url: "artwork.html?id=heart",
        icon: "bi-diamond-fill art-finished",
        thumbnail: "images/artworks/thumbnails/face-colour-sketch.png",
        image: "images/artworks/face-colour-sketch.png",
        description: "A little colour study I did, trying to focus on doing larger but more meaningful strokes, as well as showing more expression through colour. Experimenting with a broader colour palette in digital art."
    },
    {
        id: "teddy",
        title: "Sweet Teddy",
        type: "art",
        date: "2025-09-30",
        time: "1 Day",
        status: "working",
        url: "artwork.html?id=teddy",
        icon: "bi-circle-fill art-study",
        thumbnail: "images/artworks/thumbnails/body-sketch.png",
        image: "images/artworks/body-sketch.png",
        description: "In progress drawing where I focused a lot on the line art, pencil work, and proportions. A lot of my previous works have been very rough with their line art, focusing on shading or colour. With this I attempted to have much cleaner lines than usual, rather than hiding my lines behind shading."
    },
    {
        id: "elizabeth",
        title: "Elizabeth",
        type: "art",
        date: "2025-06-28",
        time: "1 Day",
        status: "study",
        url: "artwork.html?id=elizabeth",
        icon: "bi-circle-fill art-study",
        thumbnail: "images/artworks/thumbnails/portrait-sketch.png",
        image: "images/artworks/portrait-sketch.png",
        description: "An attempt at a realism drawing of a friend. Typically I prefer a more cartoony / anime / character style, but with this piece, I tried focusing on realism rather than stylised. A piece I'm very happy with, especially since it's something out of my comfort zone."
    },
    {
        id: "sketch-one",
        title: "Portrait Sketch I",
        type: "art",
        date: "2025-07-06",
        time: "1 Day",
        status: "study",
        url: "artwork.html?id=sketch-one",
        icon: "bi-circle-fill art-study",
        thumbnail: "images/artworks/thumbnails/portrait-sketch-2.png",
        image: "images/artworks/portrait-sketch-2.png",
        description: "A quick facial expression study I did, trying to focus on the difference a piece can have depending on the expression of the subject."
    },
    {
        id: "sketch-two",
        title: "Portrait Sketch II",
        type: "art",
        date: "2025-09-27",
        time: "1 Day",
        status: "study",
        url: "artwork.html?id=sketch-two",
        icon: "bi-circle-fill art-study",
        thumbnail: "images/artworks/thumbnails/portrait-sketch-3.png",
        image: "images/artworks/portrait-sketch-3.png",
        description: "Quick sketch inspired by Makima (Chainsaw Man) in a different pose, portraying different characters in different poses."
    },

    // Websites
    {
        title: "Mochi Donuts",
        type: "web",
        date: "2026-04-12",
        time: "2 Months",
        status: "finished",
        url: "mochi-donuts.html",
        icon: "bi-diamond website",
        thumbnail: "images/websites/thumbnails/mochi-donuts-thumb.png",
        description: ""
    }

    // Games
]

// Sectors of the different types of work
const SECTORS = {
    art: { start: 0, end: 1/2, name: "Artwork" },
    web: { start: 1/2, end: 4/5, name: "Website" },
    game: { start: 4/5, end: 1, name: "Game" }
}
