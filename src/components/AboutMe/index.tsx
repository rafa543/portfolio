import styles from "./about.module.css";

export function AboutMe() {
  return (
    <div className={styles.contaier}>
      <div className={styles.sobre}>
        <h2>
          sobre mim<span>( )</span>
        </h2>
        <p>
          Desenvolvedor Java Spring Boot | Desenvolvedor Mobile ReactNativeAtuar
          na área da tecnologia da informação, com análise e/ou desenvolvimento
          de sistemas Junior no desenvolvimento web na parte front-end ou
          backend e mobile.Trabalho na Sefaz-PI como desenvolvedor backend com
          java com o framework spring ja estou a 1 ano e junto a outros colegas
          sou responsavel pelo backend do Portal Efd.
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.infoCard}>
            <h3>Fullstack Developer</h3>
            <p>Projects</p>
          </div>
          <span>{"</>"}</span>
        </div>
        <div className={styles.card}>
          <div className={styles.infoCard}>
            <h3>Freelancer</h3>
            <p>Hire me!</p>
          </div>
          <span>{"{ }"}</span>
        </div>
      </div>
    </div>
  );
}
