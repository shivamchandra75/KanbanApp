import SellIcon from "@mui/icons-material/Sell";
import styles from "./Tag.module.scss";

export default function Tag({ tag }) {
  return (
    <div className={`${styles.tag} ${styles.blue}`}>
      <span>
        <SellIcon />
      </span>
      <span>{tag}</span>
    </div>
  );
}
