import React from 'react';
import { 
  ShoppingCart, 
  Wrench, 
  Shield, 
  MessageSquare, 
  Palette, 
  GraduationCap,
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    icon: ShoppingCart,
    title: "Vendas Personalizadas",
    description: "Barcos novos construídos sob medida para suas necessidades específicas",
    features: ["Design exclusivo", "Materiais premium", "Entrega garantida"],
    color: "luxury-gold"
  },
  {
    icon: Wrench,
    title: "Manutenção Especializada",
    description: "Serviços completos de manutenção preventiva e corretiva",
    features: ["Oficina própria", "Peças originais", "Técnicos certificados"],
    color: "marine-blue"
  },
  {
    icon: Shield,
    title: "Garantia Estendida",
    description: "Proteção total para seu investimento com cobertura completa",
    features: ["Cobertura ampla", "Suporte 24h", "Sem custos ocultos"],
    color: "italian-red"
  },
  {
    icon: MessageSquare,
    title: "Consultoria Náutica",
    description: "Orientação especializada para escolha e uso de sua embarcação",
    features: ["Análise técnica", "Planejamento", "Suporte contínuo"],
    color: "deep-blue"
  },
  {
    icon: Palette,
    title: "Customização Completa",
    description: "Personalize cada detalhe do seu barco dos sonhos",
    features: ["Design próprio", "Cores exclusivas", "Acabamentos únicos"],
    color: "golden-sunset"
  },
  {
    icon: GraduationCap,
    title: "Treinamento Náutico",
    description: "Curso completo para pilotagem segura e eficiente",
    features: ["Instrutores experientes", "Prática supervisionada", "Certificação"],
    color: "ocean-blue"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-silver-mist/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold text-italian-navy mb-6">
            Serviços Especializados
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
            Soluções completas em embarcações com a qualidade e tradição italiana
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col h-full">
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 service-icon-${service.color}`}>
                    <service.icon className={`w-8 h-8 service-text-${service.color}`} />
                  </div>
                  <ArrowRight className="w-6 h-6 text-charcoal/50 group-hover:text-luxury-gold group-hover:translate-x-2 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-playfair font-bold text-italian-navy mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-charcoal mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-charcoal"
                      >
                        <div className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 service-bullet-${service.color}`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="mt-8 pt-6 border-t border-platinum">
                  <button className="w-full py-3 text-italian-navy font-semibold hover:text-luxury-gold transition-colors duration-300 flex items-center justify-center space-x-2 group">
                    <span>Saiba Mais</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-luxury opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-italian rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-playfair font-bold mb-4">
              Precisa de um Serviço Específico?
            </h3>
            <p className="text-silver-mist mb-8 max-w-2xl mx-auto">
              Nossa equipe especializada está pronta para atender todas as suas necessidades náuticas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-luxury">
                Solicitar Orçamento
              </button>
              <button className="btn-outline-luxury">
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-luxury opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-italian opacity-5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-luxury-gold rounded-full animate-float"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-marine-blue rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-10 w-2 h-2 bg-italian-red rounded-full animate-ping"></div>
    </section>
  );
};

export default ServicesSection;