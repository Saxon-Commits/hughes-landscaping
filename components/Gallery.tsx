import React from 'react';

// Explicitly import verified images to ensure build-time checking
// Corrected paths to point to src directory: ../src/assets/gallery/...
import img1 from '../src/assets/gallery/image1.jpg';
import img2 from '../src/assets/gallery/image2.jpg';
import img3 from '../src/assets/gallery/image3.jpg';
import img4 from '../src/assets/gallery/image4.jpg';
import img5 from '../src/assets/gallery/image5.jpg';
import img6 from '../src/assets/gallery/image6.jpg';
import img7 from '../src/assets/gallery/image7.jpg';
import img8 from '../src/assets/gallery/image8.jpg';
import img9 from '../src/assets/gallery/image9.jpg';
import img10 from '../src/assets/gallery/image10.jpg';
import img11 from '../src/assets/gallery/image11.jpg';
import img12 from '../src/assets/gallery/image12.jpg';
import img13 from '../src/assets/gallery/image13.jpg';
import img14 from '../src/assets/gallery/image14.jpg';
import img15 from '../src/assets/gallery/image15.jpg';
import img16 from '../src/assets/gallery/image16.jpg';
import img17 from '../src/assets/gallery/image17.jpg';
// img18 was deleted
import img19 from '../src/assets/gallery/image19.jpg';

const Gallery: React.FC = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9,
    img10, img11, img12, img13, img14, img15, img16, img17,
    img19
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Recent Work</h2>
          <p className="text-lg text-slate-600">
            A showcase of our recent landscaping transformations across Perth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl shadow-md group h-64">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
