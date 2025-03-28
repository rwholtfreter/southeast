var wms_layers = [];

var lyr_southeast_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'southeast<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/southeast_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-16746548.094045, 7183136.275800, -13750171.733655, 8777486.173600]
        })
    });

lyr_southeast_0.setVisible(true);
var layersList = [lyr_southeast_0];
