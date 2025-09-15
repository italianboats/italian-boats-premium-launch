import React, { useState } from 'react';
import { Send, Phone, MapPin, Clock, Mail, MessageCircle, User, Star } from 'lucide-react';
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
    window.open(`https://wa.me/5547999999999?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Localização",
      info: "Marina Porto Bello - SC",
      details: "Rua das Embarcações, 123",
      color: "luxury-gold"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(47) 99999-9999",
      details: "Segunda a Sábado",
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
      info: "contato@italianboats.com.br",
      details: "Resposta em 24h",
      color: "deep-blue"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-silver-mist/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold text-italian-navy mb-6">
            Fale Conosco
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
            Transforme seu sonho náutico em realidade. Nossa equipe está pronta para criar a embarcação perfeita para você.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="luxury-card p-8">
              <h3 className="text-2xl font-playfair font-bold text-italian-navy mb-8">
                Informações de Contato
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
              <h3 className="text-2xl font-playfair font-bold text-italian-navy mb-8">
                Solicite seu Orçamento
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

        {/* Interactive Map Placeholder */}
        <div className="mt-16">
          <div className="luxury-card p-8">
            <h3 className="text-2xl font-playfair font-bold text-italian-navy mb-6 text-center">
              Nossa Localização - Marina Porto Bello
            </h3>
            <div className="bg-silver-mist rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-luxury-gold mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-italian-navy mb-2">Marina Porto Bello - SC</h4>
                <p className="text-charcoal">Localização privilegiada para sua nova embarcação</p>
                <button className="btn-outline-luxury mt-6">
                  Ver no Google Maps
                </button>
              </div>
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