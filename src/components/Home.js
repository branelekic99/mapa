import React, { useState, useEffect } from "react";
import { fromLonLat } from "ol/proj";
import Map from "./map/Map";
import { osm } from "./map/Source";
import { TileLayer, Layers } from "./map/Layers";

const Home = () => {
  const [center, setCenter] = useState([16.98486328125, 44.87728189251396]);
  const [zoom, setZoom] = useState(9);

  return (
    <div>
      <Map center={fromLonLat(center)} zoom={zoom}>
        <Layers>
          <TileLayer source={osm()} zIndex={0} />
        </Layers>
      </Map>
    </div>
  );
};

export default Home;
