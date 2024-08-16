var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_DrCasil_modified_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Dr.Casil_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DrCasil_modified_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13328064.079309, 1770898.673916, 13359437.476598, 1814648.265265]
                            })
                        });
var format_v4Infanta1_June04_2 = new ol.format.GeoJSON();
var features_v4Infanta1_June04_2 = format_v4Infanta1_June04_2.readFeatures(json_v4Infanta1_June04_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_v4Infanta1_June04_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_v4Infanta1_June04_2.addFeatures(features_v4Infanta1_June04_2);
var lyr_v4Infanta1_June04_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_v4Infanta1_June04_2, 
                style: style_v4Infanta1_June04_2,
                popuplayertitle: "v4 Infanta1_June 04",
                interactive: true,
                title: '<img src="styles/legend/v4Infanta1_June04_2.png" /> v4 Infanta1_June 04'
            });
var format_KMLInfanta21Infanta2_Individual_Lots_Mer2_3 = new ol.format.GeoJSON();
var features_KMLInfanta21Infanta2_Individual_Lots_Mer2_3 = format_KMLInfanta21Infanta2_Individual_Lots_Mer2_3.readFeatures(json_KMLInfanta21Infanta2_Individual_Lots_Mer2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KMLInfanta21Infanta2_Individual_Lots_Mer2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KMLInfanta21Infanta2_Individual_Lots_Mer2_3.addFeatures(features_KMLInfanta21Infanta2_Individual_Lots_Mer2_3);
var lyr_KMLInfanta21Infanta2_Individual_Lots_Mer2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KMLInfanta21Infanta2_Individual_Lots_Mer2_3, 
                style: style_KMLInfanta21Infanta2_Individual_Lots_Mer2_3,
                popuplayertitle: "KML Infanta 2(1) — Infanta2_Individual_Lots_Mer2",
                interactive: true,
                title: '<img src="styles/legend/KMLInfanta21Infanta2_Individual_Lots_Mer2_3.png" /> KML Infanta 2(1) — Infanta2_Individual_Lots_Mer2'
            });
var format_Infanta1_V2_June04reprojected_4 = new ol.format.GeoJSON();
var features_Infanta1_V2_June04reprojected_4 = format_Infanta1_V2_June04reprojected_4.readFeatures(json_Infanta1_V2_June04reprojected_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infanta1_V2_June04reprojected_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infanta1_V2_June04reprojected_4.addFeatures(features_Infanta1_V2_June04reprojected_4);
var lyr_Infanta1_V2_June04reprojected_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infanta1_V2_June04reprojected_4, 
                style: style_Infanta1_V2_June04reprojected_4,
                popuplayertitle: "Infanta1_V2_June04 — reprojected",
                interactive: true,
                title: '<img src="styles/legend/Infanta1_V2_June04reprojected_4.png" /> Infanta1_V2_June04 — reprojected'
            });
var format_Infanta3_Flag_InitialAreaPolyline6B45_5 = new ol.format.GeoJSON();
var features_Infanta3_Flag_InitialAreaPolyline6B45_5 = format_Infanta3_Flag_InitialAreaPolyline6B45_5.readFeatures(json_Infanta3_Flag_InitialAreaPolyline6B45_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infanta3_Flag_InitialAreaPolyline6B45_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infanta3_Flag_InitialAreaPolyline6B45_5.addFeatures(features_Infanta3_Flag_InitialAreaPolyline6B45_5);
var lyr_Infanta3_Flag_InitialAreaPolyline6B45_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infanta3_Flag_InitialAreaPolyline6B45_5, 
                style: style_Infanta3_Flag_InitialAreaPolyline6B45_5,
                popuplayertitle: "Infanta3_Flag_InitialArea — Polyline [6B45]",
                interactive: true,
                title: 'Infanta3_Flag_InitialArea — Polyline [6B45]'
            });
