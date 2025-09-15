import React, { useState } from 'react';
import { 
  Anchor, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube,
  Send,
  ArrowRight,
  Award,
  Shield,
  Star,
  Users
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    
    // Simulate subscription
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "🎉 Inscrição realizada!",
      description: "Você receberá novidades sobre nossos barcos exclusivos.",
    });

    setEmail('');
    setIsSubscribing(false);
  };

  const quickLinks = [
    { name: "Barcos Personalizados", href: "#" },
    { name: "Galeria", href: "#gallery" },
    { name: "Serviços", href: "#services" },
    { name: "Sobre Nós", href: "#about" },
    { name: "Contato", href: "#contact" },
    { name: "Orçamento", href: "#quote" }
  ];

  const services = [
    { name: "Vendas Personalizadas", href: "#" },
    { name: "Manutenção Especializada", href: "#" },
    { name: "Garantia Estendida", href: "#" },
    { name: "Consultoria Náutica", href: "#" },
    { name: "Treinamento", href: "#" },
    { name: "Carretas Náuticas", href: "#" }
  ];

  const achievements = [
    { icon: Award, label: "25+ Anos", desc: "de Tradição" },
    { icon: Users, label: "1000+", desc: "Embarcações" },
    { icon: Shield, label: "100%", desc: "Garantia" },
    { icon: Star, label: "Excelência", desc: "Italiana" }
  ];

  return (
    <footer className="bg-gradient-italian text-white relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-luxury-gold rounded-xl flex items-center justify-center">
                <Anchor className="w-7 h-7 text-italian-navy" />
              </div>
              <div>
                <h3 className="text-2xl font-playfair font-bold">Italian Boats</h3>
                <p className="text-silver-mist text-sm">Tradição Italiana</p>
              </div>
            </div>
            
            <p className="text-silver-mist mb-6 leading-relaxed">
              Qualidade Italiana — Transformamos sonhos em realidade sobre as águas. 
              Cada barco é uma obra de arte personalizada.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  <achievement.icon className="w-6 h-6 text-luxury-gold mx-auto mb-2" />
                  <div className="text-sm font-bold text-white">{achievement.label}</div>
                  <div className="text-xs text-silver-mist">{achievement.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-playfair font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center text-silver-mist hover:text-luxury-gold transition-colors duration-300 group"
                  >
                    <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-playfair font-bold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="flex items-center text-silver-mist hover:text-luxury-gold transition-colors duration-300 group"
                  >
                    <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {service.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-xl font-playfair font-bold mb-6">Contato</h4>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Marina Porto Bello - SC</p>
                  <p className="text-silver-mist text-sm">Rua das Embarcações, 123</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-gold" />
                <a href="tel:+5547999999999" className="text-silver-mist hover:text-luxury-gold transition-colors duration-300">
                  (47) 99999-9999
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-gold" />
                <a href="mailto:contato@italianboats.com.br" className="text-silver-mist hover:text-luxury-gold transition-colors duration-300">
                  contato@italianboats.com.br
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
              <h5 className="font-semibold mb-3">Newsletter Exclusiva</h5>
              <p className="text-silver-mist text-sm mb-4">
                Receba novidades sobre barcos personalizados
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent text-white placeholder-silver-mist"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className={`w-full flex items-center justify-center space-x-2 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isSubscribing
                      ? 'bg-white/20 cursor-not-allowed'
                      : 'bg-luxury-gold hover:bg-golden-sunset text-italian-navy hover:scale-105'
                  }`}
                >
                  {isSubscribing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-italian-navy/20 border-t-italian-navy rounded-full animate-spin"></div>
                      <span>Inscrevendo...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Inscrever-se</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-italian-navy/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-silver-mist text-sm text-center md:text-left">
              © 2024 Italian Boats. Todos os direitos reservados. | 
              <a href="#" className="hover:text-luxury-gold transition-colors duration-300 ml-1">
                Política de Privacidade
              </a> | 
              <a href="#" className="hover:text-luxury-gold transition-colors duration-300 ml-1">
                Termos de Uso
              </a>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-silver-mist text-sm">Siga-nos:</span>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-luxury-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <Facebook className="w-5 h-5 text-white group-hover:text-italian-navy" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-luxury-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:text-italian-navy" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-luxury-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <Youtube className="w-5 h-5 text-white group-hover:text-italian-navy" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-luxury opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-sunset opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      {/* Floating particles */}
      <div className="absolute top-20 right-1/4 w-2 h-2 bg-luxury-gold rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-1 h-1 bg-luxury-gold rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
    </footer>
  );
};

export default Footer;