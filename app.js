// Wait for the document to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Create a map instance and set the initial view coordinates and zoom level
  var map = L.map('map').setView([-23.53367740372587, -46.85290663444664], 13);


  // Add a tile layer to the map from OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);


  // Create a marker with popup and add it to the map
  var marker = L.marker([-23.53367740372587, -46.85290663444664]).addTo(map);
  marker.bindPopup("Oii, essa é a minha casinha!").openPopup();
});



var greenIcon = L.icon({
    iconUrl: 'https://static.vecteezy.com/system/resources/thumbnails/016/761/881/small/the-dog-smiles-because-he-is-happy-png.png',
 
    iconSize:     [80, 60], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor

  // Wait for the document to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Create a map instance and set the initial view coordinates and zoom level
  var map = L.map('map').setView([-23.548108835744276, -46.82994974607978], 13);


  // Add a tile layer to the map from OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);


  // Create a marker with popup and add it to the map
  var marker = L.marker([-23.548108835744276, -46.82994974607978]).addTo(map);
  marker.bindPopup("O cachorrinho está aqui!").openPopup();
});

var marker2 = L.marker([-23.548167848079338, -46.829939017243134], {icon: greenIcon}).addTo(map);
  marker2.bindPopup("Amada turma de DMD, eu me perdi aqui").openPopup();
