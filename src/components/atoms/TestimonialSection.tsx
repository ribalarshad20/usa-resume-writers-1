import { useState, useEffect, useRef } from "react";
import person1 from "../../assets/NewUpdatedImages/testimonials/person1.jpg.png";
import person2 from "../../assets/NewUpdatedImages/testimonials/person2.jpg.png";
import person3 from "../../assets/NewUpdatedImages/testimonials/person3.jpg.png";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  image: string;
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Automatically cycle testimonials every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [testimonials.length]);

  // Restart auto-cycle when a dot is clicked
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="w-full bg-white py-16 overflow-hidden relative">
      {/* Decorative background shape */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gray-100 rounded-tl-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Image Column */}
          <div className="w-full md:w-2/5 relative h-[500px] md:h-[500px]">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <img
                src={activeTestimonial.image}
                alt={activeTestimonial.name}
                className="w-full h-full object-cover absolute top-0 left-0"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-3/5 flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-gray-600 mb-4 text-lg font-medium">
                Hear from them!
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                What Our Clients Say
              </h2>
              <div className="w-20 h-[2px] bg-[#C11A2F] mb-8"></div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-700 text-lg italic mb-6 leading-relaxed text-justify">
                {activeTestimonial.content}
              </p>
              <div>
                <h4 className="text-xl font-bold text-[#2F4376]">
                  {activeTestimonial.name}
                </h4>
                <p className="text-gray-500">{activeTestimonial.position}</p>
              </div>
            </div>

            <div className="flex items-center justify-start mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-4 h-4 rounded-full transition-colors ${
                    index === activeIndex
                      ? "bg-[#C11A2F]"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

// Example usage with testimonial data
export const TestimonialSectionExample: React.FC = () => {
  const testimonialData: Testimonial[] = [
    {
      id: 1,
      name: "Amanda Raymond",
      position: "Marketing Specialist",
      content:
        "I can’t believe the difference a professional resume can make. USA Resume Writers completely reworked my old resume, and within days I started hearing back from companies. I finally feel like my experience is being seen the right way.",
      image: person1,
    },
    {
      id: 2,
      name: "James Leroy",
      position: "Project Manager (Former Educator)",
      content:
        "I was nervous about switching careers, but the team made the whole process easy. They really understood how to translate my past work into something relevant to a new field. I’ve already landed two interviews!.",
      image: person2,
    },
    {
      id: 3,
      name: "Sofia M.",
      position: "Business Analyst",
      content:
        "I had no idea where to start with my resume and LinkedIn profile. USA Resume Writers not only cleaned it all up—they made me feel confident again. It feels like I’m finally presenting my best self.",
      image: person3,
    },
  ];

  return <TestimonialSection testimonials={testimonialData} />;
};
