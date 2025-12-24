import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Heart, Lightbulb, Shield, Globe, Award, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Orientación a resultados",
    description: "No nos conformamos con entregar código. Buscamos impacto real en tu negocio.",
  },
  {
    icon: Heart,
    title: "Compromiso genuino",
    description: "Tu proyecto es nuestro proyecto. Nos involucramos como si fuera propio.",
  },
  {
    icon: Lightbulb,
    title: "Innovación pragmática",
    description: "Usamos la mejor tecnología disponible, pero siempre con propósito claro.",
  },
  {
    icon: Shield,
    title: "Transparencia total",
    description: "Comunicación honesta, sin sorpresas. Sabes exactamente dónde estamos.",
  },
];

const stats = [
  { value: "+10", label: "Años de experiencia" },
  { value: "+50", label: "Proyectos entregados" },
  { value: "4", label: "Países en LATAM" },
  { value: "98%", label: "Clientes satisfechos" },
];

const expertise = [
  { icon: Globe, title: "Experiencia LATAM", description: "Conocemos el mercado latinoamericano, sus desafíos y oportunidades únicas." },
  { icon: Award, title: "Equipo Senior", description: "Profesionales con más de 10 años promedio de experiencia en la industria." },
  { icon: Users, title: "Atención Personalizada", description: "Nos adaptamos a tu cultura, procesos y forma de trabajar." },
  { icon: Zap, title: "Agilidad Real", description: "Sprints cortos, comunicación constante y entregas que generan valor." },
];

const Nosotros = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-quark-cyan/10 rounded-full blur-[120px]" />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <span className="badge-glass mb-4 inline-block">Sobre Nosotros</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Tecnología con </span>
              <span className="gradient-text-cta">propósito</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Somos una consultora de software con sede en Latinoamérica, especializada en transformar 
              ideas en productos digitales que generan impacto real. Combinamos experiencia técnica 
              de alto nivel con un profundo entendimiento del contexto empresarial latinoamericano.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desde 2014, hemos ayudado a empresas de todos los tamaños a digitalizar sus operaciones, 
              automatizar procesos y construir productos que escalan junto con su negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card/30 border-y border-border/50">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Lo que nos </span>
              <span className="gradient-text">define</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nuestros valores no son palabras en un póster. Son principios que guían cada decisión.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass-card p-6 text-center hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-quark-purple/20 to-quark-cyan/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-card/30">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-foreground">Por qué empresas en LATAM </span>
                <span className="gradient-text-accent">confían en nosotros</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Entendemos los desafíos únicos del mercado latinoamericano: presupuestos ajustados, 
                necesidad de resultados rápidos y la importancia de tener un partner que hable tu idioma 
                — literal y figurativamente.
              </p>
              <Button variant="cta" size="lg" asChild>
                <Link to="/contacto" className="group">
                  Trabajemos juntos
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {expertise.map((item) => (
                <div
                  key={item.title}
                  className="glass-card p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-quark-orange/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-quark-orange" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24">
        <div className="section-container">
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto text-center glow-accent">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Nuestra cultura</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Creemos en el trabajo remoto bien hecho, en la autonomía con responsabilidad y en construir 
              relaciones de largo plazo. No buscamos proyectos de una sola vez — buscamos convertirmos en 
              el partner tecnológico de confianza de cada cliente que atendemos.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro equipo está distribuido en Latinoamérica, lo que nos da flexibilidad horaria y nos 
              mantiene conectados con las realidades del mercado que servimos.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card/30">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-foreground">¿Quieres conocernos mejor?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agenda una llamada sin compromiso, o escribenos por whatsapp y conversemos sobre tu proyecto.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contacto" className="group">
              Contacto
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Nosotros;
