mapboxgl.accessToken = 'pk.eyJ1IjoiZGludTI0IiwiYSI6ImNsM2Z4NXNicTA5a3AzZHQ1cnBqajdrNncifQ.OoncHGFxe7E4otOMC-aQ_w';

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [position.coords.longitude, position.coords.latitude],
            zoom: 14
        });
    });
} else {
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [77.5, 9.5],
        zoom: 7
    });
}

