// app/layout.tsx
import "./globals.css";
import Navbar from "./navbar";

export const metadata = {
  title: "My App",
  description: "A simple Next.js app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div class = "red">Mantap</div>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
