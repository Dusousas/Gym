import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header"; // ajuste o caminho conforme a localização real
import Footer from "@/components/Footer"; // ajuste o caminho conforme a localização real

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
