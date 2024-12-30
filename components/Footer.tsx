import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[#00FF7F] font-bold text-xl mb-4">ViewMe-US</h3>
            <p className="text-gray-300 text-sm text-center md:text-left">
              Discover Sri Lanka&apos;s hidden gems with ViewMe-US. 
              Your trusted partner for authentic travel experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[#00FF7F] font-bold text-xl mb-4">Quick Links</h3>
            <Link href="/destinations" className="text-gray-300 hover:text-[#00FF7F] mb-2">
              Destinations
            </Link>
            <Link href="/tours" className="text-gray-300 hover:text-[#00FF7F] mb-2">
              Tours
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-[#00FF7F] mb-2">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-[#00FF7F] mb-2">
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[#00FF7F] font-bold text-xl mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/shen.rathnayaka.3" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-[#00FF7F]">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/shen_sandaru/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00FF7F]">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/shen-rathnayaka-a9629526a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00FF7F]">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/ShenSandaru" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-[#00FF7F]">
                <FaGithub size={24} />
              </a>
            </div>
            <div className="mt-4 text-gray-300 text-sm">
              <p>Email: info@viewme-us.com</p>
              <p>Phone: +94 77 123 4567</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ViewMe-US. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;