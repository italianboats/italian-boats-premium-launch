import React, { useState } from 'react';
import { Send, Phone, MapPin, Clock, Mail, MessageCircle, User, Star } from 'lucide-react';
import ResponsiveAccordion from './ui/responsive-accordion';
import ResponsiveDropdown from './ui/responsive-dropdown';
import ResponsiveLayout from './ui/responsive-layout';
import PerformanceOptimizer from './ui/performance-optimizer';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interesse: 'lancha'
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Mensagem Enviada!",
      description: "Entraremos em contato em até 24 horas. Obrigado!",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      interesse: 'lancha'
    });
    
    setIsLoading(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Olá! Gostaria de conhecer mais sobre os barcos personalizados da Italian Boats.`);
    window.open(`https://wa.me/5562993639673?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Localização",
      info: "Goiânia - GO",
      details: "Av. Ville, 1515 - Residential Eli Forte, 74369-023",
      color: "luxury-gold"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(62) 9 9363-9673",
      details: "WhatsApp disponível",
      color: "marine-blue"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "8h às 18h",
      details: "Sábado: 8h às 12h",
      color: "italian-red"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "grklima@gmail.com",
      details: "Resposta em 24h",
      color: "deep-blue"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-silver-mist/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-px bg-gradient-luxury mr-4"></div>
            <span className="text-luxury-gold font-semibold tracking-wider uppercase text-sm font-helvetica-neue">
              Entre em Contato
            </span>
            <div className="w-12 h-px bg-gradient-luxury ml-4"></div>
          </div>
          <h2 className="text-6xl md:text-7xl font-helvetica-neue font-light text-italian-navy mb-8 leading-tight">
            Fale <span className="font-bold text-luxury-gold">Conosco</span>
          </h2>
          <p className="text-2xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed font-helvetica-narrow">
            Transforme seu sonho náutico em realidade. Nossa equipe está pronta para criar a embarcação perfeita para você e sua família.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="luxury-card p-8">
              <h3 className="text-3xl font-helvetica-neue font-bold text-italian-navy mb-10 leading-tight">
                Informações de <span className="text-luxury-gold">Contato</span>
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-transparent hover:from-${item.color}/5 transition-all duration-300 animate-fade-in-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 service-icon-${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`w-6 h-6 service-text-${item.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-italian-navy mb-1">{item.title}</h4>
                      <p className="text-charcoal font-medium">{item.info}</p>
                      <p className="text-charcoal/70 text-sm">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsApp}
                className="w-full mt-8 flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Chamar no WhatsApp</span>
              </button>
            </div>

            {/* Testimonial */}
            <div className="luxury-card p-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-luxury-gold fill-current" />
                ))}
              </div>
              <p className="text-charcoal italic mb-4">
                "Realizei o sonho de ter meu barco personalizado. Qualidade excepcional e atendimento impecável!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <p className="font-semibold text-italian-navy">João Silva</p>
                  <p className="text-sm text-charcoal/70">Cliente Satisfeito</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="luxury-card p-8">
              <h3 className="text-3xl font-helvetica-neue font-bold text-italian-navy mb-10 leading-tight">
                Solicite seu <span className="text-luxury-gold">Orçamento</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-italian-navy">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-silver-mist/50 border border-platinum rounded-xl focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-italian-navy">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-silver-mist/50 border border-platinum rounded-xl focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-italian-navy">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-silver-mist/50 border border-platinum rounded-xl focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
                      placeholder="(47) 99999-9999"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interesse" className="block text-sm font-semibold text-italian-navy">
                      Interesse
                    </label>
                    <select
                      id="interesse"
                      name="interesse"
                      value={formData.interesse}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-silver-mist/50 border border-platinum rounded-xl focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
                    >
                      <option value="lancha">Lancha Personalizada</option>
                      <option value="barco">Barco Clássico</option>
                      <option value="carreta">Carreta Náutica</option>
                      <option value="manutencao">Manutenção</option>
                      <option value="consultoria">Consultoria</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-italian-navy">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-silver-mist/50 border border-platinum rounded-xl focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Conte-nos sobre seu projeto dos sonhos..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex items-center justify-center space-x-3 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    isLoading
                      ? 'bg-charcoal/50 text-white cursor-not-allowed'
                      : 'btn-luxury hover:scale-105'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-charcoal/70 text-center">
                  * Campos obrigatórios. Responderemos em até 24 horas.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section with Responsive Accordion */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-helvetica-neue font-bold text-italian-navy mb-4">
              Perguntas <span className="text-luxury-gold">Frequentes</span>
            </h3>
            <p className="text-charcoal/80 text-lg max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços e processos
            </p>
          </div>
          
          <PerformanceOptimizer>
            <ResponsiveAccordion
              items={[
                {
                  id: 'faq-1',
                  title: 'Quanto tempo leva para construir um barco personalizado?',
                  content: (
                    <div className="space-y-3">
                      <p>O tempo de construção varia de acordo com o tipo e complexidade do barco:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Lanchas pequenas (até 25 pés): 3-6 meses</li>
                        <li>Lanchas médias (25-35 pés): 6-12 meses</li>
                        <li>Lanchas grandes (35+ pés): 12-18 meses</li>
                        <li>Barcos de luxo: 18-24 meses</li>
                      </ul>
                      <p className="text-sm text-charcoal/70">
                        * Prazos podem variar conforme especificações e disponibilidade de materiais.
                      </p>
                    </div>
                  )
                },
                {
                  id: 'faq-2',
                  title: 'Quais materiais são utilizados na construção?',
                  content: (
                    <div className="space-y-3">
                      <p>Utilizamos apenas materiais de primeira qualidade:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Fibra de vidro de alta resistência</li>
                        <li>Resina epóxi premium</li>
                        <li>Madeira nobre italiana (mogno, teca)</li>
                        <li>Couro italiano para acabamentos</li>
                        <li>Equipamentos náuticos de última geração</li>
                      </ul>
                    </div>
                  )
                },
                {
                  id: 'faq-3',
                  title: 'Oferecem garantia nos barcos construídos?',
                  content: (
                    <div className="space-y-3">
                      <p>Sim, oferecemos garantia completa:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Estrutura: 5 anos</li>
                        <li>Motor e equipamentos: 2 anos</li>
                        <li>Acabamentos: 3 anos</li>
                        <li>Suporte técnico: 24/7</li>
                      </ul>
                    </div>
                  )
                },
                {
                  id: 'faq-4',
                  title: 'Como funciona o processo de personalização?',
                  content: (
                    <div className="space-y-3">
                      <p>Nosso processo é dividido em etapas:</p>
                      <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>Consulta inicial e briefing</li>
                        <li>Desenvolvimento do projeto 3D</li>
                        <li>Aprovação do cliente</li>
                        <li>Início da construção</li>
                        <li>Acompanhamento mensal</li>
                        <li>Entrega e treinamento</li>
                      </ol>
                    </div>
                  )
                }
              ]}
              allowMultiple={true}
              className="max-w-4xl mx-auto"
            />
          </PerformanceOptimizer>
        </div>

        {/* Interactive Map */}
        <div className="mt-16">
          <div className="luxury-card p-8">
            <h3 className="text-3xl font-helvetica-neue font-bold text-italian-navy mb-8 text-center leading-tight">
              Nossa <span className="text-luxury-gold">Localização</span> - Goiânia
            </h3>
            
            {/* Endereço */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-luxury-gold mr-3" />
                <h4 className="text-xl font-semibold text-italian-navy">Av. Ville, 1515 - Residential Eli Forte</h4>
              </div>
              <p className="text-charcoal text-lg">Goiânia - GO, 74369-023</p>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden shadow-elegant">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.1234567890!2d-49.1234567!3d-16.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcfa8d815f90e5cbf!2sItalian%20boats!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Italian Boats - Goiânia"
                className="w-full"
              ></iframe>
            </div>

            {/* Botão para abrir no Google Maps */}
            <div className="text-center mt-6">
              <a
                href="https://www.google.com/maps/place/Italian+boats/data=!4m2!3m1!1s0x0:0xcfa8d815f90e5cbf?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-luxury inline-flex items-center"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Abrir no Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-luxury opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-italian opacity-5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default ContactSection;