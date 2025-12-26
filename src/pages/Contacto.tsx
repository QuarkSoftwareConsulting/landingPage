import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Calendar, Clock, MapPin, CheckCircle } from "lucide-react";

const contactReasons = [
  "Quiero desarrollar un producto nuevo",
  "Necesito mejorar un sistema existente",
  "Busco un partner tecnológico",
  "Staff augmentation / Outsourcing",
  "Otro",
];

const trustPoints = [
  { icon: Clock, text: "Respuesta en menos de 24 horas" },
  { icon: CheckCircle, text: "Sin compromiso" },
  { icon: Calendar, text: "Agendamos según tu disponibilidad" },
];

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    reason: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      reason: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      <section className="py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-quark-purple/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-quark-orange/10 rounded-full blur-[100px]" />
        </div>

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Info */}
            <div>
              <span className="badge-glass mb-4 inline-block">Contacto</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-foreground">Hablemos de tu </span>
                <span className="gradient-text-cta">próximo proyecto</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Cuéntanos sobre tu idea o necesidad. Te responderemos en menos de 24 horas 
                con una propuesta personalizada.
              </p>

              {/* Trust Points */}
              <div className="space-y-4 mb-12">
                {trustPoints.map((point) => (
                  <div key={point.text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-quark-cyan/10 flex items-center justify-center">
                      <point.icon className="w-5 h-5 text-quark-cyan" />
                    </div>
                    <span className="text-muted-foreground">{point.text}</span>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="glass-card p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  También puedes escribirnos directamente
                </h3>
                <a
                  href="mailto:conversemos@quark-co.tech"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  conversemos@quark-co.tech
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  Colombia · Panamá · Argentina · Ecuador
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="bg-secondary/50 border-border/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="bg-secondary/50 border-border/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Empresa
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                    className="bg-secondary/50 border-border/50"
                  />
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-foreground mb-2">
                    ¿En qué podemos ayudarte? *
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    required
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    {contactReasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Cuéntanos más sobre tu proyecto *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe brevemente tu necesidad o proyecto..."
                    rows={5}
                    className="bg-secondary/50 border-border/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Al enviar este formulario, aceptas nuestra política de privacidad.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-24 bg-card/30">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-foreground">Presencia en </span>
            <span className="gradient-text">Latinoamérica</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Atendemos clientes en toda la región, con equipos distribuidos que garantizan 
            cobertura horaria y cercanía cultural.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Colombia", "Panamá", "Argentina", "Ecuador"].map((country) => (
              <div
                key={country}
                className="glass-card p-6 text-center hover:scale-[1.02] transition-transform"
              >
                <MapPin className="w-8 h-8 text-quark-cyan mx-auto mb-3" />
                <p className="text-lg font-semibold text-foreground">{country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
