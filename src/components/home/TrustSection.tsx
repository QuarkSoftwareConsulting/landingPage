import { Shield, Users, Zap, Globe, Award, Clock } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "Confiabilidad",
    description: "Procesos estructurados y claros que garantizan entregas predecibles.",
  },
  {
    icon: Users,
    title: "Equipo Senior",
    description: "Profesionales con +10 años de experiencia en proyectos complejos.",
  },
  {
    icon: Zap,
    title: "Resultados Rápidos",
    description: "Valor medible desde el primer mes de trabajo.",
  },
  {
    icon: Globe,
    title: "Experiencia LATAM",
    description: "Presencia en Colombia, Panamá, Argentina y Ecuador.",
  },
  {
    icon: Award,
    title: "Atención Personalizada",
    description: "Nos adaptamos a tu cultura y necesidades específicas.",
  },
  {
    icon: Clock,
    title: "Crecimiento Iterativo",
    description: "Tu producto evoluciona con tu negocio, sin grandes inversiones iniciales.",
  },
];

export const TrustSection = () => {
  return (
    <section className="py-24 bg-card/30 relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">¿Por qué elegir </span>
            <span className="gradient-text-cta">Quark</span>
            <span className="text-foreground">?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más que un proveedor, somos tu aliado tecnológico para el crecimiento sostenible.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="flex items-start gap-4 p-6 rounded-2xl hover:bg-secondary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-quark-orange/20 to-quark-peach/20 flex items-center justify-center shrink-0">
                <point.icon className="w-6 h-6 text-quark-orange" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
