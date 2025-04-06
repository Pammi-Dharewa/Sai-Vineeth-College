import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const facultyMembers = [
  {
    id: 1,
    name: 'Dr. Robert Johnson',
    position: 'Principal',
    department: 'Administration',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    education: 'Ph.D. in Educational Leadership, Harvard University',
    experience: '25+ years of experience in education administration and leadership',
    about: 'Dr. Johnson leads Kennedy College with a vision focused on academic excellence and student development. His innovative approach to education has transformed the institution into a leading center of learning.'
  },
  {
    id: 2,
    name: 'Dr. Sarah Williams',
    position: 'Vice Principal',
    department: 'Administration',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    education: 'Ph.D. in Literature, Oxford University',
    experience: '20+ years of experience in curriculum development and academic administration',
    about: 'Dr. Williams oversees academic affairs and curriculum development. Her expertise in educational psychology has helped shape our student-centered teaching approach.'
  },
  {
    id: 3,
    name: 'Prof. Michael Chen',
    position: 'Head of Sciences',
    department: 'Sciences',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    education: 'M.Sc. in Physics, MIT',
    experience: '15+ years of teaching and research experience in Physics',
    about: 'Prof. Chen leads the science department with passion and innovation. His research in quantum physics has been published in leading scientific journals, and he brings cutting-edge knowledge to the classroom.'
  },
  {
    id: 4,
    name: 'Dr. Emily Parker',
    position: 'Dean of Students',
    department: 'Student Affairs',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    education: 'Ph.D. in Psychology, Stanford University',
    experience: '18+ years in student counseling and development',
    about: 'Dr. Parker oversees student welfare and development. Her approach to student counseling focuses on holistic development, addressing both academic and personal challenges faced by students.'
  },
  {
    id: 5,
    name: 'Dr. James Wilson',
    position: 'Professor of Mathematics',
    department: 'Mathematics',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    education: 'Ph.D. in Mathematics, Cambridge University',
    experience: '22+ years teaching advanced mathematics',
    about: 'Dr. Wilson is renowned for making complex mathematical concepts accessible to students. His research focuses on applied mathematics and its applications in artificial intelligence.'
  },
  {
    id: 6,
    name: 'Prof. Anita Desai',
    position: 'Head of Languages',
    department: 'Languages',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    education: 'M.A. in English Literature, Delhi University',
    experience: '16+ years teaching languages and literature',
    about: 'Prof. Desai leads the language department with creativity and enthusiasm. Her innovative teaching methods have significantly improved student engagement and language proficiency.'
  },
  {
    id: 7,
    name: 'Dr. David Thompson',
    position: 'Professor of History',
    department: 'Humanities',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80',
    education: 'Ph.D. in History, Yale University',
    experience: '19+ years in historical research and education',
    about: 'Dr. Thompson brings history to life through storytelling and interactive teaching. His research on ancient civilizations has contributed significantly to the field of archaeological history.'
  },
  {
    id: 8,
    name: 'Prof. Lisa Martinez',
    position: 'Head of Commerce',
    department: 'Commerce',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    education: 'MBA, Harvard Business School',
    experience: '14+ years in business education and corporate consulting',
    about: 'Prof. Martinez brings practical business insights to the classroom from her extensive corporate experience. Her connections with industry leaders provide valuable opportunities for student internships and placements.'
  },
  {
    id: 9,
    name: 'Dr. Raj Patel',
    position: 'Professor of Computer Science',
    department: 'Computer Science',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    education: 'Ph.D. in Computer Science, Stanford University',
    experience: '17+ years in software development and computer science education',
    about: "Dr. Patel is at the forefront of technology education. His work in artificial intelligence has been recognized internationally, and he leads our college's technology innovation center."
  },
  {
    id: 10,
    name: 'Prof. Grace Kim',
    position: 'Director of Fine Arts',
    department: 'Fine Arts',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    education: 'MFA, Rhode Island School of Design',
    experience: '12+ years in art education and professional exhibitions',
    about: 'Prof. Kim is a practicing artist whose work has been featured in galleries worldwide. She brings a wealth of creative experience to our arts program, inspiring students to explore their artistic potential.'
  }
];

const departments = [
  'All', 'Administration', 'Sciences', 'Mathematics', 'Languages', 'Humanities', 'Commerce', 'Computer Science', 'Fine Arts', 'Student Affairs'
];

const Faculty = () => {
  const [selectedDepartment, setSelectedDepartment] = React.useState('All');
  const [filteredFaculty, setFilteredFaculty] = React.useState(facultyMembers);
  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
    let result = facultyMembers;
    
    if (selectedDepartment !== 'All') {
      result = result.filter(member => member.department === selectedDepartment);
    }
    
    if (searchTerm) {
      result = result.filter(member => 
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.department.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredFaculty(result);
  }, [selectedDepartment, searchTerm]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="bg-campus-navy py-20 mt-19 xl:px-[8rem]">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Faculty</h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Meet our distinguished faculty members who are experts in their fields and dedicated to providing
            an exceptional educational experience for our students.
          </p>
        </div>
      </div>

      <main className="flex-grow py-16 xl:px-[8rem]">
        <div className="container-custom">
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search faculty..."
                  className="w-full px-4 py-2 border border-gray-300 rounded pl-10 focus:outline-none focus:ring-2 focus:ring-campus-burgundy focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg className="h-5 w-5 text-gray-400 absolute top-2.5 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-campus-gray self-center mr-2">Filter by department:</span>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-campus-burgundy"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFaculty.map(member => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div className="relative h-64">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                    <h2 className="text-xl font-bold">{member.name}</h2>
                    <p>{member.position}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm bg-campus-light inline-block px-3 py-1 rounded-full text-campus-navy font-medium">
                      {member.department}
                    </p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold text-campus-navy mb-1">Education</h3>
                    <p className="text-campus-gray text-sm">{member.education}</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold text-campus-navy mb-1">Experience</h3>
                    <p className="text-campus-gray text-sm">{member.experience}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-campus-navy mb-1">About</h3>
                    <p className="text-campus-gray text-sm">{member.about}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredFaculty.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-campus-navy mb-2">No faculty members found</h3>
              <p className="text-campus-gray">
                Try adjusting your search or filter criteria to see more results.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Faculty;
