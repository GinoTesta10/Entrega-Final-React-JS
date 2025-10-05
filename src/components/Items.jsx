import styles from "./items.module.css";

const Items = ({ inicio }) => {
  return (
    <div className={styles.inicio}>
      <h2>{inicio}</h2>
    </div>
  );
};
export default Items;