var format_Infanta3_Flag_InitialAreaPolyline6B46_6 = new ol.format.GeoJSON();
var features_Infanta3_Flag_InitialAreaPolyline6B46_6 = format_Infanta3_Flag_InitialAreaPolyline6B46_6.readFeatures(json_Infanta3_Flag_InitialAreaPolyline6B46_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infanta3_Flag_InitialAreaPolyline6B46_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infanta3_Flag_InitialAreaPolyline6B46_6.addFeatures(features_Infanta3_Flag_InitialAreaPolyline6B46_6);
var lyr_Infanta3_Flag_InitialAreaPolyline6B46_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infanta3_Flag_InitialAreaPolyline6B46_6, 
                style: style_Infanta3_Flag_InitialAreaPolyline6B46_6,
                popuplayertitle: "Infanta3_Flag_InitialArea — Polyline [6B46]",
                interactive: true,
                title: 'Infanta3_Flag_InitialArea — Polyline [6B46]'
            });
var format_Infanta3_Flag_InitialAreaPolyline6B47_7 = new ol.format.GeoJSON();
var features_Infanta3_Flag_InitialAreaPolyline6B47_7 = format_Infanta3_Flag_InitialAreaPolyline6B47_7.readFeatures(json_Infanta3_Flag_InitialAreaPolyline6B47_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infanta3_Flag_InitialAreaPolyline6B47_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infanta3_Flag_InitialAreaPolyline6B47_7.addFeatures(features_Infanta3_Flag_InitialAreaPolyline6B47_7);
var lyr_Infanta3_Flag_InitialAreaPolyline6B47_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infanta3_Flag_InitialAreaPolyline6B47_7, 
                style: style_Infanta3_Flag_InitialAreaPolyline6B47_7,
                popuplayertitle: "Infanta3_Flag_InitialArea — Polyline [6B47]",
                interactive: true,
                title: 'Infanta3_Flag_InitialArea — Polyline [6B47]'
            });
var format_PSUFINAL_8 = new ol.format.GeoJSON();
var features_PSUFINAL_8 = format_PSUFINAL_8.readFeatures(json_PSUFINAL_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSUFINAL_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSUFINAL_8.addFeatures(features_PSUFINAL_8);
var lyr_PSUFINAL_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PSUFINAL_8, 
                style: style_PSUFINAL_8,
                popuplayertitle: "PSU FINAL",
                interactive: true,
                title: '<img src="styles/legend/PSUFINAL_8.png" /> PSU FINAL'
            });
var format_HFPDASOL_9 = new ol.format.GeoJSON();
var features_HFPDASOL_9 = format_HFPDASOL_9.readFeatures(json_HFPDASOL_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HFPDASOL_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HFPDASOL_9.addFeatures(features_HFPDASOL_9);
var lyr_HFPDASOL_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HFPDASOL_9, 
                style: style_HFPDASOL_9,
                popuplayertitle: "HFP-DASOL",
                interactive: true,
                title: '<img src="styles/legend/HFPDASOL_9.png" /> HFP-DASOL'
            });
var format_HFPInfanta2Expansiondasolexpansion_towards_infanta_2_10 = new ol.format.GeoJSON();
var features_HFPInfanta2Expansiondasolexpansion_towards_infanta_2_10 = format_HFPInfanta2Expansiondasolexpansion_towards_infanta_2_10.readFeatures(json_HFPInfanta2Expansiondasolexpansion_towards_infanta_2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HFPInfanta2Expansiondasolexpansion_towards_infanta_2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HFPInfanta2Expansiondasolexpansion_towards_infanta_2_10.addFeatures(features_HFPInfanta2Expansiondasolexpansion_towards_infanta_2_10);
var lyr_HFPInfanta2Expansiondasolexpansion_towards_infanta_2_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HFPInfanta2Expansiondasolexpansion_towards_infanta_2_10, 
                style: style_HFPInfanta2Expansiondasolexpansion_towards_infanta_2_10,
                popuplayertitle: "HFP-Infanta 2 Expansion — dasolexpansion_towards_infanta_2",
                interactive: true,
                title: 'HFP-Infanta 2 Expansion — dasolexpansion_towards_infanta_2'
            });
var format_BD1_11 = new ol.format.GeoJSON();
var features_BD1_11 = format_BD1_11.readFeatures(json_BD1_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BD1_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BD1_11.addFeatures(features_BD1_11);
var lyr_BD1_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BD1_11, 
                style: style_BD1_11,
                popuplayertitle: "BD1",
                interactive: true,
                title: '<img src="styles/legend/BD1_11.png" /> BD1'
            });
