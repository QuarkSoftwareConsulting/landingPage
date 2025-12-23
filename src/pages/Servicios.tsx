import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Palette, Code2, Smartphone, Brain, Globe, Cloud, Shield, BarChart3, Wrench, Users } from "lucide-react";

const serviceCategories = [
  {
    id: "estrategia",
    icon: Rocket,
    title: "Estrategia y Producto Digital",
    gradient: "from-quark-purple to-primary",
    services: [
      "Consultoría tecnológica y transformación digital",
      "Discovery y definición de producto (MVP / roadmap)",
      "Análisis de requerimientos funcionales y no funcionales",
      "Diseño de arquitectura de software",
      "Modelado de dominio y procesos",
      "CTO as a Service",
      "Evaluación técnica y viabilidad",
    ],
  },
  {
    id: "ux",
    icon: Palette,
    title: "Diseño UX/UI",
    gradient: "from-quark-orange to-quark-peach",
    services: [
      "Diseño UX/UI para productos digitales",
      "Prototipos navegables (web y mobile)",
      "Flujos de usuario",
      "Design Systems",
      "Auditoría UX",
      "Accesibilidad y usabilidad",
    ],
  },
  {
    id: "desarrollo",
    icon: Code2,
    title: "Desarrollo de Software a la Medida",
    gradient: "from-quark-cyan to-quark-mint",
    services: [
      "Aplicaciones web empresariales",
      "Dashboards y sistemas internos",
      "PWAs",
      "APIs REST y GraphQL",
      "Monolitos modulares",
      "Microservicios",
      "Sistemas orientados a eventos",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Apps Móviles",
    gradient: "from-primary to-quark-purple",
    services: [
      "Apps híbridas (React Native, Flutter)",
      "Apps nativas iOS y Android",
      "Offline-first",
      "Integraciones cloud",
      "Publicación en stores",
    ],
  },
  {
    id: "ia",
    icon: Brain,
    title: "Inteligencia Artificial y Automatización",
    gradient: "from-quark-purple to-quark-cyan",
    services: [
      "IA generativa",
      "Agentes inteligentes",
      "Chatbots y asistentes",
      "Automatización con IA",
      "Análisis de texto, datos e imágenes",
      "Orquestación de agentes multi-paso",
    ],
  },
  {
    id: "web",
    icon: Globe,
    title: "Web y Landing Pages",
    gradient: "from-quark-cyan to-primary",
    services: [
      "Webs corporativas",
      "Landing pages",
      "SEO técnico y performance",
      "Formularios inteligentes",
      "Integraciones marketing",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud, DevOps e Infraestructura",
    gradient: "from-quark-mint to-quark-cyan",
    services: [
      "AWS, GCP, Azure",
      "Migraciones",
      "CI/CD",
      "Kubernetes",
      "Observabilidad",
      "Optimización de costos",
    ],
  },
  {
    id: "seguridad",
    icon: Shield,
    title: "Seguridad y Calidad",
    gradient: "from-quark-orange to-primary",
    services: [
      "Autenticación y autorización",
      "Gestión de usuarios y roles",
      "Auditorías de seguridad",
      "Pruebas (unitarias, integración, e2e)",
      "Pruebas de carga",
      "Hardening",
    ],
  },
  {
    id: "datos",
    icon: BarChart3,
    title: "Datos y Analítica",
    gradient: "from-primary to-quark-cyan",
    services: [
      "Modelado de datos",
      "Integración y procesamiento",
      "Dashboards",
      "BI",
      "Reportes automatizados",
    ],
  },
  {
    id: "mantenimiento",
    icon: Wrench,
    title: "Mantenimiento y Evolución",
    gradient: "from-quark-peach to-quark-orange",
    services: [
      "Mantenimiento correctivo y evolutivo",
      "Soporte post-producción",
      "Refactorización",
      "Escalamiento",
    ],
  },
  {
    id: "equipos",
    icon: Users,
    title: "Equipos y Acompañamiento",
    gradient: "from-quark-cyan to-quark-purple",
    services: [
      "Staff augmentation",
      "Outsourcing",
      "Capacitación técnica",
      "Documentación",
      "Acompañamiento en lanzamientos",
    ],
  },
];

const Servicios = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-quark-purple/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-quark-cyan/10 rounded-full blur-[100px]" />
        </div>

        <div className="section-container relative z-10 text-center">
          <span className="badge-glass mb-4 inline-block">Nuestros Servicios</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Todo lo que necesitas para </span>
            <span className="gradient-text">construir tu producto digital</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Desde la estrategia inicial hasta el soporte continuo. Un equipo completo de expertos 
            en tecnología trabajando para el éxito de tu proyecto.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="section-container">
          <div className="space-y-12">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                id={category.id}
                className="glass-card p-8 md:p-10 scroll-mt-24"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Header */}
                  <div className="lg:w-1/3">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} p-0.5 mb-6`}>
                      <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                        <category.icon className="w-8 h-8 text-foreground" />
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {category.title}
                    </h2>
                  </div>

                  {/* Services List */}
                  <div className="lg:w-2/3">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.services.map((service) => (
                        <li 
                          key={service}
                          className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-quark-cyan mt-2 shrink-0" />
                          <span className="text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card/30">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-foreground">¿No encuentras lo que buscas?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cuéntanos tu proyecto y diseñamos una solución a la medida de tus necesidades.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contacto" className="group">
              Hablemos de tu proyecto
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Servicios;
