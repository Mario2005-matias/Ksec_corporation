import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";

// import the components
import Header from "@/components/Header/Header";
import Footer from '@/components/Footer/Footer'

//Adicionando as configuracoes das fontes do google
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

//Adicionando metadados para o site
export const metadata: Metadata = {
  title: "Ksecurity",
  description: "Site officiel de Ksecurity",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} antialiased`}>

        <div className='min-h-screen flex flex-col'>
          <Header />

          <main className='flex-1'>
              {children}
          </main>
          
          <Footer />
        </div>
        
      </body>
    </html>
  );
}
