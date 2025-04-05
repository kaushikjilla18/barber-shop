import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      name: 'Classic Haircut',
      description: 'Traditional cut with clippers and scissors, including consultation.',
      price: '$35',
      duration: '45 min',
      icon: '💇‍♂️',
    },
    {
      name: 'Beard Trim',
      description: 'Precision beard shaping and trimming with hot towel treatment.',
      price: '$25',
      duration: '30 min',
      icon: '🧔',
    },
    {
      name: 'Hot Towel Shave',
      description: 'Traditional straight razor shave with hot towel treatment.',
      price: '$40',
      duration: '45 min',
      icon: '🪒',
    },
    {
      name: 'Hair & Beard Combo',
      description: 'Complete grooming package including haircut and beard trim.',
      price: '$55',
      duration: '60 min',
      icon: '✨',
    },
  ];

  return (
    <section id="services" className="section bg-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading">Our Services</h2>
          <p className="subheading max-w-3xl mx-auto">
            Experience the perfect blend of traditional techniques and modern style.
            Each service is tailored to your preferences and executed with precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-primary-light p-6 rounded-lg hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-accent-gold">
                {service.name}
              </h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-white">{service.price}</span>
                <span className="text-sm text-gray-400">{service.duration}</span>
              </div>
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
          <p className="text-gray-300 mb-8">
            All services include a complimentary consultation and styling advice.
          </p>
          <a
            href="#booking"
            className="btn btn-primary inline-block"
          >
            Book Your Service
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 