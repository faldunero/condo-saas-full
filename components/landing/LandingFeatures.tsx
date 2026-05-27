"use client";

import Image from "next/image";
import { useState } from "react";

const modalData: Record<string, { num: string; title: string; resumen: string; puntos: string[] }[]> = {
  "Arts. 2, 4 y 5 Ley 21.442": [
    {
      num: "Art. 2",
      title: "Definiciones y bienes comunes",
      resumen: "Define los conceptos fundamentales de la copropiedad inmobiliaria, estableciendo qué se entiende por bienes comunes, unidades y derechos en el condominio.",
      puntos: [
        "Los bienes comunes pertenecen a todos los copropietarios en proporción a sus derechos.",
        "Incluye terrenos, fachadas, techos, instalaciones y servicios de uso común.",
        "Ningún copropietario puede enajenar su cuota en bienes comunes separada de su unidad.",
        "El uso de bienes comunes no puede entorpecer el legítimo ejercicio de los demás.",
      ],
    },
    {
      num: "Art. 4",
      title: "Obligación de contribuir a gastos",
      resumen: "Establece la obligación legal de todos los copropietarios de contribuir a los gastos comunes ordinarios y extraordinarios del condominio.",
      puntos: [
        "Todos los copropietarios están obligados a pagar gastos comunes sin excepción.",
        "La obligación se mantiene aunque el copropietario no use los bienes comunes.",
        "Los arrendatarios pueden ser responsables solidarios si el contrato así lo establece.",
        "El incumplimiento genera intereses corrientes desde la fecha de vencimiento.",
      ],
    },
    {
      num: "Art. 5",
      title: "Gastos comunes y prorrateo",
      resumen: "Regula la forma de calcular y distribuir los gastos comunes entre los copropietarios, estableciendo el prorrateo como mecanismo principal.",
      puntos: [
        "El prorrateo se calcula según el avalúo fiscal de cada unidad.",
        "El reglamento puede establecer una forma distinta de distribución.",
        "Los gastos comunes ordinarios incluyen mantención, servicios y administración.",
        "Los gastos extraordinarios requieren acuerdo de asamblea para su cobro.",
        "La administración debe emitir liquidaciones mensuales detalladas.",
      ],
    },
  ],
  "Arts. 17, 18 y 19 Ley 21.442": [
    {
      num: "Art. 17",
      title: "Asambleas ordinarias",
      resumen: "Establece la obligación de realizar al menos una asamblea ordinaria al año para tratar materias de administración general del condominio.",
      puntos: [
        "Debe realizarse dentro de los 3 primeros meses de cada año.",
        "Trata la rendición de cuentas, presupuesto y elección de comité.",
        "Convocatoria con al menos 5 días de anticipación por escrito.",
        "Primera citación requiere mayoría absoluta de los derechos del condominio.",
      ],
    },
    {
      num: "Art. 18",
      title: "Asambleas extraordinarias",
      resumen: "Regula las asambleas extraordinarias que pueden convocarse cuando las circunstancias lo requieran o a petición de los copropietarios.",
      puntos: [
        "Puede convocarse cuando las circunstancias lo exijan.",
        "El 10% de los copropietarios puede solicitar su convocatoria.",
        "Trata materias específicas indicadas en la convocatoria.",
        "Segunda citación con quórum de copropietarios presentes.",
        "Ciertos acuerdos requieren quórums especiales calificados.",
      ],
    },
    {
      num: "Art. 19",
      title: "Actas y acuerdos",
      resumen: "Establece los requisitos formales para el registro de acuerdos adoptados en asambleas y su validez legal frente a todos los copropietarios.",
      puntos: [
        "Los acuerdos deben constar en acta firmada por los asistentes.",
        "El acta debe estar disponible para todos los copropietarios.",
        "Los acuerdos son obligatorios para todos, incluidos ausentes y disidentes.",
        "Las actas deben archivarse y conservarse por el administrador.",
      ],
    },
  ],
  "Arts. 24 y 35 Ley 21.442": [
    {
      num: "Art. 24",
      title: "Rendición de cuentas",
      resumen: "Obliga al administrador a rendir cuenta documentada de su gestión al menos una vez al año ante la asamblea ordinaria.",
      puntos: [
        "Rendición de cuentas anual obligatoria ante la asamblea ordinaria.",
        "Debe incluir balance de ingresos y egresos con comprobantes.",
        "Estado del fondo de reserva y su uso durante el período.",
        "Presupuesto estimado para el próximo período.",
        "Los copropietarios pueden solicitar información financiera en cualquier momento.",
      ],
    },
    {
      num: "Art. 35",
      title: "Transparencia financiera",
      resumen: "Garantiza el derecho de todos los copropietarios a acceder a la información financiera y administrativa de la comunidad.",
      puntos: [
        "Cualquier copropietario puede solicitar información financiera al administrador.",
        "El administrador debe responder en plazo razonable con documentación.",
        "Los contratos de servicios deben estar disponibles para revisión.",
        "El presupuesto anual debe ser accesible a todos los copropietarios.",
        "La negativa injustificada puede ser causal de remoción del administrador.",
      ],
    },
  ],
  "Art. 38 Ley 21.442": [
    {
      num: "Art. 38",
      title: "Fondo de reserva obligatorio",
      resumen: "Establece la obligación de constituir y mantener un fondo de reserva equivalente al menos al 10% del presupuesto anual de gastos comunes.",
      puntos: [
        "Fondo mínimo obligatorio: 10% del presupuesto anual de gastos comunes.",
        "Uso exclusivo para reparaciones de bienes comunes y obras urgentes.",
        "El uso del fondo debe ser aprobado por la asamblea, salvo urgencia.",
        "Debe mantenerse en cuenta separada e identificable.",
        "El administrador debe informar su estado en cada rendición de cuentas.",
      ],
    },
  ],
  "Art. 47 Ley 21.442": [
    {
      num: "Art. 47",
      title: "Reglamento de copropiedad",
      resumen: "Regula el contenido mínimo obligatorio del reglamento de copropiedad, su modificación y la obligación de entregarlo a cada nuevo residente.",
      puntos: [
        "El reglamento debe entregarse a cada nuevo copropietario o arrendatario.",
        "Debe contener derechos y obligaciones de los copropietarios.",
        "Modificaciones requieren acuerdo de asamblea extraordinaria.",
        "Debe inscribirse en el Conservador de Bienes Raíces.",
        "Es vinculante para todos, incluyendo arrendatarios.",
      ],
    },
  ],
  "Arts. 5 y 13 Ley 21.442": [
    {
      num: "Art. 5",
      title: "Gastos comunes y mora",
      resumen: "Regula las consecuencias del no pago de gastos comunes y los mecanismos de cobranza disponibles para la administración.",
      puntos: [
        "El no pago genera intereses corrientes desde el vencimiento.",
        "La administración puede suspender servicios al moroso según reglamento.",
        "La deuda de gastos comunes tiene carácter de título ejecutivo.",
        "El copropietario moroso no puede ejercer su derecho a voto en asamblea.",
      ],
    },
    {
      num: "Art. 13",
      title: "Cobro judicial de gastos comunes",
      resumen: "Establece el procedimiento de cobranza judicial para gastos comunes impagos, otorgando mérito ejecutivo a las liquidaciones certificadas.",
      puntos: [
        "Las liquidaciones de gastos comunes tienen mérito ejecutivo.",
        "El procedimiento es el juicio ejecutivo del Código de Procedimiento Civil.",
        "El juez puede decretar el embargo de la unidad del moroso.",
        "Los honorarios del abogado pueden ser de cargo del deudor.",
        "La administración puede ceder el crédito a empresas de cobranza.",
      ],
    },
  ],
};

