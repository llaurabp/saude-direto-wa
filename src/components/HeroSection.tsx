import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-family-health.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Quero solicitar uma cotação para plano de saúde.", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-accent via-background to-accent/50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Sou Fátima Borges e vou te ajudar a encontrar o</span>{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  plano de saúde perfeito
                </span>{" "}
                <span className="text-foreground">para sua família</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Com mais de 8 anos de experiência, represento as principais operadoras do Brasil: 
                <strong>Unimed, SulAmérica, Amil, Hapvida, Bradesco Saúde</strong> e muito mais. 
                Atendimento personalizado e gratuito para encontrar o plano ideal para seu perfil.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 text-sm font-medium text-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span>Cobertura Nacional</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium text-foreground">
                <Clock className="w-5 h-5 text-secondary" />
                <span>Atendimento 24h</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium text-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span>Planos Familiares</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="btn-hero text-lg px-8 py-4 h-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar Cotação pelo WhatsApp
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-4 h-auto text-lg"
              >
                Ver Planos Disponíveis
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-muted-foreground">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">800+</div>
                <div>Famílias Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">8 Anos</div>
                <div>de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div>Operadoras Parceiras</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-last">
            <div className="relative">
              <img
                src={heroImage}
                alt="Família feliz em consulta médica"
                className="w-full h-auto rounded-2xl shadow-[var(--shadow-hero)] object-cover"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-full shadow-lg animate-bounce-in">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-full shadow-lg animate-bounce-in animation-delay-300">
                <MessageCircle className="w-8 h-8 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;