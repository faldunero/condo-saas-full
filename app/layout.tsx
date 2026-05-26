import "../styles/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "CondoSaaS — Administración de condominios en Chile",
  description:
    "Plataforma SaaS para administración de condominios conforme a la Ley de Copropiedad 21.442",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
