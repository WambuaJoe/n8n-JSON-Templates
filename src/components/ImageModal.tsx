import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src, alt }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setScale(1);
      setPosition({ x: 0, y: 0 });
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      {/* Controls */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
        <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-lg p-2">
          <button
            onClick={handleZoomOut}
            className="p-2 text-white hover:text-primary-300 transition-colors rounded-md hover:bg-white/10"
            title="Zoom Out"
          >
            <ZoomOut className="h-5 w-5" />
          </button>
          <button
            onClick={handleReset}
            className="p-2 text-white hover:text-primary-300 transition-colors rounded-md hover:bg-white/10"
            title="Reset"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
          <button
            onClick={handleZoomIn}
            className="p-2 text-white hover:text-primary-300 transition-colors rounded-md hover:bg-white/10"
            title="Zoom In"
          >
            <ZoomIn className="h-5 w-5" />
          </button>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-white hover:text-red-400 transition-colors bg-black/50 backdrop-blur-sm rounded-lg hover:bg-red-500/20"
          title="Close"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Zoom indicator */}
      <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm font-medium">
        {Math.round(scale * 100)}%
      </div>

      {/* Image container */}
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden cursor-move"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-none max-h-none object-contain transition-transform duration-200 select-none"
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
          }}
          draggable={false}
        />
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm text-center">
        {scale > 1 ? 'Click and drag to pan • ' : ''}Use zoom controls or scroll wheel • Press ESC to close
      </div>
    </div>
  );
};