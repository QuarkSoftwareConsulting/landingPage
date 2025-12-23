import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-quark-purple/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-quark-cyan/10 rounded-full blur-[80px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto glow-primary">
          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Listo para </span>
            <span className="gradient-text">transformar</span>
            <span className="text-foreground"> tu operación?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Agenda una llamada sin compromiso. Te ayudamos a identificar oportunidades 
            de mejora y diseñamos juntos la solución ideal para tu negocio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contacto" className="group">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar una llamada
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link to="/contacto">
                <MessageSquare className="w-5 h-5 mr-2" />
                Enviar mensaje
              </Link>
            </Button>
          </div>

          {/* Trust Note */}
          <p className="mt-8 text-sm text-muted-foreground">
            Sin compromiso · Respuesta en menos de 24 horas
          </p>
        </div>
      </div>
    </section>
  );
};
