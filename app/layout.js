import "./globals.css";

export const metadata = {
  title: "Projeto Escola",
  description: "Sistema de gerenciamento escolar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}