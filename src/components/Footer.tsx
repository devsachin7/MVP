import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 py-4 px-6 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-3 md:mb-0">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} McCarthy Vaughn Partnership. All rights reserved.
          </p>
        </div>
        {/* <div className="flex space-x-6">
          <a 
            href="#" 
            className="text-sm text-gray-500 hover:text-primary transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a 
            href="#" 
            className="text-sm text-gray-500 hover:text-primary transition-colors duration-200"
          >
            Terms of Service
          </a>
          <a 
            href="#" 
            className="text-sm text-gray-500 hover:text-primary transition-colors duration-200"
          >
            Contact
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer; 