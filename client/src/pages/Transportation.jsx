import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Bus, Car, Truck, MapPin, Phone, Mail } from 'lucide-react';

const transportationOptions = [
  {
    type: 'Bus Transportation',
    icon: <Bus className="h-12 w-12 text-campus-burgundy" />,
    description: 'Our college operates a fleet of 25 buses covering all major areas of the city and suburbs. The buses are equipped with GPS tracking, first aid kits, and trained drivers to ensure safe transportation for students.',
    features: [
      'Air-conditioned buses available',
      'GPS tracking for real-time location updates',
      'Dedicated bus attendants for younger students',
      'Multiple routes covering all major residential areas',
      'Flexible pickup and drop points',
      'Strict adherence to safety protocols'
    ]
  },
  {
    type: 'Van Services',
    icon: <Truck className="h-12 w-12 text-campus-burgundy" />,
    description: 'For smaller groups and specialized routes, we offer van services that provide more flexibility with timings and locations. These are ideal for students living in areas not covered by the main bus routes.',
    features: [
      'Smaller groups of 10-15 students per van',
      'More flexibility with pickup times',
      'Available for special events and extracurricular activities',
      'Customizable routes based on student needs',
      'Experienced drivers with clean safety records',
      'Regular maintenance and safety checks'
    ]
  },
  {
    type: 'Cab Services',
    icon: <Car className="h-12 w-12 text-campus-burgundy" />,
    description: 'We have partnerships with trusted cab services for individual transportation needs. Parents can opt for this premium service for door-to-door pickup and drop-off with maximum convenience and flexibility.',
    features: [
      'Individual or shared cab options',
      'Door-to-door service',
      'Pre-verified drivers with background checks',
      'Available on demand for emergencies',
      'Mobile app for booking and tracking',
      'Cashless payment options through college account'
    ]
  }
];

const routeAreas = [
  'North City - Jayanagar, Malleshwaram, Rajajinagar',
  'South City - Banashankari, JP Nagar, BTM Layout',
  'East City - Indiranagar, CV Raman Nagar, Whitefield',
  'West City - Vijayanagar, Basaveshwaranagar, Nagarbhavi',
  'Central City - Majestic, Shivajinagar, Cubbon Park',
  'Suburban Areas - Electronic City, Yelahanka, Kengeri'
];

const Transportation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="bg-campus-navy py-20 mt-19 xl:px-[8rem]">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Transportation Services</h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            We provide safe, reliable, and convenient transportation options to ensure our students reach campus comfortably.
          </p>
        </div>
      </div>

      <main className="flex-grow py-16 xl:px-[8rem]">
        <div className="container-custom">
          <section className="mb-16">
            <h2 className="section-title">Our Transportation Options</h2>
            <p className="text-lg text-campus-gray mb-10 max-w-3xl">
             Sai Vineeth Jr College is committed to providing safe and reliable transportation services for all students. 
              Choose from our various options to find the most convenient way to commute to campus.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {transportationOptions.map((option, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center mb-4">
                    {option.icon}
                    <h3 className="text-2xl font-bold text-campus-navy ml-4">{option.type}</h3>
                  </div>
                  <p className="text-campus-gray mb-6">{option.description}</p>
                  <h4 className="font-bold text-campus-burgundy mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-campus-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="section-title">Route Coverage</h2>
            <p className="text-lg text-campus-gray mb-10 max-w-3xl">
              Our transportation services cover the following areas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {routeAreas.map((area, index) => (
                <div key={index} className="flex items-center p-4 bg-campus-light rounded-lg">
                  <MapPin className="h-5 w-5 text-campus-burgundy mr-3" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-campus-light rounded-lg">
              <p className="font-medium text-campus-navy">
                For detailed route maps and schedules, please contact the Transportation Department.
              </p>
            </div>
          </section>

          <section>
            <h2 className="section-title">Transportation Fees</h2>
            <p className="text-lg text-campus-gray mb-10 max-w-3xl">
              Transportation fees vary based on the distance from campus and type of service selected.
              For detailed fee information, please contact the Transportation Department or refer to the Fee section.
            </p>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 bg-campus-navy text-white font-bold">
                Contact Transportation Department
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Phone className="h-5 w-5 text-campus-burgundy mr-3" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-campus-burgundy mr-3" />
                  <a href="mailto:transport@kennedycollege.edu" className="text-campus-burgundy hover:underline">
                    transport@SaiVineethcollege.edu
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Transportation;