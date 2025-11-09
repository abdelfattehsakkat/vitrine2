'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  placeholder?: 'blur' | 'empty';
  fill?: boolean;
  sizes?: string;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false, 
  className = '',
  placeholder = 'empty',
  fill = false,
  sizes 
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Image par défaut si erreur
  const fallbackSrc = '/images/misc/placeholder.svg';

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton loader pendant le chargement */}
      {isLoading && !imageError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
      )}
      
      <Image
        src={imageError ? fallbackSrc : src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        sizes={sizes}
        priority={priority}
        placeholder={placeholder}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${fill ? 'object-cover' : ''}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImageError(true);
          setIsLoading(false);
        }}
      />
    </div>
  );
}