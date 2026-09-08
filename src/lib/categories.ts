export interface Subcategory {
  /** Display name, e.g. "Y2K Aero" */
  name: string;
  /** URL-safe unique key, e.g. "y2k-aero". Built ones reuse their route slug. */
  slug: string;
  /** Where the pill navigates: design route when built, /wip/<slug> otherwise. */
  href: string;
  /** False → opens the shared under-construction screen. */
  built: boolean;
}

export interface Category {
  /** Display name, e.g. "Retro & Nostalgic" */
  name: string;
  /** URL-safe key, e.g. "retro-nostalgic" */
  slug: string;
  subs: Subcategory[];
}

export const categories: Category[] = [
  {
    name: "Minimal & Clean",
    slug: "minimal-clean",
    subs: [
      { name: "V1 SaaS", slug: "v1-saas", href: "/", built: true },
      { name: "Minimalist", slug: "minimalist", href: "/minimalist", built: true },
      { name: "Hyperminimalism", slug: "hyperminimalism", href: "/hyperminimalism", built: true },
      { name: "Soft Minimalism", slug: "soft-minimalism", href: "/soft-minimalism", built: true },
      { name: "Neo-Minimalism", slug: "neo-minimalism", href: "/neo-minimalism", built: true },
      { name: "Monochromatic", slug: "monochromatic", href: "/monochromatic", built: true },
      { name: "Flat", slug: "flat", href: "/flat", built: true },
      { name: "Flat 2.0", slug: "flat-2", href: "/flat-2", built: true },
      { name: "Swiss Design", slug: "swiss-design", href: "/swiss-design", built: true },
      { name: "Material", slug: "material", href: "/material", built: true },
      { name: "Fluent", slug: "fluent", href: "/fluent", built: true },
      { name: "HIG", slug: "hig", href: "/hig", built: true },
      { name: "Earthy Minimalism", slug: "earthy-minimalism", href: "/earthy-minimalism", built: true },
      { name: "Calm UI", slug: "calm-ui", href: "/calm-ui", built: true },
      { name: "Quiet UI", slug: "quiet-ui", href: "/quiet-ui", built: true },
      { name: "Content-First UI", slug: "content-first-ui", href: "/content-first-ui", built: true },
      { name: "Dark Mode", slug: "dark", href: "/dark", built: true },
    ],
  },
  {
    name: "Depth, Material & 3D",
    slug: "depth-3d",
    subs: [
      { name: "Neumorphic", slug: "neumorphic", href: "/neumorphic", built: true },
      { name: "Skeuomorphic", slug: "skeuomorphic", href: "/skeuomorphic", built: true },
      { name: "Skeuominimalism", slug: "skeuominimalism", href: "/skeuominimalism", built: true },
      { name: "Glassmorphism", slug: "glassmorphism", href: "/glassmorphism", built: true },
      { name: "Liquid Glass", slug: "liquid-glass", href: "/liquid-glass", built: true },
      { name: "Claymorphism", slug: "claymorphism", href: "/claymorphism", built: true },
      { name: "Metalmorphism", slug: "metalmorphism", href: "/metalmorphism", built: true },
      { name: "Liquid Metal / Chrome", slug: "liquid-metal-chrome", href: "/liquid-metal-chrome", built: true },
      { name: "Inflatable 3D / Puffy UI", slug: "inflatable-3d-puffy-ui", href: "/inflatable-3d-puffy-ui", built: true },
      { name: "Hyperreal 3D", slug: "hyperreal-3d", href: "/hyperreal-3d", built: true },
      { name: "Low-Poly 3D", slug: "low-poly-3d", href: "/low-poly-3d", built: true },
      { name: "Isometric UI", slug: "isometric-ui", href: "/isometric-ui", built: true },
      { name: "Paper Cut", slug: "paper-cut", href: "/paper-cut", built: true },
      { name: "Tactile Realism", slug: "tactile-realism", href: "/tactile-realism", built: true },
      { name: "Interactive 3D UI", slug: "interactive-3d-ui", href: "/interactive-3d-ui", built: true },
    ],
  },
  {
    name: "Brutalist & Experimental",
    slug: "brutalist-experimental",
    subs: [
      { name: "Brutalist", slug: "brutalist", href: "/brutalist", built: true },
      { name: "Neubrutalism", slug: "neubrutalism", href: "/neubrutalism", built: true },
      { name: "Neo-Brutalism", slug: "neo-brutalism", href: "/neo-brutalism", built: true },
      { name: "Soft Brutalism", slug: "soft-brutalism", href: "/soft-brutalism", built: true },
      { name: "Brutalist Elegance", slug: "brutalist-elegance", href: "/brutalist-elegance", built: true },
      { name: "Anti-Design", slug: "anti-design", href: "/anti-design", built: true },
      { name: "Anti-Grid", slug: "anti-grid", href: "/anti-grid", built: true },
      { name: "Anti-Polish / Raw Aesthetic", slug: "anti-polish-raw-aesthetic", href: "/anti-polish-raw-aesthetic", built: true },
      { name: "Lo-Fi UI", slug: "lo-fi-ui", href: "/lo-fi-ui", built: true },
      { name: "Wireframe / Skeletal", slug: "wireframe-skeletal", href: "/wireframe-skeletal", built: true },
      { name: "Glitch Art", slug: "glitch-art", href: "/glitch-art", built: true },
      { name: "Experimental Grid", slug: "experimental-grid", href: "/experimental-grid", built: true },
      { name: "Experimental Navigation", slug: "experimental-navigation", href: "/experimental-navigation", built: true },
      { name: "Asymmetrical UI", slug: "asymmetrical-ui", href: "/asymmetrical-ui", built: true },
      { name: "Maximalism", slug: "maximalism", href: "/maximalism", built: true },
    ],
  },
  {
    name: "Retro & Nostalgic",
    slug: "retro-nostalgic",
    subs: [
      { name: "Pixel Art / 8-bit", slug: "pixel-art-8-bit", href: "/pixel-art-8-bit", built: true },
      { name: "Y2K Aero", slug: "y2k-aero", href: "/y2k-aero", built: true },
      { name: "Frutiger Aero", slug: "frutiger-aero", href: "/frutiger-aero", built: true },
      { name: "Vaporwave", slug: "vaporwave", href: "/vaporwave", built: true },
      { name: "Synthwave / Outrun", slug: "synthwave-outrun", href: "/synthwave-outrun", built: true },
      { name: "Retro-Futurism / Raygun Gothic", slug: "retro-futurism-raygun-gothic", href: "/retro-futurism-raygun-gothic", built: true },
      { name: "Retro-Tech UI", slug: "retro-tech-ui", href: "/retro-tech-ui", built: true },
      { name: "Retro Computing UI", slug: "retro-computing-ui", href: "/retro-computing-ui", built: true },
      { name: "Digital Nostalgia", slug: "digital-nostalgia", href: "/digital-nostalgia", built: true },
      { name: "Zine UI", slug: "zine-ui", href: "/zine-ui", built: true },
      { name: "Digital Scrapbook", slug: "digital-scrapbook", href: "/digital-scrapbook", built: true },
      { name: "Analog UI", slug: "analog-ui", href: "/analog-ui", built: true },
      { name: "Hand-Drawn UI", slug: "hand-drawn-ui", href: "/hand-drawn-ui", built: true },
      { name: "Handmade UI", slug: "handmade-ui", href: "/handmade-ui", built: true },
      { name: "Collage / Scrapbook", slug: "collage-scrapbook", href: "/collage-scrapbook", built: true },
    ],
  },
  {
    name: "Futuristic & Digital",
    slug: "futuristic-digital",
    subs: [
      { name: "Cyberpunk", slug: "cyberpunk", href: "/cyberpunk", built: true },
      { name: "Holographic / AR-inspired", slug: "holographic-ar-inspired", href: "/holographic-ar-inspired", built: true },
      { name: "HUD / Sci-Fi Interface", slug: "hud-sci-fi-interface", href: "/hud-sci-fi-interface", built: true },
      { name: "Spatial UI", slug: "spatial-ui", href: "/spatial-ui", built: true },
      { name: "Spatial Computing UI", slug: "spatial-computing-ui", href: "/spatial-computing-ui", built: true },
      { name: "Spatial Depth UI", slug: "spatial-depth-ui", href: "/spatial-depth-ui", built: true },
      { name: "Immersive UI", slug: "immersive-ui", href: "/immersive-ui", built: true },
      { name: "Blueprint UI", slug: "blueprint-ui", href: "/blueprint-ui", built: true },
      { name: "Technical / Engineering UI", slug: "technical-engineering-ui", href: "/technical-engineering-ui", built: true },
      { name: "Terminal UI", slug: "terminal-ui", href: "/terminal-ui", built: true },
      { name: "Console UI", slug: "console-ui", href: "/console-ui", built: true },
      { name: "Monospace UI", slug: "monospace-ui", href: "/monospace-ui", built: true },
      { name: "Photorealistic UI", slug: "photorealistic-ui", href: "/photorealistic-ui", built: true },
      { name: "Generative Art UI", slug: "generative-art-ui", href: "/generative-art-ui", built: true },
      { name: "Algorithmic UI", slug: "algorithmic-ui", href: "/algorithmic-ui", built: true },
    ],
  },
  {
    name: "Nature & Organic",
    slug: "nature-organic",
    subs: [
      { name: "Organic / Biomimetic", slug: "organic-biomimetic", href: "/organic-biomimetic", built: true },
      { name: "Biomorphism", slug: "biomorphism", href: "/biomorphism", built: true },
      { name: "Nature Distilled", slug: "nature-distilled", href: "/nature-distilled", built: true },
      { name: "Solarpunk", slug: "solarpunk", href: "/solarpunk", built: true },
      { name: "Eco-Conscious / Sustainable UI", slug: "eco-conscious-sustainable-ui", href: "/eco-conscious-sustainable-ui", built: true },
      { name: "Sustainable Web Design", slug: "sustainable-web-design", href: "/sustainable-web-design", built: true },
      { name: "Aurora", slug: "aurora", href: "/aurora", built: true },
      { name: "Fluid UI", slug: "fluid-ui", href: "/fluid-ui", built: true },
      { name: "Responsive Fluid UI", slug: "responsive-fluid-ui", href: "/responsive-fluid-ui", built: true },
      { name: "Parametric UI", slug: "parametric-ui", href: "/parametric-ui", built: true },
      { name: "Procedural UI", slug: "procedural-ui", href: "/procedural-ui", built: true },
      { name: "Generative UI", slug: "generative-ui", href: "/generative-ui", built: true },
      { name: "Ambient UI", slug: "ambient-ui", href: "/ambient-ui", built: true },
      { name: "Sensory UI", slug: "sensory-ui", href: "/sensory-ui", built: true },
    ],
  },
  {
    name: "Editorial, Typography & Layout",
    slug: "editorial-layout",
    subs: [
      { name: "Typography-Led", slug: "typography-led", href: "/typography-led", built: true },
      { name: "Expressive Typography", slug: "expressive-typography", href: "/expressive-typography", built: true },
      { name: "Variable Typography UI", slug: "variable-typography-ui", href: "/variable-typography-ui", built: true },
      { name: "Editorial / Magazine", slug: "editorial-magazine", href: "/editorial-magazine", built: true },
      { name: "Bento Grid", slug: "bento", href: "/bento", built: true },
      { name: "Bento Stacking", slug: "bento-stacking", href: "/bento-stacking", built: true },
      { name: "Modular UI", slug: "modular-ui", href: "/modular-ui", built: true },
      { name: "Layered UI", slug: "layered-ui", href: "/layered-ui", built: true },
      { name: "Dimensional Layering", slug: "dimensional-layering", href: "/dimensional-layering", built: true },
      { name: "Depth UI", slug: "depth-ui", href: "/depth-ui", built: true },
      { name: "Parallax UI", slug: "parallax-ui", href: "/parallax-ui", built: true },
      { name: "Variable Layout UI", slug: "variable-layout-ui", href: "/variable-layout-ui", built: true },
      { name: "Data-Dense UI", slug: "data-dense-ui", href: "/data-dense-ui", built: true },
      { name: "Dashboard UI", slug: "dashboard-ui", href: "/dashboard-ui", built: true },
      { name: "Data Visualization UI", slug: "data-visualization-ui", href: "/data-visualization-ui", built: true },
    ],
  },
  {
    name: "Playful & Expressive",
    slug: "playful-expressive",
    subs: [
      { name: "Memphis Design", slug: "memphis-design", href: "/memphis-design", built: true },
      { name: "Kawaii / Soft Pop", slug: "kawaii-soft-pop", href: "/kawaii-soft-pop", built: true },
      { name: "Corporate Memphis (Alegria)", slug: "corporate-memphis-alegria", href: "/corporate-memphis-alegria", built: true },
      { name: "Explorecore", slug: "explorecore", href: "/explorecore", built: true },
      { name: "Grainy UI", slug: "grainy-ui", href: "/grainy-ui", built: true },
      { name: "Soft UI", slug: "soft-ui", href: "/soft-ui", built: true },
    ],
  },
  {
    name: "Motion, Interaction & Immersive",
    slug: "motion-interactive",
    subs: [
      { name: "Kinetic UI", slug: "kinetic-ui", href: "/kinetic-ui", built: true },
      { name: "Motion-First UI", slug: "motion-first-ui", href: "/motion-first-ui", built: true },
      { name: "Micro-Interaction-Driven UI", slug: "micro-interaction-driven-ui", href: "/micro-interaction-driven-ui", built: true },
      { name: "Scrollytelling", slug: "scrollytelling", href: "/scrollytelling", built: true },
      { name: "Scroll-Driven UI", slug: "scroll-driven-ui", href: "/scroll-driven-ui", built: true },
      { name: "Gamified UI", slug: "gamified-ui", href: "/gamified-ui", built: true },
      { name: "Gesture-Based UI", slug: "gesture-based-ui", href: "/gesture-based-ui", built: true },
      { name: "Haptic UI", slug: "haptic-ui", href: "/haptic-ui", built: true },
      { name: "Sound-Enhanced UI", slug: "sound-enhanced-ui", href: "/sound-enhanced-ui", built: true },
      { name: "Ambient Computing UI", slug: "ambient-computing-ui", href: "/ambient-computing-ui", built: true },
    ],
  },
  {
    name: "AI, Adaptive & Next-Gen",
    slug: "ai-nextgen",
    subs: [
      { name: "AI-Native UI", slug: "ai-native-ui", href: "/ai-native-ui", built: true },
      { name: "Agentic UI", slug: "agentic-ui", href: "/agentic-ui", built: true },
      { name: "Agentic UX", slug: "agentic-ux", href: "/agentic-ux", built: true },
      { name: "Human-Centered AI UI", slug: "human-centered-ai-ui", href: "/human-centered-ai-ui", built: true },
      { name: "Adaptive UI", slug: "adaptive-ui", href: "/adaptive-ui", built: true },
      { name: "Multimodal UI", slug: "multimodal-ui", href: "/multimodal-ui", built: true },
      { name: "Voice UI", slug: "voice-ui", href: "/voice-ui", built: true },
      { name: "Conversational UI", slug: "conversational-ui", href: "/conversational-ui", built: true },
      { name: "Invisible UI", slug: "invisible-ui", href: "/invisible-ui", built: true },
      { name: "Context-Aware UI", slug: "context-aware-ui", href: "/context-aware-ui", built: true },
      { name: "Intent-Driven UI", slug: "intent-driven-ui", href: "/intent-driven-ui", built: true },
      { name: "Predictive UI", slug: "predictive-ui", href: "/predictive-ui", built: true },
      { name: "Personalised UI", slug: "personalised-ui", href: "/personalised-ui", built: true },
      { name: "Natural User Interface (NUI)", slug: "natural-user-interface-nui", href: "/natural-user-interface-nui", built: true },
    ],
  },
];

export function normalizePath(p: string | null): string {
  if (!p) return "/";
  return p.length > 1 ? p.replace(/\/$/, "") : p;
}

/** First built sub's route, falling back to the first sub (construction screen). */
export function categoryDefaultHref(category: Category): string {
  return category.subs.find((s) => s.built)?.href ?? category.subs[0].href;
}

export interface ResolvedRoute {
  category: Category;
  sub: Subcategory;
}

/** Map any app pathname to its category + subcategory. Null for unknown paths. */
export function resolveRoute(pathname: string | null): ResolvedRoute | null {
  const path = normalizePath(pathname);
  const wip = path.match(/^\/wip\/([\w-]+)$/);
  if (wip) {
    for (const category of categories) {
      const sub = category.subs.find((s) => s.slug === wip[1]);
      if (sub) return { category, sub };
    }
    return null;
  }
  for (const category of categories) {
    const sub = category.subs.find((s) => s.href === path);
    if (sub) return { category, sub };
  }
  return null;
}

/** All unbuilt subcategory slugs, for generateStaticParams. */
export function allUnbuiltSlugs(): string[] {
  return categories.flatMap((c) => c.subs).filter((s) => !s.built).map((s) => s.slug);
}
