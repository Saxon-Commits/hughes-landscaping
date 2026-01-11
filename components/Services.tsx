import React from 'react';
import { Scissors, Trash2, Wind, Droplets, Shovel, Flower2, Home, CheckCircle } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Lawn Mowing",
    description: "Regular scheduled mowing to keep your lawn looking sharp and healthy. Edging included for a crisp finish.",
    icon: <Wind className="w-6 h-6" />
  },
  {
    title: "Whipper Snipping",
    description: "Taming overgrown edges and hard-to-reach areas that mowers can't touch.",
    icon: <Scissors className="w-6 h-6" />
  },
  {
    title: "General Cleanups",
    description: "Full garden tidy-ups including leaf blowing, debris removal, and getting your yard back to its best.",
    icon: <Home className="w-6 h-6" />
  },
  {
    title: "Green Waste Removal",
    description: "We take the mess with us. Hassle-free removal of clippings, branches, and garden refuse.",
    icon: <Trash2 className="w-6 h-6" />
  },
  {
    title: "Gutter Cleaning",
    description: "Essential maintenance to prevent water damage and fire hazards. Safe and efficient removal of debris.",
    icon: <Droplets className="w-6 h-6" />
  },
  {
    title: "Pressure Washing",
    description: "Revitalize your driveway, paths, and patio with high-pressure cleaning to remove grime and moss.",
    icon: <Droplets className="w-6 h-6" />
  },
  {
    title: "Weeding",
    description: "Manual weeding and preventative treatments to keep garden beds pristine.",
    icon: <Shovel className="w-6 h-6" />
  },
  {
    title: "Pruning",
    description: "Expert pruning for hedges, roses, and shrubs to promote growth and maintain shape.",
    icon: <Flower2 className="w-6 h-6" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive landscaping care for residential and commercial properties across Western Australia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-emerald-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-emerald-100">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-emerald-900 mb-2">Need something specific?</h3>
            <p className="text-emerald-700">We offer custom packages tailored to your garden's needs.</p>
          </div>
          <a href="#contact" className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors">
            Get a Free Quote
            <CheckCircle className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
