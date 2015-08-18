console.log("Loading mali map");
$(document).ready(function() {
  map = L.map('mali-map', { attributionControl: false });
  map.scrollWheelZoom.disable();
  L.tileLayer($('#crisis-map-url-div').text(), {
    attribution: ' © <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
    maxZoom: 10
  }).addTo(map);

  L.control.attribution({position: 'topright'}).addTo(map);
  map.setView([18, -4], 5);

  drawDistricts(map);
  // c3Sparklines();
});

// function c3Sparklines(){
//   $('.sparkline').each(function() {
//     var th = $(this),
//     data = JSON.parse(th.text());
//     th.text("");
//     th.attr("style", "");

//     var chart = c3.generate({
//       bindto: this,
//       point: {
//         show: false
//       },
//       legend:{
//         show: false
//       },
//       color: {
//           pattern: ['#007ce0']
//       },
//       data: {
//         json: data,
//         keys: {
//           x: 'date',
//           value: ['value']
//         },
//         x: 'x',
//         xFormat: '%b %d, %Y' //'%Y-%m-%dT%H:%M:%S'
//       },
//       axis: {
//         x: {
//           show: false,
//           type: 'timeseries',
//           tick: {
//             format: '%b %d, %Y'
//           }
//         },
//         y: {
//           show: false
//         }
//       },
//       tooltip: {
//         format: {
//           value: d3.format(",")
//         }
//       }
//     });
//     });
// }

