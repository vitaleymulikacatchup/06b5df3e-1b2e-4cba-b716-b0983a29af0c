import React from 'react';
import { Search, Globe, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Navigation */}
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="nav-link text-gray-700 hover:text-starbucks-green font-medium">
                Про каву Starbucks®
              </a>
              <a href="#" className="nav-link text-gray-700 hover:text-starbucks-green font-medium">
                Зробити вдома
              </a>
              <a href="#" className="nav-link text-gray-700 hover:text-starbucks-green font-medium">
                Дізнатися більше
              </a>
            </nav>
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0">
            <div className="starbucks-logo">
              ★
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Пошук"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-starbucks-green focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            <button className="p-2 text-gray-600 hover:text-starbucks-green">
              <Globe className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-starbucks-green">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;