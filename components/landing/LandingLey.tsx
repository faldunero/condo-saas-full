"use client";

import { useState } from "react";

const articulos = [
  { num: "Art. 5", title: "Gastos comunes y prorrateo", desc: "Cálculo automático según prorrateo de derechos", contenido: { resumen: "Regula la obligación de todos los copropietarios de contribuir a los gastos comunes, proporcionalmente al avalúo fiscal de su unidad o según lo establezca el reglamento de copropiedad.", puntos: ["Todo copropietario debe pagar gastos comunes ordinarios y extraordinarios.", "El prorrateo se calcula según el avalúo fiscal de cada unidad o según el reglamento.", "El no pago genera intereses y puede derivar en acciones de cobranza.", "La administración debe emitir liquidaciones mensuales detalladas.", "Los gastos comunes incluyen: mantención, servicios, seguros y fondo de reserva."], aplicacion: "CondoSaaS genera automáticamente las liquidaciones mensuales aplicando el prorrateo correcto según el avalúo de cada unidad, con desglose completo por ítem de gasto." } },
  { num: "Arts. 17–19", title: "Asambleas de copropietarios", desc: "Convocatoria, quórum y actas digitales", contenido: { resumen: "Establece las normas para la realización de asambleas ordinarias y extraordinarias, incluyendo convocatoria, quórum mínimo, materias a tratar y validez de los acuerdos.", puntos: ["Asamblea ordinaria: al menos una vez al año dentro de los 3 primeros meses.", "Asamblea extraordinaria: cuando lo exijan las circunstancias o lo pida el 10% de los copropietarios.", "Convocatoria con al menos 5 días de anticipación por escrito.", "Primera citación: mayoría absoluta de los derechos. Segunda: los presentes.", "Los acuerdos deben constar en acta firmada y estar disponibles para todos."], aplicacion: "CondoSaaS envía convocatorias electrónicas certificadas, controla el quórum en tiempo real, registra votaciones y genera actas digitales con firma electrónica simple." } },
  { num: "Art. 24", title: "Rendición de cuentas", desc: "Balances periódicos con trazabilidad", contenido: { resumen: "Obliga al administrador a rendir cuenta documentada de su gestión a lo menos una vez al año en asamblea ordinaria, detallando ingresos, egresos y estado financiero de la comunidad.", puntos: ["Rendición de cuentas anual obligatoria ante la asamblea ordinaria.", "Debe incluir balance de ingresos y egresos con comprobantes.", "Estado del fondo de reserva y su uso durante el período.", "Presupuesto estimado para el próximo período.", "Los copropietarios pueden solicitar información financiera en cualquier momento."], aplicacion: "CondoSaaS mantiene registro contable en tiempo real con respaldo de comprobantes digitales, generando reportes de rendición de cuentas listos para presentar en asamblea." } },
  { num: "Art. 38", title: "Fondo de reserva", desc: "Mínimo 10% obligatorio, monitoreado", contenido: { resumen: "Establece la obligación de constituir y mantener un fondo de reserva equivalente a lo menos al 10% del presupuesto anual de gastos comunes, destinado a reparaciones mayores y obras urgentes.", puntos: ["Fondo mínimo obligatorio: 10% del presupuesto anual de gastos comunes.", "Uso exclusivo para reparaciones de bienes comunes y obras urgentes.", "El uso del fondo debe ser aprobado por la asamblea, salvo urgencia.", "Debe mantenerse en cuenta separada e identificable.", "El administrador debe informar su estado en cada rendición de cuentas."], aplicacion: "CondoSaaS monitorea automáticamente el nivel del fondo de reserva, emite alertas cuando baja del 10% mínimo y registra cada movimiento con su justificación." } },
  { num: "Art. 35", title: "Transparencia financiera", desc: "Información accesible a todos los copropietarios", contenido: { resumen: "Garantiza el derecho de todos los copropietarios a acceder a la información financiera y administrativa de la comunidad, incluyendo contratos, presupuestos y estados de cuenta.", puntos: ["Cualquier copropietario puede solicitar información financiera al administrador.", "El administrador debe responder en plazo razonable con documentación.", "Los contratos de servicios deben estar disponibles para revisión.", "El presupuesto anual debe ser accesible a todos los copropietarios.", "La negativa injustificada puede ser causal de remoción del administrador."], aplicacion: "CondoSaaS publica automáticamente balances, contratos y presupuestos en el portal de cada residente, garantizando transparencia permanente sin necesidad de solicitudes formales." } },
  { num: "Art. 47", title: "Reglamento de copropiedad", desc: "Digitalización, versionado y firma electrónica", contenido: { resumen: "Regula el contenido mínimo obligatorio del reglamento de copropiedad, su modificación y la obligación de entregarlo a cada nuevo copropietario o arrendatario al momento de su ingreso.", puntos: ["El reglamento debe entregarse a cada nuevo copropietario o arrendatario.", "Debe contener derechos y obligaciones de los copropietarios.", "Modificaciones requieren acuerdo de asamblea extraordinaria.", "Debe inscribirse en el Conservador de Bienes Raíces.", "Es vinculante para todos, incluyendo arrendatarios."], aplicacion: "CondoSaaS digitaliza el reglamento, mantiene historial de versiones, envía automáticamente a nuevos residentes y gestiona la firma electrónica simple de recepción conforme." } },
];

