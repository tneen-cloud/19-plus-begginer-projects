const map = document.getElementById('map');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const clearMarkersBtn = document.getElementById('clearMarkers');
let markers = [];

// Simple map implementation (in production, use Google Maps or Leaflet)
function createMarker(x, y) {
    const marker = document.createElement('div');
    marker.className = 'marker';
    marker.style.left = x + 'px';
    marker.style.top = y + 'px';
    marker.addEventListener('click', () => {
        marker.remove();
        markers = markers.filter(m => m !== marker);
    });
    map.appendChild(marker);
    markers.push(marker);
}

map.addEventListener('click', (e) => {
    const rect = map.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    createMarker(x, y);
});

searchBtn.addEventListener('click', () => {
    const location = searchInput.value.trim();
    if (location) {
        alert(`Searching for: ${location}\n(In a real app, this would use a maps API)`);
    }
});

clearMarkersBtn.addEventListener('click', () => {
    markers.forEach(marker => marker.remove());
    markers = [];
});

