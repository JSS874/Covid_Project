import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>Launch Page</div>
      <Link href="/fatality">
        <button>Case Fatality Rate</button>
      </Link>
      <Link href="/google">
        <button>Google Stock Prices</button>
      </Link>
      <Link href="/layoffs">
        <button>Company Layoffs</button>
      </Link>
      <Link href="/social-measures">
        <button>Public Health Social Measures</button>
      </Link>
      <Link href="/vaccines">
        <button>Vaccines to Population Ratio</button>
      </Link>
    </main>
  );
}
