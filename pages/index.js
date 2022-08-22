import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rasel Mahmud Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Rasel Mahmud Portfolio website" />
        <meta name="keywords" content="Rasel Mahmud, Rasel Mahmud portfolio, rasel.mahmud.dev, rasel"/>
        <meta name="author" content="Rasel Mahmud"/>
        <meta property="og:title" content="Rasel Mahmud Portfolio website" />
        <meta property="og:description" content="Rasel Mahmud Portfolio website" />
        <meta property="og:url" content="https://rasel-mahmud-portfolio.vercel.app"/>
        <meta property="og:site_name" content="Rasel Mahmud Portfolio website"/>
        <meta property="og:image" content="https://rasel-mahmud-portfolio.vercel.app/rasel-mahmud.jpg"/>

      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Rasel Mahmud</h1>
        <h2 className={styles.title}>Rasel Mahmud Portfolio</h2>

        <a href="https://rasel-portfolio.vercel.app/">Rasel Portfolio</a>

        <img src="/Rasel-Mahmud.jpg" alt="Rasel Mahmud Portfolio" />
      </main>
    </div>
  );
}
