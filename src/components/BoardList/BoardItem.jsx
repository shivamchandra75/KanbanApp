import { Folder } from "react-feather";
import styles from "./BoardItem.module.scss";
import { useDispatch } from "react-redux";
import { updateActiveBoard } from "../redux/MainListSlice";
import { useSelector } from "react-redux";

export default function BoardItem({ board, index }) {
  const dispatch = useDispatch();
  const { boardList, activeBoardIndex } = useSelector(
    (state) => state.mainList,
  );
  function handleUpdateIndex() {
    dispatch(updateActiveBoard(index));
  }
  return (
    <div
      onClick={handleUpdateIndex}
      className={`${styles.boardItem} ${index === activeBoardIndex ? styles.boardItemActive : null}`}
    >
      <Folder />
      <span>{board.name}</span>
    </div>
  );
}