var format_BURGOSDASOL1bd1_12 = new ol.format.GeoJSON();
var features_BURGOSDASOL1bd1_12 = format_BURGOSDASOL1bd1_12.readFeatures(json_BURGOSDASOL1bd1_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BURGOSDASOL1bd1_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BURGOSDASOL1bd1_12.addFeatures(features_BURGOSDASOL1bd1_12);
var lyr_BURGOSDASOL1bd1_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BURGOSDASOL1bd1_12, 
                style: style_BURGOSDASOL1bd1_12,
                popuplayertitle: "BURGOS DASOL - 1 — bd1",
                interactive: true,
                title: 'BURGOS DASOL - 1 — bd1'
            });
var format_Braggy_13 = new ol.format.GeoJSON();
var features_Braggy_13 = format_Braggy_13.readFeatures(json_Braggy_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Braggy_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Braggy_13.addFeatures(features_Braggy_13);
var lyr_Braggy_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Braggy_13, 
                style: style_Braggy_13,
                popuplayertitle: "Braggy",
                interactive: true,
                title: '<img src="styles/legend/Braggy_13.png" /> Braggy'
            });
var format_DASOL5_14 = new ol.format.GeoJSON();
var features_DASOL5_14 = format_DASOL5_14.readFeatures(json_DASOL5_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DASOL5_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DASOL5_14.addFeatures(features_DASOL5_14);
var lyr_DASOL5_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DASOL5_14, 
                style: style_DASOL5_14,
                popuplayertitle: "DASOL 5",
                interactive: true,
                title: '<img src="styles/legend/DASOL5_14.png" /> DASOL 5'
            });
var format_Dasoland_15 = new ol.format.GeoJSON();
var features_Dasoland_15 = format_Dasoland_15.readFeatures(json_Dasoland_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dasoland_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dasoland_15.addFeatures(features_Dasoland_15);
var lyr_Dasoland_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dasoland_15, 
                style: style_Dasoland_15,
                popuplayertitle: "Dasoland",
                interactive: true,
                title: '<img src="styles/legend/Dasoland_15.png" /> Dasoland'
            });
var format_AMALBALAN_ALILAOPOTENTIALAREA_16 = new ol.format.GeoJSON();
var features_AMALBALAN_ALILAOPOTENTIALAREA_16 = format_AMALBALAN_ALILAOPOTENTIALAREA_16.readFeatures(json_AMALBALAN_ALILAOPOTENTIALAREA_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMALBALAN_ALILAOPOTENTIALAREA_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMALBALAN_ALILAOPOTENTIALAREA_16.addFeatures(features_AMALBALAN_ALILAOPOTENTIALAREA_16);
var lyr_AMALBALAN_ALILAOPOTENTIALAREA_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AMALBALAN_ALILAOPOTENTIALAREA_16, 
                style: style_AMALBALAN_ALILAOPOTENTIALAREA_16,
                popuplayertitle: "AMALBALAN_ALILAO POTENTIAL AREA",
                interactive: true,
                title: '<img src="styles/legend/AMALBALAN_ALILAOPOTENTIALAREA_16.png" /> AMALBALAN_ALILAO POTENTIAL AREA'
            });
var format_Burgos1prs92_consolidation_boundary_17 = new ol.format.GeoJSON();
var features_Burgos1prs92_consolidation_boundary_17 = format_Burgos1prs92_consolidation_boundary_17.readFeatures(json_Burgos1prs92_consolidation_boundary_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Burgos1prs92_consolidation_boundary_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Burgos1prs92_consolidation_boundary_17.addFeatures(features_Burgos1prs92_consolidation_boundary_17);
var lyr_Burgos1prs92_consolidation_boundary_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Burgos1prs92_consolidation_boundary_17, 
                style: style_Burgos1prs92_consolidation_boundary_17,
                popuplayertitle: "Burgos1 — prs92_consolidation_boundary",
                interactive: true,
                title: 'Burgos1 — prs92_consolidation_boundary'
            });
var format_DK1_18 = new ol.format.GeoJSON();
var features_DK1_18 = format_DK1_18.readFeatures(json_DK1_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DK1_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DK1_18.addFeatures(features_DK1_18);
var lyr_DK1_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DK1_18, 
                style: style_DK1_18,
                popuplayertitle: "DK1",
                interactive: true,
                title: '<img src="styles/legend/DK1_18.png" /> DK1'
            });
