import { mergeProps } from "solid-js";
import styles from "../App.module.css";

const Card = (props) => {
  return (
    <>
      <div class={styles.card}>
        <div>{props.children}</div>
        <div><b>{props.title}</b></div>
        <div>{props.desc}</div>
      </div>
    </>

  );
};

export default Card;
