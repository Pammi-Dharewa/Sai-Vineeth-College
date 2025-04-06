import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { BookOpen, Monitor, Users, Trophy } from 'lucide-react';

const coursesData = {
  schoolCourses: [
    { title: 'Kindergarten', description: 'Early foundation learning with focus on cognitive and social development.' },
    { title: 'Primary (1st - 5th)', description: 'Fundamental education in languages, mathematics, science, and arts.' },
    { title: 'Middle School (6th - 8th)', description: 'Expanded curriculum with introduction to specialized subjects.' },
    { title: 'Secondary (9th - 10th)', description: 'Preparatory education for board examinations with core and elective subjects.' }
  ],
  intermediate: [
    { title: 'Science Stream', description: 'Physics, Chemistry, Biology/Mathematics with focus on engineering and medical entrances.' },
    { title: 'Commerce Stream', description: 'Accounting, Business Studies, Economics with entrepreneurship foundation.' },
    { title: 'Arts Stream', description: 'Literature, History, Political Science, Psychology, and other humanities subjects.' }
  ],
  degree: [
    { title: 'Bachelor of Science (B.Sc)', description: 'Physics, Chemistry, Mathematics, Computer Science, Biology options.' },
    { title: 'Bachelor of Commerce (B.Com)', description: 'Accounting, Finance, Banking, and Business Administration.' },
    { title: 'Bachelor of Arts (B.A)', description: 'Literature, Economics, History, Political Science, Psychology.' },
    { title: 'Bachelor of Technology (B.Tech)', description: 'Computer Science, Electronics, Mechanical, Civil Engineering.' }
  ],
  postgraduate: [
    { title: 'Master of Science (M.Sc)', description: 'Advanced studies in scientific disciplines with research focus.' },
    { title: 'Master of Commerce (M.Com)', description: 'Specialized business education with industry-relevant projects.' },
    { title: 'Master of Arts (M.A)', description: 'Advanced humanities education with specialization options.' },
    { title: 'Master of Business Administration (MBA)', description: 'Business leadership and management education.' }
  ],
  summer: [
    { title: 'Computer Programming', description: 'Web development, app development, and coding fundamentals.' },
    { title: 'Spoken English', description: 'English language proficiency with focus on conversational skills.' },
    { title: 'Navodhaya Preparation', description: 'Special coaching for Jawahar Navodaya Vidyalaya entrance exams.' }
  ],
  sports: [
    { title: 'Cricket Academy', description: 'Professional cricket training with certified coaches.' },
    { title: 'Basketball', description: 'Team skills development and competitive training.' },
    { title: 'Swimming', description: 'Learn various swimming techniques with safety training.' },
    { title: 'Athletics', description: 'Track and field events training with professional equipment.' }
  ]
};

const CourseSection = ({ title, courses, icon: Icon }) => (
  <section className="mb-16">
    <div className="flex items-center mb-6">
      <Icon className="h-8 w-8 text-campus-burgundy mr-3" />
      <h2 className="text-2xl md:text-3xl font-bold text-campus-navy">{title}</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-campus-navy mb-2">{course.title}</h3>
          <p className="text-campus-gray mb-4">{course.description}</p>
          <Link to="#" className="text-campus-burgundy hover:underline inline-flex items-center">
            Learn more
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  </section>
);

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="bg-campus-navy py-20 mt-19  xl:px-[8rem]">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Courses</h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Explore our comprehensive range of educational programs designed to nurture talent and build careers across various disciplines.
          </p>
        </div>
      </div>
      <main className="flex-grow py-16 xl:px-[8rem]">
        <div className="container-custom">
          <CourseSection title="School Courses (KG to 10th)" courses={coursesData.schoolCourses} icon={BookOpen} />
          <CourseSection title="Intermediate Education" courses={coursesData.intermediate} icon={BookOpen} />
          <CourseSection title="Degree Programs" courses={coursesData.degree} icon={Users} />
          <CourseSection title="Postgraduate Programs" courses={coursesData.postgraduate} icon={Users} />
          <CourseSection title="Summer Courses" courses={coursesData.summer} icon={Monitor} />
          <CourseSection title="Sports Programs" courses={coursesData.sports} icon={Trophy} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