function drawDistricts(map){
<<<<<<< HEAD
  var color = ["#e0efdd", "#FEE508", "#E77A24", "#CE1F26", "#680F13"];

  var layers = {
    IPCClass: {
      name: 'Mali Food Security',
      threshold: [ 1, 2, 3, 4, 5],
      values: IPCClass
=======
  var color = ["none","#ffe082", "#ffbd13", "#ff8053", "#ff493d"];

  var layers = {
    totalIDPs: {
      name: 'Number of IDPs per 100,000 inhabitants in 2013',
      threshold: [1, 50, 100, 500],
      values: totalIDPs
>>>>>>> e8ecd53e5847fa92c3c53f484130a4fa62cee532
    }
    // totalCases: {
    //   name: 'Cumulative Cases of Ebola',
    //   threshold: [1, 100, 300, 800],
    //   values: totalCases
    // },
    // totalCasesPerArea: {
    //   name: 'Cumulative Cases per 1000 Sq. km',
    //   threshold: [1, 50, 100, 500],
    //   values: totalCasesPerArea
    // },
    // totalDeathsPerArea: {
    //   name: 'Cumulative Deaths per 1000 Sq. km',
    //   threshold: [1, 25, 50, 200],
    //   values: totalDeathsPerArea
    // },
    // totalCasesPerPop:{
    //   name: 'Cumulative Cases per 100,000 people',
    //   threshold: [0.1, 25, 50, 100],
    //   values: totalCasesPerPop
    // },
    // totalDeathsPerPop:{
    //   name: 'Cumulative Deaths per 100,000 people',
    //   threshold: [0.1, 20, 40, 80],
    //   values: totalDeathsPerPop
    // }
  };

  function getStyle(values, threshold){
    function internalGetColor(color, i){
<<<<<<< HEAD
      return {color: color[i], fillColor: color[i], fillOpacity: 0.6, opacity: 0.7, weight: 0.9};
=======
      return {color: color[i], fillColor: color[i], fillOpacity: 0.6, opacity: 0.7, weight: 2};
>>>>>>> e8ecd53e5847fa92c3c53f484130a4fa62cee532
    }
    return function (feature){
      var pcoderef = feature.properties.Pcode;
      if(pcoderef in values) {
<<<<<<< HEAD
        for (var i = 0; i < 5; i++){
          if (values[pcoderef] < threshold[i])
            return internalGetColor(color, i-1);
        }
        return internalGetColor(color, 5);
=======
        for (var i = 0; i < 4; i++){
          if (values[pcoderef] < threshold[i])
            return internalGetColor(color, i);
        }
        return internalGetColor(color, 4);
>>>>>>> e8ecd53e5847fa92c3c53f484130a4fa62cee532
      } else {
          return {"color": "none","opacity":1};
      }
    };

  }

  // var medicalCentresStyle = function(feature){
  //   if(feature.properties.Status == "Functional"){
  //     return   {radius: 5,
  //       fillColor: "#1ebfb3",
  //       color: "#000",
  //       weight: 1,
  //       opacity: 0.8,
  //       fillOpacity: 0.8};
  //   }
  //   else {
  //     return   {radius: 5,
  //       fillColor: "#007ce0",
  //       color: "#000",
  //       weight: 1,
  //       opacity: 0.8,
  //       fillOpacity: 0.8};
  //   }
  // };

//   var medicalCentresLayer = L.geoJson(medicalCentres, {
//     pointToLayer: function (feature, latlng) {
//       return L.circleMarker(latlng,medicalCentresStyle(feature));
//     },
//     onEachFeature: function (feature, layer) {
// //          layer.bindPopup("Centre Name: " + feature.properties["Centre Name"] + "<br />Type: " + feature.properties["Type1"] + "<br />Status: " + feature.properties["Status"] + "<br />Organisation: " + feature.properties["Primary Organisation"]);
//       (function (layer, properties) {
//         // Create a mouseover event
//         layer.on("mouseover", function (e) {
//           if (!L.Browser.ie && !L.Browser.opera) {
//             layer.bringToFront();
//           }
//           var name = feature.properties["Centre Name"];
//           if (name == null)
//             name = "";
//           var type = feature.properties["Type1"];
//           if (type == null)
//             type = "";
//           var status = feature.properties["Status"];
//           if (status == null)
//             status = "";
//           var organisation = feature.properties["Primary Organisation"];
//           if (organisation == null)
//             organisation = "";

//           var message = '<h4>Ebola Medical Centers</h4>' +
//             '<table>' +
//             '<tr><td style="text-align: right;">Center Name: </td><td>&nbsp;&nbsp; <b>' + name + '</b><td></tr>' +
//             '<tr><td style="text-align: right;">Type: </td><td>&nbsp;&nbsp; <b>' + type + '</b><td></tr>' +
//             '<tr><td style="text-align: right;">Status: </td><td>&nbsp;&nbsp; <b>' + status + '</b><td></tr>' +
//             '<tr><td style="text-align: right;">Organisation: </td><td>&nbsp;&nbsp; <b>' + organisation + '</b><td></tr>' +
//             '</table>';
//           info.showOtherMessage(message);
//         });
//         layer.on("mouseout", function (e) {
//           // Start by reverting the style back
//           layer.setStyle(layer.defaultOptions.style({properties: properties}));
//           info.update();
//         });
//       })(layer, feature.properties);
//     }
//   });
//   var extraLayers = {
//     'Ebola Treatment Centres (ETCs)': medicalCentresLayer
//   };

  var info;
  var regularLayers = {};

  $.each(layers, function (idx, val) {
    regularLayers[val['name']] = L.geoJson(regions,{
      style: getStyle(val['values'], val['threshold']),
      onEachFeature: function (feature, layer) {
        // no longer implementing the click function on the layers for now
//          layer.on('click', function (){
//            window.location.href="/group/" + feature.properties.CNTRY_CODE.toLowerCase() + "?sort=metadata_modified+desc"
//          });
        (function(layer, properties) {
          // Create a mouseover event
          layer.on("mouseover", function (e) {
            // Change the style to the highlighted version

            var styleFunction;
            if (layer.defaultOptions == null)
              styleFunction = layer._options.style;
            else
              styleFunction = layer.defaultOptions.style;
            if (styleFunction != undefined) {
              var currentStyle = styleFunction({properties: properties});
              currentStyle['fillOpacity'] = 1;
              currentStyle['opacity'] = 1;
              currentStyle['color'] = '#888888';
              // if (!L.Browser.ie && !L.Browser.opera) {
              //   layer.bringToFront();
              //   for (eLayer in extraLayers)
              //     if (map.hasLayer(extraLayers[eLayer]))
              //       extraLayers[eLayer].bringToFront();
              // }

              layer.setStyle(currentStyle);
            }

            info.update(properties);
          });
          // Create a mouseout event that undoes the mouseover changes
          layer.on("mouseout", function (e) {
            // Start by reverting the style back
            var styleFunction;
            if (layer.defaultOptions == null)
              styleFunction = layer._options.style;
            else
              styleFunction = layer.defaultOptions.style;
            layer.setStyle(styleFunction({properties: properties}));
            info.update();
          });
          // Close the "anonymous" wrapper function, and call it while passing
          // in the variables necessary to make the events work the way we want.
        })(layer, feature.properties);
      }
    });
  });

  info = L.control({position: 'topleft'});

  info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'map-info'); // create a div with a class "info"
    return this._div;
  };

<<<<<<< HEAD

=======
>>>>>>> e8ecd53e5847fa92c3c53f484130a4fa62cee532
  // method that we will use to update the control based on feature properties passed
  info.update = function (props) {
    this._div.innerHTML = '<h4>' + layers[this._layer]['name'] + '</h4>' +  (props ?
      '<table>' +
<<<<<<< HEAD
      '<tr><td style="text-align: left;">Region: </td><td>&nbsp;&nbsp; <b>' + props.CERCLE_NAM + '</b><td></tr>' +
      '<tr><td style="text-align: left;">District: </td><td>&nbsp;&nbsp; <b>' + props.REGION__NA + '</b><td></tr>' +
      '<tr><td style="text-align: left;">IPC Class: </td><td>&nbsp;&nbsp; <b>' + layers[this._layer]['values'][props.Pcode] + '</b><td></tr>' +
      '</table>' +
      '<h6>Affected population: </h6>' +
      '<table>' +
      '<tr>' +
        '<td valign="middle" style="padding-top: 3px"><div class="progress"><div class="progress-bar" style="width:' + Ph1Percent[props.Pcode] + '%;"></div></div>' + '</td>' +
        '<td valign="top" style="text-align: left; padding-left: 5px; color: #e0efdd">' + Ph1Percent[props.Pcode] + '%' + '<background="red">' + ' Minimal' + '</color>' + '</b></td>' +
      '</tr><tr>' +
        '<td valign="middle"  style="padding-top: 3px"><div class="progress"><div class="progress-bar progress-bar-ph2" style="width:' + Ph2[props.Pcode] + '%;"></div></div>' + '</td>' +
        '<td valign="top" style="text-align: left; padding-left: 5px; color: #FEE508">' + Ph2[props.Pcode] + '%' + ' Stressed' + '</b></td>' +
      '</tr><tr>'+
        '<td valign="middle" style="padding-top: 3px"><div class="progress"><div class="progress-bar progress-bar-ph3" style="width:' + Ph3[props.Pcode] + '%;"></div></div>' + '</td>' +
        '<td valign="top" style="text-align: left; padding-left: 5px; color: #E77A24">' + Ph3[props.Pcode] + '%' + ' Crisis' + '</b></td>' +
      '</tr>' +
      '</table>'
      // '<tr><td style="text-align: left;">' + 
      // '<div class="progress"><div class="progress-bar" style="width:' + Ph1Percent[props.Pcode] + '%;"></div></div>' + '</td>' +
      // '<td style="text-align: left;">' + Ph1Percent[props.Pcode] + '%' + ' Minimal' + '</b></td></tr>' +
      // '<div class="progress"><div class="progress-bar progress-bar-ph2" style="width:' + Ph2[props.Pcode] + '%;"></div></div>' + '</td>' +
      // '<td style="text-align: left;">' + Ph2[props.Pcode] + '%' + ' Crisis' + '</b></td></tr>' +
      // '<div class="progress"><div class="progress-bar progress-bar-ph3" style="width:' + Ph3[props.Pcode] + '%;"></div></div>' + '</td>' +
      // '<td style="text-align: left;">' + Ph3[props.Pcode] + '%' + ' Stressed' + '</b></td></tr>' 
=======
      '<tr><td style="text-align: right;">Country: </td><td>&nbsp;&nbsp; <b>' + props.CERCLE_NAM + '</b><td></tr>' +
      '<tr><td style="text-align: right;">District: </td><td>&nbsp;&nbsp; <b>' + props.REGION__NA + '</b><td></tr>' +
      '<tr><td style="text-align: right;">Value: </td><td>&nbsp;&nbsp; <b>' + layers[this._layer]['values'][props.Pcode] + '</b><td></tr>' +
      '</table>'
>>>>>>> e8ecd53e5847fa92c3c53f484130a4fa62cee532
      : 'Hover over a country/district');
  };
  info.showOtherMessage = function (message){
    this._div.innerHTML = message;
  };
  info.updateLayer = function (layer) {
    for (l in layers)
      if (layers[l]['name'] == layer){
        this._layer = l;
        this.update();
        return;
      }
    this.update();
    this._layer = null;
  };

  info.addTo(map);

<<<<<<< HEAD
  var legend = L.control({position: 'bottomright'});
=======
  var legend = L.control({position: 'bottomleft'});
>>>>>>> e8ecd53e5847fa92c3c53f484130a4fa62cee532

  legend.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'map-info legend');
    return this._div;
  };
  legend.update = function (){
    var threshold = layers[this._layer]['threshold'];

<<<<<<< HEAD
 for (var i = 1; i < threshold.length; i++) {
    this._div.innerHTML = '<div><i style="background: #e0efdd"></i> ' + threshold[0] + '</div>';}
     for (var i = 1; i < threshold.length; i++) {
       this._div.innerHTML +=
         '<div><i style="background:' + color[i] + '"></i> ' +
         threshold[i] + '</div>';
     }
  }; 

