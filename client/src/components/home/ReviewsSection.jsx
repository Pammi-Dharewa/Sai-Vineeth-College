import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';


const reviews = [
  {
    id: 1,
    name: 'Aisha Patel',
    program: 'BSc Computer Science',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    rating: 5,
    text: 'The faculty at Kennedy College is extraordinary. They go above and beyond to ensure students succeed not just academically but in life.',
  },
  {
    id: 2,
    name: 'John Martinez',
    program: 'BA Literature',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    rating: 5,
    text: 'I found my passion for literature here. The diverse course offerings and expert guidance from professors helped me discover my true calling.',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    program: 'MBA',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    rating: 4,
    text: 'The MBA program at Kennedy College prepared me for the real business world. The practical experience and industry connections were invaluable.',
  },
  {
    id: 4,
    name: 'Rahul Sharma',
    program: 'BTech Mechanical',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    rating: 5,
    text: 'The hands-on training in the engineering labs gave me practical skills that employers value. I secured a job even before graduation!',
  },
  {
    id: 5,
    name: 'Sarah Williams',
    program: 'BFA Fine Arts',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    rating: 5,
    text: 'The arts program here is exceptional. I found a supportive community that encouraged creativity while teaching essential technical skills.',
  },
  {
    id: 6,
    name: 'Michael Lee',
    program: 'BSc Physics',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    rating: 4,
    text: 'The physics department has state-of-the-art laboratories and dedicated professors who make complex concepts accessible.',
  },
  {
    id: 7,
    name: 'Priya Desai',
    program: 'BCom',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    rating: 5,
    text: 'The commerce program provided me with a strong foundation in business principles and excellent networking opportunities.',
  },
  {
    id: 8,
    name: 'David Wilson',
    program: 'MSc Data Science',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    rating: 5,
    text: 'The data science program is cutting-edge, with courses that cover the latest technologies and methodologies in the field.',
  },
  {
    id: 9,
    name: 'Jennifer Lopez',
    program: 'MA Education',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    rating: 4,
    text: 'The education program combines theory with practical teaching experience, preparing graduates for successful careers in education.',
  },
  {
    id: 10,
    name: 'Rajiv Mehta',
    program: 'MD Medicine',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    rating: 5,
    text: 'The medical program is rigorous but rewarding. The faculty are distinguished practitioners who bring real-world experience to the classroom.',
  },
];

const ReviewsSection = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const carouselRef = useRef(null);
  const [visibleReviews, setVisibleReviews] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleReviews(1);
      } else if (window.innerWidth < 1024) {
        setVisibleReviews(2);
      } else {
        setVisibleReviews(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextReview = () => {
    setCurrentReviewIndex((prev) => 
      prev + visibleReviews >= reviews.length ? 0 : prev + visibleReviews
    );
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => 
      prev - visibleReviews < 0 ? Math.max(0, reviews.length - visibleReviews) : prev - visibleReviews
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-campus-gold fill-[#D6AD30] ' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-10 bg-campus-navy text-white xl:px-[8rem]">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-white text-center">What Our Students Say</h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Hear from our students about their experiences at Sai Vineeth JR College. Their success stories inspire us every day.
        </p>

        <div className="relative">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-medium">Student Reviews</h3>
            <div className="flex space-x-2">
              <button 
                onClick={prevReview}
                className="p-2 rounded-full bg-campus-burgundy/20 hover:bg-campus-burgundy/40 transition-colors"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextReview}
                className="p-2 rounded-full bg-campus-burgundy/20 hover:bg-campus-burgundy/40 transition-colors"
                aria-label="Next reviews"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden" ref={carouselRef}>
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentReviewIndex * (100 / visibleReviews)}%)`,
                width: `${(reviews.length / visibleReviews) * 100}%`
              }}
            >
              {reviews.map((review) => (
                <div 
                  key={review.id} 
                  className="px-4"
                  style={{ width: `${100 / reviews.length * visibleReviews}%` }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={review.image} 
                          alt={review.name}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{review.name}</h4>
                        <p className="text-sm text-gray-300">{review.program}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-gray-300 flex-grow">"{review.text}"</p>
                    <div className="mt-4 pt-4 border-t border-white/20">
                    
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            {Array.from({ length: Math.ceil(reviews.length / visibleReviews) }, (_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full mx-1 ${
                  i === Math.floor(currentReviewIndex / visibleReviews) 
                    ? 'bg-campus-gold' 
                    : 'bg-white/30'
                }`}
                onClick={() => setCurrentReviewIndex(i * visibleReviews)}
                aria-label={`Go to review group ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection
