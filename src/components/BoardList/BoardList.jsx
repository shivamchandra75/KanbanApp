import { Plus } from "react-feather";
import styles from "./BoardList.module.scss";
import BoardItem from "./BoardItem";
import { useDispatch, useSelector } from "react-redux";
import { boardList_addNewBoard } from "../redux/MainListSlice";

export default function BoardList() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(boardList_addNewBoard());
  }

  const { boardList } = useSelector((state) => state.mainList);
  return (
    <div className={styles.boardList}>
      <div className={styles.boardList__headingGroup}>
        <h4 className={styles.boardList__heading}>Boards</h4>
        <button className={styles.createNewBoardBtn} onClick={handleClick}>
          <Plus />
        </button>
      </div>

      {boardList && (
        <ul>
          {boardList.map((board, i) => (
            <BoardItem key={board.id} index={i} board={board} />
          ))}
        </ul>
      )}
    </div>
  );
}
