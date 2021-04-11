import React from 'react'
import styled from 'styled-components'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapView({ Latitude, Longitude }) {
    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoiZ29rdWxrcml6IiwiYSI6ImNrbmNyMGNtbzIxeHAycG1sbDZ5MjFsaWgifQ.aZMLqSkWO1l3w5ybutDZBQ'
    });

    const coordinates = [Latitude, Longitude]
    return (
        <MapViewContainer>
            <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '100%',
                    width: '100%'
                }}
            >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={coordinates} />
                </Layer>
            </Map>
        </MapViewContainer>
    )
}

const MapViewContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  height: 100px;
  width: 90%;
  justify-content: center;
`