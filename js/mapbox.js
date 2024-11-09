// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken =
  "pk.eyJ1IjoiZHNjYXJiMjEiLCJhIjoiY2x0cnR3cWlqMGtmZzJucDU2eDR2eWpyMCJ9.nfk8bnbhwkUmEHDhKZv3zA";

// Set bounds to San Francisco, California.
const bounds = [
  [-70.956425, 43.118725], // Southwest coordinates
  [-70.894926, 43.154229], // Northeast coordinates
];

const map = new mapboxgl.Map({
  container: "mapbox", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  zoom: 12, // starting zoom
  maxBounds: bounds, // Set the map's geographical boundaries.
});
