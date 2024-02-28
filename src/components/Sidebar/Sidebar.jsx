import BoardList from "../BoardList/BoardList";
import Logo from "../Logo";
import Logout from "../Logout/Logout";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./SideBar.module.scss";
import Theme from "./Theme/Theme";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <SearchBar />
      <BoardList />
      <Theme />
      <Logout />
    </div>
  );
}
