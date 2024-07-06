import Providers from "@/components/common/Providers";
import Header from "@/components/layout/Header";
import { DEFAULT_SEO } from "@/constants/metadata";
import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <DefaultSeo {...DEFAULT_SEO} />
      <Header />
      <Component {...pageProps} />
    </Providers>
  );
};

export default App;
