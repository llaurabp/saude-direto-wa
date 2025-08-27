import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Mãe de família",
      location: "São Paulo, SP",
      content: "Excelente atendimento! Consegui um plano familiar com ótimo custo-benefício. Minha família está protegida e eu tenho tranquilidade. O suporte é muito atencioso e sempre disponível para esclarecer dúvidas.",
      rating: 5,
      avatar: "M"
    },
    {
      name: "João Santos",
      role: "Empresário",  
      location: "Rio de Janeiro, RJ",
      content: "Como empresário, precisava de um plano que oferecesse flexibilidade e qualidade. Encontrei exatamente o que buscava. A assessoria foi fundamental para escolher a melhor opção para minha empresa.",
      rating: 5,
      avatar: "J"
    },
    {
      name: "Ana Costa",
      role: "Profissional Liberal",
      location: "Belo Horizonte, MG", 
      content: "Depois de muito procurar, finalmente encontrei um plano individual que cabe no meu orçamento sem abrir mão da qualidade. O processo foi rápido e transparente do início ao fim.",
      rating: 5,
      avatar: "A"
    },
    {
      name: "Carlos Oliveira",
      role: "Aposentado",
      location: "Brasília, DF",
      content: "Na minha idade, ter um bom plano de saúde é essencial. O atendimento foi personalizado e encontraram opções específicas para minhas necessidades. Recomendo para todos!",
      rating: 5,
      avatar: "C"
    },
    {
      name: "Fernanda Lima",
      role: "Professora",
      location: "Curitiba, PR",
      content: "O que mais me impressionou foi a agilidade e transparência no processo. Em poucos dias consegui migrar para um plano muito melhor e com mensalidade mais baixa. Excelente trabalho!",
      rating: 5,
      avatar: "F"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              clientes dizem
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 500 famílias já confiaram em nosso trabalho. 
            Veja os depoimentos de quem já encontrou o plano ideal.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card shadow-[var(--shadow-card)] border-border">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold text-lg">
                            {testimonial.avatar}
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role} • {testimonial.location}
                          </p>
                        </div>
                        <div className="ml-auto">
                          <Quote className="w-8 h-8 text-primary/20" />
                        </div>
                      </div>

                      <div className="flex items-center mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      <p className="text-foreground leading-relaxed text-lg">
                        "{testimonial.content}"
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white border border-border rounded-full p-2 shadow-lg hover:bg-accent transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white border border-border rounded-full p-2 shadow-lg hover:bg-accent transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-primary scale-110'
                    : 'bg-border hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5 Anos</div>
            <div className="text-muted-foreground">de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;