import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { RevealText } from "@/components/RevealText";
import { FragranceDisplay } from "./FragranceDisplay";

/**
 * Props for `FragranceList`.
 */
export type FragranceListProps =
  SliceComponentProps<Content.FragranceListSlice>;

/**
 * Component for "FragranceList" Slices.
 */
const FragranceList: FC<FragranceListProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="space-y-8 bg-black py-16 text-center text-white md:py-24"
    >
      <div className="mx-auto space-y-8">
        <p className="text-sm font-light tracking-[0.2em] uppercase">
          {slice.primary.eyebrow}
        </p>

        <RevealText
          field={slice.primary.heading}
          as="h2"
          id={`fragrance-list-heading-${slice.id}
          `}
          align="center"
          duration={1.5}
          staggerAmount={0.3}
          className="font-display text-5xl uppercase sm:text-6xl md:text-7xl lg:text-8xl"
        />

        <div className="text-balancex mx-auto max-w-2xl text-lg text-gray-300">
          <PrismicRichText field={slice.primary.body} />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12">
          {slice.primary.fragrances.map((item) => {
            if (isFilled.contentRelationship(item.fragrance)) {
              return (
                <FragranceDisplay
                  key={item.fragrance.id}
                  id={""}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
      

      <strong> You can edit this slice directly in your code editor. </strong>
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
       * 2. Select a model optimized for coding (e.g. Claude 3.7 Sonnet or similar)
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

export default FragranceList;
