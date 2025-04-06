import React from 'react';
import { BookOpen, Users, Trophy, Lightbulb, Microscope, Globe } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-campus-burgundy" />,
    title: 'Comprehensive Curriculum',
    description: 'Our curriculum is designed to provide students with a strong foundation across subjects while encouraging critical thinking and creativity.'
  },
  {
    icon: <Users className="h-10 w-10 text-campus-burgundy" />,
    title: 'Expert Faculty',
    description: 'Learn from experienced educators and industry professionals who are passionate about teaching and student success.'
  },
  {
    icon: <Trophy className="h-10 w-10 text-campus-burgundy" />,
    title: 'Sports Excellence',
    description: 'Our sports program focuses on both competitive achievement and physical well-being, with state-of-the-art facilities.'
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-campus-burgundy" />,
    title: 'Innovation Hub',
    description: 'Our innovation centers foster creativity and entrepreneurship, helping students develop solutions for real-world challenges.'
  },
  {
    icon: <Microscope className="h-10 w-10 text-campus-burgundy" />,
    title: 'Research Opportunities',
    description: 'Students engage in cutting-edge research projects guided by faculty mentors, preparing them for advanced studies.'
  },
  {
    icon: <Globe className="h-10 w-10 text-campus-burgundy" />,
    title: 'Global Perspective',
    description: 'International exchange programs and a diverse campus community provide students with a global outlook.'
  }
];


const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white xl:px-[8rem]">
      <div className="container-custom">
        <h2 className="section-title text-center">Why Choose Sai Vineeth JR College</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-campus-gray">
          We provide a nurturing environment where students can explore their interests,
          develop their talents, and prepare for successful futures.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg p-6 transition-all hover:shadow-lg hover:border-campus-burgundy"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-campus-navy mb-3">{feature.title}</h3>
              <p className="text-campus-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection
