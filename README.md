# MiCatálogo — Panel administrativo (frontend)

Frontend de demostración construido con Next.js App Router, JavaScript, Tailwind CSS v4, componentes con estilo shadcn/ui y Lucide React.

## Requisitos
- Node.js 20.9 o superior
- pnpm
- Windows, macOS o Linux

## Ejecutar
```bash
pnpm install
pnpm dev
```
Abrir http://localhost:3000

## Validar para producción
```bash
pnpm lint
pnpm build
pnpm start
```

## Alcance actual
- Dashboard con métricas y pedidos demostrativos.
- Navegación responsive con sidebar móvil.
- Vistas de productos, pedidos, categorías, página de inicio, banners y configuración.
- Personalizador visual con plantillas, tipografías, color de marca y vista previa desktop/móvil.
- Sin endpoints, autenticación, persistencia ni operaciones reales. Los datos son mock.
- Los botones que representan operaciones de negocio son solo visuales y deberán conectarse cuando existan los endpoints.

## Estructura
```text
app/
  globals.css
  layout.js
  page.js
components/
  ui/
    badge.jsx
    button.jsx
    card.jsx
lib/
  utils.js
```

## Despliegue en Vercel
1. Sube el proyecto a un repositorio Git.
2. Importa el repositorio en https://vercel.com/new.
3. Framework preset: Next.js.
4. Build command: `pnpm build`.
5. Deploy.

No se requieren variables de entorno mientras el proyecto siga siendo solo frontend.
"# micatalogo-panel" 
