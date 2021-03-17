import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import * as ol from "ol";
import { initialMapInstance } from "../../actions/map";
import "./map.css";

const Map = ({ children, zoom, center }) => {
  const dispatch = useDispatch();
  const mapRef = useRef();
  const [map, setMap] = useState(null);

  useEffect(() => {
    let options = {
      view: new ol.View({ zoom, center }),
      layers: [],
      controls: [],
      overlays: [],
    };
    let mapObject = new ol.Map(options);
    mapObject.setTarget(mapRef.current);

    setMap(mapObject);
    dispatch(initialMapInstance(mapObject));

    return () => mapObject.setTarget(undefined);
  }, []);

  useEffect(() => {
    if (!map) return;

    map.getView().setZoom(zoom);
  }, [zoom]);

  useEffect(() => {
    if (!map) return;

    map.getView().setCenter(center);
  }, [center]);

  return (
    <div ref={mapRef} className="ol-map">
      {children}
    </div>
  );
};

export default Map;
