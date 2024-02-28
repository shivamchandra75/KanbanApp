import { Plus, Save, Settings } from "react-feather";
import Button from "../Button/Button";
import styles from "./Details.module.scss";
// import { addNewList } from "../redux/MainListSlice";
import { canvas_addNewList } from "../redux/MainListSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Details() {
  const { boardList, activeBoardIndex } = useSelector(
    (state) => state.mainList
  );
  const boardName = boardList[activeBoardIndex].name;
  const dispatch = useDispatch();
  return (
    <div className={styles.detail}>
      <h3 className={styles.detail__board_name}>{boardName}</h3>
      <div className={styles.detail__buttons_parent}>
        <Button
          icon={<Plus />}
          color="blue"
          // onClick={() => dispatch(addNewList())}
          onClick={() => dispatch(canvas_addNewList())}
        >
          New List
        </Button>
        <Button icon={<Save />}>Save Progress</Button>
        <Button icon={<Settings />}>Settings</Button>
      </div>
    </div>
  );
}
