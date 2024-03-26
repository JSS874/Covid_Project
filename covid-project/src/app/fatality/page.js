'use client'
import styles from '../page.module.css';
import Link from 'next/link';
import Line from './Line'

export default function Fatality() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>Fatality</div>
      <Link href="./">
            <button>Home</button>
        </Link>
        <h1>COVID-19 CASE FATALITY RATE</h1>
        <Line />
        <p>This graph compares the ratio of COVID-19 deaths to infection cases, also known as the case fatality rate (CFR) separated by country over time...</p>
    </main>
  );
}