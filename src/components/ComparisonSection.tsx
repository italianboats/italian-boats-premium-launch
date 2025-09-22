import React from 'react';
import { AlertTriangle, CheckCircle, XCircle, Wrench, DollarSign, Clock, Shield, Star } from 'lucide-react';

const ComparisonSection = () => {
  const usedBoatIssues = [
    { icon: AlertTriangle, title: "Reformados", description: "Desgaste e reparos constantes" },
    { icon: XCircle, title: "Sem Garantia", description: "Riscos e custos imprevistos" },
    { icon: Wrench, title: "Manutenção Cara", description: "Peças antigas e difíceis de encontrar" },
    { icon: DollarSign, title: "Desvalorização", description: "Perda de valor acelerada" },
  ];

  const italianBoatsBenefits = [
    { icon: CheckCircle, title: "Novo do Zero", description: "Construção personalizada desde o início" },
    { icon: Shield, title: "Garantia Completa", description: "Proteção total para seu investimento" },
    { icon: Star, title: "Qualidade Premium", description: "Materiais de primeira linha" },
    { icon: Clock, title: "Durabilidade", description: "Construído para durar gerações" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-silver-mist to-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-px bg-gradient-luxury mr-4"></div>
            <span className="text-luxury-gold font-semibold tracking-wider uppercase text-sm font-helvetica-neue">
              Comparação Honesta
            </span>
            <div className="w-12 h-px bg-gradient-luxury ml-4"></div>
          </div>
          <h2 className="text-6xl md:text-7xl font-helvetica-neue font-light text-italian-navy mb-8 leading-tight">
            A <span className="font-bold text-luxury-gold">Verdade</span> Sobre Barcos Usados
          </h2>
          <p className="text-2xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed font-helvetica-narrow">
            Descubra por que escolher um barco personalizado é o melhor investimento para sua família e seu futuro
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Barcos Usados - Problemas */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-italian-red/10 rounded-full mb-4">
                <XCircle className="w-8 h-8 text-italian-red" />
              </div>
              <h3 className="text-4xl font-helvetica-neue font-bold text-italian-red mb-3 leading-tight">
                Barcos <span className="font-light">Usados</span>
              </h3>
              <p className="text-charcoal/80 font-helvetica-narrow text-lg">Os riscos que você precisa conhecer</p>
            </div>

            <div className="space-y-6">
              {usedBoatIssues.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-elegant hover:shadow-luxury transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-italian-red/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-italian-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-italian-red mb-2 font-helvetica-neue">{item.title}</h4>
                    <p className="text-charcoal/80 font-helvetica-narrow">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Italian Boats - Benefícios */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-4xl font-helvetica-neue font-bold text-luxury-gold mb-3 leading-tight">
                Italian <span className="font-light">Boats</span>
              </h3>
              <p className="text-charcoal/80 font-helvetica-narrow text-lg">A excelência que você merece</p>
            </div>

            <div className="space-y-6">
              {italianBoatsBenefits.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-br from-white to-silver-mist/50 rounded-xl shadow-elegant hover:shadow-gold transition-all duration-300 animate-fade-in-up hover:-translate-y-2"
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-italian-navy mb-2 font-helvetica-neue">{item.title}</h4>
                    <p className="text-charcoal/80 font-helvetica-narrow">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-4xl md:text-5xl font-helvetica-neue font-bold text-italian-navy mb-6 leading-tight">
            Pare de aceitar o que existe. <span className="text-luxury-gold">Crie</span> o barco dos seus sonhos.
          </h3>
          <button className="btn-luxury mt-6">
            Solicitar Orçamento Personalizado
          </button>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-luxury opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-italian opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ComparisonSection;