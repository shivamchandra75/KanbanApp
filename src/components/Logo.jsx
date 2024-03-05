import { documentId } from "firebase/firestore";
import "../index.scss";

export default function Logo() {
  return (
    <div className="logo">
      <div>
        <img src="./LOGO_icon.svg" alt="" />
      </div>
      <h3>Taskomo</h3>
    </div>
  );
}
