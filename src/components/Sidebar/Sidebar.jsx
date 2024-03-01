import { useEffect } from "react";
import BoardList from "../BoardList/BoardList";
import Logo from "../Logo";
import Logout from "../Logout/Logout";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./SideBar.module.scss";
import Theme from "./Theme/Theme";
import { useDispatch } from "react-redux";
import { getData } from "../firebase";
import { useSelector } from "react-redux";

export default function Sidebar() {
  //this will re-render this component when state is changed, note when state is changed all the components subscribed to any part of state will re-render as the whole state is changed.
  // const state = useSelector((state) => state);
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
