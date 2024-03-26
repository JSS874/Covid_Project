'use client'
import styles from '../page.module.css';
import Link from 'next/link';
import Line from './Line'

export default function Google() {
    return (
        <main className={styles.main}>
        <div className={styles.description}>Google</div>
        <Link href="./">
            <button>Home</button>
        </Link>
        <h1>MIDRANGE OF GOOGLE STOCK PRICES DURING COVID-19</h1>
        <Line />
        <p>This compares the midrange of Google stock prices during COVID-19 over time in a user-specified time period (by month).</p>
        </main>
    );
}