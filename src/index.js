import mapboxgl from 'mapbox-gl';
import createMarker from './marker';

mapboxgl.accessToken =
  'pk.eyJ1IjoibWVsaW5kYWFybWJydXN0ZXIiLCJhIjoiY2trZTd6cHVlMDl5YzJwcXNvMWRvOHU4ciJ9.NdVU55Xhn75BzaVNjACSKQ';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

// new mapboxgl.Marker(markerElem).setLngLat([-74.009, 40.705]).addTo(map);

const test = createMarker('hotel', [-74.009, 40.705]);
test.addTo(map);
