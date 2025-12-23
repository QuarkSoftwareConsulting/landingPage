import { Link } from "react-router-dom";
import { 
  Compass, 
  Code2, 
  Smartphone, 
  Brain, 
  Cloud,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Compass,
    title: "Estrategia y Producto Digital",
    description: "Transformamos tu visión en un roadmap claro con discovery, definición de MVP y arquitectura de software.",
    href: "/servicios#estrategia",
    gradient: "from-quark-purple to-primary",
  },
  {
    icon: Code2,
    title: "Desarrollo de Software a la Medida",
    description: "Aplicaciones web empresariales, dashboards, APIs y sistemas escalables construidos para tu operación.",
    href: "/servicios#desarrollo",
    gradient: "from-quark-cyan to-quark-mint",
  },
  {
    icon: Smartphone,
    title: "Apps Web y Móviles",
    description: "Experiencias digitales multiplataforma con React Native, Flutter o desarrollo nativo iOS/Android.",
    href: "/servicios#mobile",
    gradient: "from-quark-orange to-quark-peach",
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial y Automatización",
    description: "IA generativa, chatbots inteligentes, agentes y automatización de procesos con tecnología de vanguardia.",
    href: "/servicios#ia",
    gradient: "from-primary to-quark-purple",
  },
  {
    icon: Cloud,
    title: "Cloud, DevOps y Soporte",
    description: "Infraestructura en AWS, GCP o Azure con CI/CD, observabilidad y soporte continuo para tu aplicación.",
    href: "/servicios#cloud",
    gradient: "from-quark-cyan to-primary",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Soluciones que </span>
            <span className="gradient-text">impulsan tu negocio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desde la estrategia hasta la implementación, cubrimos todo el ciclo de desarrollo de productos digitales.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group service-card flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}>
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-foreground" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* CTA */}
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                Ver más
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button variant="gradient" size="lg" asChild>
            <Link to="/servicios">
              Ver todos los servicios
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
