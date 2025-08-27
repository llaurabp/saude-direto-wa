import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle } from "lucide-react";

const OperadorasSection = () => {
  const operadoras = [
    {
      name: "Unimed",
      description: "Líder em medicina cooperativa no Brasil",
      benefits: ["Ampla rede médica", "Cobertura nacional", "Tradição e confiança"],
      color: "text-green-600"
    },
    {
      name: "SulAmérica",
      description: "Uma das maiores seguradoras do país",
      benefits: ["Rede premium", "Tecnologia avançada", "Atendimento diferenciado"],
      color: "text-red-600"
    },
    {
      name: "Amil",
      description: "Referência em planos de saúde",
      benefits: ["Hospitais próprios", "Qualidade médica", "Cobertura completa"],
      color: "text-blue-600"
    },
    {
      name: "Hapvida",
      description: "Crescimento e inovação em saúde",
      benefits: ["Preços competitivos", "Rede moderna", "Foco no cliente"],
      color: "text-orange-600"
    },
    {
      name: "Bradesco Saúde",
      description: "Solidez e experiência bancária",
      benefits: ["Estabilidade financeira", "Rede qualificada", "Atendimento ágil"],
      color: "text-red-700"
    },
    {
      name: "Porto Seguro",
      description: "Inovação e qualidade em seguros",
      benefits: ["Tecnologia digital", "Rede credenciada", "Suporte 24h"],
      color: "text-blue-800"
    }
  ];

  const handleWhatsAppClick = (operadora: string) => {
    const message = `Olá Carlos! Tenho interesse em conhecer os planos da ${operadora}. Pode me ajudar?`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="operadoras" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Represento as{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              melhores operadoras
            </span>{" "}
            do Brasil
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Como corretor credenciado, tenho acesso aos melhores planos e condições especiais 
            das principais operadoras de saúde do país. Compare e escolha a melhor opção para você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {operadoras.map((operadora, index) => (
            <Card
              key={index}
              className="scroll-reveal hover:shadow-lg transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className={`text-2xl font-bold ${operadora.color} mb-2`}>
                    {operadora.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {operadora.description}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  {operadora.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={() => handleWhatsAppClick(operadora.name)}
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Ver Planos {operadora.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Touch */}
        <div className="mt-16 bg-gradient-to-r from-accent via-background to-accent p-8 rounded-2xl border border-border">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Por que escolher trabalhar comigo?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl mb-2">🎯</div>
                <h4 className="font-semibold text-foreground mb-2">Análise Personalizada</h4>
                <p className="text-sm text-muted-foreground">
                  Analiso seu perfil e necessidades para indicar a operadora e plano ideal
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💰</div>
                <h4 className="font-semibold text-foreground mb-2">Melhores Preços</h4>
                <p className="text-sm text-muted-foreground">
                  Tenho acesso a condições especiais e descontos exclusivos
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🤝</div>
                <h4 className="font-semibold text-foreground mb-2">Suporte Contínuo</h4>
                <p className="text-sm text-muted-foreground">
                  Acompanho você mesmo após a contratação, sempre que precisar
                </p>
              </div>
            </div>
            
            <Button 
              onClick={() => handleWhatsAppClick("Consultoria Personalizada")}
              className="mt-8 btn-hero"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com Carlos Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperadorasSection;