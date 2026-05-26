export function LandingStats() {
  const stats = [
    { n: "+1.200", l: "Comunidades activas" },
    { n: "98.4%", l: "Cumplimiento Ley 21.442" },
    { n: "$42B", l: "CLP gestionados / mes" },
    { n: "15", l: "Regiones de Chile" },
  ];

  return (
    <div className="flex justify-center gap-16 border-b border-slate-200 bg-white px-8 py-7">
      {stats.map((s) => (
        <div key={s.l} className="text-center">
          <p className="font-serif text-3xl font-semibold text-blue-700">{s.n}</p>
          <p className="mt-1 text-xs font-light text-slate-500">{s.l}</p>
        </div>
      ))}
    </div>
  );
}
