import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary Glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-quark-purple/20 rounded-full blur-[120px] animate-pulse-glow" />
        {/* Accent Glow */}
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-quark-cyan/15 rounded-full blur-[100px] animate-pulse-glow delay-500" />
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 badge-glass mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-quark-cyan" />
            <span className="text-muted-foreground">Para empresas pequeñas, medianas y grandes</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up delay-100">
            <span className="text-foreground">Software a la medida para darle </span>
            <span className="gradient-text-accent">orden</span>
            <span className="text-foreground">, </span>
            <span className="gradient-text-accent">claridad</span>
            <span className="text-foreground"> y </span>
            <span className="gradient-text-accent">velocidad</span>
            <span className="text-foreground"> a tus procesos.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
            Ordena, automatiza y acelera tu operación con soluciones construidas para entregar 
            <span className="text-foreground font-medium"> resultados medibles desde el primer mes.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contacto" className="group">
                Quiero asesoría personalizada
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link to="/servicios">
                Ver servicios
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-border/30 animate-fade-in-up delay-500">
            <p className="text-sm text-muted-foreground mb-6">Experiencia en LATAM</p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
              {["Colombia", "Panamá", "Argentina", "Ecuador"].map((country) => (
                <div key={country} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-quark-cyan" />
                  <span className="text-sm font-medium">{country}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
