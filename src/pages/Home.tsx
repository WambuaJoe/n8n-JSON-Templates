import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Download, Globe } from 'lucide-react';
import { siteConfig } from '../data/projects';

export const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative z-10">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-display tracking-tight text-white mb-4 drop-shadow-2xl">
            n8n Workflows
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 font-body text-white/90 max-w-2xl mx-auto px-4 drop-shadow-lg">
            A curated collection of production-ready n8n workflow and automation projects. 
            Each comes with detailed explanations and ready-to-import JSON files.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
            <Link
              to="/projects"
              className="group w-full sm:w-auto rounded-xl bg-gradient-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold font-display text-white shadow-2xl hover:shadow-primary-500/25 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 text-center backdrop-blur-sm border border-white/20"
            >
              Browse Projects
              <ArrowRight className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={siteConfig.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto rounded-xl border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold font-display text-white hover:border-primary-400 hover:bg-white/10 hover:text-primary-300 transition-all duration-300 hover:scale-105 hover:-translate-y-2 text-center backdrop-blur-sm"
            >
              <Globe className="mr-2 h-5 w-5 inline" />
              About Me
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white/5 backdrop-blur-xl py-16 sm:py-24 lg:py-32 border-t border-white/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-secondary-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight text-white drop-shadow-xl">
              Ready-to-Use Workflows
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 font-body text-white/90 px-4 drop-shadow-lg">
              Each template is carefully crafted and tested to help you automate your workflows quickly and efficiently.
            </p>
          </div>
          <div className="mx-auto mt-12 sm:mt-16 lg:mt-24 max-w-2xl lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base sm:text-lg font-semibold font-display leading-7 text-white drop-shadow-lg">
                  <Code className="h-5 w-5 flex-none text-primary-500" />
                  Production Ready
                </dt>
                <dd className="mt-3 sm:mt-4 flex flex-auto flex-col text-sm sm:text-base leading-6 sm:leading-7 font-body text-white/80 drop-shadow-md">
                  <p className="flex-auto">
                    All workflows are tested and production-ready. Simply import and configure for your needs.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base sm:text-lg font-semibold font-display leading-7 text-white drop-shadow-lg">
                  <Download className="h-5 w-5 flex-none text-secondary-500" />
                  Easy Import
                </dt>
                <dd className="mt-3 sm:mt-4 flex flex-auto flex-col text-sm sm:text-base leading-6 sm:leading-7 font-body text-white/80 drop-shadow-md">
                  <p className="flex-auto">
                    One-click download or copy functionality. Import directly into your n8n instance.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base sm:text-lg font-semibold font-display leading-7 text-white drop-shadow-lg">
                  <Globe className="h-5 w-5 flex-none text-accent-500" />
                  Well Documented
                </dt>
                <dd className="mt-3 sm:mt-4 flex flex-auto flex-col text-sm sm:text-base leading-6 sm:leading-7 font-body text-white/80 drop-shadow-md">
                  <p className="flex-auto">
                    Each template includes clear explanations and setup instructions.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};