const checklist = ["Liquidación mensual de gastos comunes", "Asamblea ordinaria anual convocada", "Fondo de reserva al 10% mínimo", "Rendición de cuentas al día", "Reglamento actualizado y firmado", "Actas de asamblea publicadas", "Comité de administración vigente"];

export function LandingLey() {
  const [selected, setSelected] = useState<typeof articulos[0] | null>(null);

  return (
    <section id="ley" className="relative overflow-hidden px-6 py-12 md:px-8 md:py-16" style={{ background: "linear-gradient(135deg,#0D1B2A 0%,#0D4A75 100%)" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg,rgba(255,255,255,0.03) 0 1px,transparent 1px 60px),repeating-linear-gradient(90deg,rgba(255,255,255,0.03) 0 1px,transparent 1px 80px)" }} />

      <div className="relative z-10 flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
        <div className="flex-1">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs" style={{ background: "rgba(93,202,165,0.15)", border: "1px solid rgba(93,202,165,0.3)", color: "#5DCAA4" }}>
            ⚖️ Marco legal chileno
          </div>
          <h2 className="mb-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
            Diseñado sobre la<br />Ley 21.442
          </h2>
          <p className="mb-8 max-w-lg text-base font-light leading-relaxed text-white/60">
            La plataforma interpreta y automatiza los artículos clave de la Ley de Copropiedad Inmobiliaria, reduciendo el riesgo legal para administradoras y comités.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {articulos.map((a) => (
              <button key={a.num} onClick={() => setSelected(a)} className="rounded-xl p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-lg" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="mb-1 text-xs font-medium" style={{ color: "#5DCAA4" }}>{a.num}</p>
                <p className="mb-1 text-sm text-white/85">{a.title}</p>
                <p className="text-xs font-light text-white/45">{a.desc}</p>
                <p className="mt-2 text-xs" style={{ color: "#5DCAA4" }}>Ver detalle →</p>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full md:w-72 md:flex-shrink-0">
          <div className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
            <p className="mb-4 text-xs uppercase tracking-widest text-white/50">Checklist de cumplimiento</p>
            {checklist.map((item) => (
              <div key={item} className="flex items-center gap-3 border-b py-3 last:border-0" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md" style={{ background: "rgba(29,158,117,0.2)", border: "1px solid rgba(29,158,117,0.4)" }}>
                  <span style={{ color: "#5DCAA4", fontSize: 12 }}>✓</span>
                </div>
                <span className="text-sm font-light text-white/75">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-0 md:items-center md:p-6" style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }} onClick={() => setSelected(null)}>
          <div className="relative w-full rounded-t-2xl md:max-w-lg md:rounded-2xl" style={{ background: "linear-gradient(135deg,#0D1B2A 0%,#0D4A75 100%)", border: "1px solid rgba(255,255,255,0.15)", maxHeight: "90vh", overflowY: "auto" }} onClick={(e) => e.stopPropagation()}>
            <div className="px-6 pt-6 pb-0 md:px-8 md:pt-8">
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/20 md:hidden" />
              <button onClick={() => setSelected(null)} className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white">✕</button>
              <p className="mb-1 text-xs font-medium" style={{ color: "#5DCAA4" }}>{selected.num} · Ley 21.442</p>
              <h3 className="mb-4 font-serif text-xl font-semibold text-white">{selected.title}</h3>
            </div>
            <div className="px-6 pb-8 md:px-8">
              <p className="mb-6 text-sm font-light leading-relaxed text-white/65">{selected.contenido.resumen}</p>
              <p className="mb-3 text-xs uppercase tracking-widest text-white/40">Puntos clave</p>
              <ul className="mb-6 space-y-2">
                {selected.contenido.puntos.map((punto, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-light text-white/75">
                    <span className="mt-0.5 flex-shrink-0 text-xs" style={{ color: "#5DCAA4" }}>✓</span>
                    {punto}
                  </li>
                ))}
              </ul>
              <div className="rounded-xl p-4" style={{ background: "rgba(93,202,165,0.08)", border: "1px solid rgba(93,202,165,0.2)" }}>
                <p className="mb-1 text-xs font-medium" style={{ color: "#5DCAA4" }}>Cómo lo resuelve CondoSaaS</p>
                <p className="text-sm font-light leading-relaxed text-white/70">{selected.contenido.aplicacion}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
