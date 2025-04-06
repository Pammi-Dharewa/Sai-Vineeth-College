import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const images = [
  '/images/campus1.jpg',
  '/images/campus2.jpg',
  '/images/campus3.jpg'
];

const HeroSection = () => {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 bg-cover blur-[0.1rem] bg-center ${
              currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')`,
              backgroundPosition: index === 0 ? 'center' : index === 1 ? 'bottom' : 'top'
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif">
            Welcome to<br />
            <span className="text-campus-gold">SAI VINEETH JR COLLEGE</span>
          </h1>
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl">
            Empowering minds, inspiring futures. A premier institution committed to academic excellence and holistic development.
          </p>
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/courses" 
              className="bg-campus-burgundy text-white py-3 px-6 rounded hover:bg-opacity-90 transition-all inline-flex items-center"
            >
              Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/about" 
              className="bg-white text-campus-navy py-3 px-6 rounded hover:bg-opacity-90 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`w-3 h-3 rounded-full ${
              currentImage === i ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSection
