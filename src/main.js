import './style.css'
import 'maplibre-gl/dist/maplibre-gl.css';
import maplibregl from 'maplibre-gl';
import { PMTiles, Protocol } from 'pmtiles';
import { FullscreenControl, NavigationControl, GeolocateControl, GlobeControl } from 'maplibre-gl';

document.querySelector('#app').innerHTML = `
  <div style="position: relative; height: 100vh; width: 100vw;">
    <div id="map" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;"></div>
    <div style="position: absolute; top: 0; width: 100%; text-align: center; background: rgba(50, 50, 50, 0.5); color: white; padding: 0.2rem; font-size: 0.8rem;">
      <h2 style="margin: 0;">mayflower: free maps are portable</h2>
    </div>
  </div>
`

document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.boxSizing = 'border-box';
document.body.style.width = '100vw';
document.body.style.height = '100vh';
document.body.style.overflow = 'hidden';

const appElement = document.getElementById('app');
appElement.style.margin = '0';
appElement.style.padding = '0';
appElement.style.width = '100vw';
appElement.style.height = '100vh';

const mapContainer = document.getElementById('map');
mapContainer.style.margin = '0';
mapContainer.style.padding = '0';
mapContainer.style.boxSizing = 'border-box';
mapContainer.style.position = 'absolute';
mapContainer.style.top = '0';
mapContainer.style.left = '0';
mapContainer.style.width = '100vw';
mapContainer.style.height = '100vh';

maplibregl.addProtocol('pmtiles', (new Protocol()).tile);
const map = new maplibregl.Map({
  container: 'map', // container ID
  style: '/src/style.json', // adjusted path to local style.json
  center: [0, 0], // starting position [lng, lat]
  zoom: 2, // starting zoom
  hash: true
});

map.addControl(new NavigationControl(), 'top-left');
map.addControl(new GlobeControl(), 'top-left');
map.addControl(new FullscreenControl(), 'top-right');
map.addControl(new GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
  },
  trackUserLocation: true
}), 'top-right');


