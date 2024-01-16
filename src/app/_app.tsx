import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import { useReportWebVitals } from "next/web-vitals";

export function reportWebVitals(metrics:any){
  console.log(metrics);
}
export default function App({ Component, pageProps }: AppProps) {
  useReportWebVitals((metric) => {
  //  console.log("console" + metric);
  })
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5WH6NSHYF5"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5WH6NSHYF5');
        `}
      </Script>
      <Layout>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
