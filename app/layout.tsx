
import type { Metadata } from "next";
import { Inter, Pacifico } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import { AuthProvider } from "@/components/AuthContext";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mellow Skin - Natural Body Butters",
  description: "Premium natural body butters crafted for your skin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${pacifico.variable} antialiased`}>
        <AuthProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
