function createMap(earthquake){

    var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.light",
      accessToken: API_KEY
    });

        // Create a baseMaps object to hold the lightmap layer
    var baseMaps = {
      "Light Map": lightmap
    };

    // Create an overlayMaps object to hold the earthwuake layer
    var overlayMaps = {
      "Earthquake Tremors": earthquake
    };

    // Create the map object with options
    var map = L.map("map", {
      zoom: 12,
      layers: [lightmap, earthquake]
    });

    // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(map);
  
}


// Define a markerSize function that will give each city a different radius based on its population


var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

function createMarkers (response){

  var stations = response.features;

  //var placename = stations.properties.place;

  var location = stations.geometry.coordinates;

  //var mag = stations.properties.mag;

  //console.log(mag);

  var QuakeMarkers = [];

  for (i = 0; i < stations.length; i++){

    var station = stations[i];

    var color = "";
    if (station.properties.mag > 5.00) {
      color = "yellow";
    }
    else if (station.properties.mag  > 4.00) {
      color = "orange";
    }
    else if (station.properties.mag  > 3.00) {
      color = "red";
    }
    else {
      color = "blue";
    }
  
    // Add circles to map
    L.circle(location[1], location[0], {
      fillOpacity: 0.75,
      fillColor: color,
      // Adjust radius
      radius: mag * 1500
    }).bindPopup("<h1>" + station.properties.place + "</h1>  <h3>Magnitude: " + station.properties.mag + "</h3>").addTo(myMap);

    QuakeMarkers.push(quakeMarker);

    console.log(QuakeMarkers)
  }

  createMap(L.layerGroup(quakeMarkers));


}

d3.json(url , createMarkers);