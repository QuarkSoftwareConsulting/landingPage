import React from "react";

type FloatingWhatsAppButtonProps = {
  /** Phone in international format, digits only. Example: 50761234567 */
  phone?: string;
  /** Default message to prefill in WhatsApp chat */
  message?: string;
  /** Optional className for positioning tweaks */
  className?: string;
};

/**
 * Floating WhatsApp contact button.
 * - Fixed position (bottom-right by default)
 * - Pulsing "wave" animation to draw attention without being intrusive
 * - Opens WhatsApp in a new tab (wa.me)
 */
export const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  phone,
  message,
  className = "",
}) => {
  const envPhone = (import.meta as any).env?.VITE_WHATSAPP_PHONE as string | undefined;
  const envMessage = (import.meta as any).env?.VITE_WHATSAPP_MESSAGE as string | undefined;

  const finalPhone = (phone ?? envPhone ?? "").replace(/\D/g, "");
  const finalMessage = message ?? envMessage ?? "Hola, me gustaría recibir más información.";

  // If not configured, avoid rendering a broken CTA.
  if (!finalPhone) return null;

  const href = `https://wa.me/${finalPhone}?text=${encodeURIComponent(finalMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`group fixed bottom-6 right-6 z-50 ${className}`}
    >
      <div className="relative h-14 w-14">
        {/* Wave / pulse */}
        <span className="absolute inset-0 rounded-full bg-green-500/25 animate-ping" />
        <span className="absolute inset-0 rounded-full bg-green-500/10" />

        {/* Icon (no background circle) */}
        <img
          src="/WhatsApp.svg.webp"
          alt="WhatsApp"
          className="relative h-14 w-14 object-contain drop-shadow-lg transition-transform duration-200 group-hover:scale-[1.05] active:scale-[0.98]"
          loading="lazy"
          decoding="async"
        />

        {/* Tooltip */}
        <div className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 rounded-md bg-black/80 px-3 py-1.5 text-xs text-white shadow-sm opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
          Chatea con nosotros
        </div>
      </div>
    </a>
  );
};
