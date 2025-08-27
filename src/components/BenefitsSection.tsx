import { Shield, Clock, Users, MapPin, Stethoscope, Heart } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Consultoria Especializada",
      description: "15 anos de experiência ajudando famílias a encontrar o plano ideal",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Atendimento Personalizado",
      description: "Analiso seu perfil e necessidades para indicar a melhor opção",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "8+ Operadoras Parceiras",
      description: "Acesso às principais operadoras: Unimed, SulAmérica, Amil, Hapvida...",
      color: "text-primary"
    },
    {
      icon: MapPin,
      title: "Condições Especiais",
      description: "Preços exclusivos e condições diferenciadas que só corretores têm",
      color: "text-secondary"
    },
    {
      icon: Stethoscope,
      title: "Suporte Pós-Venda",
      description: "Acompanho você mesmo após a contratação, sempre que precisar",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Consultoria Gratuita",
      description: "Todo meu trabalho de consultoria é 100% gratuito para você",
      color: "text-secondary"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vantagens de contratar{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              comigo seu plano
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Como corretora especializada, ofereço consultoria personalizada e acesso 
            às melhores condições das principais operadoras do mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="scroll-reveal bg-card p-8 rounded-xl shadow-[var(--shadow-card)] hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${
                  benefit.color === 'text-primary' 
                    ? 'from-primary/10 to-primary/20' 
                    : 'from-secondary/10 to-secondary/20'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Quer uma análise gratuita do seu caso?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Me conte sobre sua situação atual e vou te mostrar as melhores opções disponíveis.
            </p>
            <button
              onClick={() => window.open("https://wa.me/5585988851762?text=Olá Fátima! Quero fazer uma análise gratuita do meu caso para encontrar o melhor plano de saúde.", "_blank")}
              className="bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Falar com Fátima Borges
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;