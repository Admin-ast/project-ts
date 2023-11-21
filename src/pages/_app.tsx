import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import Head from "next/head"; // Import Head component from next/head

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="dRenVoeNGJ-sE6nGJ8061HYadizm-44jKBSWXuehqNo"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5KRKV05N06"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5KRKV05N06');
            `,
          }}
        />
      </Head>
      <Layout>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
