import { useEffect } from "react";
import BoardList from "../BoardList/BoardList";
import Logo from "../Logo";
import Logout from "../Logout/Logout";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./SideBar.module.scss";
import Theme from "./Theme/Theme";
import { useDispatch } from "react-redux";
import { getData } from "../firebase";

export default function Sidebar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

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
