import type { ReactNode } from "react";
import { MainNav } from "../../components/MainNav";

export default function PortalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <span className="font-serif text-sm font-semibold text-slate-800">
            Condo<span className="text-teal-600">SaaS</span>
          </span>
          <MainNav />
        </div>
      </header>
      {children}
    </>
  );
}
