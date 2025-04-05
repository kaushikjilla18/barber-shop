import React from 'react';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Booking from '../components/Booking';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/hero-bg.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>
        <div className="relative h-full flex items-center pt-20">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <span className="inline-block px-5 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm font-medium">
                    Premium Barber Experience
                  </span>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight"
                >
                  <span className="block">Classic Cuts</span>
                  <span className="block text-primary-400 mt-3">Modern Style</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg text-gray-300 mb-10 max-w-lg"
                >
                  Experience the perfect blend of traditional barbering and contemporary style. Our expert barbers deliver precision cuts and unmatched service.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-5"
                >
                  <Link
                    to="booking"
                    smooth={true}
                    duration={500}
                    className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-soft hover:shadow-hover"
                  >
                    Book Appointment
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm"
                  >
                    View Services
                  </Link>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary-600/20 rounded-2xl blur-2xl"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-6">
                        <div className="bg-white/10 p-5 rounded-lg">
                          <h3 className="text-white font-medium mb-3">Opening Hours</h3>
                          <p className="text-gray-300 text-sm mb-2">Mon - Sat: 9am - 8pm</p>
                          <p className="text-gray-300 text-sm">Sunday: 10am - 6pm</p>
                        </div>
                        <div className="bg-white/10 p-5 rounded-lg">
                          <h3 className="text-white font-medium mb-3">Contact</h3>
                          <p className="text-gray-300 text-sm mb-2">+1 (555) 123-4567</p>
                          <p className="text-gray-300 text-sm">info@classiccuts.com</p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-white/10 p-5 rounded-lg">
                          <h3 className="text-white font-medium mb-3">Location</h3>
                          <p className="text-gray-300 text-sm mb-2">123 Barber Street</p>
                          <p className="text-gray-300 text-sm">New York, NY 10001</p>
                        </div>
                        <div className="bg-white/10 p-5 rounded-lg">
                          <h3 className="text-white font-medium mb-3">Follow Us</h3>
                          <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                              </svg>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                              </svg>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="flex items-center text-white hover:text-primary-400 transition-colors duration-300"
          >
            <span className="mr-2 text-sm">Scroll Down</span>
            <svg
              className="w-4 h-4 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </Link>
        </motion.div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="py-24 space-y-32">
          <About />
          <Services />
          <Gallery />
          <Testimonials />
          <Booking />
        </div>
      </div>

      <Footer />
    </main>
  );
} 