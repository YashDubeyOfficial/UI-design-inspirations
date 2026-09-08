import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  allUnbuiltSlugs,
  categories,
  categoryDefaultHref,
} from "@/lib/categories";
import UnderConstruction from "../_components/UnderConstruction";

export function generateStaticParams() {
  return allUnbuiltSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  for (const category of categories) {
    const sub = category.subs.find((s) => s.slug === slug);
    if (sub) return { title: `${sub.name} — Coming soon | UI Design Inspirations` };
  }
  return { title: "Coming soon | UI Design Inspirations" };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  for (const category of categories) {
    const sub = category.subs.find((s) => s.slug === slug);
    if (sub) {
      if (sub.built) notFound();
      const builtCount = category.subs.filter((s) => s.built).length;
      return (
        <UnderConstruction
          subName={sub.name}
          categoryName={category.name}
          categoryHref={categoryDefaultHref(category)}
          builtCount={builtCount}
          totalCount={category.subs.length}
        />
      );
    }
  }
  notFound();
}
