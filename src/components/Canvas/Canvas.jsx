import { useDispatch, useSelector } from "react-redux";
import styles from "./Canvas.module.scss";
import KanbanList from "./KanbanList/KanbanList";
import { DragDropContext } from "react-beautiful-dnd";
import { handleDragDrop } from "../redux/MainListSlice";

export default function Canvas() {
  const dispatch = useDispatch();
  function hanldeDragDrop(results) {
    // console.log(results);
    const { destination, source } = results;
    if (destination === null) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    dispatch(handleDragDrop(results));
  }

  const { boardList, activeBoardIndex } = useSelector(
    (state) => state.mainList,
  );

  const listCollection = boardList[activeBoardIndex].listCollection;
  return (
    <DragDropContext onDragEnd={hanldeDragDrop}>
      <div className={styles.canvas}>
        {listCollection.map((list, i) => {
          return <KanbanList key={list.id} index={i} list={list} />;
        })}
      </div>
    </DragDropContext>
  );
}
