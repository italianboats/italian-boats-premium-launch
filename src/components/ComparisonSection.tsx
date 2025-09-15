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
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold text-italian-navy mb-6">
            A Verdade Sobre Barcos Usados
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
            Descubra por que escolher um barco personalizado é o melhor investimento para sua família
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Barcos Usados - Problemas */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-italian-red/10 rounded-full mb-4">
                <XCircle className="w-8 h-8 text-italian-red" />
              </div>
              <h3 className="text-3xl font-playfair font-bold text-italian-red mb-2">
                Barcos Usados
              </h3>
              <p className="text-charcoal">Os riscos que você precisa conhecer</p>
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
                    <h4 className="font-semibold text-lg text-italian-red mb-2">{item.title}</h4>
                    <p className="text-charcoal">{item.description}</p>
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
              <h3 className="text-3xl font-playfair font-bold text-luxury-gold mb-2">
                Italian Boats
              </h3>
              <p className="text-charcoal">A excelência que você merece</p>
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
                    <h4 className="font-semibold text-lg text-italian-navy mb-2">{item.title}</h4>
                    <p className="text-charcoal">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-3xl font-playfair font-bold text-italian-navy mb-4">
            Pare de aceitar o que existe. Crie o barco dos seus sonhos.
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