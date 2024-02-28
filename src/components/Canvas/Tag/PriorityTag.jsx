import HourglassFullRounded from "@mui/icons-material/HourglassFullRounded";
import LocalFireDepartmentRounded from "@mui/icons-material/LocalFireDepartmentRounded";
import WarningRounded from "@mui/icons-material/WarningRounded";
import styles from "./Tag.module.scss";

export default function PriorityTag({ priority }) {
  function icon() {
    if (priority.toLowerCase() === "high")
      return <LocalFireDepartmentRounded />;
    if (priority.toLowerCase() === "medium") return <WarningRounded />;
    if (priority.toLowerCase() === "low") return <HourglassFullRounded />;
  }
  return (
    <div
      className={`${styles.tag} ${priority.toLowerCase() === "high" ? styles.red : priority.toLowerCase() === "medium" ? styles.yellow : priority.toLowerCase() === "low" ? styles.green : styles.red}`}
    >
      <span>{icon()}</span>
      <span>{priority.toUpperCase()}</span>
    </div>
  );
}
