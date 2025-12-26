import { Link } from "react-router-dom";
import { Mail, Instagram, MapPin } from "lucide-react";

const footerLinks = {
  servicios: [
    { name: "Estrategia y Producto", href: "/servicios#estrategia" },
    { name: "Desarrollo a Medida", href: "/servicios#desarrollo" },
    { name: "Apps Móviles", href: "/servicios#mobile" },
    { name: "IA y Automatización", href: "/servicios#ia" },
    { name: "Cloud y DevOps", href: "/servicios#cloud" },
  ],
  empresa: [
    { name: "Sobre Nosotros", href: "/nosotros" },
    { name: "Cómo Trabajamos", href: "/como-trabajamos" },
    { name: "Contacto", href: "/contacto" },
  ],
  regiones: [
    "Colombia",
    "Panamá",
    "Argentina",
    "Ecuador",
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
        <Link to="/" className="flex items-center gap-3 group mb-6">
          <div className="relative">
            <img
              src="/logo.png"
              alt="Quark Software Consulting"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <span className="text-m font-bold tracking-tight">
            <span className="text-foreground">Software</span>
            <span className="text-muted-foreground font-normal ml-1">Consulting</span>
          </span>
        </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transformamos tu visión en soluciones tecnológicas que impulsan resultados reales.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:conversemos@quark-co.tech"
                aria-label="Enviar correo a Quark Software"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>

              <a
                href="https://www.instagram.com/quark.co_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar Instagram de Quark Software"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Servicios
            </p>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Empresa
            </p>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Presencia LATAM
            </p>
            <ul className="space-y-3">
              {footerLinks.regiones.map((region) => (
                <li key={region} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-quark-cyan" />
                  {region}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Quark Software Consulting. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacidad" className="hover:text-foreground transition-colors">
              Privacidad
            </Link>
            <Link to="/terminos" className="hover:text-foreground transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
