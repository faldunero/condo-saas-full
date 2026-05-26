"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/super-admin", label: "Super Admin" },
  { href: "/admin", label: "Administradora" },
  { href: "/residente", label: "Residente" },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4 text-sm font-medium">
      {links.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              "rounded px-3 py-1 transition-colors " +
              (isActive
                ? "bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800")
            }
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
