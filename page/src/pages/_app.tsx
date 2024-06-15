import Header from "@/components/layout/Header";
import { DEFAULT_SEO } from "@/constants/metadata";
import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <DefaultSeo {...DEFAULT_SEO} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
