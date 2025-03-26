import React from "react";

// Import images (you'll need to adjust the import path)
import resumeImage1 from "../../assets/resumeGallery/01.jpeg";
import resumeImage2 from "../../assets/resumeGallery/02.jpeg";
import resumeImage3 from "../../assets/resumeGallery/03.jpeg";
import resumeImage4 from "../../assets/resumeGallery/04.jpeg";
import resumeImage5 from "../../assets/resumeGallery/05.jpeg";
import resumeImage6 from "../../assets/resumeGallery/06.jpeg";

const ResumeGallery: React.FC<object> = () => {
  const resumeImages = [
    resumeImage1,
    resumeImage2,
    resumeImage3,
    resumeImage4,
    resumeImage5,
    resumeImage6,
  ];

  return (
    <div className="relative z-10 max-w-7xl container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {resumeImages.map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center overflow-hidden shadow-lg rounded-lg"
          >
            <img
              src={image}
              alt={`Resume ${index + 1}`}
              className="w-full h-auto object-contain max-h-[450px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeGallery;
