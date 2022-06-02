import styles from "../App.module.css";

const Card = (props) => {
  return (
    <>
      <div class={styles.card}>
        <div class={styles.removeTodo}>{props.children}</div>
        <div><p class={styles.title}>{props.title}</p></div>
        <div class={styles.text}>{props.desc}</div>
      </div>
    </>

  );
};

export default Card;
