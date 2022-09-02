import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import type { NextPage } from "next";
import { useCallback, useRef, useState } from "react";
import Map from "react-map-gl";
import GeocoderControl from "./Geocoder";

type Test = {
  latitude: number;
  longitude: number;
  zoom: number;
};

const Home: NextPage = () => {
  const [viewport, setViewport] = useState<Test>({
    latitude: 35.6762,
    longitude: 139.6503,
    zoom: 8,
  });
  const mapRef = useRef(null);
  const handleViewportChange = useCallback(
    (newViewport: Test) => setViewport(newViewport),
    []
  );

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback(
    (newViewport: Test) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };
      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );
  return (
    <div style={{ height: "100vh" }}>
      <Map
        initialViewState={{
          longitude: -79.4512,
          latitude: 43.6568,
          zoom: 13,
        }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken="pk.eyJ1IjoidGFpc2VpLW0iLCJhIjoiY2w2eWh4NnZlMHB6cDNkbXV1ZDQycTNrMyJ9.ull5IDeDxKcNo7GZQquZdg"
      >
        <GeocoderControl
          mapboxAccessToken="pk.eyJ1IjoidGFpc2VpLW0iLCJhIjoiY2w2eWh4NnZlMHB6cDNkbXV1ZDQycTNrMyJ9.ull5IDeDxKcNo7GZQquZdg"
          position="top-left"
        />
      </Map>
    </div>
  );
};

export default Home;
