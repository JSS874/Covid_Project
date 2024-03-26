'use client'
import styles from '../page.module.css';
import Link from 'next/link';
import Line from './Line'

export default function Vaccines() {
    return (
        <main className={styles.main}>
        <div className={styles.description}>Vaccines</div>
        <Link href="./">
            <button>Home</button>
        </Link>
        <h1>COVID-19 Vaccinations to Population Ratio</h1>
        <Line />
        <p>The COVID-19 Vaccinations to Population Ratio dataset provides information on the ratio of partial or full COVID-19 vaccinations to the population of different countries over time.</p>
        </main>
    );
}