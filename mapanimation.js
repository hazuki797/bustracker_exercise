// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops =
  [[-117.919,33.8099], //main sreet stop
  [-117.9219,33.8112], //new orleans stop
  [-117.9185, 33.8148], //toontown stop
  [-117.9158, 33.8125], //tomorrowland stop
];

// TODO: add your own access token
mapboxgl.accessToken =
  'pk.eyJ1IjoiaGF6dWtpNzk3IiwiYSI6ImNsZ29xc2JmYzBzNzEzcW50N2p2Nnl3MHUifQ.h7-gEdI46FG4oyw7VrZqaQ';

// TODO: create the map object using mapboxgl.map() function
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-117.919,33.812],
  zoom: 16,
});

// TODO: add a marker to the map
let marker = new mapboxgl.Marker().setLngLat([-117.919,33.8119]).addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  setTimeout(() => {
    if (counter >= busStops.length) {
      counter = 0; // reset counter to start from the beginning
    }
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 2000);
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move, counter, marker, busStops };
}