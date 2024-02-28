import { Clock } from "react-feather";
import DeleteIcon from "@mui/icons-material/Delete";

import { useState } from "react";
import styles from "./Card.module.scss";
import PriorityTag from "../Tag/PriorityTag";
import Tag from "../Tag/Tag";
import Popup from "../../Popup/Popup";
import { useDispatch } from "react-redux";
import { list__deleteCard } from "../../redux/MainListSlice";
import { Draggable } from "react-beautiful-dnd";

export default function Card({ listId, card, index }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useDispatch();

  const assigneePic =
    card.assignee === "assignee-1"
      ? "./assignee-1.jpeg"
      : card.assignee === "assignee-2"
        ? "assignee-2.png"
        : card.assignee === "assignee-3"
          ? "assignee-3.png"
          : card.assignee === "assignee-4"
            ? "./assignee-4.png"
            : "./assignee-1.jpeg";

  function deleteCard() {
    dispatch(list__deleteCard({ listId, cardId: card.id }));
  }

  function handlePopup(e) {
    if (e.target.id !== "delete-card-btn") setIsPopupOpen(true);
  }

  return (
    <Draggable draggableId={String(card.id)} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          id={card.id}
        >
          <div className={styles.card} onClick={(e) => handlePopup(e)}>
            <div className={styles.card__img}>
              {card.imgSource && (
                <img src={card.imgSource} alt="---Incorrect Image URL" />
              )}
            </div>

            <h4 className={styles.card__heading}>{card.heading}</h4>

            <p>{card.description}</p>

            <div className={styles.card__tags}>
              {card.priority && <PriorityTag priority={card.priority} />}
              {card.tag && <Tag tag={card.tag} />}
            </div>

            <div className={styles.assigneeDeadline}>
              <div className={styles.assignee}>
                <div className={styles.assignee__img}>
                  <img src={assigneePic} alt="" />
                </div>
                <span>{card.assignee}</span>
              </div>

              <button
                id="delete-card-btn"
                onClick={deleteCard}
                className={styles.card__deleteIcon}
              >
                <DeleteIcon className="icon" />
              </button>

              <div className={styles.card__deadline}>
                <Clock />
                <p>{card.deadline}</p>
              </div>
            </div>
          </div>
          {isPopupOpen && (
            <Popup
              listId={listId}
              card={card}
              setIsPopupOpen={setIsPopupOpen}
            />
          )}
        </div>
      )}
    </Draggable>
  );
}
