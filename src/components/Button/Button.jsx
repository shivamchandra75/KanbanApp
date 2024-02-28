import styles from "./Button.module.scss";
export default function Button({
  icon,
  children,
  color = "gray",
  reverse = false,
  onClick,
}) {
  return (
    <button
      className={`${styles.button} ${color === "blue" ? styles.blue : styles.gray} ${reverse ? styles.reverse : ""}`}
      onClick={onClick}
    >
      <span>{icon}</span>
      <span>{children}</span>
    </button>
  );
}
