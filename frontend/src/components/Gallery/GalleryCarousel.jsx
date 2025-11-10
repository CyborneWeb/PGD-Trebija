import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaClock } from "react-icons/fa";
import { BASE_URL } from "../../../utils/apiPaths";
 // ...existing code...

const GalleryCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  // --- replaced static placeholder with fetched images ---
  const [images, setImages] = useState([
    "https://i.imgur.com/u7jC2a3.png",
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchGallery() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${BASE_URL}/api/gallery?max_results=50`);
        if (!res.ok) throw new Error(`Gallery request failed (${res.status})`);
        const body = await res.json();
        const resources = Array.isArray(body.resources) ? body.resources : [];
        // ensure newest first
        resources.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        const urls = resources.map(r => r.url).filter(Boolean);
        if (!cancelled && urls.length) {
          setImages(urls);
          setCurrentSlide(0);
        }
      } catch (err) {
        if (!cancelled) setError(err.message || "Failed to load gallery");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchGallery();
    return () => { cancelled = true; };
  }, []);

  // you can optionally show a loader / error UI:
  if (loading) return <div className="h-96 flex items-center justify-center">Loading gallery…</div>;
  if (error) return <div className="h-96 flex items-center justify-center text-red-500">Error: {error}</div>;

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Simplified animation variants - only for the images
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-40 md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-900 rounded-lg shadow-2xl">
      {/* Static background that doesn't animate */}
      <div className="absolute inset-0 bg-gray-800"></div>

      {/* Main carousel container */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.5, ease: "easeInOut" },
              opacity: { duration: 0.3 },
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <img
              src={images[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="max-w-full max-h-full object-contain"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-200 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous image"
      >
        <FaChevronLeft className="w-5 h-5" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-200 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next image"
      >
        <FaChevronRight className="w-5 h-5" />
      </motion.button>


      {/* Bottom controls */}
      <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-4 z-10">
        {/* Dot indicators */}
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 right-4 z-10 bg-black/50 text-white px-3 py-1 rounded-full backdrop-blur-sm text-sm">
        {currentSlide + 1} / {images.length}
      </div>
    </div>
  );
};

export default GalleryCarousel;
