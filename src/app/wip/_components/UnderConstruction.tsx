import Link from "next/link";
import styles from "../page.module.css";

interface UnderConstructionProps {
  subName: string;
  categoryName: string;
  categoryHref: string;
  builtCount: number;
  totalCount: number;
}

/** Shared placeholder for not-yet-built subcategory designs. */
export default function UnderConstruction({
  subName,
  categoryName,
  categoryHref,
  builtCount,
  totalCount,
}: UnderConstructionProps) {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.badge}>🚧 Under construction</div>
        <h1 className={styles.title}>{subName}</h1>
        <p className={styles.sub}>
          This {categoryName} concept hasn&apos;t been built yet.
          {builtCount > 0
            ? ` ${builtCount} of ${totalCount} styles in this category are already live — explore those meanwhile.`
            : ` Nothing in ${categoryName} is live yet — check back soon.`}
        </p>
        <div className={styles.progress}>
          <i style={{ width: `${Math.round((builtCount / totalCount) * 100)}%` }} />
        </div>
        <div className={styles.actions}>
          <Link href={categoryHref} className={styles.primary}>
            Back to {categoryName}
          </Link>
          {categoryHref !== "/" ? (
            <Link href="/" className={styles.ghost}>
              Homepage
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
