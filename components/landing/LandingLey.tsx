const articulos = [
  { num: "Art. 5", title: "Gastos comunes y prorrateo", desc: "Cálculo automático según prorrateo de derechos" },
  { num: "Arts. 17–19", title: "Asambleas de copropietarios", desc: "Convocatoria, quórum y actas digitales" },
  { num: "Art. 24", title: "Rendición de cuentas", desc: "Balances periódicos con trazabilidad" },
  { num: "Art. 38", title: "Fondo de reserva", desc: "Mínimo 10% obligatorio, monitoreado" },
  { num: "Art. 35", title: "Transparencia financiera", desc: "Información accesible a todos los copropietarios" },
  { num: "Art. 47", title: "Reglamento de copropiedad", desc: "Digitalización, versionado y firma electrónica" },
];

const checklist = [
  "Liquidación mensual de gastos comunes",
  "Asamblea ordinaria anual convocada",
  "Fondo de reserva al 10% mínimo",
  "Rendición de cuentas al día",
  "Reglamento actualizado y firmado",
  "Actas de asamblea publicadas",
  "Comité de administración vigente",
];

export function LandingLey() {
  return (
    <section
      id="ley"
      className="relative overflow-hidden px-8 py-16"
      style={{ background: "linear-gradient(135deg,#0D1B2A 0%,#0D4A75 100%)" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg,rgba(255,255,255,0.03) 0 1px,transparent 1px 60px),repeating-linear-gradient(90deg,rgba(255,255,255,0.03) 0 1px,transparent 1px 80px)",
        }}
      />

      <div className="relative z-10 flex items-start gap-16">
        <div className="flex-1">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs"
            style={{
              background: "rgba(93,202,165,0.15)",
              border: "1px solid rgba(93,202,165,0.3)",
              color: "#5DCAA4",
            }}
          >
            ⚖️ Marco legal chileno
          </div>

          <h2 className="mb-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-white">
            Diseñado sobre la<br />Ley 21.442
          </h2>
          <p className="mb-8 max-w-lg text-base font-light leading-relaxed text-white/60">
            La plataforma interpreta y automatiza los artículos clave de la Ley
            de Copropiedad Inmobiliaria, reduciendo el riesgo legal para
            administradoras y comités.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {articulos.map((a) => (
              <div
                key={a.num}
                className="rounded-xl p-4"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p className="mb-1 text-xs font-medium" style={{ color: "#5DCAA4" }}>{a.num}</p>
                <p className="mb-1 text-sm text-white/85">{a.title}</p>
                <p className="text-xs font-light text-white/45">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-72 flex-shrink-0">
          <div
            className="rounded-2xl p-5"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <p className="mb-4 text-xs uppercase tracking-widest text-white/50">
              Checklist de cumplimiento
            </p>
            {checklist.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-b py-3 last:border-0"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <div
                  className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md"
                  style={{
                    background: "rgba(29,158,117,0.2)",
                    border: "1px solid rgba(29,158,117,0.4)",
                  }}
                >
                  <span style={{ color: "#5DCAA4", fontSize: 12 }}>✓</span>
                </div>
                <span className="text-sm font-light text-white/75">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
