import { CheckCircleRounded } from "@mui/icons-material";
import styles from "./saveDataPopup.module.scss";

export default function SaveDataPopup() {
  function closePopup() {
    const savedPopup = document.getElementById("save-popup");
    savedPopup.classList.toggle("show-popup");
  }

  return (
    <div id="save-popup" onClick={closePopup} className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.icon}>
          <CheckCircleRounded />
        </div>
        <span>Saved</span>
      </div>
    </div>
  );
}
