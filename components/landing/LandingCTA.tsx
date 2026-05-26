import Link from "next/link";

export function LandingCTA() {
  return (
    <section
      className="relative overflow-hidden px-8 py-20 text-center"
      style={{ background: "linear-gradient(135deg,#E67E22 0%,#d4541f 100%)" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 30% 50%,rgba(255,255,255,0.08) 0%,transparent 60%)",
        }}
      />
      <div className="relative z-10">
        <h2 className="mb-3 font-serif text-4xl font-semibold tracking-tight text-white">
          ¿Listo para digitalizar tu condominio?
        </h2>
        <p className="mb-8 text-lg font-light text-white/80">
          Únete a más de 1.200 comunidades que ya gestionan bajo la Ley 21.442
          con CondoSaaS.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/admin"
            className="rounded-xl bg-white px-8 py-3.5 text-sm font-medium text-orange-700 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Crear cuenta gratis
          </Link>
          <Link
            href="/super-admin"
            className="rounded-xl px-8 py-3.5 text-sm text-white transition-all hover:bg-white/10"
            style={{ border: "2px solid rgba(255,255,255,0.5)" }}
          >
            Agendar demo
          </Link>
        </div>
      </div>
    </section>
  );
}
