'use client'
import styles from "../page.module.css";
import Link from "next/link";
import Line from "./Line";

export default function Layoffs() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>Layoffs</div>
      <Link href="./">
            <button>Home</button>
        </Link>
        <h1>Company Layoffs during COVID-19</h1>
        <Line />
        <p>This compares the midrange of Google stock prices during COVID-19 over time in a user-specified time period (by month). </p>
    </main>
  );
}
