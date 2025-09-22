import React, { useState, useRef, useEffect } from 'react';
import { Award, Calendar, Anchor, Trophy, Users, Star } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  metric: string;
}

const timelineItems: TimelineItem[] = [
  {
    year: "1998",
    title: "Fundação",
    description: "Italian Boats nasce com a tradição italiana",
    icon: Anchor,
    metric: "Início da jornada"
  },
  {
    year: "2005",
    title: "Expansão",
    description: "Primeira marina e oficina especializada",
    icon: Award,
    metric: "100+ barcos"
  },
  {
    year: "2012",
    title: "Excelência",
    description: "Reconhecimento nacional em qualidade",
    icon: Trophy,
    metric: "500+ clientes"
  },
  {
    year: "2020",
    title: "Inovação",
    description: "Tecnologia de ponta em construção náutica",
    icon: Star,
    metric: "800+ embarcações"
  },
  {
    year: "2024",
    title: "Liderança",
    description: "Referência em barcos personalizados",
    icon: Users,
    metric: "1000+ realizações"
  }
];

const TraditionSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleTimelineClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-italian relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-px bg-luxury-gold mr-4"></div>
            <span className="text-luxury-gold font-semibold tracking-wider uppercase text-sm font-helvetica-neue">
              Nossa História
            </span>
            <div className="w-12 h-px bg-luxury-gold ml-4"></div>
          </div>
          <h2 className="text-6xl md:text-7xl font-helvetica-neue font-light text-white mb-8 leading-tight">
            <span className="font-bold text-luxury-gold">Excelência</span> em Cada Detalhe
          </h2>
          <p className="text-2xl text-silver-mist/90 max-w-4xl mx-auto leading-relaxed font-helvetica-narrow">
            25+ anos construindo sonhos sobre as águas com a tradição e qualidade italiana que nos define
          </p>
        </div>

        {/* Timeline Horizontal Interativa */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-luxury-gold/30 transform -translate-y-1/2"></div>
          
          {/* Timeline Items */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center cursor-pointer transition-all duration-500 group ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => handleTimelineClick(index)}
              >
                {/* Timeline Node */}
                <div
                  className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-luxury-gold shadow-gold scale-110'
                      : 'bg-white/20 hover:bg-white/30 hover:scale-105'
                  }`}
                >
                  <item.icon 
                    className={`w-8 h-8 transition-colors duration-300 ${
                      activeIndex === index ? 'text-italian-navy' : 'text-white'
                    }`} 
                  />
                  
                  {/* Pulse Animation for Active Item */}
                  {activeIndex === index && (
                    <div className="absolute inset-0 rounded-full bg-luxury-gold animate-ping opacity-20"></div>
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`text-center max-w-xs transition-all duration-500 ${
                    activeIndex === index
                      ? 'transform scale-105 opacity-100'
                      : 'opacity-75 hover:opacity-90'
                  }`}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-3xl font-helvetica-neue font-bold text-luxury-gold mb-3 tracking-tight">
                      {item.year}
                    </h3>
                    <h4 className="text-xl font-helvetica-neue font-bold text-white mb-3 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-silver-mist/90 text-base mb-4 font-helvetica-narrow leading-relaxed">
                      {item.description}
                    </p>
                    <div className="text-luxury-gold font-bold text-base font-helvetica-neue">
                      {item.metric}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Achievement */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center space-x-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8 animate-float">
            <div className="text-center group cursor-pointer">
              <div className="text-5xl font-helvetica-neue font-bold text-luxury-gold mb-3 group-hover:scale-110 transition-transform">25+</div>
              <div className="text-silver-mist font-helvetica-narrow font-medium">Anos de Tradição</div>
            </div>
            <div className="w-px h-16 bg-luxury-gold/30"></div>
            <div className="text-center group cursor-pointer">
              <div className="text-5xl font-helvetica-neue font-bold text-luxury-gold mb-3 group-hover:scale-110 transition-transform">1000+</div>
              <div className="text-silver-mist font-helvetica-narrow font-medium">Embarcações Entregues</div>
            </div>
            <div className="w-px h-16 bg-luxury-gold/30"></div>
            <div className="text-center group cursor-pointer">
              <div className="text-5xl font-helvetica-neue font-bold text-luxury-gold mb-3 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-silver-mist font-helvetica-narrow font-medium">Famílias Satisfeitas</div>
            </div>
            <div className="w-px h-16 bg-luxury-gold/30"></div>
            <div className="text-center group cursor-pointer">
              <div className="text-5xl font-helvetica-neue font-bold text-luxury-gold mb-3 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-silver-mist font-helvetica-narrow font-medium">Qualidade Garantida</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-luxury-gold/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-luxury-gold rounded-full animate-ping"></div>
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/50 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
};

export default TraditionSection;