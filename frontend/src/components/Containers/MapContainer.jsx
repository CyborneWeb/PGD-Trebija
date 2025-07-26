import React, { useRef } from "react";
import Map, { Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const MapContainer = () => {
  // Reference for scroll detection
  const mapRef = useRef(null);
  const isInView = useInView(mapRef, { once: true, amount: 0.2 });

  // Define location coordinates (for both map and marker)
  const location = {
    longitude: 14.101597560454586,
    latitude: 46.09720704294182,
  };

  return (
    <motion.div
      ref={mapRef}
      className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-md border-t-10 border-red-700"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <Map
        initialViewState={{
          ...location,
          zoom: 15,
        }}
        dragPan={false} // Prevents panning
        dragRotate={false} // Prevents rotation via drag
        scrollZoom={false} // Prevents zoom via scroll
        doubleClickZoom={false} // Prevents zoom via double-click
        touchZoom={false} // Prevents touch zoom
        touchRotate={false} // Prevents touch rotation
        keyboard={false} // Disables keyboard shortcuts
        style={{ width: "100%", height: "100%" }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=vfUh3iWmj0J3YP3WSNlv"
      >
        <Marker
          longitude={location.longitude}
          latitude={location.latitude}
          anchor="bottom"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <FaMapMarkerAlt className="text-3xl text-red-600" />
          </motion.div>
        </Marker>
      </Map>
    </motion.div>
  );
};

export default MapContainer;
