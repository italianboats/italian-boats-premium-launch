import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, Tag } from 'lucide-react';

const galleryCategories = [
  {
    id: 'lanchas',
    name: 'Lanchas',
    description: 'Lanchas esportivas e de luxo personalizadas',
    items: [
      {
        id: 1,
        title: 'Lancha Esportiva Italian 35',
        description: 'Lancha esportiva com motor 350HP, acabamento em couro italiano',
        category: 'Lanchas',
        specs: ['35 pés', '350HP', 'Couro Italiano', '8 pessoas'],
        image: '/api/placeholder/600/400'
      },
      {
        id: 2,
        title: 'Lancha Fishing Italian 28',
        description: 'Perfeita para pesca esportiva com equipamentos profissionais',
        category: 'Lanchas',
        specs: ['28 pés', '250HP', 'Equipada Pesca', '6 pessoas'],
        image: '/api/placeholder/600/400'
      }
    ]
  },
  {
    id: 'barcos',
    name: 'Barcos',
    description: 'Barcos clássicos com design italiano',
    items: [
      {
        id: 3,
        title: 'Barco Clássico Venetian',
        description: 'Barco familiar com design clássico e conforto moderno',
        category: 'Barcos',
        specs: ['32 pés', '200HP', 'Design Clássico', '10 pessoas'],
        image: '/api/placeholder/600/400'
      }
    ]
  },
  {
    id: 'carretas',
    name: 'Carretas',
    description: 'Carretas náuticas especializadas',
    items: [
      {
        id: 4,
        title: 'Carreta Náutica Premium',
        description: 'Carreta galvanizada para barcos até 35 pés',
        category: 'Carretas',
        specs: ['35 pés', 'Galvanizada', 'Freios ABS', 'Garantia 5 anos'],
        image: '/api/placeholder/600/400'
      }
    ]
  },
  {
    id: 'acessorios',
    name: 'Acessórios',
    description: 'Acessórios premium para embarcações',
    items: [
      {
        id: 5,
        title: 'Kit Navegação Premium',
        description: 'Kit completo de navegação com GPS e sonar',
        category: 'Acessórios',
        specs: ['GPS Marine', 'Sonar HD', 'Radar', 'Instalação Incluída'],
        image: '/api/placeholder/600/400'
      }
    ]
  }
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('lanchas');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const activeItems = galleryCategories.find(cat => cat.id === activeCategory)?.items || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % activeItems.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + activeItems.length) % activeItems.length);
  };

  const openModal = (item: any) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-silver-mist/20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold text-italian-navy mb-6">
            Galeria Exclusiva
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
            Conheça nossa linha completa de embarcações e acessórios personalizados
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'btn-luxury'
                  : 'bg-white/80 text-italian-navy hover:bg-white border border-platinum hover:shadow-elegant'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(item)}
              >
                <div className="luxury-card p-6 h-full">
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-italian-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                      <Expand className="w-5 h-5 text-italian-navy" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-playfair font-bold text-italian-navy mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-charcoal text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Specs */}
                    <div className="flex flex-wrap gap-2">
                      {item.specs.slice(0, 2).map((spec: string, specIndex: number) => (
                        <span
                          key={specIndex}
                          className="px-3 py-1 bg-luxury-gold/10 text-luxury-gold text-xs font-semibold rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <button className="w-full mt-4 py-3 text-italian-navy font-semibold hover:text-luxury-gold transition-colors duration-300 flex items-center justify-center space-x-2">
                      <span>Ver Detalhes</span>
                      <Expand className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {activeItems.length > 3 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-elegant hover:shadow-luxury flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-italian-navy" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-elegant hover:shadow-luxury flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-italian-navy" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-italian-navy/80 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={closeModal}>
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-luxury animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-96 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-elegant hover:shadow-luxury transition-all duration-300"
              >
                <span className="text-italian-navy text-xl font-bold">×</span>
              </button>
            </div>

            <div className="p-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-playfair font-bold text-italian-navy">
                    {selectedItem.title}
                  </h3>
                  <span className="px-4 py-2 bg-luxury-gold/10 text-luxury-gold font-semibold rounded-full">
                    {selectedItem.category}
                  </span>
                </div>
                <p className="text-charcoal text-lg leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              {/* All Specs */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-italian-navy mb-4">Especificações</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedItem.specs.map((spec: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Tag className="w-4 h-4 text-luxury-gold" />
                      <span className="text-charcoal">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-luxury flex-1">
                  Solicitar Orçamento
                </button>
                <button className="btn-outline-luxury flex-1">
                  Agendar Visita
                </button>
              </div>
            </div>
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