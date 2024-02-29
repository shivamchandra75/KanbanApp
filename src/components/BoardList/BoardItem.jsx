import { Folder } from "react-feather";
import styles from "./BoardItem.module.scss";
import { useDispatch } from "react-redux";
import { board_updateName, updateActiveBoard } from "../redux/MainListSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function BoardItem({ board, index }) {
  const [boardName, setBoardName] = useState(board.name);

  function handleChange(e) {
    setBoardName(e.target.value);
    dispatch(board_updateName(e.target.value));
  }

  const dispatch = useDispatch();
  const { activeBoardIndex } = useSelector((state) => state.mainList);
  function handleUpdateIndex() {
    dispatch(updateActiveBoard(index));
  }
  return (
    <div
      onClick={handleUpdateIndex}
      className={`${styles.boardItem} ${index === activeBoardIndex ? styles.boardItemActive : null}`}
    >
      <Folder className={styles.icon} />
      <input type="text" value={boardName} onChange={(e) => handleChange(e)} />
    </div>
  );
}
