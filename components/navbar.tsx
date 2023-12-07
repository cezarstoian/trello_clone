import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl md:text-2xl">Trello</div>
          <a href="/" className="text-white">
            Dashboard
          </a>
        </div>
    </nav>
  );
};

export default Navbar;