var format_NGCPGridMap_19 = new ol.format.GeoJSON();
var features_NGCPGridMap_19 = format_NGCPGridMap_19.readFeatures(json_NGCPGridMap_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NGCPGridMap_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NGCPGridMap_19.addFeatures(features_NGCPGridMap_19);
var lyr_NGCPGridMap_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NGCPGridMap_19, 
                style: style_NGCPGridMap_19,
                popuplayertitle: "NGCP Grid Map",
                interactive: true,
                title: 'NGCP Grid Map'
            });
var format_NGCPGridMapsubstations_20 = new ol.format.GeoJSON();
var features_NGCPGridMapsubstations_20 = format_NGCPGridMapsubstations_20.readFeatures(json_NGCPGridMapsubstations_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NGCPGridMapsubstations_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NGCPGridMapsubstations_20.addFeatures(features_NGCPGridMapsubstations_20);
var lyr_NGCPGridMapsubstations_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NGCPGridMapsubstations_20, 
                style: style_NGCPGridMapsubstations_20,
                popuplayertitle: "NGCP Grid Map — substations",
                interactive: true,
                title: 'NGCP Grid Map — substations'
            });
var format_DK_EXPANSION_21 = new ol.format.GeoJSON();
var features_DK_EXPANSION_21 = format_DK_EXPANSION_21.readFeatures(json_DK_EXPANSION_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DK_EXPANSION_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DK_EXPANSION_21.addFeatures(features_DK_EXPANSION_21);
var lyr_DK_EXPANSION_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DK_EXPANSION_21, 
                style: style_DK_EXPANSION_21,
                popuplayertitle: "DK_EXPANSION",
                interactive: true,
                title: '<img src="styles/legend/DK_EXPANSION_21.png" /> DK_EXPANSION'
            });
var format_NGCPGridMaptransmission_lines_22 = new ol.format.GeoJSON();
var features_NGCPGridMaptransmission_lines_22 = format_NGCPGridMaptransmission_lines_22.readFeatures(json_NGCPGridMaptransmission_lines_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NGCPGridMaptransmission_lines_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NGCPGridMaptransmission_lines_22.addFeatures(features_NGCPGridMaptransmission_lines_22);
var lyr_NGCPGridMaptransmission_lines_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NGCPGridMaptransmission_lines_22, 
                style: style_NGCPGridMaptransmission_lines_22,
                popuplayertitle: "NGCP Grid Map — transmission_lines",
                interactive: true,
                title: 'NGCP Grid Map — transmission_lines'
            });
var format_6010_23 = new ol.format.GeoJSON();
var features_6010_23 = format_6010_23.readFeatures(json_6010_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6010_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6010_23.addFeatures(features_6010_23);
var lyr_6010_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6010_23, 
                style: style_6010_23,
                popuplayertitle: "6010",
                interactive: true,
                title: '<img src="styles/legend/6010_23.png" /> 6010'
            });
var group_MALIMPIN = new ol.layer.Group({
                                layers: [lyr_6010_23,],
                                fold: "open",
                                title: "MALIMPIN"});
var group_HAZARD = new ol.layer.Group({
                                layers: [lyr_NGCPGridMaptransmission_lines_22,],
                                fold: "open",
                                title: "HAZARD"});
var group_DK1 = new ol.layer.Group({
                                layers: [lyr_Burgos1prs92_consolidation_boundary_17,lyr_DK1_18,lyr_NGCPGridMap_19,lyr_NGCPGridMapsubstations_20,lyr_DK_EXPANSION_21,],
                                fold: "open",
                                title: "DK 1"});
var group_AMALBALANGROUP = new ol.layer.Group({
                                layers: [lyr_AMALBALAN_ALILAOPOTENTIALAREA_16,],
                                fold: "open",
                                title: "AMALBALAN GROUP"});
var group_LULC = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LULC"});
var group_DASOLAND = new ol.layer.Group({
                                layers: [lyr_Dasoland_15,],
                                fold: "open",
                                title: "DASOLAND"});
