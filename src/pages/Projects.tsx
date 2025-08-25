import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { projectsData } from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold font-display text-white mb-3 sm:mb-4 drop-shadow-2xl">n8n Projects</h1>
        <p className="text-lg sm:text-xl font-body text-white/90 max-w-2xl mx-auto px-4 drop-shadow-lg">
          Discover automation projects for various use cases. Each project is ready to import and customize.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projectsData.map((project) => (
          <div
            key={project.slug}
            className="group bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl hover:shadow-primary-500/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border border-white/20 hover:border-primary-400/50 touch-manipulation overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-4 sm:p-6 relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-20 rounded-full -translate-y-10 translate-x-10 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="flex items-start justify-between mb-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium font-body bg-primary-500/20 text-primary-200 border border-primary-400/30 backdrop-blur-sm"
                    >
                      <Tag className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-2 group-hover:text-primary-300 transition-colors line-clamp-2 drop-shadow-lg">
                {project.title}
              </h3>
              
              <p className="text-sm sm:text-base font-body text-white/80 mb-4 line-clamp-3 drop-shadow-md">
                {project.description}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                <div className="flex items-center text-sm font-body text-white/70 drop-shadow-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{project.complexity}</span>
                </div>
                
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center justify-center sm:justify-start text-primary-300 hover:text-secondary-300 font-medium font-body transition-all duration-300 group py-2 sm:py-0 touch-manipulation drop-shadow-md"
                >
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {projectsData.length === 0 && (
        <div className="text-center py-8 sm:py-12 px-4">
          <h3 className="text-lg font-medium font-display text-white mb-2 drop-shadow-lg">No templates yet</h3>
          <p className="font-body text-white/80 drop-shadow-md">Check back soon for new n8n workflow templates!</p>
        </div>
      )}
      </div>
    </div>
  );
};