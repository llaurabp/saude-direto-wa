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
      content: "O Carlos foi excepcional! Me ajudou a migrar da Amil para a Unimed com um preço muito melhor e mantendo toda cobertura. Sempre disponível e muito atencioso. Recomendo de olhos fechados!",
      rating: 5,
      avatar: "M"
    },
    {
      name: "João Santos",
      role: "Empresário",  
      location: "Rio de Janeiro, RJ",
      content: "Precisava de um plano empresarial e o Carlos conseguiu uma condição incrível na SulAmérica. O suporte dele foi fundamental, explicou tudo nos mínimos detalhes. Profissional top!",
      rating: 5,
      avatar: "J"
    },
    {
      name: "Ana Costa",
      role: "Profissional Liberal",
      location: "Belo Horizonte, MG", 
      content: "Estava perdida entre tantas opções e o Carlos simplificou tudo. Me mostrou 3 alternativas na minha faixa de preço e escolhi a Hapvida. Processo super rápido e transparente!",
      rating: 5,
      avatar: "A"
    },
    {
      name: "Roberto Lima",
      role: "Aposentado",
      location: "Brasília, DF",
      content: "Na minha idade, é difícil encontrar plano bom e barato. O Carlos conseguiu um da Porto Seguro perfeito para mim. Muito grato pelo cuidado e paciência que teve comigo.",
      rating: 5,
      avatar: "R"
    },
    {
      name: "Fernanda Oliveira",
      role: "Professora",
      location: "Curitiba, PR",
      content: "Mudei de cidade e precisava trocar de plano. O Carlos me atendeu até no domingo! Conseguiu transferir tudo sem carência. Esse é o diferencial de um corretor dedicado.",
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
            O que meus{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              clientes dizem
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 800 famílias já confiaram no meu trabalho. 
            Veja os depoimentos de quem já encontrou o plano ideal comigo.
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
            <div className="text-4xl font-bold text-primary mb-2">800+</div>
            <div className="text-muted-foreground">Clientes Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">8 Anos</div>
            <div className="text-muted-foreground">de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;