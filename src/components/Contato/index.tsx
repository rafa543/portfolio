import styles from "./contato.module.css";
import Image from "next/image";

export function Contato() {
  return (
    <div className={styles.contaier}>
      <div className={styles.titulo}>
        <hr />
        <h3>Contato</h3>
        <hr />
      </div>

      <div className={styles.contatos}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div>
              <Image
                src="/whats.png"
                alt="Minha Imagem"
                width={80}
                height={80}
              />
            </div>
            <div className={styles.info}>
              <p>Call me</p>
              <p>+86 988795124</p>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <Image
                src="/email.png"
                alt="Minha Imagem"
                width={80}
                height={80}
              />
            </div>
            <div className={styles.info}>
              <p>Email me</p>
              <p>rafa123839@gmail.com</p>
            </div>
          </div>
        </div>

        <div className={styles.formulario}>
          <input className={styles.item} type="text" placeholder="Full name" />
          <input className={styles.item} type="text" placeholder="Your email" />
          <input
            className={styles.item}
            type="text"
            placeholder="Phone number"
          />
          <input className={styles.item} type="text" placeholder="Budget" />
          <input className={styles.item} type="text" placeholder="Message" />
        </div>
      </div>
    </div>
  );
}
