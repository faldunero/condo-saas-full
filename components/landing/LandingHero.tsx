"use client";

import Link from "next/link";
import Image from "next/image";

export function LandingHero() {
  return (
    <section
      style={{
        background: "linear-gradient(160deg,#0D4A75 0%,#1D6FA4 50%,#1a8a7a 100%)",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg,rgba(255,255,255,0.04) 0 1px,transparent 1px 60px),repeating-linear-gradient(90deg,rgba(255,255,255,0.04) 0 1px,transparent 1px 80px)",
          pointerEvents: "none",
        }}
      />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-5">
        <span className="font-serif text-2xl font-semibold text-white">
          Condo<span style={{ color: "#5DCAA4" }}>SaaS</span>
        </span>
        <div className="flex items-center gap-2">
          {[
            { label: "Funciones", href: "#funciones" },
            { label: "Portales", href: "#portales" },
            { label: "Ley 21.442", href: "#ley" },
            { label: "Precios", href: "#precios" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/admin"
            className="ml-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
            style={{ background: "#E67E22" }}
          >
            Solicitar demo →
          </Link>
        </div>
      </nav>

      {/* Body */}
      <div className="relative z-10 flex flex-1 items-center gap-12 px-8 pb-16 pt-4">
        {/* Left */}
        <div className="max-w-xl flex-1">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            <span
              className="inline-block h-1.5 w-1.5 animate-pulse rounded-full"
              style={{ background: "#5DCAA4" }}
            />
            Conforme con Ley de Copropiedad 21.442
          </div>

          <h1
            className="mb-5 font-serif text-5xl font-semibold leading-tight tracking-tight text-white"
          >
            Gestión de condominios{" "}
            <em style={{ color: "#5DCAA4", fontStyle: "italic" }}>simple,</em>
            <br />legal y transparente
          </h1>

          <p className="mb-8 text-lg font-light leading-relaxed text-white/75">
            Plataforma SaaS para administradoras, comités y residentes.
            Gastos comunes, asambleas, transparencia financiera y cumplimiento
            legal en un solo lugar.
          </p>

          <div className="mb-6 flex flex-wrap gap-3">
            <Link
              href="/admin"
              className="rounded-xl px-7 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
              style={{ background: "#E67E22" }}
            >
              Comenzar gratis
            </Link>
            <Link
              href="/residente"
              className="rounded-xl px-7 py-3 text-sm text-white transition-all hover:bg-white/20"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1.5px solid rgba(255,255,255,0.3)",
              }}
            >
              Ver cómo funciona
            </Link>
          </div>

          <div className="mt-8 w-full max-w-2xl">
            <Image
              src="/imagenes/banner_headear_index.png"
              alt="CondoManager - Plataforma de Gestión Integral"
              width={800}
              height={450}
              className="rounded-xl shadow-2xl"
              priority
            />
          </div>

          <div
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs font-light text-white/80"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            ⚖️ Cumplimiento automático: Arts. 24, 35, 38 y 47 Ley 21.442
          </div>
        </div>

        {/* Dashboard preview card */}
        <div className="w-96 flex-shrink-0">
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.97)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.5)",
            }}
          >
            <div
              className="flex items-center gap-3 px-5 py-3"
              style={{ background: "#0D4A75" }}
            >
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <span className="ml-auto text-xs text-white/60">
                Edificio Los Alerces · May 2026
              </span>
            </div>
            <div className="p-5">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <p className="mb-1 text-xs text-slate-500">Gasto común mensual</p>
                  <p className="font-serif text-2xl font-semibold text-slate-900">
                    $12.500.000
                  </p>
                </div>
                <span className="text-xs font-medium text-emerald-600">↑ 3.2% IPC</span>
              </div>

              <div className="mb-4 grid grid-cols-2 gap-2">
                {[
                  { l: "Unidades pagadas", v: "58 / 80", c: "text-emerald-600" },
                  { l: "Pendientes", v: "18 unidades", c: "text-amber-600" },
                  { l: "Morosidad", v: "Art. 5 Ley", c: "text-blue-600" },
                  { l: "Fondo reserva", v: "$4.200.000", c: "text-emerald-600" },
                ].map((s) => (
                  <div key={s.l} className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                    <p className="mb-1 text-xs text-slate-400">{s.l}</p>
                    <p className={`text-sm font-medium ${s.c}`}>{s.v}</p>
                  </div>
                ))}
              </div>

              <div className="mb-2 flex justify-between border-b border-slate-100 pb-2 text-xs text-slate-400">
                <span>Unidad</span><span>Monto</span><span>Estado</span>
              </div>
              {[
                { apt: "Depto 101", m: "$156.250", s: "Pagado", sc: "bg-emerald-50 text-emerald-700" },
                { apt: "Depto 203", m: "$156.250", s: "Pendiente", sc: "bg-amber-50 text-amber-700" },
                { apt: "Depto 412", m: "$312.500", s: "Moroso", sc: "bg-red-50 text-red-700" },
                { apt: "Depto 501", m: "$156.250", s: "Pagado", sc: "bg-emerald-50 text-emerald-700" },
              ].map((r) => (
                <div key={r.apt} className="flex items-center justify-between border-b border-slate-50 py-2 text-xs last:border-0">
                  <span className="font-medium text-slate-800">{r.apt}</span>
                  <span className="text-slate-600">{r.m}</span>
                  <span className={`rounded px-2 py-0.5 text-xs font-medium ${r.sc}`}>{r.s}</span>
                </div>
              ))}

              <div className="mt-3">
                <div className="mb-1 flex justify-between text-xs text-slate-400">
                  <span>Recaudación del período</span>
                  <span>72%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full"
                    style={{ width: "72%", background: "linear-gradient(90deg,#1D6FA4,#1D9E75)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingHero;
