import { MessageCircle, Phone, Mail, MapPin, Clock, Heart } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de falar com um especialista.", "_blank");
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">SaúdeDireto</h3>
                  <p className="text-sm opacity-80">Corretora de Planos</p>
                </div>
              </div>
              <p className="text-background/80 leading-relaxed">
                Especialistas em encontrar o plano de saúde ideal para você e sua família. 
                Atendimento personalizado e consultoria gratuita.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="opacity-80">Cuidando da sua saúde desde 2019</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Links Rápidos</h4>
              <nav className="space-y-2">
                <a 
                  href="#planos" 
                  className="block text-background/80 hover:text-white transition-colors duration-200"
                >
                  Nossos Planos
                </a>
                <a 
                  href="#beneficios" 
                  className="block text-background/80 hover:text-white transition-colors duration-200"
                >
                  Benefícios
                </a>
                <a 
                  href="#depoimentos" 
                  className="block text-background/80 hover:text-white transition-colors duration-200"
                >
                  Depoimentos
                </a>
                <a 
                  href="#contato" 
                  className="block text-background/80 hover:text-white transition-colors duration-200"
                >
                  Contato
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="text-background/80">(11) 99999-9999</div>
                    <div className="text-sm opacity-60">Segunda a Sexta</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                  <div>
                    <div className="text-background/80">contato@saudedireto.com</div>
                    <div className="text-sm opacity-60">Resposta em até 2h</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="text-background/80">São Paulo, SP</div>
                    <div className="text-sm opacity-60">Atendimento Online</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours & CTA */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Horário de Atendimento</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                  <div>
                    <div className="text-background/80">Segunda à Sexta</div>
                    <div className="text-sm opacity-60">8h às 18h</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                  <div>
                    <div className="text-background/80">Sábados</div>
                    <div className="text-sm opacity-60">8h às 12h</div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Fale Conosco Agora</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-background/80 text-sm">
                © 2024 SaúdeDireto Corretora de Seguros Ltda. Todos os direitos reservados.
              </p>
              <p className="text-background/60 text-xs mt-1">
                CNPJ: 00.000.000/0001-00 | SUSEP: 00000000000
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-background/60">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;