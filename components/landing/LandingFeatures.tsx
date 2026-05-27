import Image from "next/image";

const features = [
  {
    icon: "/imagenes/gastos_comunes_digitales.png",
    title: "Gastos comunes digitales",
    desc: "Generación automática de liquidaciones, proporcionalidad por prorrateo y cobro en línea con Webpay y transferencia.",
    law: "Arts. 2, 4 y 5 Ley 21.442",
    color: "bg-blue-50",
  },
  {
    icon: "/imagenes/asambleas_y_votaciones.png",
    title: "Asambleas y votaciones",
    desc: "Convocatorias electrónicas, quórum automático, actas digitales firmadas y votaciones presenciales o telemáticas.",
    law: "Arts. 17, 18 y 19 Ley 21.442",
    color: "bg-emerald-50",
  },
  {
    icon: "/imagenes/transparencia_financiera.png",
    title: "Transparencia financiera",
    desc: "Balance mensual visible para todos los copropietarios. Rendición de cuentas con comprobantes y trazabilidad completa.",
    law: "Arts. 24 y 35 Ley 21.442",
    color: "bg-amber-50",
  },
  {
    icon: "/imagenes/fondo_de_reserva_obligatorio.png",
    title: "Fondo de reserva obligatorio",
    desc: "Control automático del fondo de reserva mínimo del 10%, con alertas de incumplimiento y reportes para el comité.",
    law: "Art. 38 Ley 21.442",
    color: "bg-purple-50",
  },
  {
    icon: "/imagenes/reglamento_de_copropiedad.png",
    title: "Reglamento de copropiedad",
    desc: "Digitaliza, versiona y comparte el reglamento. Envío automático a nuevos residentes y firma electrónica simple.",
    law: "Art. 47 Ley 21.442",
    color: "bg-teal-50",
  },
  {
    icon: "/imagenes/gestión_de_morosidad.png",
    title: "Gestión de morosidad",
    desc: "Cobranza preventiva automatizada, estados de cuenta, notificaciones progresivas e integración con gestores judiciales.",
    law: "Arts. 5 y 13 Ley 21.442",
    color: "bg-red-50",
  },
];

export function LandingFeatures() {
  return (
    <section id="funciones" className="bg-slate-50 px-8 py-16">
      <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-700">
        <Image src="/imagenes/funcionalidades.png" alt="Funcionalidades" width={16} height={16} className="object-contain" />
        Funcionalidades
      </div>
      <h2 className="mb-3 font-serif text-4xl font-semibold tracking-tight text-slate-900">
        Todo lo que exige la{" "}
        <span className="text-blue-600">Ley de Copropiedad</span>
      </h2>
      <p className="mb-10 max-w-xl text-base font-light leading-relaxed text-slate-500">
        Cada módulo está diseñado conforme a los artículos de la Ley 21.442 para
        que administres con total tranquilidad legal.
      </p>

      <div className="grid grid-cols-3 gap-5">
        {features.map((f) => (
          <div
            key={f.title}
            className="group cursor-default rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg"
          >
            <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${f.color}`}>
              <Image src={f.icon} alt={f.title} width={28} height={28} className="object-contain" />
            </div>
            <h3 className="mb-2 text-sm font-medium text-slate-900">{f.title}</h3>
            <p className="mb-4 text-xs font-light leading-relaxed text-slate-500">{f.desc}</p>
            <span className="inline-flex items-center gap-1 rounded border border-blue-100 bg-blue-50 px-2 py-1 text-xs text-blue-700">
              ⚖️ {f.law}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
