import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const Privacidad = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Política de Privacidad
          </h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            En Quark Software Consulting  (“Quark”, “nosotros”) respetamos tu privacidad. Esta Política
            describe cómo tratamos la información cuando visitas{" "}
            <span className="text-foreground font-medium">www.quark-co.tech</span>.
          </p>

          <div className="mt-6 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Última actualización:</span>{" "}
            <span>25 de diciembre de 2025</span>
          </div>

          <Separator className="my-8" />

          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              En general, este sitio es informativo. <span className="text-foreground font-medium">No te solicitamos</span>{" "}
              datos personales para navegar. Sin embargo, como ocurre con cualquier sitio web, pueden existir
              <span className="text-foreground font-medium"> datos técnicos</span> asociados a la conexión
              (por ejemplo, registros del proveedor de hosting) que se procesan para seguridad, diagnóstico y
              operación del servicio.
            </p>
          </div>

          <div className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>1. Responsable y alcance</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-3">
                    El responsable del tratamiento (si aplica) es <span className="text-foreground font-medium">Quark Software Consulting</span>.
                    Esta Política aplica únicamente a la información tratada a través de este sitio web.
                  </p>
                  <p>
                    Contacto:{" "}
                    <a
                      className="text-foreground underline underline-offset-4"
                      href="mailto:conversemos@quark-co.tech"
                    >
                      conversemos@quark-co.tech
                    </a>
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>2. Información que recopilamos</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                  <p>
                    <span className="text-foreground font-medium">2.1 Navegación (sin formularios):</span>{" "}
                    no solicitamos nombre, teléfono, documento, dirección ni datos similares para navegar el sitio.
                  </p>
                  <p>
                    <span className="text-foreground font-medium">2.2 Datos técnicos (operación y seguridad):</span>{" "}
                    nuestro proveedor de infraestructura/hosting puede registrar automáticamente información técnica
                    como dirección IP, tipo de navegador, sistema operativo, fecha/hora de acceso, páginas solicitadas,
                    y eventos de seguridad. Normalmente se usa para prevenir fraude, mitigar ataques, depurar errores
                    y mantener la estabilidad del servicio.
                  </p>
                  <p>
                    <span className="text-foreground font-medium">2.3 Si nos contactas:</span>{" "}
                    si nos escribes por correo o si en el futuro habilitamos un formulario real de contacto,
                    podremos tratar los datos que compartas (por ejemplo, nombre, correo, empresa y mensaje)
                    únicamente para atender tu solicitud.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>3. Cookies y tecnologías similares</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                  <p>
                    Este sitio puede utilizar cookies <span className="text-foreground font-medium">estrictamente necesarias</span>{" "}
                    para el funcionamiento técnico (por ejemplo, preferencias de interfaz). Si se incorporan cookies de
                    analítica, marketing o terceros, habilitaremos un mecanismo de consentimiento cuando sea requerido por
                    la normativa aplicable.
                  </p>
                  <p>
                    Puedes controlar cookies desde la configuración de tu navegador. Ten en cuenta que deshabilitarlas puede
                    afectar ciertas funcionalidades.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>4. Finalidades y base legal (cuando aplica)</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                  <p>
                    Cuando tratemos información (por ejemplo, datos técnicos o mensajes de contacto), lo haremos para:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Operar y asegurar el sitio (prevención de abuso, seguridad, diagnóstico).</li>
                    <li>Responder solicitudes de contacto o cotización.</li>
                    <li>Mejorar el rendimiento y la calidad del servicio.</li>
                  </ul>
                  <p>
                    Dependiendo del caso, la base legal puede ser: interés legítimo (seguridad/operación),
                    ejecución de medidas precontractuales/contractuales (si solicitas servicios),
                    o consentimiento (si incorporamos cookies no esenciales u otros tratamientos opcionales).
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>5. Compartición con terceros</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                  <p>
                    No vendemos tu información personal. Podemos compartir datos técnicos o de operación con proveedores
                    que nos prestan servicios (por ejemplo, hosting, protección anti-abuso, monitoreo), bajo acuerdos
                    y medidas razonables de seguridad.
                  </p>
                  <p>
                    Si en el futuro integras analítica o mensajería (por ejemplo, Google Analytics, Meta Pixel, chat widgets),
                    esta sección deberá actualizarse con el detalle del proveedor y su finalidad.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>6. Transferencias internacionales</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Nuestros proveedores tecnológicos pueden operar en distintos países. Cuando aplique, procuraremos
                  usar salvaguardas razonables para transferencias internacionales (por ejemplo, cláusulas contractuales
                  estándar u otros mecanismos reconocidos).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>7. Retención</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                  <p>
                    Los registros técnicos se conservan el tiempo necesario para operación y seguridad, y luego se eliminan
                    o anonimizan según políticas del proveedor.
                  </p>
                  <p>
                    Si nos contactas, conservaremos tus mensajes el tiempo razonablemente necesario para atender tu solicitud,
                    cumplir obligaciones legales o gestionar relaciones comerciales.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>8. Tus derechos</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                  <p>
                    Dependiendo de tu jurisdicción, puedes tener derechos como acceso, rectificación, eliminación,
                    oposición, limitación y portabilidad. Si deseas ejercerlos, contáctanos en{" "}
                    <a
                      className="text-foreground underline underline-offset-4"
                      href="mailto:conversemos@quark-co.tech"
                    >
                      conversemos@quark-co.tech
                    </a>
                    .
                  </p>
                  <p>
                    Si no tenemos datos que te identifiquen (por ejemplo, solo navegación anónima), podríamos pedir información
                    adicional para validar la solicitud o explicar por qué no es posible asociarla a un registro específico.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger>9. Seguridad</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Implementamos medidas razonables para proteger la información. Sin embargo, ningún sistema es 100% seguro.
                  Te recomendamos no enviar información sensible por canales no cifrados.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger>10. Cambios a esta Política</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Podemos actualizar esta Política. Publicaremos la nueva versión en esta página y actualizaremos la fecha
                  de “Última actualización”.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
        </div>
      </section>
    </Layout>
  );
};

export default Privacidad;
