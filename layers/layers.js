var wms_layers = [];


        var lyr_satelitegooglemaps_0 = new ol.layer.Tile({
            'title': 'satelite googlemaps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lab1_2 = new ol.format.GeoJSON();
var features_lab1_2 = format_lab1_2.readFeatures(json_lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_2.addFeatures(features_lab1_2);
var lyr_lab1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_2, 
                style: style_lab1_2,
                popuplayertitle: 'lab1',
                interactive: true,
                title: '<img src="styles/legend/lab1_2.png" /> lab1'
            });
var format_lab1highway_3 = new ol.format.GeoJSON();
var features_lab1highway_3 = format_lab1highway_3.readFeatures(json_lab1highway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1highway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1highway_3.addFeatures(features_lab1highway_3);
var lyr_lab1highway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1highway_3, 
                style: style_lab1highway_3,
                popuplayertitle: 'lab1 — highway',
                interactive: true,
                title: '<img src="styles/legend/lab1highway_3.png" /> lab1 — highway'
            });
var format_lab1building_4 = new ol.format.GeoJSON();
var features_lab1building_4 = format_lab1building_4.readFeatures(json_lab1building_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1building_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1building_4.addFeatures(features_lab1building_4);
var lyr_lab1building_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1building_4, 
                style: style_lab1building_4,
                popuplayertitle: 'lab1-building',
                interactive: true,
                title: '<img src="styles/legend/lab1building_4.png" /> lab1-building'
            });

