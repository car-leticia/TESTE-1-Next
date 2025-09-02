import type { Metadata } from "next";
import "./globals.css";
import { ChakraProvider } from '@chakra-ui/react'
import { Header } from "./Components/header";


export const metadata: Metadata = {
  title: "Teste 1",
  description: "Aula NextJs com Sujeito",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="PT-br">
      <body
        className={`antialiased`}
      >
        
        <ChakraProvider>
          <Header/>
            {children }
        </ChakraProvider>
      </body>
    </html>
  );
}

      