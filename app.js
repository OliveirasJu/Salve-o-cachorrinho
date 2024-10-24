// Wait for the document to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Create a map instance and set the initial view coordinates and zoom level
  var map = L.map('map').setView([-23.516357107383552, -46.835143207955774], 7);
 
 
  // Add a tile layer to the map from OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
 
  var greenIcon = L.icon({
    iconUrl: 'https://png.pngtree.com/png-clipart/20231103/original/pngtree-miniature-pinscher-black-photo-png-image_13499626.png',
 
    iconSize:     [80, 60], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
 
  // Create a marker with popup and add it to the map
  var marker = L.marker([-23.53363805783715, -46.85279934608026]).addTo(map);
  marker.bindPopup("Oii, essa é a minha casinha!").openPopup();
 
 
  
    // Create a marker with popup and add it to the map
  var marker2 = L.marker([-23.548049823382716, -46.82990683073322], {icon: greenIcon}).addTo(map);
  marker2.bindPopup("Essa é a casinha do meu namorado!").openPopup();
 
});