lyr_satelitegooglemaps_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_lab1_2.setVisible(true);lyr_lab1highway_3.setVisible(true);lyr_lab1building_4.setVisible(true);
var layersList = [lyr_satelitegooglemaps_0,lyr_OSMStandard_1,lyr_lab1_2,lyr_lab1highway_3,lyr_lab1building_4];
lyr_lab1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_lab1highway_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'material': 'material', 'vehicle': 'vehicle', 'bus_bay': 'bus_bay', 'living_street': 'living_street', 'footway': 'footway', 'turn:lanes': 'turn:lanes', 'proposed': 'proposed', 'service': 'service', 'old_name': 'old_name', 'boundary': 'boundary', 'admin_level': 'admin_level', 'tunnel': 'tunnel', 'postal_code': 'postal_code', 'layer': 'layer', 'bridge': 'bridge', 'tracktype': 'tracktype', 'access': 'access', 'source:maxspeed': 'source:maxspeed', 'short_name': 'short_name', 'ref': 'ref', 'official_name': 'official_name', 'name:fi': 'name:fi', 'name:en': 'name:en', 'name:de': 'name:de', 'comment': 'comment', 'smoothness': 'smoothness', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', 'surface': 'surface', 'oneway': 'oneway', 'noname': 'noname', 'maxspeed': 'maxspeed', 'lit': 'lit', 'lanes': 'lanes', 'foot': 'foot', 'destination': 'destination', });
lyr_lab1building_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'access': 'access', 'construction': 'construction', 'parking': 'parking', 'capacity': 'capacity', 'amenity': 'amenity', 'man_made': 'man_made', 'construction:addr:housenumber': 'construction:addr:housenumber', 'description': 'description', 'office': 'office', 'wheelchair': 'wheelchair', 'operator': 'operator', 'addr:postcode': 'addr:postcode', 'addr:city': 'addr:city', 'generator:source': 'generator:source', 'generator:output:hot_water': 'generator:output:hot_water', 'generator:method': 'generator:method', 'addr:place': 'addr:place', 'building:material': 'building:material', 'name': 'name', 'abandoned': 'abandoned', 'ref': 'ref', 'power': 'power', 'location': 'location', 'ruins': 'ruins', 'type': 'type', 'start_date': 'start_date', 'roof:shape': 'roof:shape', 'height': 'height', 'energy_class': 'energy_class', 'building:levels:underground': 'building:levels:underground', 'building:levels': 'building:levels', 'building:flats': 'building:flats', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'address': 'address', });
lyr_lab1_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_lab1highway_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'material': 'TextEdit', 'vehicle': 'TextEdit', 'bus_bay': 'TextEdit', 'living_street': 'TextEdit', 'footway': 'TextEdit', 'turn:lanes': 'TextEdit', 'proposed': 'TextEdit', 'service': 'TextEdit', 'old_name': 'TextEdit', 'boundary': 'TextEdit', 'admin_level': 'TextEdit', 'tunnel': 'TextEdit', 'postal_code': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tracktype': 'TextEdit', 'access': 'TextEdit', 'source:maxspeed': 'TextEdit', 'short_name': 'TextEdit', 'ref': 'TextEdit', 'official_name': 'TextEdit', 'name:fi': 'TextEdit', 'name:en': 'TextEdit', 'name:de': 'TextEdit', 'comment': 'TextEdit', 'smoothness': 'TextEdit', 'name:etymology:wikidata': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'oneway': 'TextEdit', 'noname': 'TextEdit', 'maxspeed': 'TextEdit', 'lit': 'TextEdit', 'lanes': 'TextEdit', 'foot': 'TextEdit', 'destination': 'TextEdit', });
lyr_lab1building_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'access': 'TextEdit', 'construction': 'TextEdit', 'parking': 'TextEdit', 'capacity': 'TextEdit', 'amenity': 'TextEdit', 'man_made': 'TextEdit', 'construction:addr:housenumber': 'TextEdit', 'description': 'TextEdit', 'office': 'TextEdit', 'wheelchair': 'TextEdit', 'operator': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:city': 'TextEdit', 'generator:source': 'TextEdit', 'generator:output:hot_water': 'TextEdit', 'generator:method': 'TextEdit', 'addr:place': 'TextEdit', 'building:material': 'TextEdit', 'name': 'TextEdit', 'abandoned': 'TextEdit', 'ref': 'TextEdit', 'power': 'TextEdit', 'location': 'TextEdit', 'ruins': 'TextEdit', 'type': 'TextEdit', 'start_date': 'TextEdit', 'roof:shape': 'TextEdit', 'height': 'TextEdit', 'energy_class': 'TextEdit', 'building:levels:underground': 'TextEdit', 'building:levels': 'TextEdit', 'building:flats': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'address': '', });
lyr_lab1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_lab1highway_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'material': 'no label', 'vehicle': 'no label', 'bus_bay': 'no label', 'living_street': 'no label', 'footway': 'no label', 'turn:lanes': 'no label', 'proposed': 'no label', 'service': 'no label', 'old_name': 'no label', 'boundary': 'no label', 'admin_level': 'no label', 'tunnel': 'no label', 'postal_code': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tracktype': 'no label', 'access': 'no label', 'source:maxspeed': 'no label', 'short_name': 'no label', 'ref': 'no label', 'official_name': 'no label', 'name:fi': 'no label', 'name:en': 'no label', 'name:de': 'no label', 'comment': 'no label', 'smoothness': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', 'surface': 'no label', 'oneway': 'no label', 'noname': 'no label', 'maxspeed': 'no label', 'lit': 'no label', 'lanes': 'no label', 'foot': 'no label', 'destination': 'no label', });
lyr_lab1building_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'access': 'no label', 'construction': 'no label', 'parking': 'no label', 'capacity': 'no label', 'amenity': 'no label', 'man_made': 'no label', 'construction:addr:housenumber': 'no label', 'description': 'no label', 'office': 'no label', 'wheelchair': 'no label', 'operator': 'no label', 'addr:postcode': 'no label', 'addr:city': 'no label', 'generator:source': 'no label', 'generator:output:hot_water': 'no label', 'generator:method': 'no label', 'addr:place': 'no label', 'building:material': 'no label', 'name': 'no label', 'abandoned': 'no label', 'ref': 'no label', 'power': 'no label', 'location': 'no label', 'ruins': 'no label', 'type': 'no label', 'start_date': 'no label', 'roof:shape': 'no label', 'height': 'no label', 'energy_class': 'no label', 'building:levels:underground': 'no label', 'building:levels': 'no label', 'building:flats': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'address': 'no label', });
lyr_lab1building_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});