import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, MessageCircle, Star, Users, Award, Shield } from 'lucide-react';
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import heroSlide4 from '@/assets/hero-slide-4.jpg';
import heroSlide5 from '@/assets/hero-slide-5.jpg';

const slides = [
  {
    image: heroSlide1,
    titleParts: [
      { text: "Na Italian Boats você ", font: "primary" },
      { text: "não compra barco usado.", font: "secondary" }
    ],
    subtitle: "Você encomenda um barco novo, feito do zero, sob medida para você."
  },
  {
    image: heroSlide2,
    titleParts: [
      { text: "Tradição Italiana em ", font: "secondary" },
      { text: "Cada Detalhe", font: "primary" }
    ],
    subtitle: "25+ anos criando embarcações exclusivas com a excelência do design italiano."
  },
  {
    image: heroSlide3,
    titleParts: [
      { text: "Marina Porto Bello", font: "primary" },
      { text: " - SC", font: "secondary" }
    ],
    subtitle: "Localização privilegiada com infraestrutura completa para seu projeto náutico."
  },
  {
    image: heroSlide4,
    titleParts: [
      { text: "Artesãos ", font: "secondary" },
      { text: "Especializados", font: "primary" }
    ],
    subtitle: "Cada barco é uma obra de arte, construído com técnicas tradicionais italianas."
  },
  {
    image: heroSlide5,
    titleParts: [
      { text: "Clientes ", font: "primary" },
      { text: "Satisfeitos", font: "secondary" }
    ],
    subtitle: "Mais de 1000+ embarcações entregues e famílias realizando seus sonhos."
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5547999999999?text=Olá! Gostaria de saber mais sobre barcos personalizados da Italian Boats.', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+5547999999999', '_self');
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.titleParts.map(part => part.text).join('')}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-italian-navy/80 via-transparent to-italian-navy/60" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div
              className={`transition-all duration-700 ${
                isAnimating ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
              }`}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {slides[currentSlide].titleParts.map((part, index) => (
                  <span
                    key={index}
                    className={part.font === 'primary' ? 'hero-title-primary' : 'hero-title-secondary'}
                  >
                    {part.text}
                  </span>
                ))}
              </h1>
              <p className="hero-subtitle text-xl md:text-2xl text-silver-mist mb-10 max-w-3xl leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <button
                  onClick={handleCall}
                  className="btn-luxury group animate-pulse-luxury"
                >
                  <Phone className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                  Ligar Agora
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="btn-outline-luxury group"
                >
                  <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Falar com Especialista
                </button>
              </div>

              {/* Floating Badge */}
              <div className="floating-badge inline-flex items-center space-x-6 animate-float">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-luxury-gold" />
                  <span className="font-semibold">25+ Anos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-luxury-gold" />
                  <span className="font-semibold">1000+ Embarcações</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-luxury-gold" />
                  <span className="font-semibold">Garantia Completa</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-luxury-gold fill-current" />
                  <span className="font-semibold">Excelência</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all duration-300 hover:scale-110"
        disabled={isAnimating}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all duration-300 hover:scale-110"
        disabled={isAnimating}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-luxury-gold scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Ocean Wave */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-r from-marine-blue to-ocean-blue opacity-20">
        <div className="ocean-wave"></div>
      </div>
    </section>
  );
};

export default HeroSlider;