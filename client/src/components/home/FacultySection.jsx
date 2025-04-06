
import React from 'react';
import { Link } from 'react-router-dom';

const facultyMembers = [
  {
    id: 1,
    name: 'Dr. Robert Johnson',
    position: 'Principal',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    description: 'Ph.D. in Educational Leadership with 20+ years of experience in education administration.'
  },
  {
    id: 2,
    name: 'Dr. Sarah Williams',
    position: 'Vice Principal',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    description: 'Ph.D. in Literature with expertise in curriculum development and educational psychology.'
  },
  {
    id: 3,
    name: 'Prof. Michael Chen',
    position: 'Head of Sciences',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    description: 'M.Sc. in Physics, leading innovative research projects and STEM education initiatives.'
  },
  {
    id: 4,
    name: 'Dr. Emily Parker',
    position: 'Dean of Students',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    description: 'Ph.D. in Psychology, specializing in student counseling and personality development.'
  }
];



const FacultySection = () => {
 return (
    <section className="py-20 bg-campus-light xl:px-[8rem] ">
      <div className="container-custom">
        <h2 className="section-title text-center">Our Leadership Team</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Meet the dedicated professionals who lead our institution with passion and expertise,
          guiding our students toward academic excellence and personal growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-campus-navy">{member.name}</h3>
                <p className="text-campus-burgundy font-medium mb-2">{member.position}</p>
                <p className="text-campus-gray text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/faculty" className="btn-primary">
            View All Faculty Members
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FacultySection
