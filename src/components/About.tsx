import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const values = [
    {
      title: 'Expert Craftsmanship',
      description: 'Years of experience and precision in every cut.',
      icon: '✂️',
    },
    {
      title: 'Premium Products',
      description: 'Using only the finest grooming products.',
      icon: '🌟',
    },
    {
      title: 'Relaxing Atmosphere',
      description: 'A welcoming space for your grooming needs.',
      icon: '🪑',
    },
    {
      title: 'Customer Care',
      description: 'Dedicated to your satisfaction and comfort.',
      icon: '💝',
    },
  ];

  return (
    <section id="about" className="section bg-primary-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading">Our Story</h2>
          <p className="subheading max-w-3xl mx-auto">
            Since 2010, we've been providing premium grooming services with a focus on
            traditional techniques and modern style. Our experienced barbers are
            passionate about their craft and dedicated to giving you the perfect look.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-primary p-6 rounded-lg text-center hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-accent-gold">
                {value.title}
              </h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src="/images/barber-1.jpg"
                alt="Our barber"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src="/images/barber-2.jpg"
                alt="Our barber"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 