

// Creating map object
var map = L.map("myMap", {
    center: [0, 0],
    zoom: 2
  });
  
  // Adding tile layer
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(map);
  
var gameSales = "countries.geo.json";
 
function chooseColor(country) {
    switch (country) {
        case "Austria":
            return "yellow";
        case "Belgium":
            return "yellow";
        case "Bulgaria":
            return "yellow";
        case "Croatia":
            return "yellow";
        case "Republic of Cyprus":
            return "yellow";
        case "Czech Republic":
            return "yellow";
        case "Denmark":
            return "yellow";
        case "Estonia":
            return "yellow";
        case "Finland":
            return "yellow";
        case "France":
            return "yellow";
        case "Germany":
            return "yellow";
        case "Greece":
            return "yellow";
        case "Hungary":
            return "yellow";
        case "Ireland":
            return "yellow";
        case "Italy":
            return "yellow";
        case "Latvia":
            return "yellow";
        case "Lithuania":
            return "yellow";
        case "Luxembourg":
            return "yellow";
        case "Malta":
            return "yellow";
        case "Netherlands":
            return "yellow";
        case "Poland":
            return "yellow";
        case "Portugal":
            return "yellow";
        case "Romania":
            return "yellow";
        case "Slovakia":
            return "yellow";
        case "Slovenia":
            return "yellow";
        case "Spain":
            return "yellow";
        case "Sweden":
            return "yellow";
        case "Japan":
            return "blue";
        case "United States of America":
            return "red";
        }
    }


d3.json('countries.geo.json', function(data) {
    console.log(data)
    L.geoJson(data, {

        style: function(feature) {
            return {
                color: "white", 
                fillColor: chooseColor(feature.properties.name),
                fillOpacity: 0.5,
                weight: 1.5
            };
        },

 
        onEachFeature: function (feature, layer) {
            layer.on({
                mouseover: function(event) {
                    layer = event.target;
                    layer.setStyle({
                        fillOpacity:0.9
                    });
                },
                mouseout: function(event) {
                    layer = event.target;
                    layer.setStyle({
                        fillOpacity:0.5
                    });
                },
            });
            layer.bindPopup("<h1>" + feature.properties.name + "</h1> <hr> <h2>" + feature.properties.name + "</h2>");
        }
    }).addTo(map)

    // var legend = L.control({ position: "bottomright" })
    // legend.onAdd = function (map) {
    //     var div = L.DomUtil.create("div", "info legend")
    //     var limits = choroplethLayer.options.limits
    //     var colors = choroplethLayer.options.colors
    //     var labels = []
    //     div.innerHTML = 
    //     limits.forEach(function (limit, index) {
    //         labels.push('<li style="background-color: ' + colors[index] + '"></li>')
    //     })
    //     div.innerHTM+= '<ul>' + labels.join('') + '</ul>'
    //     return div;
    // };
    // legend.addTo(map)
})