import Link from "next/link";
import Image from "next/image";

const portals = [
  {
    icon: "/imagenes/super_admin.png",
    name: "Super Admin",
    desc: "Panel multi-tenant para la empresa dueña del SaaS. Gestión de administradoras, métricas de uso y facturación global.",
    href: "/super-admin",
    accent: "from-blue-600 to-teal-500",
    btnClass: "bg-blue-700 text-white hover:bg-blue-800",
    features: [
      "Gestión de tenants y licencias",
      "Métricas globales y MRR",
      "Auditoría y logs del sistema",
      "Configuración de planes",
    ],
  },
  {
    icon: "/imagenes/administradora.png",
    name: "Administradora",
    desc: "Portal para empresas que administran edificios. CRUD de edificios, gestión de gastos, comunicaciones y documentos legales.",
    href: "/admin",
    accent: "from-amber-500 to-yellow-400",
    btnClass: "border border-amber-500 text-amber-700 hover:bg-amber-50",
    features: [
      "Gestión de edificios y unidades",
      "Gastos comunes y cobranza",
      "Comunicados y circulares",
      "Informes para comités",
    ],
  },
  {
    icon: "/imagenes/residente.png",
    name: "Residente",
    desc: "App y portal web para copropietarios y arrendatarios. Pago en línea, reservas, avisos y participación en asambleas.",
    href: "/residente",
    accent: "from-emerald-500 to-teal-400",
    btnClass: "border border-emerald-600 text-emerald-700 hover:bg-emerald-50",
    features: [
      "Pago de gastos comunes online",
      "Reservas de áreas comunes",
      "Historial de pagos y estados",
      "Votaciones y asambleas",
    ],
  },
];

export function LandingPortals() {
  return (
    <section id="portales" className="bg-white px-8 py-16">
      <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-700">
        <Image src="/imagenes/portales.png" alt="Portales" width={16} height={16} className="object-contain" />
        Portales
      </div>
      <h2 className="mb-3 font-serif text-4xl font-semibold tracking-tight text-slate-900">
        Tres portales, <span className="text-blue-600">un ecosistema</span>
      </h2>
      <p className="mb-10 max-w-xl text-base font-light leading-relaxed text-slate-500">
        Cada actor de la comunidad tiene su propio espacio, adaptado a sus
        responsabilidades y necesidades.
      </p>

      <div className="grid grid-cols-3 gap-6">
        {portals.map((p) => (
          <div
            key={p.name}
            className="relative overflow-hidden rounded-2xl border border-slate-200 p-6"
          >
            <div className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${p.accent}`} />
            <div className="mb-5">
              <Image src={p.icon} alt={p.name} width={240} height={240} className="object-contain" />
            </div>
            <h3 className="mb-2 text-base font-medium text-slate-900">{p.name}</h3>
            <p className="mb-5 text-sm font-light leading-relaxed text-slate-500">{p.desc}</p>
            <ul className="mb-6 space-y-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="text-emerald-500">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link
              href={p.href}
              className={`block w-full rounded-lg py-2.5 text-center text-sm font-medium transition-colors ${p.btnClass}`}
            >
              Acceder →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
