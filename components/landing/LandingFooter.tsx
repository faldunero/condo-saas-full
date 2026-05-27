export function LandingFooter() {
  return (
    <footer className="flex flex-col items-center gap-3 px-6 py-6 text-center text-xs font-light md:flex-row md:justify-between md:px-8 md:text-left" style={{ background: "#0D1B2A", color: "rgba(255,255,255,0.45)" }}>
      <span className="font-serif text-base font-semibold text-white">
        Condo<span style={{ color: "#5DCAA4" }}>SaaS</span>
      </span>
      <span>Conforme con Ley de Copropiedad Inmobiliaria N°21.442 · Chile</span>
      <span>© 2026 CondoSaaS SpA</span>
    </footer>
  );
}
