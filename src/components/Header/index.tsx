import styles from "./header.module.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

export function Header() {
  return (
    <div className={styles.contaier}>
      <div className={styles.logo}>
        <p>
          RAFAEL <span>ARAUJO</span>
        </p>
      </div>
      <div className={styles.links}>
        <span>about</span>
        <span>skills</span>
        <span>projects</span>
      </div>
      <div className={styles.botoes}>
        <div className={styles.botao}>
          <FaLinkedin size={24} />
          <span>Linkedin</span>
        </div>
        <div className={styles.botao}>
          <AiFillGithub size={24} />
          <span>Github</span>
        </div>
        <div className={styles.botao}>
          <BsWhatsapp size={24} />
          <span>Contato</span>
        </div>
      </div>
    </div>
  );
}
