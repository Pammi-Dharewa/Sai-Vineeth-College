import React from 'react';
import { Youtube, Facebook, Instagram, MessageCircle } from 'lucide-react';

const SocialBar = () => {
  return(
    <div className="fixed bottom-6 right-6 z-30 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center space-x-4">
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-700 transition-colors"
        aria-label="Visit our YouTube channel"
      >
        <Youtube size={24} />
      </a>
      
      <a
        href="https://whatsapp.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:text-green-700 transition-colors"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700 transition-colors"
        aria-label="Visit our Facebook page"
      >
        <Facebook size={24} />
      </a>
      
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 hover:text-pink-700 transition-colors"
        aria-label="Follow us on Instagram"
      >
        <Instagram size={24} />
      </a>
    </div>
  );
}

export default SocialBar
