import React from 'react';
import Image from 'next/image';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'James Wilson',
      role: 'Business Professional',
      image: '/images/review-1.jpg',
      quote: 'The best barbershop experience I\'ve ever had. The attention to detail and professional service is unmatched.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Brown',
      role: 'Creative Director',
      image: '/images/review-2.jpg',
      quote: 'I\'ve been coming here for years and have never been disappointed. They truly understand what you want.',
      rating: 5,
    },
    {
      id: 3,
      name: 'David Martinez',
      role: 'Entrepreneur',
      image: '/images/review-3.jpg',
      quote: 'Exceptional service every time. The atmosphere is great and the results are always perfect.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Robert Taylor',
      role: 'Marketing Executive',
      image: '/images/review-4.jpg',
      quote: 'Found my go-to barbershop. The skill level and professionalism here is outstanding.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section bg-secondary-50">
      <div className="container">
        <h2 className="section-title text-center">Customer Reviews</h2>
        <p className="section-subtitle text-center">
          Don't just take our word for it - hear what our clients have to say
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-soft hover:shadow-hover transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-secondary-900">{testimonial.name}</h3>
                  <p className="text-secondary-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-secondary-700 italic">"{testimonial.quote}"</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 