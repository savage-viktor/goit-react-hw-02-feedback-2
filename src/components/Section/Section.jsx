import styles from "./Section.module.css";

function Section({ title, children }) {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      <div>{children}</div>
    </div>
  );
}

export default Section;
