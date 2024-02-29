import { useDispatch } from "react-redux";
import { Plus } from "react-feather";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  list_addNewCard,
  canvas_deleteList,
  list_updateName,
} from "../../redux/MainListSlice";
import Card from "../Card/Card";
import styles from "./KanbanList.module.scss";
import { Droppable } from "react-beautiful-dnd";
import { useState } from "react";

export default function KanbanList({ list, index }) {
  const [listName, setListName] = useState(list.name);
  const dispatch = useDispatch();

  function handleChange(e) {
    setListName(e.target.value);
    dispatch(list_updateName({ listId: list.id, newName: e.target.value }));
  }

  function handleDeleteList() {
    dispatch(canvas_deleteList(list.id));
  }

  function handleAddCard() {
    dispatch(list_addNewCard(list.id));
  }

  return (
    <div id={list.id} className={styles.list}>
      <div className={styles.list__header}>
        <input type="text" value={listName} onChange={(e) => handleChange(e)} />

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
