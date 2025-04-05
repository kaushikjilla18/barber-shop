import React from 'react';
import Image from 'next/image';

const Barbers: React.FC = () => {
  const barbers = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Master Barber',
      image: '/images/barber-1.jpg',
      specialties: ['Classic Cuts', 'Beard Styling'],
      experience: '15+ years',
    },
    {
      id: 2,
      name: 'Mike Johnson',
      role: 'Senior Barber',
      image: '/images/barber-2.jpg',
      specialties: ['Modern Fades', 'Hair Design'],
      experience: '10+ years',
    },
    {
      id: 3,
      name: 'David Wilson',
      role: 'Style Expert',
      image: '/images/barber-3.jpg',
      specialties: ['Trendy Styles', 'Color Treatment'],
      experience: '8+ years',
    },
    {
      id: 4,
      name: 'Chris Anderson',
      role: 'Grooming Specialist',
      image: '/images/barber-4.jpg',
      specialties: ['Hot Towel Shave', 'Facial Care'],
      experience: '12+ years',
    },
  ];

  return (
    <section id="barbers" className="section bg-secondary-50">
      <div className="container">
        <h2 className="section-title text-center">Meet Our Expert Barbers</h2>
        <p className="section-subtitle text-center">
          Our team of skilled professionals is dedicated to giving you the perfect look
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {barbers.map((barber) => (
            <div
              key={barber.id}
              className="bg-white rounded-xl p-6 shadow-soft hover:shadow-hover transition-shadow duration-300"
            >
              <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
                <Image
                  src={barber.image}
                  alt={barber.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-bold text-lg text-secondary-900">{barber.name}</h3>
              <p className="text-primary-600 font-medium mb-2">{barber.role}</p>
              <p className="text-secondary-600 text-sm mb-3">{barber.experience} of experience</p>
              <div className="flex flex-wrap gap-2">
                {barber.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="bg-secondary-100 text-secondary-700 text-xs px-3 py-1 rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Barbers; 