import React, { useState, useEffect, useRef } from "react";
import person1 from "../../assets/Testimonials/person1.jpg";
import person2 from "../../assets/Testimonials/person2.jpg";
import person3 from "../../assets/Testimonials/person3.jpg";

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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
          <div className="w-full md:w-2/5 relative h-64 md:h-auto">
            <div className="rounded-lg overflow-hidden h-full">
              <img
                src={activeTestimonial.image}
                alt={activeTestimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-3/5 flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-gray-600 italic mb-4 text-lg font-medium">
                Hear from them!
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                What Our Clients Say
              </h2>
              <div className="w-20 h-1 bg-teal-400 mb-8"></div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                {activeTestimonial.content}
              </p>
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  {activeTestimonial.name}
                </h4>
                <p className="text-gray-500">{activeTestimonial.position}</p>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-start mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-4 h-4 rounded-full transition-colors ${
                    index === activeIndex
                      ? "bg-teal-400"
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
      name: "Jose M. Snyder",
      position: "Media Planner",
      content:
        "If you are looking for someone who can polish, and make you unique the way that you value yourself more, Resume Writers USA would be the most perfect choice and you never need any other advice to discuss your work experience. I have recommended them to my colleagues as well. Thank you so much, my heart is with you guys and you are the only one who ever I could contact for any advice and review of my professional work summary and all services which can come with it. I hope you can assist us in the future.",
      image: person1,
    },
    {
      id: 2,
      name: "Michael T. Smith",
      position: "Software Engineer",
      content:
        "Working with Resume Writers USA transformed my job search completely. Their team took the time to understand my career goals and crafted a resume that highlighted my strengths perfectly. Within two weeks of using my new resume, I received three interview requests from top companies in my field. The personalized approach and attention to detail made all the difference.",
      image: person2,
    },
    {
      id: 3,
      name: "Jessica R. Williams",
      position: "Financial Analyst",
      content:
        "After struggling for months with my job search, I decided to invest in professional resume help. Resume Writers USA exceeded all my expectations. They completely restructured my resume to showcase my achievements rather than just listing responsibilities. The result was amazing - my interview rate increased by 70%! I appreciate how they made my experience shine in ways I couldn't have done myself.",
      image: person3,
    },
  ];

  return <TestimonialSection testimonials={testimonialData} />;
};
