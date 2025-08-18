import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Download, Copy, Check, ArrowLeft, Tag, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(project.jsonData, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy JSON:', err);
    }
  };

  const handleDownload = () => {
    const dataStr = JSON.stringify(project.jsonData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${project.slug}-workflow.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
      {/* Navigation */}
      <div className="mb-6 sm:mb-8">
        <Link
          to="/projects"
          className="inline-flex items-center text-primary-300 hover:text-secondary-300 font-medium font-body transition-all duration-300 hover:-translate-x-1 touch-manipulation py-2 drop-shadow-md"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      {/* Header */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-20 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium font-body bg-primary-500/20 text-primary-200 border border-primary-400/30 backdrop-blur-sm"
            >
              <Tag className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white mb-3 sm:mb-4 leading-tight drop-shadow-2xl relative z-10">{project.title}</h1>
        <p className="text-lg sm:text-xl font-body text-white/90 mb-4 sm:mb-6 leading-relaxed drop-shadow-lg relative z-10">{project.description}</p>
        
        <div className="flex items-center font-body text-white/70 mb-4 sm:mb-6 drop-shadow-md relative z-10">
          <Clock className="h-5 w-5 mr-2" />
          <span className="font-medium">Complexity: <span className="text-secondary-300">{project.complexity}</span></span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-10">
          <button
            onClick={handleDownload}
            className="inline-flex items-center justify-center px-4 sm:px-6 py-3 border border-white/20 text-sm sm:text-base font-semibold font-display rounded-xl text-white bg-gradient-primary shadow-2xl hover:shadow-primary-500/25 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 touch-manipulation backdrop-blur-sm"
          >
            <Download className="mr-2 h-5 w-5" />
            Download JSON
          </button>
          
          <button
            onClick={handleCopy}
            className="inline-flex items-center justify-center px-4 sm:px-6 py-3 border-2 border-white/30 text-sm sm:text-base font-semibold font-display rounded-xl text-white bg-white/10 hover:border-primary-400 hover:bg-white/20 hover:text-primary-300 transition-all duration-300 hover:scale-105 hover:-translate-y-2 touch-manipulation backdrop-blur-sm"
          >
            {copied ? (
              <>
                <Check className="mr-2 h-5 w-5 text-green-500" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="mr-2 h-5 w-5" />
                Copy JSON
              </>
            )}
          </button>
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-primary-500/5"></div>
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white mb-4 sm:mb-6 drop-shadow-xl relative z-10">How it Works</h2>
        <div className="prose prose-sm sm:prose-lg max-w-none font-body text-white/90 drop-shadow-md relative z-10">
          <p>{project.explanation}</p>
        </div>
      </div>

      {/* JSON Display */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/5 via-transparent to-accent-500/5"></div>
        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b border-white/20 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 relative z-10">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white drop-shadow-xl">Workflow JSON</h2>
          <p className="text-sm sm:text-base font-body text-white/90 mt-2 drop-shadow-md">
            Copy this JSON and import it directly into your n8n instance.
          </p>
        </div>
        <div className="p-4 sm:p-6 lg:p-8 relative z-10">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 overflow-auto max-h-96 sm:max-h-none border border-white/10">
            <pre className="text-xs sm:text-sm font-mono text-green-300 whitespace-pre-wrap break-words drop-shadow-sm">
              <code>{JSON.stringify(project.jsonData, null, 2)}</code>
            </pre>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};