import { FC } from "react";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { Bounded } from "@/components/Bounded";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";
import { ButtonLink } from "@/components/ButtonLink";

gsap.registerPlugin(useGSAP);

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-screen overflow-hidden bg-neutral-950"
    >
      <FadeIn 
        vars={{ scale: 1, opacity: 0.5 }}
        className="absolute inset-0 opacity-0 motion-safe:scale-125"
      >

        <PrismicNextImage
          field={slice.primary.image}
          alt=""
          priority
          fill
          className="object-cover motion-reduce: opacity-50"
        />
      </FadeIn>

      <div className="relative flex h-screen flex-col justify-center">
        <RevealText
          field={slice.primary.heading}
          id="hero-heading"
          className="font-display max-w-xl text-6xl leading-none text-neutral-50 md:text-7xl lg:text-8xl"
          staggerAmount={0.2}
          duration={1.7}
          as="h1"
        />

        <FadeIn
          className="mt-6 max-w-md translate-y-8 text-lg text-neutral-100"
          vars={{ delay: 1, duration: 1.3 }}
        >
          <PrismicRichText field={slice.primary.body} />
        </FadeIn>

        <FadeIn
          className="mt-8 translate-y-5"
          vars={{ delay: 1.7, duration: 1.1 }}
        >
          {slice.primary.button.map((link) => (

            <ButtonLink
              key={link.key}
              field={link}
              className="w-fit"
              variant="Secondary"
            />
          ))}
        </FadeIn>
      </div>

      {/**
       * 💡 Use Prismic MCP with your code editor
       *
       * Get AI-powered help to build your slice components — based on your actual model.
       *
       * ▶️ Setup:
       * 1. Add a new MCP Server in your code editor:
       *
       * {
       *   "mcpServers": {
       *     "Prismic MCP": {
       *       "command": "npx",
       *       "args": ["-y", "@prismicio/mcp-server"]
       *     }
       *   }
       * }
       *
       * 2. Select Claude 3.7 Sonnet (recommended for optimal output)
       *
       * ✅ Then open your slice file and ask your code editor:
       *    "Code this slice"
       *
       * Your code editor reads your slice model and helps you code faster ⚡
       * 📚 Give your feedback: https://community.prismic.io/t/help-us-shape-the-future-of-slice-creation/19505
       */}
    </Bounded>
  );
};

export default Hero;
