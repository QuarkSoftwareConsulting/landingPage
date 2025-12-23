import { Search, Hammer, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "Entendemos tu negocio, definimos objetivos y diseñamos la solución ideal.",
    color: "text-quark-purple",
    bgColor: "bg-quark-purple/10",
    borderColor: "border-quark-purple/30",
  },
  {
    icon: Hammer,
    title: "Build",
    description: "Construimos en sprints cortos, entregando valor desde las primeras semanas.",
    color: "text-quark-cyan",
    bgColor: "bg-quark-cyan/10",
    borderColor: "border-quark-cyan/30",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Desplegamos tu solución con acompañamiento y capacitación incluida.",
    color: "text-quark-orange",
    bgColor: "bg-quark-orange/10",
    borderColor: "border-quark-orange/30",
  },
  {
    icon: TrendingUp,
    title: "Evolve",
    description: "Iteramos y escalamos tu producto basándonos en datos y feedback real.",
    color: "text-quark-mint",
    bgColor: "bg-quark-mint/10",
    borderColor: "border-quark-mint/30",
  },
];

export const MethodologySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-quark-purple/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge-glass mb-4 inline-block">Nuestra Metodología</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Cómo </span>
            <span className="gradient-text">trabajamos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Metodología ágil con entregas tempranas. Valor desde el primer sprint.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`relative glass-card p-8 text-center border ${step.borderColor} group hover:scale-[1.02] transition-all duration-300`}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-muted-foreground">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center mx-auto mb-6`}>
                <step.icon className={`w-8 h-8 ${step.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connection Line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { label: "Comunicación constante", value: "Daily standups y reportes semanales" },
            { label: "Entrega temprana", value: "MVP en 4-8 semanas" },
            { label: "Adaptabilidad", value: "Ajustes según feedback real" },
          ].map((feature) => (
            <div key={feature.label} className="p-6">
              <p className="text-sm text-muted-foreground mb-2">{feature.label}</p>
              <p className="text-lg font-semibold text-foreground">{feature.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
