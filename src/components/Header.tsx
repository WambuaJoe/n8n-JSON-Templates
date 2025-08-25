import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code, Home, FolderOpen } from 'lucide-react';

export const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white/10 backdrop-blur-xl shadow-2xl border-b border-white/20 sticky top-0 z-50 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-secondary-500/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 relative z-10">
          <Link to="#" className="flex items-center space-x-2">
            <Code className="h-6 w-6 sm:h-8 sm:w-8 text-primary-500" />
            <span className="text-lg sm:text-xl font-bold font-display text-white drop-shadow-lg">n8n Projects</span>
          </Link>
          
          <nav className="flex space-x-4 sm:space-x-8">
            <Link
              to="/"
              className={`inline-flex items-center px-1 pt-1 text-xs sm:text-sm font-medium font-body transition-all duration-300 ${
                isActive('/') 
                  ? 'text-primary-300 border-b-2 border-primary-400 drop-shadow-lg' 
                  : 'text-white/80 hover:text-primary-300 hover:border-white/30 drop-shadow-md'
              }`}
            >
              <Home className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              Home
            </Link>
            <Link
              to="/projects"
              className={`inline-flex items-center px-1 pt-1 text-xs sm:text-sm font-medium font-body transition-all duration-300 ${
                isActive('/projects') || location.pathname.startsWith('/projects/') 
                  ? 'text-primary-300 border-b-2 border-primary-400 drop-shadow-lg' 
                  : 'text-white/80 hover:text-primary-300 hover:border-white/30 drop-shadow-md'
              }`}
            >
              <FolderOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              Projects
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};