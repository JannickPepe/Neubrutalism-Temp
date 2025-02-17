// pages/index.tsx
import Head from "next/head";
import { EmailCapture } from "@/components/email-capture/EmailCapture";
import { FeatureToggles } from "@/components/feature-toggles/FeatureToggles";
import { Supports } from "@/components/supports/Supports";
import { Hero } from "@/components/hero/Hero";
import { Logos } from "@/components/logos/Logos";
import { ExpandableNavBar } from "@/components/navigation/ExpandableNavBar";
import { NAV_LINKS } from "@/components/navigation/constants";
import { Stats } from "@/components/stats/Stats";
import { BenefitsGrid } from "@/components/benefits-grid/BenefitsGrid";
import { font } from "@/fonts";
import { BlogCarousel } from "@/components/blog/BlogCarousel";
import { FinalCTA } from "@/components/final-cta/FinalCTA";
import { Footer } from "@/components/footer/Footer";
import NewPricing from "@/components/pricing/NewPrice";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | NightCoding Neubrutalism Template</title>
        <meta
          name="description"
          content="Welcome to the NightCoding Neubrutalism Template—a modern and visually appealing web application showcasing AI tools and resources."
        />
        <meta
          name="keywords"
          content="NightCoding, Neubrutalism, Next.js, AI tools, responsive design, TypeScript, TailwindCSS, Framer Motion, web template"
        />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Head>
      <main className={`${font.className} overflow-hidden`}>
        <ExpandableNavBar links={NAV_LINKS}>
          <Hero />
        </ExpandableNavBar>
        <Logos />
        <div className="space-y-36 bg-zinc-50 pb-24 pt-24 md:pt-32">
          <FeatureToggles />
          <Stats />
          <Supports />
          <BenefitsGrid />
          <NewPricing />
          <BlogCarousel />
        </div>
        <EmailCapture />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
