import { Shield, Clock, Users, MapPin, Stethoscope, Heart } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Cobertura Nacional",
      description: "Atendimento em todo território nacional com ampla rede credenciada",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Atendimento 24h",
      description: "Suporte médico disponível 24 horas por dia, 7 dias por semana",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Planos Familiares",
      description: "Opções especiais para toda a família com descontos exclusivos",
      color: "text-primary"
    },
    {
      icon: MapPin,
      title: "Rede Credenciada",
      description: "Milhares de hospitais, clínicas e laboratórios credenciados",
      color: "text-secondary"
    },
    {
      icon: Stethoscope,
      title: "Especialidades Médicas",
      description: "Acesso a todas as especialidades médicas e exames",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Cuidado Completo",
      description: "Do básico ao complexo, cuidamos da sua saúde integralmente",
      color: "text-secondary"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher nossos{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              planos de saúde?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos as melhores opções do mercado com benefícios exclusivos 
            para garantir o cuidado que você e sua família merecem.
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
              Pronto para cuidar melhor da sua saúde?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Fale conosco agora e descubra qual plano se adapta melhor às suas necessidades.
            </p>
            <button
              onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Quero conhecer os benefícios dos planos de saúde.", "_blank")}
              className="bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;