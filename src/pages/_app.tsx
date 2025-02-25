// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/next';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Default SEO Tags */}
        <title>NightCoding Neubrutalism Template</title>
        <meta
          name="description"
          content="A modern Next.js web application showcasing AI tools and resources with a visually appealing Neubrutalism design."
        />
        <link rel="canonical" href="https://neubrutalism-temp.vercel.app/" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
