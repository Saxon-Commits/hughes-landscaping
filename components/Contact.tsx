import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: 'General Inquiry', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Contact Us</h2>
          <p className="text-lg text-slate-600">
            Ready to transform your garden? Get in touch for a free, no-obligation quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900">Phone</h4>
                  <p className="text-slate-600">+61 400 123 456</p>
                  <p className="text-sm text-slate-500 mt-1">Mon-Fri, 7am - 5pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900">Email</h4>
                  <p className="text-slate-600">hello@hugheslandscaping.com.au</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900">Service Area</h4>
                  <p className="text-slate-600">Perth Metropolitan Area & Surrounds</p>
                  <p className="text-sm text-slate-500 mt-1">Western Australia</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900">Working Hours</h4>
                  <p className="text-slate-600">Monday - Friday: 7:00 AM - 5:00 PM</p>
                  <p className="text-slate-600">Saturday: By Appointment</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Why choose Hughes Landscaping?</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>Fully Insured</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>Police Cleared</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>Reliable & Punctual</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>Competitive Rates</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
             {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600">Thanks for reaching out. Mr. Hughes will get back to you shortly.</p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Service Required</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white"
                >
                  <option>General Inquiry</option>
                  <option>Lawn Mowing</option>
                  <option>Garden Cleanup</option>
                  <option>Gutter Cleaning</option>
                  <option>Pruning/Weeding</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your garden needs..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
