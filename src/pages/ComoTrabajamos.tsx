import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Hammer, Rocket, TrendingUp, MessageSquare, Repeat, CheckCircle, Users } from "lucide-react";

const phases = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    subtitle: "Entender antes de construir",
    duration: "1-2 semanas",
    color: "quark-purple",
    description: "Nos sumergimos en tu negocio para entender a fondo tus necesidades, usuarios y objetivos. Definimos el alcance, priorizamos funcionalidades y diseñamos la arquitectura técnica.",
    activities: [
      "Entrevistas con stakeholders",
      "Análisis de procesos actuales",
      "Definición de MVP y roadmap",
      "Diseño de arquitectura",
      "Estimación detallada",
    ],
    deliverables: [
      "Documento de requerimientos",
      "Wireframes iniciales",
      "Plan de proyecto",
      "Propuesta técnica",
    ],
  },
  {
    number: "02",
    icon: Hammer,
    title: "Build",
    subtitle: "Construcción iterativa",
    duration: "4-12 semanas",
    color: "quark-cyan",
    description: "Desarrollamos en sprints de 2 semanas, entregando funcionalidad real desde el primer ciclo. Cada sprint incluye revisión contigo para ajustar según feedback.",
    activities: [
      "Sprints de 2 semanas",
      "Demos al final de cada sprint",
      "Testing continuo",
      "Code review riguroso",
      "Documentación progresiva",
    ],
    deliverables: [
      "Incrementos funcionales",
      "Ambiente de staging",
      "Reportes de progreso",
      "Código documentado",
    ],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch",
    subtitle: "Despliegue seguro",
    duration: "1-2 semanas",
    color: "quark-orange",
    description: "Preparamos la infraestructura de producción, realizamos pruebas finales y desplegamos tu solución con monitoreo activo y plan de contingencia.",
    activities: [
      "Configuración de producción",
      "Pruebas de carga",
      "Migración de datos",
      "Capacitación de usuarios",
      "Go-live acompañado",
    ],
    deliverables: [
      "Aplicación en producción",
      "Documentación de usuario",
      "Manuales técnicos",
      "Plan de soporte",
    ],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Evolve",
    subtitle: "Mejora continua",
    duration: "Continuo",
    color: "quark-mint",
    description: "Monitoreamos el rendimiento, recopilamos feedback de usuarios reales y evolucionamos tu producto con nuevas funcionalidades y optimizaciones.",
    activities: [
      "Monitoreo de métricas",
      "Análisis de uso",
      "Mantenimiento preventivo",
      "Actualizaciones de seguridad",
      "Desarrollo de nuevas features",
    ],
    deliverables: [
      "Reportes de rendimiento",
      "Mejoras continuas",
      "Soporte técnico",
      "Roadmap evolutivo",
    ],
  },
];

const principles = [
  {
    icon: MessageSquare,
    title: "Comunicación constante",
    description: "Daily standups, reportes semanales y acceso directo al equipo. Siempre sabes qué está pasando.",
  },
  {
    icon: Repeat,
    title: "Iteración rápida",
    description: "Sprints cortos con entregas frecuentes. Valor desde las primeras semanas, no meses.",
  },
  {
    icon: CheckCircle,
    title: "Calidad integrada",
    description: "Testing automatizado, code review y CI/CD. La calidad no es opcional, está en nuestro ADN.",
  },
  {
    icon: Users,
    title: "Tu equipo extendido",
    description: "No somos proveedores, somos parte de tu equipo. Tu éxito es nuestro éxito.",
  },
];

const ComoTrabajamos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-quark-purple/15 rounded-full blur-[120px]" />
        </div>

        <div className="section-container relative z-10 text-center">
          <span className="badge-glass mb-4 inline-block">Nuestra Metodología</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Metodología ágil, </span>
            <span className="gradient-text">resultados tangibles</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Un proceso probado que combina lo mejor de Scrum y Kanban, adaptado a las necesidades 
            específicas de cada proyecto. Transparencia, velocidad y calidad garantizada.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="pb-24">
        <div className="section-container">
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div
                key={phase.title}
                className="glass-card p-8 md:p-12 relative overflow-hidden"
              >
                {/* Phase Number Background */}
                <div className="absolute -top-10 -right-10 text-[200px] font-bold text-foreground/[0.02] select-none pointer-events-none">
                  {phase.number}
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Header */}
                    <div className="lg:w-1/3">
                      <div className={`w-16 h-16 rounded-2xl bg-${phase.color}/20 flex items-center justify-center mb-6`}>
                        <phase.icon className={`w-8 h-8 text-${phase.color}`} />
                      </div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm font-medium text-muted-foreground">Fase {phase.number}</span>
                        <span className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">
                          {phase.duration}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-foreground mb-2">
                        {phase.title}
                      </h2>
                      <p className="text-lg text-primary font-medium">
                        {phase.subtitle}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="lg:w-2/3">
                      <p className="text-muted-foreground mb-8 leading-relaxed">
                        {phase.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Activities */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                            Actividades
                          </h4>
                          <ul className="space-y-2">
                            {phase.activities.map((activity) => (
                              <li key={activity} className="flex items-center gap-3 text-sm text-muted-foreground">
                                <div className={`w-1.5 h-1.5 rounded-full bg-${phase.color}`} />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                            Entregables
                          </h4>
                          <ul className="space-y-2">
                            {phase.deliverables.map((deliverable) => (
                              <li key={deliverable} className="flex items-center gap-3 text-sm text-muted-foreground">
                                <CheckCircle className={`w-4 h-4 text-${phase.color}`} />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connection Line */}
                {index < phases.length - 1 && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0.5 h-8 bg-gradient-to-b from-border to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 bg-card/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Principios que nos </span>
              <span className="gradient-text-accent">guían</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Más allá de la metodología, estos son los valores que aplicamos en cada proyecto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="glass-card p-6 text-center hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-foreground">¿Listo para empezar?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agenda una llamada y exploremos juntos cómo podemos ayudarte.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contacto" className="group">
              Comenzar proyecto
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ComoTrabajamos;
