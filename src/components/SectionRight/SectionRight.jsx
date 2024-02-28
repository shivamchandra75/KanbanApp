import Canvas from "../Canvas/Canvas";
import Details from "../Details/Details";
import styles from "./SectionRight.module.scss";

export default function SectionRight() {
  return (
    <div className={styles.section_right}>
      <Details />
      <Canvas />
    </div>
  );
}
