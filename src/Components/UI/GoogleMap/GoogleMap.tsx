import React from "react";
import GoogleMapReact from 'google-map-react';

interface ICenter {
    lat: number;
    lng: number;

}
interface IGoogleMapProps {
    center: ICenter;
    zoom: number
}

const GoogleMap: React.FC<IGoogleMapProps> = ({ center, zoom }) => {


    return (
        <div style={{ height: '300px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAet8Mk1nPvOn_AebLE5ZxXoGejOD8tPzA' }}
                defaultCenter={center}
                defaultZoom={zoom}
            />
        </div>
    );
};

export default GoogleMap;