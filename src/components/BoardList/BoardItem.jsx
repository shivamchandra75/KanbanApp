import { Folder } from "react-feather";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./BoardItem.module.scss";
import { useDispatch } from "react-redux";
import {
  boardList_deleteBoard,
  board_updateName,
  updateActiveBoard,
} from "../redux/MainListSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function BoardItem({ board, index }) {
  const [boardName, setBoardName] = useState(board.name);
  const dispatch = useDispatch();
  const { activeBoardIndex, boardList } = useSelector(
    (state) => state.mainList,
  );

  function handleChange(e) {
    setBoardName(e.target.value);
    dispatch(board_updateName(e.target.value));
  }

  function handleUpdateIndex(e) {
    if (e.target.classList.contains("delete-icon")) return;
    dispatch(updateActiveBoard(index));
  }

  function handleDeleteBoard() {
    if (boardList.length < 2) return;
    dispatch(
      updateActiveBoard(
        activeBoardIndex === 0 ? activeBoardIndex : activeBoardIndex - 1, //if activeBoardIndex is 0 then don't make it -1
      ),
    );
    dispatch(boardList_deleteBoard(index));
  }

  return (
    <div
      onClick={(e) => handleUpdateIndex(e)}
      className={`${styles.boardItem} ${index === activeBoardIndex ? styles.boardItemActive : null}`}
    >
      <Folder className={styles.icon} />
      <input type="text" value={boardName} onChange={(e) => handleChange(e)} />

      <DeleteIcon
        className={`${styles.deleteIcon} ${styles.icon} delete-icon`}
        onClick={handleDeleteBoard}
      />
    </div>
  );
}
