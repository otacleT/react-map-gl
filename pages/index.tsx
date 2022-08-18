import type { NextPage } from "next";
import { useCallback, useRef, useState } from "react";
import Geocoder from "react-map-gl-geocoder";
import Map from "react-map-gl";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

type Test = {
  latitude: number;
  longitude: number;
  zoom: number;
};

const Home: NextPage = () => {
  const mapRef = useRef(null);
  const [viewport, setViewport] = useState<Test>({
    latitude: 35.6762,
    longitude: 139.6503,
    zoom: 8,
  });
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
    <div style={{ width: "100vw", height: "100vh" }}>
      <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoidGFpc2VpLW0iLCJhIjoiY2w2eWh4NnZlMHB6cDNkbXV1ZDQycTNrMyJ9.ull5IDeDxKcNo7GZQquZdg"
      >
        {/* <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken="pk.eyJ1IjoidGFpc2VpLW0iLCJhIjoiY2w2eWh4NnZlMHB6cDNkbXV1ZDQycTNrMyJ9.ull5IDeDxKcNo7GZQquZdg"
          position="top-left"
          types="poi"
          marker={true}
        /> */}
      </Map>
      {/* <Map
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
        mapStyle="mapbox://styles/taisei-m/cl6lh9446000h14pebx8w9o75"
        mapboxApiAccessToken="pk.eyJ1IjoidGFpc2VpLW0iLCJhIjoiY2w2eWh4NnZlMHB6cDNkbXV1ZDQycTNrMyJ9.ull5IDeDxKcNo7GZQquZdg"
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken="pk.eyJ1IjoidGFpc2VpLW0iLCJhIjoiY2w2eWh4NnZlMHB6cDNkbXV1ZDQycTNrMyJ9.ull5IDeDxKcNo7GZQquZdg"
          position="top-left"
          types="poi"
          marker={true}
        /> */}
      {/* <GeolocateControl label="現在地" />
        <NavigationControl /> */}
      {/* </Map> */}
    </div>
  );
};

export default Home;
