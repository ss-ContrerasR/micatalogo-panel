import "./globals.css";

export const metadata = {
  title: "MiCatálogo | Panel de administración",
  description: "Administra y personaliza tu tienda en línea con MiCatálogo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
