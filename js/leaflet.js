document.addEventListener("DOMContentLoaded", () => {
    // Initialize the map and set its view to Kathmandu University's coordinates
    const map = L.map('map').setView([27.6194, 85.5383], 15); // Coordinates for Kathmandu University

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add a marker for Kathmandu University
    L.marker([27.6194, 85.5383]).addTo(map)
        .bindPopup('<b>Kathmandu University</b><br>Dhulikhel, Nepal')
        .openPopup();
});