=======
    this._div.innerHTML = '<div><i style="background: white"></i> 0&ndash;' + threshold[0] + '</div>';
    for (var i = 0; i < threshold.length; i++) {
      this._div.innerHTML +=
        '<div><i style="background:' + color[i+1] + '"></i> ' +
        threshold[i] + (threshold[i + 1] ? '&ndash;' + threshold[i + 1] + '</div>' : '+</div>');
    }
  };
>>>>>>> e8ecd53e5847fa92c3c53f484130a4fa62cee532
  legend.updateLayer = function (layer){
    for (l in layers)
      if (layers[l]['name'] == layer){
        this._layer = l;
        this.update();
        return;
      }

    this.update();
    this._layer = null;
  };
  legend.addTo(map);

  L.control.layers(regularLayers).addTo(map);


  map.on('baselayerchange', function (eventLayer) {
    info.updateLayer(eventLayer.name);
    legend.updateLayer(eventLayer.name);
  });


<<<<<<< HEAD
  var defaultLayer = layers['IPCClass']['name'];
=======
  var defaultLayer = layers['totalIDPs']['name'];
>>>>>>> e8ecd53e5847fa92c3c53f484130a4fa62cee532
  map.addLayer(regularLayers[defaultLayer]);
  info.updateLayer(defaultLayer);
  legend.updateLayer(defaultLayer);
}