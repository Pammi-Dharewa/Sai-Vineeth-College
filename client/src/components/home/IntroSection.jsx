import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Calendar } from 'lucide-react';


const IntroSection = () => {
   return (
    <section className="py-20 bg-white xl:px-[8rem]">
      <div className="container-custom">
        <h2 className="section-title text-center">
          Excellence in Education Since 1985
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 text-campus-gray">
              Sai Vineeth JR College is a premier educational institution committed to providing quality education that empowers students to achieve their fullest potential. With a rich legacy spanning over three decades, we blend traditional values with modern educational methods.
            </p>
            <p className="text-lg mb-6 text-campus-gray">
              Our institution offers comprehensive programs from kindergarten through postgraduate studies, supporting students at every stage of their educational journey. Our campus spans 50 acres of lush green environment, creating an ideal atmosphere for learning and growth.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center">
                <BookOpen className="h-12 w-12 text-campus-burgundy mr-4" />
                <div>
                  <h3 className="font-bold text-xl">50+</h3>
                  <p className="text-campus-gray">Courses Offered</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-12 w-12 text-campus-burgundy mr-4" />
                <div>
                  <h3 className="font-bold text-xl">5000+</h3>
                  <p className="text-campus-gray">Students Enrolled</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-12 w-12 text-campus-burgundy mr-4" />
                <div>
                  <h3 className="font-bold text-xl">35+</h3>
                  <p className="text-campus-gray">Years of Excellence</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link to="/about" className="btn-primary">
                Read Our Story
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Campus Building"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-campus-gold rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-campus-burgundy rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection
