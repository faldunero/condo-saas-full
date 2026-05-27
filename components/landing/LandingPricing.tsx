const plans = [
  { name: "Básico", price: "29.900", desc: "Para edificios pequeños que comienzan a digitalizarse", featured: false, features: ["Hasta 50 unidades", "Gastos comunes digitales", "Portal residente", "Reportes básicos"], btnClass: "border border-blue-600 text-blue-700 hover:bg-blue-50", btnLabel: "Comenzar gratis" },
  { name: "Profesional", price: "79.900", desc: "La opción completa para administradoras profesionales", featured: true, features: ["Unidades ilimitadas", "Asambleas digitales", "Fondo de reserva automático", "Cobranza integrada Webpay", "Cumplimiento Ley 21.442"], btnClass: "bg-blue-700 text-white hover:bg-blue-800", btnLabel: "Elegir Profesional" },
  { name: "Enterprise", price: null, desc: "Para administradoras con múltiples edificios y equipos grandes", featured: false, features: ["Edificios ilimitados", "Integración contable ERP", "API REST propia", "Soporte dedicado 24/7", "SLA garantizado"], btnClass: "border border-blue-600 text-blue-700 hover:bg-blue-50", btnLabel: "Contactar ventas →" },
];

export function LandingPricing() {
  return (
    <section id="precios" className="bg-white px-6 py-12 md:px-8 md:py-16">
      <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-700">
        🏷️ Precios
      </div>
      <h2 className="mb-3 font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
        Planes para cada <span className="text-blue-600">comunidad</span>
      </h2>
      <p className="mb-10 max-w-xl text-base font-light leading-relaxed text-slate-500">
        Sin costos ocultos. Precio por edificio administrado, sin límite de unidades en planes superiores.
      </p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className={`relative rounded-2xl p-7 ${p.featured ? "border-2 border-blue-600 shadow-lg shadow-blue-100" : "border border-slate-200"}`}>
            {p.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-700 px-4 py-1 text-xs font-medium text-white">
                Más popular
              </div>
            )}
            <p className="mb-2 text-sm text-slate-400">{p.name}</p>
            {p.price ? (
              <p className="mb-1 font-serif text-3xl font-semibold text-slate-900">
                <sup className="text-base">$</sup>{p.price}{" "}
                <span className="text-base font-light text-slate-400">/ mes</span>
              </p>
            ) : (
              <p className="mb-1 font-serif text-xl font-semibold text-slate-900">Precio a medida</p>
            )}
            <p className="mb-6 text-xs font-light text-slate-400">{p.desc}</p>
            <ul className="mb-7 space-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="text-xs text-emerald-500">✓</span> {f}
                </li>
              ))}
            </ul>
            <button className={`w-full rounded-lg py-3 text-sm font-medium transition-colors ${p.btnClass}`}>
              {p.btnLabel}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
