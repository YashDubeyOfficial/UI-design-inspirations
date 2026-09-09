"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  categories,
  categoryDefaultHref,
  normalizePath,
  resolveRoute,
} from "../lib/categories";
import { useCenterActive } from "./useCenterActive";

/**
 * Top-level bar: the 10 main style categories.
 * Clicking a category navigates to its default subcategory
 * (first built design, else the first subcategory's construction page),
 * which refreshes the design bar below.
 */
export default function CategoryBar() {
  const pathname = normalizePath(usePathname());
  const resolved = resolveRoute(pathname);
  const activeSlug = resolved?.category.slug;
  const { barRef, activeRef } = useCenterActive<HTMLAnchorElement>(pathname);

  return (
    <div className="cat-bar-full">
      <div className="cat-bar-inner-full" ref={barRef}>
        {categories.map((c) => {
          const isActive = c.slug === activeSlug;
          return (
            <Link
              key={c.slug}
              href={categoryDefaultHref(c)}
              ref={isActive ? activeRef : undefined}
              className={isActive ? "cat-pill-full active" : "cat-pill-full"}
              aria-current={isActive ? "page" : undefined}
            >
              {c.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
