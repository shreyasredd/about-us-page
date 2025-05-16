
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-finx-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-roboto font-bold mb-4">
              FinX<span className="text-finx-accent">Bridge</span>
            </h3>
            <p className="font-inter text-sm text-gray-300 mb-4">
              Shaping the future of Fintech, One Innovation at a Time.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-roboto font-medium mb-4">Solutions</h4>
            <ul className="space-y-2 font-inter text-sm text-gray-300">
              <li>
                <Link to="#" className="hover:text-finx-accent">Lending & Credit Management</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-finx-accent">Integrations & Connectivity</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-finx-accent">Payments & Cards</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-finx-accent">Wealth Management</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-roboto font-medium mb-4">Company</h4>
            <ul className="space-y-2 font-inter text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-finx-accent">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-finx-accent">About Us</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-finx-accent">Careers</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-finx-accent">Blog</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-roboto font-medium mb-4">Connect</h4>
            <ul className="space-y-2 font-inter text-sm text-gray-300">
              <li>
                <Link to="#" className="hover:text-finx-accent">Contact Us</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-finx-accent">LinkedIn</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-finx-accent">Twitter</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-finx-blue">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-inter text-sm text-gray-300">
              &copy; {new Date().getFullYear()} FinXBridge. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-sm font-inter text-gray-300 hover:text-finx-accent">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm font-inter text-gray-300 hover:text-finx-accent">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
