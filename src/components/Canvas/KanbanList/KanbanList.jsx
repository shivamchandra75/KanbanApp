import { useDispatch } from "react-redux";
import { Plus } from "react-feather";
import DeleteIcon from "@mui/icons-material/Delete";

import { list_addNewCard, canvas_deleteList } from "../../redux/MainListSlice";
import Card from "../Card/Card";
import styles from "./KanbanList.module.scss";
import { Droppable } from "react-beautiful-dnd";

export default function KanbanList({ list, index }) {
  const dispatch = useDispatch();

  function handleDeleteList() {
    dispatch(canvas_deleteList(list.id));
  }

  function handleAddCard() {
    dispatch(list_addNewCard(list.id));
  }

  return (
    <div id={list.id} className={styles.list}>
      <div className={styles.list__header}>
        <h4>{list.name}</h4>

        <button className={styles.deleteBtn} onClick={handleDeleteList}>
          <DeleteIcon />
        </button>
      </div>

      <Droppable droppableId={String(list.id)} index={index}>
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {list.cardList.map((card, i) => {
              return (
                <Card key={card.id} index={i} listId={list.id} card={card} />
              );
            })}
            {provided.placeholder}
            <button
              id={list.id}
              className={styles.list__addCardBtn}
              onClick={handleAddCard}
            >
              <Plus />
            </button>
          </ul>
        )}
      </Droppable>
    </div>
  );
}
