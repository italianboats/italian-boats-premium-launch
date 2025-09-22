import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Phone, MessageCircle, Star, Users, Award, Shield, Sparkles, Waves } from 'lucide-react';
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5547999999999?text=Olá! Gostaria de saber mais sobre barcos personalizados da Italian Boats.', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+5547999999999', '_self');
  };

  return (
    <section 
      ref={heroRef}
      className="relative h-screen overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, hsl(var(--luxury-gold) / 0.1) 0%, transparent 50%)`
      }}
    >
      {/* Enhanced Slides Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1500 ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : index === (currentSlide - 1 + slides.length) % slides.length
                ? 'opacity-0 scale-110'
                : 'opacity-0 scale-95'
            }`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%) scale(${
                index === currentSlide ? 1 : index < currentSlide ? 0.95 : 1.05
              })`,
            }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={slide.image}
                alt={slide.titleParts.map(part => part.text).join('')}
                className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${
                  index === currentSlide ? 'scale-110' : 'scale-100'
                }`}
                style={{
                  transform: `scale(${index === currentSlide ? 1.1 : 1}) translate(${
                    mousePosition.x * -20
                  }px, ${mousePosition.y * -10}px)`
                }}
              />
              <div className="absolute inset-0 bg-gradient-hero" />
              <div className="absolute inset-0 bg-gradient-to-t from-italian-navy/60 via-transparent to-transparent" />
              
              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-luxury-gold/30 rounded-full animate-float"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + i * 10}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + i * 0.5}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            <div
              className={`transition-all duration-1000 ${
                isAnimating 
                  ? 'opacity-0 transform translate-y-12 scale-95' 
                  : 'opacity-100 transform translate-y-0 scale-100'
              } ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
            >
              {/* Decorative element */}
              <div className="flex items-center mb-6 animate-slide-in-right">
                <Sparkles className="w-6 h-6 text-luxury-gold mr-3 animate-pulse" />
                <span className="text-luxury-gold font-semibold tracking-wider uppercase text-sm">
                  Tradição Italiana Premium
                </span>
                <div className="ml-4 w-16 h-px bg-gradient-luxury"></div>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight relative">
                {slides[currentSlide].titleParts.map((part, index) => (
                  <span
                    key={index}
                    className={`inline-block ${
                      part.font === 'primary' ? 'hero-title-primary' : 'hero-title-secondary'
                    }`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      transform: `translateX(${mousePosition.x * 10}px)`
                    }}
                  >
                    {part.text}
                  </span>
                ))}
                <div className="absolute -top-4 -right-4 w-8 h-8 border border-luxury-gold/30 rounded-full animate-pulse"></div>
              </h1>
              
              <p className="hero-subtitle text-xl md:text-3xl text-silver-mist mb-12 max-w-4xl leading-relaxed relative">
                <span className="relative z-10">{slides[currentSlide].subtitle}</span>
                <div className="absolute bottom-0 left-0 w-20 h-px bg-gradient-luxury animate-pulse"></div>
              </p>
              
              {/* Enhanced CTAs */}
              <div className="flex flex-col sm:flex-row gap-8 mb-16">
                <button
                  onClick={handleCall}
                  className="btn-luxury group relative overflow-hidden"
                >
                  <Phone className="w-6 h-6 mr-4 group-hover:animate-bounce relative z-10" />
                  <span className="relative z-10">Ligar Agora</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="btn-outline-luxury group relative overflow-hidden"
                >
                  <MessageCircle className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform relative z-10" />
                  <span className="relative z-10">Falar com Especialista</span>
                  <Waves className="w-4 h-4 ml-2 group-hover:animate-pulse relative z-10" />
                </button>
              </div>

              {/* Enhanced Floating Badge */}
              <div className="floating-badge inline-flex items-center space-x-8 animate-float relative">
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <Award className="w-6 h-6 text-luxury-gold group-hover:animate-pulse" />
                  <div>
                    <span className="font-bold text-lg block">25+</span>
                    <span className="text-xs opacity-80">Anos</span>
                  </div>
                </div>
                <div className="w-px h-8 bg-luxury-gold/20"></div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <Users className="w-6 h-6 text-luxury-gold group-hover:animate-pulse" />
                  <div>
                    <span className="font-bold text-lg block">1000+</span>
                    <span className="text-xs opacity-80">Embarcações</span>
                  </div>
                </div>
                <div className="w-px h-8 bg-luxury-gold/20"></div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <Shield className="w-6 h-6 text-luxury-gold group-hover:animate-pulse" />
                  <div>
                    <span className="font-bold text-lg block">100%</span>
                    <span className="text-xs opacity-80">Garantia</span>
                  </div>
                </div>
                <div className="w-px h-8 bg-luxury-gold/20"></div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <Star className="w-6 h-6 text-luxury-gold fill-current group-hover:animate-pulse" />
                  <div>
                    <span className="font-bold text-lg block">★★★★★</span>
                    <span className="text-xs opacity-80">Excelência</span>
                  </div>
                </div>
                
                {/* Badge glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-luxury opacity-5 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/15 hover:bg-luxury-gold/20 backdrop-blur-xl p-5 rounded-2xl transition-all duration-500 hover:scale-110 hover:-translate-x-1 border border-white/20 hover:border-luxury-gold/30 group"
        disabled={isAnimating}
      >
        <ChevronLeft className="w-7 h-7 text-white group-hover:text-luxury-gold transition-colors" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-luxury opacity-0 group-hover:opacity-20 transition-opacity"></div>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/15 hover:bg-luxury-gold/20 backdrop-blur-xl p-5 rounded-2xl transition-all duration-500 hover:scale-110 hover:translate-x-1 border border-white/20 hover:border-luxury-gold/30 group"
        disabled={isAnimating}
      >
        <ChevronRight className="w-7 h-7 text-white group-hover:text-luxury-gold transition-colors" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-luxury opacity-0 group-hover:opacity-20 transition-opacity"></div>
      </button>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative group transition-all duration-500 ${
              index === currentSlide
                ? 'w-12 h-4 bg-luxury-gold rounded-full scale-110'
                : 'w-4 h-4 bg-white/40 hover:bg-white/70 rounded-full hover:scale-110'
            }`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 rounded-full bg-luxury-gold animate-pulse"></div>
            )}
            <div className="absolute -inset-2 rounded-full border border-luxury-gold/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        ))}
      </div>

      {/* Enhanced Ocean Wave */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-r from-marine-blue via-ocean-blue to-azure-blue opacity-25 overflow-hidden">
        <div className="ocean-wave animate-wave"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-luxury opacity-30 animate-pulse"></div>
      </div>
      
      {/* Ambient lighting effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 30}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-azure-blue/5 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -40}px)`,
            animationDelay: '1s'
          }}
        ></div>
      </div>
    </section>
  );
};

export default HeroSlider;