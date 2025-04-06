import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Calendar } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Annual Technical Bootcamp',
    date: 'June 15-20, 2023',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    category: 'Bootcamps',
    description: 'A week-long immersive coding experience for students interested in software development and technology. Learn from industry experts and build real-world projects.',
  },
  {
    id: 2,
    title: 'Pongal Celebrations',
    date: 'January 14, 2023',
    image: 'https://images.unsplash.com/photo-1608096299210-db7553d34d4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
    category: 'Pongal Events',
    description: 'Join us for traditional Pongal celebrations with cultural performances, kolam competition, and authentic South Indian cuisine prepared by our culinary students.',
  },
  {
    id: 3,
    title: 'Freshers Welcome Party',
    date: 'August 5, 2023',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    category: 'Freshers Events',
    description: 'A warm welcome to our new batch of students with entertainment, games, talent showcase, and an opportunity to meet seniors and faculty members.',
  },
  {
    id: 4,
    title: 'Annual Day Celebrations',
    date: 'December 10, 2023',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    category: 'Annual Days',
    description: 'Our flagship event celebrating the achievements of the academic year with cultural performances, award ceremony, and alumni reunions.',
  },
  {
    id: 5,
    title: 'Science & Innovation Fair',
    date: 'November 15, 2023',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    category: 'Special Events',
    description: 'Showcase of student innovations and research projects with opportunities for industry exposure and mentorship from leading scientists and entrepreneurs.',
  },
  {
    id: 6,
    title: 'Entrepreneurship Workshop',
    date: 'September 25-26, 2023',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    category: 'Bootcamps',
    description: 'A two-day workshop on business model development, marketing strategies, and fundraising techniques for aspiring entrepreneurs.',
  },
  {
    id: 7,
    title: 'Sankranti Cultural Festival',
    date: 'January 15, 2023',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    category: 'Pongal Events',
    description: 'Cultural performances celebrating the harvest festival with traditional music, dance, and art forms from across the country.',
  },
  {
    id: 8,
    title: 'Talent Hunt for Freshers',
    date: 'August 20, 2023',
    image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    category: 'Freshers Events',
    description: 'A platform for new students to showcase their talents in music, dance, theater, and creative arts with prizes for outstanding performances.',
  }
];

const categories = ['All', 'Bootcamps', 'Pongal Events', 'Freshers Events', 'Annual Days', 'Special Events'];

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="bg-campus-navy py-20 mt-19 xl:px-[8rem]">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Campus Events</h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Discover the vibrant campus life at Kennedy College through our diverse range of events and activities.
          </p>
        </div>
      </div>

      <main className="flex-grow py-16 xl:px-[2rem]">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-campus-burgundy text-white'
                    : 'bg-gray-200 text-campus-gray hover:bg-gray-300'
                } transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <div key={event.id} className="rounded-lg overflow-hidden shadow-md border border-gray-200 card-hover">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 text-campus-burgundy mr-2" />
                    <span className="text-sm text-campus-gray">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-campus-navy mb-2">{event.title}</h3>
                  <p className="text-campus-gray mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-campus-light px-3 py-1 rounded-full text-xs font-medium text-campus-navy">
                      {event.category}
                    </span>
                    <button className="text-campus-burgundy hover:underline inline-flex items-center">
                      Event details
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-campus-navy mb-2">No events found</h3>
              <p className="text-campus-gray">
                There are currently no events in this category. Please check back later or select another category.
              </p>
            </div>
          )}

          {filteredEvents.length > 0 && (
            <div className="text-center mt-12">
              <button className="btn-primary">
                View All Events
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
