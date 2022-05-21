mapboxgl.accessToken = 'pk.eyJ1IjoiZGludTI0IiwiYSI6ImNsM2Z4NXNicTA5a3AzZHQ1cnBqajdrNncifQ.OoncHGFxe7E4otOMC-aQ_w';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11',
center: [77.5, 9.5],
zoom: 7
});

map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    })
    );