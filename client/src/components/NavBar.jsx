import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/courses' },
  { name: 'Events', path: '/events' },
  { name: 'Transportation', path: '/transportation' },
  { name: 'Faculty', path: '/faculty' },
  { name: 'About', path: '/about' },
  { name: 'Fee', path: '/fee' },
];

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = ()=>{
      const offset = window.scrollY;
      if(offset > 50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

return (
    <header 
    className={`xl:px-[8rem] fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-1' : 'bg-white/90 py-2 '
    }`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-[#0A2342] ">Campus<span className="text-campus-burgundy">Info</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="nav-link">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu" className="p-2">
            {isOpen ? <X className="h-6 w-6 text-campus-navy" /> : <Menu className="h-6 w-6 text-campus-navy" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg animate-fade-in">
          <div className="container-custom py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block py-2 px-4 text-campus-navy hover:bg-gray-50 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar
