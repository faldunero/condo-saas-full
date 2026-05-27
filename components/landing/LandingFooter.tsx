export function LandingFooter() {
  return (
    <footer
      className="flex items-center justify-between px-8 py-6 text-xs font-light"
      style={{ background: "#0D1B2A", color: "rgba(255,255,255,0.45)" }}
    >
      <span className="font-serif text-base font-semibold text-white">
        Condo<span style={{ color: "#5DCAA4" }}>SaaS</span>
      </span>
      <span>Conforme con Ley de Copropiedad Inmobiliaria N°21.442 · Chile</span>
      <span>© 2026 CondoSaaS SpA</span>
    </footer>
  );
}