var group_REPEATER = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "REPEATER"});
var group_FLAG = new ol.layer.Group({
                                layers: [lyr_DASOL5_14,],
                                fold: "open",
                                title: "FLAG"});
var group_HERMOSA = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "HERMOSA"});
var group_BRAGGY = new ol.layer.Group({
                                layers: [lyr_Braggy_13,],
                                fold: "open",
                                title: "BRAGGY"});
var group_BURGOS = new ol.layer.Group({
                                layers: [lyr_BD1_11,lyr_BURGOSDASOL1bd1_12,],
                                fold: "open",
                                title: "BURGOS"});
var group_HFP = new ol.layer.Group({
                                layers: [lyr_HFPDASOL_9,lyr_HFPInfanta2Expansiondasolexpansion_towards_infanta_2_10,],
                                fold: "open",
                                title: "HFP"});
var group_ExpansionInfanta2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Expansion (Infanta 2)"});
var group_LandTenurialIns = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Land Tenurial Ins"});
var group_PSU = new ol.layer.Group({
                                layers: [lyr_PSUFINAL_8,],
                                fold: "open",
                                title: "PSU"});
var group_INFANTA = new ol.layer.Group({
                                layers: [lyr_v4Infanta1_June04_2,lyr_KMLInfanta21Infanta2_Individual_Lots_Mer2_3,lyr_Infanta1_V2_June04reprojected_4,lyr_Infanta3_Flag_InitialAreaPolyline6B45_5,lyr_Infanta3_Flag_InitialAreaPolyline6B46_6,lyr_Infanta3_Flag_InitialAreaPolyline6B47_7,],
                                fold: "open",
                                title: "INFANTA"});
var group_GEOREFERENCE = new ol.layer.Group({
                                layers: [lyr_DrCasil_modified_1,],
                                fold: "open",
                                title: "GEOREFERENCE"});
var group_INFRAMAP = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "INFRA MAP"});
var group_ALLOCATIONMAP = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "ALLOCATION MAP"});
var group_GNVI = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "GNVI"});

