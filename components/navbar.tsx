// components/TrelloNavbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">Trello</div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white">
            Boards
          </a>
          <a href="#" className="text-white">
            Templates
          </a>
          <a href="#" className="text-white">
            Calendar
          </a>
          {/* Add more links as needed */}
        </div>
        <div className="md:hidden">
          {/* Mobile menu icon (you can use an icon library or a custom icon) */}
          <button className="text-white">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
