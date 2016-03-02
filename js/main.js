
var workLatLng = L.latLng(39.9544446,-75.1498217);


var map = L.map('map', {
    center: workLatLng,
    zoom: 14,
    minZoom: 14
});

L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
}).addTo(map);


//PULSING ICON FOR DVPRC LOCATION //

var dvrpc = L.icon.pulse({
	iconSize: [20,20],
	color: 'red',
	heartbeat: 1
});

var marker = L.marker(workLatLng, {
	icon: dvrpc
}).addTo(map);

marker.bindPopup("<img src='images/dvrpc_logo.png' style='width: 150px; height: 80px;'>");