lyr_GoogleSatellite_0.setVisible(true);lyr_DrCasil_modified_1.setVisible(true);lyr_v4Infanta1_June04_2.setVisible(true);lyr_KMLInfanta21Infanta2_Individual_Lots_Mer2_3.setVisible(true);lyr_Infanta1_V2_June04reprojected_4.setVisible(true);lyr_Infanta3_Flag_InitialAreaPolyline6B45_5.setVisible(true);lyr_Infanta3_Flag_InitialAreaPolyline6B46_6.setVisible(true);lyr_Infanta3_Flag_InitialAreaPolyline6B47_7.setVisible(true);lyr_PSUFINAL_8.setVisible(true);lyr_HFPDASOL_9.setVisible(true);lyr_HFPInfanta2Expansiondasolexpansion_towards_infanta_2_10.setVisible(true);lyr_BD1_11.setVisible(true);lyr_BURGOSDASOL1bd1_12.setVisible(true);lyr_Braggy_13.setVisible(true);lyr_DASOL5_14.setVisible(true);lyr_Dasoland_15.setVisible(true);lyr_AMALBALAN_ALILAOPOTENTIALAREA_16.setVisible(true);lyr_Burgos1prs92_consolidation_boundary_17.setVisible(true);lyr_DK1_18.setVisible(true);lyr_NGCPGridMap_19.setVisible(true);lyr_NGCPGridMapsubstations_20.setVisible(true);lyr_DK_EXPANSION_21.setVisible(true);lyr_NGCPGridMaptransmission_lines_22.setVisible(true);lyr_6010_23.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_GEOREFERENCE,group_INFANTA,group_PSU,group_HFP,group_BURGOS,group_BRAGGY,group_FLAG,group_DASOLAND,group_AMALBALANGROUP,group_DK1,group_HAZARD,group_MALIMPIN];
lyr_v4Infanta1_June04_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Area': 'Area', 'ID_1': 'ID_1', });
lyr_KMLInfanta21Infanta2_Individual_Lots_Mer2_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_Infanta1_V2_June04reprojected_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_Infanta3_Flag_InitialAreaPolyline6B45_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Infanta3_Flag_InitialAreaPolyline6B46_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Infanta3_Flag_InitialAreaPolyline6B47_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PSUFINAL_8.set('fieldAliases', {'id': 'id', 'ID_1': 'ID_1', });
lyr_HFPDASOL_9.set('fieldAliases', {'id': 'id', 'ID_1': 'ID_1', });
lyr_HFPInfanta2Expansiondasolexpansion_towards_infanta_2_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id': 'id', 'ID_1': 'ID_1', });
lyr_BD1_11.set('fieldAliases', {'id': 'id', 'ID_1': 'ID_1', 'Area': 'Area', });
lyr_BURGOSDASOL1bd1_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id': 'id', 'ID_1': 'ID_1', 'Area': 'Area', });
lyr_Braggy_13.set('fieldAliases', {'id': 'id', 'ID_1': 'ID_1', });
lyr_DASOL5_14.set('fieldAliases', {'id': 'id', 'ID_1': 'ID_1', });
lyr_Dasoland_15.set('fieldAliases', {'id': 'id', 'ID_1': 'ID_1', });
lyr_AMALBALAN_ALILAOPOTENTIALAREA_16.set('fieldAliases', {'id': 'id', 'ID_1': 'ID_1', });
lyr_Burgos1prs92_consolidation_boundary_17.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Entity': 'Entity', 'Proj_Name': 'Proj_Name', 'Area_Has': 'Area_Has', 'Area_sqm': 'Area_sqm', 'ID': 'ID', 'ID_1': 'ID_1', });
lyr_DK1_18.set('fieldAliases', {'id': 'id', 'ID_1': 'ID_1', });
lyr_NGCPGridMap_19.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'power': 'power', 'bay': 'bay', 'owner_wiki': 'owner_wiki', 'owner_wi_1': 'owner_wi_1', 'owner_shor': 'owner_shor', 'cable': 'cable', 'constructi': 'constructi', 'power_supp': 'power_supp', 'disused_vo': 'disused_vo', 'lanes': 'lanes', 'cab': 'cab', 'communicat': 'communicat', 'abandoned_': 'abandoned_', 'not_operat': 'not_operat', 'level': 'level', 'location': 'location', 'ele': 'ele', 'owner': 'owner', 'alt_name': 'alt_name', 'ref_NGCP': 'ref_NGCP', 'line': 'line', 'descriptio': 'descriptio', 'operator_w': 'operator_w', 'operator_1': 'operator_1', 'operator_s': 'operator_s', 'ref': 'ref', 'layer': 'layer', 'frequency': 'frequency', 'circuits': 'circuits', 'operator': 'operator', 'wires': 'wires', 'voltage': 'voltage', 'cables': 'cables', });
lyr_NGCPGridMapsubstations_20.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DK_EXPANSION_21.set('fieldAliases', {'id': 'id', 'ID_1': 'ID_1', });
lyr_NGCPGridMaptransmission_lines_22.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_6010_23.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'ID_1': 'ID_1', });
lyr_v4Infanta1_June04_2.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Area': '', 'ID_1': 'TextEdit', });
lyr_KMLInfanta21Infanta2_Individual_Lots_Mer2_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Infanta1_V2_June04reprojected_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', });
lyr_Infanta3_Flag_InitialAreaPolyline6B45_5.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Infanta3_Flag_InitialAreaPolyline6B46_6.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Infanta3_Flag_InitialAreaPolyline6B47_7.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_PSUFINAL_8.set('fieldImages', {'id': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_HFPDASOL_9.set('fieldImages', {'id': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_HFPInfanta2Expansiondasolexpansion_towards_infanta_2_10.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'id': '', 'ID_1': '', });
lyr_BD1_11.set('fieldImages', {'id': 'TextEdit', 'ID_1': 'TextEdit', 'Area': 'Range', });
lyr_BURGOSDASOL1bd1_12.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'id': '', 'ID_1': '', 'Area': '', });
lyr_Braggy_13.set('fieldImages', {'id': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_DASOL5_14.set('fieldImages', {'id': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_Dasoland_15.set('fieldImages', {'id': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_AMALBALAN_ALILAOPOTENTIALAREA_16.set('fieldImages', {'id': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_Burgos1prs92_consolidation_boundary_17.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Entity': 'TextEdit', 'Proj_Name': 'TextEdit', 'Area_Has': 'TextEdit', 'Area_sqm': 'TextEdit', 'ID': '', 'ID_1': '', });
lyr_DK1_18.set('fieldImages', {'id': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_NGCPGridMap_19.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'power': '', 'bay': '', 'owner_wiki': '', 'owner_wi_1': '', 'owner_shor': '', 'cable': '', 'constructi': '', 'power_supp': '', 'disused_vo': '', 'lanes': '', 'cab': '', 'communicat': '', 'abandoned_': '', 'not_operat': '', 'level': '', 'location': '', 'ele': '', 'owner': '', 'alt_name': '', 'ref_NGCP': '', 'line': '', 'descriptio': '', 'operator_w': '', 'operator_1': '', 'operator_s': '', 'ref': '', 'layer': '', 'frequency': '', 'circuits': '', 'operator': '', 'wires': '', 'voltage': '', 'cables': '', });
lyr_NGCPGridMapsubstations_20.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_DK_EXPANSION_21.set('fieldImages', {'id': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_NGCPGridMaptransmission_lines_22.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_6010_23.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_v4Infanta1_June04_2.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'Area': 'no label', 'ID_1': 'no label', });
lyr_KMLInfanta21Infanta2_Individual_Lots_Mer2_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_Infanta1_V2_June04reprojected_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', });
lyr_Infanta3_Flag_InitialAreaPolyline6B45_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Infanta3_Flag_InitialAreaPolyline6B46_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Infanta3_Flag_InitialAreaPolyline6B47_7.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PSUFINAL_8.set('fieldLabels', {'id': 'no label', 'ID_1': 'no label', });
lyr_HFPDASOL_9.set('fieldLabels', {'id': 'no label', 'ID_1': 'no label', });
lyr_HFPInfanta2Expansiondasolexpansion_towards_infanta_2_10.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'id': 'no label', 'ID_1': 'no label', });
lyr_BD1_11.set('fieldLabels', {'id': 'no label', 'ID_1': 'no label', 'Area': 'no label', });
lyr_BURGOSDASOL1bd1_12.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'id': 'no label', 'ID_1': 'no label', 'Area': 'no label', });
lyr_Braggy_13.set('fieldLabels', {'id': 'no label', 'ID_1': 'no label', });
lyr_DASOL5_14.set('fieldLabels', {'id': 'no label', 'ID_1': 'no label', });
lyr_Dasoland_15.set('fieldLabels', {'id': 'no label', 'ID_1': 'no label', });
lyr_AMALBALAN_ALILAOPOTENTIALAREA_16.set('fieldLabels', {'id': 'no label', 'ID_1': 'no label', });
lyr_Burgos1prs92_consolidation_boundary_17.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Entity': 'no label', 'Proj_Name': 'no label', 'Area_Has': 'no label', 'Area_sqm': 'no label', 'ID': 'no label', 'ID_1': 'no label', });
lyr_DK1_18.set('fieldLabels', {'id': 'no label', 'ID_1': 'no label', });
lyr_NGCPGridMap_19.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'power': 'no label', 'bay': 'no label', 'owner_wiki': 'no label', 'owner_wi_1': 'no label', 'owner_shor': 'no label', 'cable': 'no label', 'constructi': 'no label', 'power_supp': 'no label', 'disused_vo': 'no label', 'lanes': 'no label', 'cab': 'no label', 'communicat': 'no label', 'abandoned_': 'no label', 'not_operat': 'no label', 'level': 'no label', 'location': 'no label', 'ele': 'no label', 'owner': 'no label', 'alt_name': 'no label', 'ref_NGCP': 'no label', 'line': 'no label', 'descriptio': 'no label', 'operator_w': 'no label', 'operator_1': 'no label', 'operator_s': 'no label', 'ref': 'no label', 'layer': 'no label', 'frequency': 'no label', 'circuits': 'no label', 'operator': 'no label', 'wires': 'no label', 'voltage': 'no label', 'cables': 'no label', });
lyr_NGCPGridMapsubstations_20.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DK_EXPANSION_21.set('fieldLabels', {'id': 'no label', 'ID_1': 'no label', });
lyr_NGCPGridMaptransmission_lines_22.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_6010_23.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'ID_1': 'no label', });
lyr_6010_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});