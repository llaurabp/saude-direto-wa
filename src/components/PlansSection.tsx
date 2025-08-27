import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MessageCircle, User, Users, Building } from "lucide-react";

const PlansSection = () => {
  const plans = [
    {
      icon: User,
      title: "Individual",
      subtitle: "Perfeito para você",
      price: "A partir de R$ 89",
      period: "/mês",
      features: [
        "Consultas médicas ilimitadas",
        "Exames laboratoriais básicos",
        "Emergências 24h",
        "Rede credenciada nacional",
        "Telemedicina incluída",
        "Suporte personalizado"
      ],
      highlight: false,
      color: "primary"
    },
    {
      icon: Users,
      title: "Familiar",
      subtitle: "Para toda família",
      price: "A partir de R$ 249",
      period: "/mês",
      features: [
        "Até 5 dependentes",
        "Consultas médicas ilimitadas",
        "Exames completos inclusos",
        "Internações e cirurgias",
        "Maternidade completa",
        "Pediatria especializada",
        "Desconto para cada dependente",
        "Atendimento prioritário"
      ],
      highlight: true,
      color: "secondary"
    },
    {
      icon: Building,
      title: "Empresarial",
      subtitle: "Para sua empresa",
      price: "A partir de R$ 79",
      period: "/funcionário",
      features: [
        "Mínimo 3 vidas",
        "Descontos progressivos",
        "Gestão simplificada",
        "Relatórios gerenciais",
        "Onboarding facilitado",
        "Suporte dedicado"
      ],
      highlight: false,
      color: "primary"
    }
  ];

  const handleWhatsAppClick = (planType: string) => {
    const message = `Olá! Tenho interesse no plano ${planType}. Gostaria de receber mais informações e uma cotação personalizada.`;
    window.open(`https://wa.me/5585988851762?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="planos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Escolha o{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              plano ideal
            </span>{" "}
            para você
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Temos opções para todos os perfis e orçamentos. Compare nossos planos 
            e encontre o que melhor se adapta às suas necessidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`scroll-reveal relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                plan.highlight 
                  ? 'border-2 border-secondary shadow-lg ring-2 ring-secondary/20' 
                  : 'border border-border shadow-[var(--shadow-card)]'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-secondary to-secondary/80 text-white px-6 py-2 rounded-b-lg text-sm font-semibold">
                  Mais Popular
                </div>
              )}

              <CardHeader className="text-center pb-4 pt-8">
                <div className={`mx-auto p-4 rounded-full bg-gradient-to-r ${
                  plan.color === 'primary'
                    ? 'from-primary/10 to-primary/20'
                    : 'from-secondary/10 to-secondary/20'
                } mb-4`}>
                  <plan.icon className={`w-8 h-8 ${
                    plan.color === 'primary' ? 'text-primary' : 'text-secondary'
                  }`} />
                </div>
                
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.title}
                </CardTitle>
                <p className="text-muted-foreground">{plan.subtitle}</p>
                
                <div className="mt-4">
                  <div className="flex items-baseline justify-center">
                    <span className={`text-3xl font-bold ${
                      plan.color === 'primary' ? 'text-primary' : 'text-secondary'
                    }`}>
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className={`w-5 h-5 ${
                        plan.color === 'primary' ? 'text-primary' : 'text-secondary'
                      } flex-shrink-0`} />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={() => handleWhatsAppClick(plan.title)}
                  className={`w-full font-semibold py-3 transition-all duration-300 hover:scale-105 ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-white'
                      : 'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Solicitar Cotação
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-accent/50 p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Não encontrou o plano ideal?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossos especialistas podem criar um plano personalizado que atenda 
              exatamente às suas necessidades e orçamento. Fale conosco!
            </p>
            <Button 
              onClick={() => handleWhatsAppClick("Personalizado")}
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar Plano Personalizado
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;