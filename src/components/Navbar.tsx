
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="font-roboto font-bold text-2xl text-finx-primary">
                FinX<span className="text-finx-accent">Bridge</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-inter font-medium text-gray-500 hover:text-gray-700 hover:border-finx-secondary"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-finx-primary text-sm font-inter font-medium text-finx-primary"
              >
                About Us
              </Link>
              <Link
                to="#"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-inter font-medium text-gray-500 hover:text-gray-700 hover:border-finx-secondary"
              >
                Solutions
              </Link>
              <Link
                to="#"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-inter font-medium text-gray-500 hover:text-gray-700 hover:border-finx-secondary"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button className="bg-finx-primary hover:bg-finx-blue text-white">
              Get Started
            </Button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-finx-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-inter font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-finx-secondary"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block pl-3 pr-4 py-2 border-l-4 border-finx-primary text-base font-inter font-medium text-finx-primary bg-finx-light"
            >
              About Us
            </Link>
            <Link
              to="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-inter font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-finx-secondary"
            >
              Solutions
            </Link>
            <Link
              to="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-inter font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-finx-secondary"
            >
              Contact
            </Link>
            <div className="mt-4 pl-3 pr-4">
              <Button className="w-full bg-finx-primary hover:bg-finx-blue text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
