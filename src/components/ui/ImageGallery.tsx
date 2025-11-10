'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { Button } from '@/components/ui/button';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
  className?: string;
}

export default function ImageGallery({ images, title, className = '' }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0
      );
    }
  };

  // Gestion des touches clavier
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <div className={className}>
      {title && (
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          {title}
        </h3>
      )}
      
      {/* Grille d'images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative cursor-pointer"
            onClick={() => openModal(index)}
          >
            <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 aspect-[4/3]">
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay au survol */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 w-8 h-8" />
              </div>
            </div>
            
            {/* Titre et description */}
            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {image.title}
              </h4>
              {image.description && (
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {image.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton fermer */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white hover:bg-opacity-70"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Boutons navigation */}
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white hover:bg-opacity-70"
                    onClick={goToPrevious}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white hover:bg-opacity-70"
                    onClick={goToNext}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </>
              )}

              {/* Image */}
              <div className="relative">
                <OptimizedImage
                  src={images[selectedImageIndex].src}
                  alt={images[selectedImageIndex].alt}
                  width={800}
                  height={600}
                  className="max-h-[80vh] object-contain rounded-lg"
                />
                
                {/* Informations image */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 rounded-b-lg">
                  <h4 className="font-semibold text-lg">
                    {images[selectedImageIndex].title}
                  </h4>
                  {images[selectedImageIndex].description && (
                    <p className="text-sm text-gray-300 mt-1">
                      {images[selectedImageIndex].description}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 mt-2">
                    {selectedImageIndex + 1} sur {images.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}