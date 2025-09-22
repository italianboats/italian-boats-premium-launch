import React, { useState } from 'react';
import { Expand } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://growmoneydigital.com.br/italianboats/fotos/foto%20(2).jpg',
    alt: 'Italian Boats - Lancha Premium'
  },
  {
    id: 2,
    src: 'https://growmoneydigital.com.br/italianboats/fotos/foto%20(15).jpg',
    alt: 'Italian Boats - Lancha Esportiva'
  },
  {
    id: 3,
    src: 'https://growmoneydigital.com.br/italianboats/fotos/foto%20(12).jpg',
    alt: 'Italian Boats - Barco Clássico'
  },
  {
    id: 4,
    src: 'https://growmoneydigital.com.br/italianboats/fotos/foto%20(11).jpg',
    alt: 'Italian Boats - Lancha de Luxo'
  },
  {
    id: 5,
    src: 'https://growmoneydigital.com.br/italianboats/fotos/foto%20(10).jpg',
    alt: 'Italian Boats - Embarcação Premium'
  },
  {
    id: 6,
    src: 'https://growmoneydigital.com.br/italianboats/fotos/foto%20(9).jpg',
    alt: 'Italian Boats - Lancha Esportiva'
  },
  {
    id: 7,
    src: 'https://growmoneydigital.com.br/italianboats/fotos/foto%20(8).jpg',
    alt: 'Italian Boats - Barco de Luxo'
  },
  {
    id: 8,
    src: 'https://growmoneydigital.com.br/italianboats/fotos/foto%20(7).jpg',
    alt: 'Italian Boats - Lancha Premium'
  },
  {
    id: 9,
    src: 'https://growmoneydigital.com.br/italianboats/fotos/foto%20(6).jpg',
    alt: 'Italian Boats - Embarcação Esportiva'
  },
  {
    id: 10,
    src: 'https://growmoneydigital.com.br/italianboats/fotos/foto%20(5).jpg',
    alt: 'Italian Boats - Lancha de Luxo'
  },
  {
    id: 11,
    src: 'https://growmoneydigital.com.br/italianboats/fotos/foto%20(4).jpg',
    alt: 'Italian Boats - Barco Premium'
  },
  {
    id: 12,
    src: 'https://growmoneydigital.com.br/italianboats/fotos/foto%20(3).jpg',
    alt: 'Italian Boats - Lancha Clássica'
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const openModal = (image: any) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-silver-mist/20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-px bg-gradient-luxury mr-4"></div>
            <span className="text-luxury-gold font-semibold tracking-wider uppercase text-sm font-helvetica-neue">
              Nossa Coleção
            </span>
            <div className="w-12 h-px bg-gradient-luxury ml-4"></div>
          </div>
          <h2 className="text-6xl md:text-7xl font-helvetica-neue font-light text-italian-navy mb-8 leading-tight">
            Galeria <span className="font-bold text-luxury-gold">Exclusiva</span>
          </h2>
          <p className="text-2xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed font-helvetica-narrow">
            Conheça nossa linha completa de embarcações personalizadas com a qualidade italiana
          </p>
        </div>

        {/* Simple Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(image)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-elegant hover:shadow-luxury transition-all duration-500 group-hover:scale-105">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-italian-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                  <Expand className="w-5 h-5 text-italian-navy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-italian-navy/90 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={closeModal}>
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-2xl shadow-luxury"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-elegant hover:shadow-luxury transition-all duration-300"
            >
              <span className="text-italian-navy text-2xl font-bold">×</span>
            </button>
          </div>
        </div>
      )}

      {/* Background Decorations */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-luxury opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-italian opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default GallerySection;