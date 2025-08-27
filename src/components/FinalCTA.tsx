import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Clock, Shield } from "lucide-react";

const FinalCTA = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5585988851762?text=Olá! Quero falar com uma corretora especializada agora mesmo.", "_blank");
  };

  const handlePhoneClick = () => {
    window.open("tel:+5585988851762", "_self");
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Fale comigo agora e encontre{" "}
              <span className="text-yellow-300">seu plano ideal</span>{" "}
              pelo WhatsApp
            </h2>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
              Sou Fátima Borges, sua corretora especializada. Vou encontrar o plano perfeito 
              para você em poucos minutos, com as melhores condições do mercado.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Atendimento Imediato</h3>
              <p className="text-sm opacity-80">Resposta em menos de 5 minutos</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Consultoria Gratuita</h3>
              <p className="text-sm opacity-80">Sem taxas ou compromisso</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Processo Rápido</h3>
              <p className="text-sm opacity-80">Aprovação em até 24 horas</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Suporte Contínuo</h3>
              <p className="text-sm opacity-80">Acompanhamento pós-venda</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Falar no WhatsApp Agora
            </Button>
            
            <div className="text-white/60 text-sm">ou</div>
            
            <Button 
              onClick={handlePhoneClick}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              (11) 99999-9999
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">800+</div>
                <div className="text-sm opacity-90">Famílias Atendidas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">8+</div>
                <div className="text-sm opacity-90">Operadoras Parceiras</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">4.9★</div>
                <div className="text-sm opacity-90">Avaliação dos Clientes</div>
              </div>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="mt-8 p-4 bg-yellow-400/20 rounded-lg border border-yellow-400/30">
            <p className="text-yellow-100 font-medium">
              ⚡ <strong>Atenção:</strong> Planos com condições especiais disponíveis apenas neste mês. 
              Não perca esta oportunidade!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;