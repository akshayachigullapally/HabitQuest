import React from 'react';

import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 mt-auto">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <span className="text-lg font-bold text-blue-600 dark:text-blue-400">HabitQuest</span>
            </Link>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              &copy; {currentYear} All rights reserved.
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/privacy" className="text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Terms
            </Link>
            <Link to="/support" className="text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Support
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            <a href="https://github.com/yourname/habitquest" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <FaGithub className="w-4 h-4" />
            </a>
            <a href="https://twitter.com/habitquest" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <FaTwitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;