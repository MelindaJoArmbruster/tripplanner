import mapboxgl from 'mapbox-gl';

function createMarker(type, loc) {
  const markerElem = document.createElement('div');
  markerElem.style.width = '32px';
  markerElem.style.height = '39px';

  if (type.toLowerCase() === 'activity') {
    markerElem.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
    return new mapboxgl.Marker(markerElem).setLngLat(loc);
  } else if (type.toLowerCase() === 'hotel') {
    markerElem.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png )';
    return new mapboxgl.Marker(markerElem).setLngLat(loc);
  } else {
    markerElem.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
    return new mapboxgl.Marker(markerElem).setLngLat(loc);
  }
}

export default createMarker;