const features = [
  { icon: "/imagenes/gastos_comunes_digitales.png", title: "Gastos comunes digitales", desc: "Generación automática de liquidaciones, proporcionalidad por prorrateo y cobro en línea con Webpay y transferencia.", law: "Arts. 2, 4 y 5 Ley 21.442", color: "bg-blue-50" },
  { icon: "/imagenes/asambleas_y_votaciones.png", title: "Asambleas y votaciones", desc: "Convocatorias electrónicas, quórum automático, actas digitales firmadas y votaciones presenciales o telemáticas.", law: "Arts. 17, 18 y 19 Ley 21.442", color: "bg-emerald-50" },
  { icon: "/imagenes/transparencia_financiera.png", title: "Transparencia financiera", desc: "Balance mensual visible para todos los copropietarios. Rendición de cuentas con comprobantes y trazabilidad completa.", law: "Arts. 24 y 35 Ley 21.442", color: "bg-amber-50" },
  { icon: "/imagenes/fondo_de_reserva_obligatorio.png", title: "Fondo de reserva obligatorio", desc: "Control automático del fondo de reserva mínimo del 10%, con alertas de incumplimiento y reportes para el comité.", law: "Art. 38 Ley 21.442", color: "bg-purple-50" },
  { icon: "/imagenes/reglamento_de_copropiedad.png", title: "Reglamento de copropiedad", desc: "Digitaliza, versiona y comparte el reglamento. Envío automático a nuevos residentes y firma electrónica simple.", law: "Art. 47 Ley 21.442", color: "bg-teal-50" },
  { icon: "/imagenes/gestión_de_morosidad.png", title: "Gestión de morosidad", desc: "Cobranza preventiva automatizada, estados de cuenta, notificaciones progresivas e integración con gestores judiciales.", law: "Arts. 5 y 13 Ley 21.442", color: "bg-red-50" },
];

