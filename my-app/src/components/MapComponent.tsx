import React from 'react'

import { MapContainer, TileLayer, Marker, Popup, Circle, LayerGroup, LayersControl } from 'react-leaflet'

import 'leaflet/dist/leaflet.css';
import customIcon2 from "./images/marker-icon-2x-red.png";
  
const blueOptions = { color: 'blue', fillColor: 'blue' }
    const L = require('leaflet');

    const customMarker = L.icon({
        iconUrl: customIcon2,
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40]
    });

export const MapComponent =  (props: {range:any, root:any, partners: any}) => {
    return(
        <MapContainer center={props.root} zoom={10} scrollWheelZoom={false} style={{height: '500px'}}>
            <LayersControl position="topright">
                <LayersControl.BaseLayer checked name="Colored Map">
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Black and White Map">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
                <LayersControl.Overlay checked name="Source Location">
                    <Marker icon={customMarker} position={props.root}>
                        <Popup>
                            Root
                        </Popup>
                    </Marker>
                </LayersControl.Overlay>
                <LayersControl.Overlay checked name="Radius">
                <LayerGroup>
                <LayerGroup>
                    <Circle
                    center={props.root}
                    pathOptions={blueOptions}
                    radius={props.range*1000}
                    />
                </LayerGroup>
                </LayerGroup>
                </LayersControl.Overlay>
                {props.partners.map(({}, index:any) => (
                <Marker position={[props.partners[index].lat, props.partners[index].lng]} key={index}>
                    <Popup>
                    {[props.partners[index].organization]}
                    </Popup>
                </Marker>
                ))}
            </LayersControl>
        </MapContainer>
    )
}