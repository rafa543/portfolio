import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { Introduction } from "@/components/Introduction";
import { AboutMe } from "@/components/AboutMe";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Introduction />
      <AboutMe />
      <Skills />
    </main>
  );
}
