// index.js
mapboxgl.accessToken =
  "pk.eyJ1IjoiZHNjYXJiMjEiLCJhIjoiY2x0cnR3cWlqMGtmZzJucDU2eDR2eWpyMCJ9.nfk8bnbhwkUmEHDhKZv3zA";

const map = new mapboxgl.Map({
  container: "map", // container ID
  center: [-74.5, 40], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9, // starting zoom
});
