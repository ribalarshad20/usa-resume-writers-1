import { useState } from "react";
import { ZoomIn, ZoomOut, X } from "lucide-react";

interface ImagePopupProps {
  selectedSample: {
    image: string;
    title: string;
  } | null;
  onClose: () => void;
}

const ImagePopup = ({ selectedSample, onClose }: ImagePopupProps) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  // Handle zoom in
  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom * 1.5, 3));
  };

  // Handle zoom out
  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom / 1.5, 1));
  };

  // Reset zoom
  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  if (!selectedSample) return null;

  return (
    <div
      className="fixed inset-0 backdrop-brightness-10 bg-opacity-80 flex justify-center items-center z-50 p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Container */}
        <div
          className="relative overflow-hidden rounded-lg shadow-2xl max-w-[90vw] max-h-[80vh] flex items-center justify-center"
          style={{
            width: "80vw",
            height: "70vh",
          }}
        >
          <img
            src={selectedSample.image}
            alt={selectedSample.title}
            className="transition-transform duration-300 ease-in-out object-contain"
            style={{
              transform: `scale(${zoomLevel})`,
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>

        {/* Control Panel */}
        <div className="mt-4 flex space-x-4">
          <button
            onClick={handleZoomOut}
            className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            aria-label="Zoom Out"
          >
            <ZoomOut size={24} />
          </button>

          <button
            onClick={handleResetZoom}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md transition-colors"
            aria-label="Reset Zoom"
          >
            Reset
          </button>

          <button
            onClick={handleZoomIn}
            className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            aria-label="Zoom In"
          >
            <ZoomIn size={24} />
          </button>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-[-40px] right-0 text-white bg-red-500/50 hover:bg-red-500/70 rounded-full p-2 transition-colors"
          onClick={onClose}
          aria-label="Close image popup"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
};

export default ImagePopup;
