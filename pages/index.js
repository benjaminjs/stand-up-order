import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [listText, setListText] = useState("");
  const list = listText.split(",");

  const randomRandomizedList = list.sort(() => Math.random() - 0.5);

  return (
    <div className={styles.container}>
      <Head>
        <title>Stand up Order!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Standup Order!</h1>
        <textarea
          onChange={(e) => setListText(e.target.value)}
          value={listText}
        />
        <ol>
          {randomRandomizedList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
