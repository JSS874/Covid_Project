'use client'
import styles from '../page.module.css';
import Link from 'next/link';
import Line from './Line';

export default function SocialMeasures() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>Social Measures</div>
      <Link href="./">
            <button>Home</button>
        </Link>
        <h1>COVID-19 Average Public Health Social Measures</h1>
        <Line />
        <p>This compares the average intensity of public health social measures taken to mitigate COVID-19 impact separated by country over time in a user-specified time period (by month).</p>
    </main>
  );
}