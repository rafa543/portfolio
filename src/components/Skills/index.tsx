import styles from "./skills.module.css";
import Image from "next/image";

const images = [
  "spring.png",
  "react.png",
  "java.png",
  "git.png",
  "javascript.png",
  "oracle.png",
  "postgres.png",
  "reactnative.png",
  "docker.png",
  "typescript.png",
];

export function Skills() {
  return (
    <div className={styles.contaier}>
      <div className={styles.items}>
        <div className={styles.title}>
          <h3>
            skills <span>( )</span>
          </h3>
        </div>
        <div className={styles.imagens}>
          {images.map((image, index) => (
            <div key={index} className={styles.image}>
              <Image
                src={`/icones/${image}`}
                alt="Minha Imagem"
                width={80}
                height={80}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
