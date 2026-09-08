"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { normalizePath, resolveRoute } from "@/lib/categories";
import { useCenterActive } from "./useCenterActive";

/**
 * Second-level bar: subcategories of the currently active main category.
 * Built designs link to their route; the rest open the shared
 * under-construction screen (/wip/[slug]). A dot marks unbuilt pills.
 */
export default function StyleBar() {
  const pathname = normalizePath(usePathname());
  const resolved = resolveRoute(pathname);
  const subs = resolved?.category.subs ?? [];
  const { barRef, activeRef } = useCenterActive<HTMLAnchorElement>(pathname);

  return (
    <div className="style-bar-full">
      <div className="style-bar-inner-full" ref={barRef}>
        {subs.map((s) => {
          const isActive = normalizePath(s.href) === pathname;
          return (
            <Link
              key={s.slug}
              href={s.href}
              ref={isActive ? activeRef : undefined}
              className={isActive ? "style-pill-full active" : "style-pill-full"}
              aria-current={isActive ? "page" : undefined}
              title={s.built ? s.name : `${s.name} — coming soon`}
            >
              {s.name}
              {!s.built ? <i className="soon-dot" aria-hidden="true" /> : null}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
