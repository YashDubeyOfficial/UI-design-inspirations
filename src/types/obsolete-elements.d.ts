import type { DetailedHTMLProps, HTMLAttributes } from "react";

// The brutalist design intentionally uses obsolete raw-HTML elements
// (<blink> and <marquee>) as a 1996 aesthetic. Declare them so TypeScript
// accepts the converted JSX while browsers keep rendering them natively.
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      blink: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      marquee: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        behavior?: string;
        direction?: string;
        loop?: number | string;
        scrollamount?: number | string;
        scrolldelay?: number | string;
      };
    }
  }
}

export {};
