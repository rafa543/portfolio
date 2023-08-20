import styles from "./curriculo.module.css";

export function Curriculo() {
  return (
    <div className={styles.contaier}>
      <div className={styles.titulo}>
        <hr />
        <h3>Curriculo</h3>
        <hr />
      </div>
      <div className={styles.botoes}>
        <div className={styles.botao}>
          <span>ver curriculo</span>
        </div>
        <div className={styles.botao}>
          <span>baixar curriculo</span>
        </div>
      </div>
    </div>
  );
}
