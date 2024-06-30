import Header from "@/components/layout/Header";
import { DEFAULT_SEO } from "@/constants/metadata";
import "@/styles/globals.css";
import i18n from "@/utils/i18n";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <DefaultSeo {...DEFAULT_SEO} />
      <Component {...pageProps} />
    </I18nextProvider>
  );
};

export default App;
