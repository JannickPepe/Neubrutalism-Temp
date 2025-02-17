// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Global SEO Meta Tags */}
        <meta
          name="description"
          content="NightCoding Neubrutalism Template, developed by NighteCoding, is a modern Next.js web application showcasing AI tools and resources with a visually appealing Neubrutalism design."
        />
        <meta
          name="keywords"
          content="NightCoding, Neubrutalism, Next.js, AI tools, responsive design, TypeScript, TailwindCSS, Framer Motion, web template, SEO, performance"
        />
        <meta name="author" content="NighteCoding" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-white text-zinc-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
