import Image from "next/image";
import styles from "./projects.module.css";

export function Projects() {
  return (
    <div className={styles.contaier}>
      <div className={styles.title}>
        <span>RECENT PROJECTS</span>
        <p>
          {" "}
          FSADFSDAFSDFDSFSDFSDFSDFSDFSDFSDDS
          DFASDFSDAFSADFSDAFSDFDSFSDFSDFSDFSDFSDFSDDS
          DFASDFSDAFSADFSDAFSDFDSFSDFSDFSDFSDFSDFSDDS DFASDFSDA
        </p>
      </div>
      <div className={styles.projects}>
        <div className={styles.img}>
          <Image
            src="/image 1.png"
            alt="Minha Imagem"
            width={486}
            height={405}
          />
        </div>
        <div className={styles.img}>
          <Image
            src="/image 2.png"
            alt="Minha Imagem"
            width={486}
            height={405}
          />
        </div>
        <div className={styles.img}>
          <Image
            src="/image 3.png"
            alt="Minha Imagem"
            width={486}
            height={311}
          />
        </div>
        <div className={styles.img}>
          <Image
            src="/image 4.png"
            alt="Minha Imagem"
            width={486}
            height={311}
          />
        </div>
      </div>
    </div>
  );
}
