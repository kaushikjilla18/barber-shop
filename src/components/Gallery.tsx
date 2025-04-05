import React from 'react';
import Image from 'next/image';

const Gallery: React.FC = () => {
  const images = [
    {
      src: '/images/gallery-1.jpg',
      alt: 'Professional Haircut',
      title: 'Expert Styling',
      description: 'Modern cuts with classic techniques',
    },
    {
      src: '/images/gallery-2.jpg',
      alt: 'Vintage Barbershop',
      title: 'Classic Experience',
      description: 'Traditional barbershop atmosphere',
    },
    {
      src: '/images/gallery-3.jpg',
      alt: 'Beard Grooming',
      title: 'Beard Care',
      description: 'Expert beard styling and maintenance',
    },
    {
      src: '/images/gallery-4.jpg',
      alt: 'Premium Service',
      title: 'Premium Service',
      description: 'Luxury grooming experience',
    },
    {
      src: '/images/gallery-5.jpg',
      alt: 'Modern Styling',
      title: 'Modern Techniques',
      description: 'Contemporary styles for today\'s man',
    },
    {
      src: '/images/gallery-6.jpg',
      alt: 'Precision Cuts',
      title: 'Precision Detail',
      description: 'Meticulous attention to detail',
    },
  ];

  return (
    <section id="gallery" className="section bg-white">
      <div className="container">
        <h2 className="section-title text-center">Our Gallery</h2>
        <p className="section-subtitle text-center">
          Experience our commitment to excellence through our portfolio of premium services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-hover transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 