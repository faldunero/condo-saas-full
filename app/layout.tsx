import "../styles/globals.css";
import type { ReactNode } from "react";
import { MainNav } from "../components/MainNav";

export const metadata = {
  title: "Condo SaaS",
  description: "Plataforma de administración de condominios",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
            <span className="text-sm font-semibold text-slate-800">
              Condo SaaS
            </span>
            <MainNav />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
