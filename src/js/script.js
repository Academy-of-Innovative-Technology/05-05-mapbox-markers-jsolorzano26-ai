mapboxgl.accessToken = 'pk.eyJ1IjoianNvbG9yemFubzI2IiwiYSI6ImNtbzFyZzJlbTBtYTEyb3B1dzJ0aWI4cHMifQ.hDQrk0kII7YUCE3jE0NOLQ';


const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-74.5, 40], 
  zoom: 2
});


const locations = [
  [-77.0365, 38.897],
  [-21.9270884, 64.1436456],
  [-74.0060, 40.7128],
  [27.4371, -14.11888]
];


locations.forEach(coord => {
  new mapboxgl.Marker()
    .setLngLat(coord)
    .addTo(map);
});




