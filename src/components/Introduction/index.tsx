import styles from "./introduction.module.css";
import Image from "next/image";

export function Introduction() {
  return (
    <div className={styles.contaier}>
      <div className={styles.welcome}>
        <span>Hello, i am</span>
        <p className={styles.name}>
          {"<"}Rafael <br />
          Araujo{" />"}
        </p>
        <p className={styles.profession}>Fullstack Developer</p>
        <div className={styles.botao}>
          <span>Sobre mim</span>
        </div>
      </div>
      <div>
        <Image
          src="/ANIMACAO.png"
          alt="Minha Imagem"
          width={494}
          height={452}
        />
      </div>
    </div>
  );
}
