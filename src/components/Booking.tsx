import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const services = [
    'Classic Haircut',
    'Beard Trim',
    'Hot Towel Shave',
    'Hair & Beard Combo',
  ];

  return (
    <section id="booking" className="section bg-primary-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading">Book Your Appointment</h2>
          <p className="subheading max-w-3xl mx-auto">
            Schedule your next visit with us. We'll confirm your appointment shortly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-primary p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-accent-gold">
              Booking Information
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Working Hours</h4>
                <p className="text-gray-300">Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p className="text-gray-300">Saturday: 10:00 AM - 6:00 PM</p>
                <p className="text-gray-300">Sunday: Closed</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Contact</h4>
                <p className="text-gray-300">Phone: (555) 123-4567</p>
                <p className="text-gray-300">Email: info@classiccuts.com</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Location</h4>
                <p className="text-gray-300">123 Barber Street</p>
                <p className="text-gray-300">New York, NY 10001</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-primary border border-gray-700 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-primary border border-gray-700 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-colors duration-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-primary border border-gray-700 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-primary border border-gray-700 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-colors duration-300"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-2">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-primary border border-gray-700 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium mb-2">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-primary border border-gray-700 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-colors duration-300"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-md bg-primary border border-gray-700 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-colors duration-300"
              />
            </div>

            <button
              type="submit"
              className="w-full btn btn-primary"
            >
              Book Appointment
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Booking; 