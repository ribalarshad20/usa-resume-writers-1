import video01 from "../../../assets/videoSamples/resume-01.jpeg";
import video02 from "../../../assets/videoSamples/resume-02.jpeg";
import video03 from "../../../assets/videoSamples/resume-03.jpeg";
import video04 from "../../../assets/videoSamples/resume-04.jpeg";

interface VideoImage {
  src: string;
  alt: string;
}

interface VideoSampleProps {
  images: VideoImage[];
  onPreviewClick?: (index: number) => void;
}

// Reuse the same hover and button animation CSS from WorkSamplesSection
const hoverStyles = `
  .portfolio-card {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transform: scale(1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .portfolio-card img {
    transition: filter 0.6s ease;
  }
  
  .portfolio-card:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
  
  .portfolio-card:hover img {
    filter: brightness(0.9);
  }
  
  .overlay-animation {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.2) 100%);
    opacity: 0;
    transform: translate(100%, -100%);
    transition: transform 0.6s ease, opacity 0.3s ease;
    pointer-events: none;
  }
  
  .portfolio-card:hover .overlay-animation {
    transform: translate(0, 0);
    opacity: 1;
  }
  
  .preview-button-container {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .portfolio-card:hover .preview-button-container {
    opacity: 1;
  }
  
  .preview-button {
    background: transparent;
    color: white;
    border: 3px solid white;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .preview-button:hover {
    background: white;
    color: #67D794;
  }
`;

const VideoSamplesGrid: React.FC<VideoSampleProps> = ({
  images,
  onPreviewClick = () => {},
}) => {
  return (
    <section className="w-full pb-10">
      {/* Inject hover and preview button CSS */}
      <style dangerouslySetInnerHTML={{ __html: hoverStyles }} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mb-10 flex-nowrap overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className="portfolio-card"
            style={{
              width: "100%",
              height: "500px",
              margin: 0,
              padding: 0,
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              style={{ display: "block" }}
            />
            {/* Overlay for the diagonal animation */}
            <div className="overlay-animation"></div>
            {/* Preview button, which appears on hover */}
            <div className="preview-button-container">
              <button
                onClick={() => onPreviewClick(index)}
                className="preview-button"
              >
                Preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoSamplesGrid;

// Example usage:
export const VideoSamplesGridComponent: React.FC = () => {
  const teamImages: VideoImage[] = [
    { src: video01, alt: "Woman with glasses smiling at laptop" },
    { src: video02, alt: "Digital camera display showing a person" },
    { src: video03, alt: "Woman in striped shirt smiling at laptop" },
    { src: video04, alt: "Woman with camera smiling" },
  ];

  const handlePreviewClick = (index: number) => {
    console.log(`Preview clicked for sample ${index + 1}`);
    // Add your preview functionality here
  };

  return (
    <VideoSamplesGrid images={teamImages} onPreviewClick={handlePreviewClick} />
  );
};
