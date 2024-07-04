import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex  justify-between items-center fixed top-0 w-full z-50">
      <div className="text-xl font-bold">Node Crud Application</div>
      <nav className="flex space-x-4">
        <div>
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
        </div>
        <div>
          <Link to="/add-user" className="hover:text-gray-400">
            Add User
          </Link>
        </div>
        <div>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
        </div>
        <div>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;