export function LandingFeatures() {
  const [selectedLaw, setSelectedLaw] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const openModal = (law: string) => { setSelectedLaw(law); setActiveTab(0); };
  const articulos = selectedLaw ? modalData[selectedLaw] ?? [] : [];

  return (
    <section id="funciones" className="bg-slate-50 px-6 py-12 md:px-8 md:py-16">
      <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-700">
        <Image src="/imagenes/funcionalidades.png" alt="Funcionalidades" width={16} height={16} className="object-contain" />
        Funcionalidades
      </div>
      <h2 className="mb-3 font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
        Todo lo que exige la <span className="text-blue-600">Ley de Copropiedad</span>
      </h2>
      <p className="mb-10 max-w-xl text-base font-light leading-relaxed text-slate-500">
        Cada módulo está diseñado conforme a los artículos de la Ley 21.442 para que administres con total tranquilidad legal.
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="group cursor-default rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg">
            <div className={`mb-4 inline-flex h-24 w-24 items-center justify-center rounded-xl ${f.color}`}>
              <Image src={f.icon} alt={f.title} width={168} height={168} className="object-contain" />
            </div>
            <h3 className="mb-2 text-sm font-medium text-slate-900">{f.title}</h3>
            <p className="mb-4 text-xs font-light leading-relaxed text-slate-500">{f.desc}</p>
            <button onClick={() => openModal(f.law)} className="inline-flex cursor-pointer items-center gap-1 rounded border border-blue-100 bg-blue-50 px-2 py-1 text-xs text-blue-700 transition-colors hover:bg-blue-100">
              ⚖️ {f.law}
            </button>
          </div>
        ))}
      </div>

      {selectedLaw && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-0 md:items-center md:p-6" style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }} onClick={() => setSelectedLaw(null)}>
          <div className="relative w-full rounded-t-2xl md:max-w-lg md:rounded-2xl" style={{ background: "linear-gradient(135deg,#0D1B2A 0%,#0D4A75 100%)", border: "1px solid rgba(255,255,255,0.15)", maxHeight: "90vh", overflowY: "auto" }} onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 z-10 px-6 pt-6 pb-4 md:px-8 md:pt-8" style={{ background: "linear-gradient(135deg,#0D1B2A 0%,#0D4A75 100%)" }}>
              {/* Handle bar móvil */}
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/20 md:hidden" />
              <button onClick={() => setSelectedLaw(null)} className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white">✕</button>
              <p className="mb-1 text-xs font-medium" style={{ color: "#5DCAA4" }}>Ley 21.442 · Copropiedad Inmobiliaria</p>
              <h3 className="mb-4 font-serif text-lg font-semibold text-white md:text-xl">{selectedLaw}</h3>
              {articulos.length > 1 && (
                <div className="flex flex-wrap gap-2">
                  {articulos.map((a, i) => (
                    <button key={a.num} onClick={() => setActiveTab(i)} className="rounded-lg px-3 py-1.5 text-xs font-medium transition-colors" style={{ background: activeTab === i ? "rgba(93,202,165,0.2)" : "rgba(255,255,255,0.06)", border: activeTab === i ? "1px solid rgba(93,202,165,0.4)" : "1px solid rgba(255,255,255,0.1)", color: activeTab === i ? "#5DCAA4" : "rgba(255,255,255,0.5)" }}>
                      {a.num}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="px-6 pb-8 md:px-8">
              {articulos[activeTab] && (
                <>
                  <h4 className="mb-3 text-base font-medium text-white">{articulos[activeTab].title}</h4>
                  <p className="mb-5 text-sm font-light leading-relaxed text-white/65">{articulos[activeTab].resumen}</p>
                  <p className="mb-3 text-xs uppercase tracking-widest text-white/40">Puntos clave</p>
                  <ul className="space-y-2">
                    {articulos[activeTab].puntos.map((punto, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-light text-white/75">
                        <span className="mt-0.5 flex-shrink-0 text-xs" style={{ color: "#5DCAA4" }}>✓</span>
                        {punto}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
