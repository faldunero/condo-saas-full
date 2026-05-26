# Condo SaaS

Proyecto base para un SaaS de administración de condominios en Chile, construido con Next.js 14 (App Router) + Tailwind CSS.

## Stack
- Next.js 14 (App Router, TypeScript)
- React 18
- Tailwind CSS 3

## Estructura principal
- `app/`
  - `page.tsx`: landing simple.
  - `layout.tsx`: layout raíz con header global y navegación.
  - `super-admin/`: ruta amigable al portal de Super Admin.
  - `admin/`: ruta amigable al portal de Administradora.
  - `residente/`: ruta amigable al portal de Residente.
  - `(super-admin)/`: segmento del portal de Super Admin.
  - `(admin)/`: segmento del portal de Administradora.
  - `(residente)/`: segmento del portal de Residente.
- `components/`
  - `MainNav.tsx`: navegación principal entre portales.
- `data/`
  - `admin-mock.json`: datos mock de edificios y gastos comunes.
- `styles/`
  - `globals.css`: estilos globales + Tailwind.

## Portales
### Super Admin
Pensado para la empresa dueña del SaaS (multi-tenant):
- Gestionar tenants (empresas administradoras).
- Ver métricas globales de uso y facturación.

En esta versión solo existe una pantalla de dashboard simple.

### Administradora
Pensado para la empresa que administra edificios:
- Listado de edificios administrados.
- Listado de gastos comunes por edificio y período.
- CRUD en memoria de edificios (crear, editar, borrar) para prototipar UX.

Archivo principal: `app/(admin)/page.tsx`.

### Residente
Pensado para copropietarios y arrendatarios:
- Ver resúmenes de gastos comunes.
- Ver comunicaciones y reservas (aún no implementado).

En esta versión solo existe una pantalla base.

## Cómo correr el proyecto
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Levantar el entorno de desarrollo:
   ```bash
   npm run dev
   ```
3. Abrir en el navegador:
   - `http://localhost:3000` → Home.
   - `http://localhost:3000/super-admin` → portal Super Admin.
   - `http://localhost:3000/admin` → portal Administradora.
   - `http://localhost:3000/residente` → portal Residente.

## Notas de implementación
- Los datos de edificios y gastos comunes son mocks en `data/admin-mock.json`.
- El CRUD de edificios en `app/(admin)/page.tsx` trabaja solo en memoria (estado de React), sin persistencia real.
- El siguiente paso natural es definir el modelo de datos definitivo (edificios, unidades, residentes, gastos comunes, pagos) y exponer APIs (REST o RPC) para reemplazar los mocks.
