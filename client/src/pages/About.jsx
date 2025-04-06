import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="bg-campus-navy py-20 mt-19 xl:px-[8rem]">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Learn about our institution's history, mission, and vision for education.
          </p>
        </div>
      </div>
      
      <main className="flex-grow">
        <section className="py-16 xl:px-[8rem]">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-campus-navy mb-6">Our Story</h2>
                <p className="text-campus-gray mb-4">
                SAI VINEETH JR COLLEGE , PUNDI, RSPM PURAM was established in 2005 and it is managed by the Pvt. Unaided. It is located in Rural area. It is located in VAJRAPUKOTTURU block of SRIKAKULAM district of ANDHRA PRADESH. The school consists of Grades from 11 to 12. 
                The school is Co-educational and it doesn't have an attached pre-primary section. The school is Not Applicable in nature and is not using school building as a shift-school. Telugu is the medium of instructions
                 in this school. This school is approachable by all weather road. In this school academic session starts in April.
                </p>
                <p className="text-campus-gray mb-4">
                At Sai Vineeth Junior College, we offer a wide range of intermediate courses in both science and commerce streams, guided by a team of qualified and dedicated faculty members. We emphasize conceptual learning, critical thinking, and practical application of knowledge to prepare our students for competitive exams and future academic pursuits. Regular assessments, doubt-solving sessions, and career guidance form an integral part of our academic culture.                </p>
                <p className="text-campus-gray">
                Beyond academics, we aim to shape well-rounded individuals by promoting values, discipline, and leadership. While we continue to improve our infrastructure, we are dedicated to creating a positive learning environment where every student feels motivated and supported. Our mission is to not only impart knowledge but also to instill confidence, resilience, and a passion for lifelong learning in our students.                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80" 
                  alt="College Building" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-5 -right-5 h-24 w-24 bg-campus-burgundy rounded-full -z-10"></div>
                <div className="absolute -top-5 -left-5 h-24 w-24 bg-campus-gold rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-campus-light xl:px-[8rem]">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-campus-navy mb-12 text-center">Our Vision & Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-campus-burgundy mb-4">Vision</h3>
                <p className="text-campus-gray mb-4">
                  To be a globally recognized center of academic excellence and innovation, producing graduates who are not only
                  proficient in their fields but also ethical leaders committed to addressing the challenges of society.
                </p>
                <p className="text-campus-gray">
                  We envision Kennedy College as a vibrant community where diverse perspectives flourish, creativity is nurtured,
                  and lifelong learning is embraced by all.
                </p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-campus-burgundy mb-4">Mission</h3>
                <p className="text-campus-gray mb-4">
                  To provide a transformative educational experience that develops the intellectual, social, and ethical
                  potential of each student through innovative teaching, research, and engagement with society.
                </p>
                <p className="text-campus-gray">
                  We commit to creating an inclusive learning environment that respects diversity, fosters critical thinking,
                  and prepares students for success in a rapidly changing world.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 xl:px-[8rem]">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-campus-navy mb-12 text-center">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-campus-light p-4 rounded-full inline-block mb-4">
                  <svg className="h-10 w-10 text-campus-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-campus-navy mb-2">Excellence</h3>
                <p className="text-campus-gray">
                  We pursue the highest standards in teaching, research, and institutional management,
                  continually striving to exceed expectations.
                </p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-campus-light p-4 rounded-full inline-block mb-4">
                  <svg className="h-10 w-10 text-campus-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-campus-navy mb-2">Integrity</h3>
                <p className="text-campus-gray">
                  We uphold the highest ethical standards in all our endeavors,
                  fostering a culture of honesty, transparency, and accountability.
                </p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-campus-light p-4 rounded-full inline-block mb-4">
                  <svg className="h-10 w-10 text-campus-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-campus-navy mb-2">Innovation</h3>
                <p className="text-campus-gray">
                  We embrace creativity and forward-thinking approaches to education,
                  constantly seeking new ways to enhance learning and address challenges.
                </p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-campus-light p-4 rounded-full inline-block mb-4">
                  <svg className="h-10 w-10 text-campus-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-campus-navy mb-2">Inclusion</h3>
                <p className="text-campus-gray">
                  We celebrate diversity and create a welcoming environment where all members
                  of our community feel valued, respected, and empowered.
                </p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-campus-light p-4 rounded-full inline-block mb-4">
                  <svg className="h-10 w-10 text-campus-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-campus-navy mb-2">Collaboration</h3>
                <p className="text-campus-gray">
                  We foster partnerships within and beyond our campus, recognizing that
                  working together enhances learning and drives positive change.
                </p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-campus-light p-4 rounded-full inline-block mb-4">
                  <svg className="h-10 w-10 text-campus-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-campus-navy mb-2">Social Responsibility</h3>
                <p className="text-campus-gray">
                  We are committed to contributing positively to society, instilling in our
                  students a sense of civic duty and global citizenship.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-campus-navy text-white xl:px-[8rem]">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Campus Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-6 mb-4">
                  <svg className="h-12 w-12 text-campus-gold mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Library</h3>
                <p className="text-gray-300">
                  Our state-of-the-art library houses over 50,000 books and provides access to numerous digital resources.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-6 mb-4">
                  <svg className="h-12 w-12 text-campus-gold mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Computer Labs</h3>
                <p className="text-gray-300">
                  Multiple computer labs equipped with the latest hardware and software for hands-on learning.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-6 mb-4">
                  <svg className="h-12 w-12 text-campus-gold mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Science Labs</h3>
                <p className="text-gray-300">
                  Well-equipped physics, chemistry, and biology laboratories for practical learning.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-6 mb-4">
                  <svg className="h-12 w-12 text-campus-gold mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Sports Complex</h3>
                <p className="text-gray-300">
                  A comprehensive sports complex with facilities for cricket, basketball, tennis, and swimming.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 xl:px-[8rem]">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-campus-navy mb-6">Join Our Community</h2>
            <p className="text-lg text-campus-gray mb-8 max-w-3xl mx-auto">
              We invite you to be part of the Kennedy College family. Whether you're a prospective student,
              a parent, or a community member, there are many ways to engage with our institution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/courses" className="bg-campus-burgundy text-white px-6 py-3 rounded hover:bg-opacity-90 transition-all">
                Explore Our Courses
              </a>
              <a href="#" className="bg-campus-navy text-white px-6 py-3 rounded hover:bg-opacity-90 transition-all">
                Schedule a Campus Visit
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
