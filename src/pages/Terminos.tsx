import { Layout } from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";

const Terminos = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Términos y Condiciones
          </h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Estos Términos regulan el acceso y uso de{" "}
            <span className="text-foreground font-medium">www.quark-co.tech</span> (el “Sitio”),
            operado por Quark Software Consulting (“Quark”, “nosotros”).
          </p>

          <div className="mt-6 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Última actualización:</span>{" "}
            <span>25 de diciembre de 2025</span>
          </div>

          <Separator className="my-8" />

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-foreground font-semibold text-lg">1. Aceptación</h2>
              <p className="mt-2">
                Al acceder o usar el Sitio, aceptas estos Términos. Si no estás de acuerdo, no uses el Sitio.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-lg">2. Uso permitido</h2>
              <ul className="mt-2 list-disc pl-5 space-y-2">
                <li>Uso informativo y legítimo, conforme a la ley aplicable.</li>
                <li>No interferir con la seguridad, disponibilidad o funcionamiento del Sitio.</li>
                <li>No intentar acceder a áreas restringidas o sistemas relacionados sin autorización.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-lg">3. Propiedad intelectual</h2>
              <p className="mt-2">
                El contenido del Sitio (textos, marcas, logos, diseño, componentes, material gráfico y otros)
                es propiedad de Quark o se utiliza bajo licencia. No puedes copiar, reproducir, modificar,
                distribuir o explotar el contenido sin autorización previa y por escrito, salvo usos permitidos por ley.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-lg">4. Contenido y exactitud</h2>
              <p className="mt-2">
                Procuramos que la información sea actual y correcta. Sin embargo, el Sitio se ofrece “tal cual”
                y no garantizamos que el contenido sea completo, exacto o adecuado para un propósito específico.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-lg">5. Servicios y comunicaciones</h2>
              <p className="mt-2">
                El Sitio puede incluir invitaciones a solicitar información, demos o cotizaciones. Cualquier
                relación contractual se regirá por acuerdos específicos y por escrito. Si nos contactas,
                aceptas que podamos responderte usando los datos de contacto que suministres.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-lg">6. Enlaces a terceros</h2>
              <p className="mt-2">
                El Sitio puede contener enlaces a sitios de terceros. No controlamos esos sitios ni somos responsables
                de su contenido, disponibilidad o políticas. El acceso a terceros es bajo tu propio riesgo.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-lg">7. Limitación de responsabilidad</h2>
              <p className="mt-2">
                En la máxima medida permitida por la ley, Quark no será responsable por daños indirectos, incidentales,
                especiales, consecuentes o punitivos derivados del uso o imposibilidad de uso del Sitio, incluso si
                se advirtió la posibilidad de dichos daños.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-lg">8. Indemnidad</h2>
              <p className="mt-2">
                Aceptas defender, indemnizar y mantener indemne a Quark frente a reclamaciones, responsabilidades,
                daños y gastos derivados de tu uso del Sitio en incumplimiento de estos Términos o de la ley aplicable.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-lg">9. Disponibilidad y cambios</h2>
              <p className="mt-2">
                Podemos modificar, suspender o descontinuar el Sitio (total o parcialmente) en cualquier momento,
                sin garantía de disponibilidad continua.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-lg">10. Cambios a los Términos</h2>
              <p className="mt-2">
                Podemos actualizar estos Términos. La versión vigente será la publicada en esta página, indicando
                la fecha de “Última actualización”. El uso continuado del Sitio implica aceptación de los cambios.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-lg">11. Legislación aplicable</h2>
              <p className="mt-2">
                Estos Términos se regirán por la legislación aplicable del lugar de operación principal de Quark,
                salvo que una normativa imperativa de tu jurisdicción disponga lo contrario.
              </p>
              <p className="mt-2 text-sm">
                Nota: si quieres “cerrarlo” con precisión legal, aquí conviene indicar la jurisdicción exacta
                (por ejemplo, Panamá) y el mecanismo de resolución de disputas.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-semibold text-lg">12. Contacto</h2>
              <p className="mt-2">
                Para consultas sobre estos Términos:{" "}
                <a
                  className="text-foreground underline underline-offset-4"
                  href="mailto:conversemos@quark-co.tech"
                >
                  conversemos@quark-co.tech
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terminos;
