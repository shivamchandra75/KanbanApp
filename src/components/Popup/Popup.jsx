import { v4 as uuidv4 } from "uuid";
import {
  AccessTime,
  Assignment,
  Description,
  Image,
  PriorityHigh,
  Sell,
  Tag,
  Title,
} from "@mui/icons-material";
import styles from "./Popup.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { card_updateDetails } from "../redux/MainListSlice";

export default function Popup({ listId, card, setIsPopupOpen }) {
  const [imgUrl, setImgUrl] = useState(card.imgSource);
  const [heading, setHeading] = useState(card.heading);
  const [description, setDescription] = useState(card.description);
  const [priority, setPriority] = useState(card.priority);
  const [tag, setTag] = useState(card.tag);
  const [deadline, setDeadline] = useState(card.deadline);
  const [assignee, setAssignee] = useState(card.assignee);

  const dispatch = useDispatch();

  function closePopup(e) {
    const updatedCard = {
      id: uuidv4(),
      imgSource: imgUrl,
      heading: heading,
      description: description,
      priority: priority,
      tag: tag,
      assignee: assignee,
      assigneePic: "/assignee-1.jpeg",
      deadline: deadline,
    };
    if (e.target.classList.contains("close-overlay")) {
      dispatch(card_updateDetails({ listId, cardId: card.id, updatedCard }));
      setIsPopupOpen(false);
    }
  }

  function handleChange(e, setterfn) {
    setterfn(e.target.value);
  }

  return (
    <>
      <div
        className={`${styles.popupOverlay} close-overlay`}
        onClick={(e) => closePopup(e)}
      >
        <div className={`${styles.popup}`}>
          <div>
            <span>
              <Image />
            </span>
            <label htmlFor="">Image URL</label>
            <input
              type="text"
              value={imgUrl}
              placeholder="Provide an Image URL"
              onChange={(e) => handleChange(e, setImgUrl)}
            />
          </div>
          <div>
            <span>
              <Title />
            </span>
            <label htmlFor="">Heading</label>
            <input
              type="text"
              value={heading}
              placeholder="Card Heading"
              onChange={(e) => handleChange(e, setHeading)}
            />
          </div>
          <div>
            <span>
              <Description />
            </span>
            <label htmlFor="">Description</label>
            <input
              type="text"
              value={description}
              placeholder="Card Description"
              onChange={(e) => handleChange(e, setDescription)}
            />
          </div>
          <div>
            <span>
              <Sell />
            </span>
            <label htmlFor="">Tag</label>
            <input
              type="text"
              value={tag}
              placeholder="write any thing"
              onChange={(e) => handleChange(e, setTag)}
            />
          </div>
          <div>
            <span>
              <PriorityHigh />
            </span>
            <label htmlFor="">Priority</label>
            <input
              type="text"
              value={priority}
              placeholder="choose one => high | medium | low"
              onChange={(e) => handleChange(e, setPriority)}
            />
          </div>
          <div>
            <span>
              <Assignment />
            </span>
            <label htmlFor="">Assignee</label>
            <input
              type="text"
              value={assignee}
              placeholder="choose one => assignee-1 | assignee-2 | assignee-3 | assignee-4"
              onChange={(e) => handleChange(e, setAssignee)}
            />
          </div>
          <div>
            <span>
              <AccessTime />
            </span>
            <label htmlFor="">DeadLine</label>
            <input
              type="text"
              value={deadline}
              placeholder="Month date"
              onChange={(e) => handleChange(e, setDeadline)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
