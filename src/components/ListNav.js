import React from 'react';

const ListNav = () => {
  return (
    <nav className="p-4 bg-gray-200 sticky top-20 z-30 rounded shadow-md">
      <ul className="flex space-x-6">
        <li>
          <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium transition">
            About
          </a>
        </li>
        <li>
          <a href="#project1" className="text-gray-700 hover:text-indigo-600 font-medium transition">
            Project 1
          </a>
        </li>
        <li>
          <a href="#project2" className="text-gray-700 hover:text-indigo-600 font-medium transition">
            Project 2
          </a>
        </li>
        <li>
          <a href="#project3" className="text-gray-700 hover:text-indigo-600 font-medium transition">
            Project 3
          </a>
        </li>
        <li>
          <a href="#project4" className="text-gray-700 hover:text-indigo-600 font-medium transition">
            Project 4
          </a>
        </li>
        <li>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default ListNav;