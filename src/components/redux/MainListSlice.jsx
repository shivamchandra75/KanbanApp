import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const initialState = {};

// export const initialState = {
//   activeBoardIndex: 0,
//   boardList: [
//     {
//       id: uuidv4(), //board id
//       name: "🔑 DEMO", //board name
//       listCollection: [
//         {
//           id: uuidv4(), //list id
//           name: "TODO", //list name
//           cardList: [
//             {
//               id: uuidv4(), //card id
//               imgSource: "/card-img.jpeg",
//               heading: "Add card Heading",
//               description: "Add card description",
//               priority: "high",
//               tag: "Add Tag",
//               assignee: "assignee-1",
//               deadline: "",
//             },
//             {
//               id: uuidv4(),
//               imgSource: "",
//               heading: "Add card Heading",
//               description: "Add card description",
//               priority: "high",
//               tag: "Add Tag",
//               assignee: "assignee-3",
//               deadline: "",
//             },
//           ],
//         },
//         {
//           id: uuidv4(),
//           name: "In Progress",
//           cardList: [
//             {
//               id: uuidv4(),
//               imgSource: "/card-img.jpeg",
//               heading: "Add card Heading",
//               description: "Add card description",
//               priority: "low",
//               tag: "Add Tag",
//               assignee: "assignee-2",
//               deadline: "March 1",
//             },
//           ],
//         },
//         {
//           id: uuidv4(),
//           name: "Done",
//           cardList: [
//             {
//               id: uuidv4(),
//               imgSource: "/card-img.jpeg",
//               heading: "Add card Heading",
//               description: "Add card description",
//               priority: "low",
//               tag: "Add Tag",
//               assignee: "assignee-2",
//               deadline: "March 1",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: uuidv4(),
//       name: "New Board",
//       listCollection: [],
//     },
//   ],
// };

function newList() {
  return {
    id: uuidv4(),
    name: "New List",
    cardList: [
      {
        id: uuidv4(),
        imgSource: "/card-img.jpeg",
        heading: "Add card Heading",
        description: "Add card description",
        priority: "low",
        tag: "Add Tag",
        assignee: "assignee-1",
        deadline: "March 1",
      },
    ],
  };
}

function newCard() {
  return {
    id: uuidv4(),
    imgSource: "",
    heading: "Add card Heading",
    description: "Add card description",
    priority: "low",
    tag: "Add Tag",
    assignee: "assignee-1",
    deadline: "March 1",
  };
}

function newBoard() {
  return {
    id: uuidv4(), //board id
    name: "New Board", //board name
    listCollection: [],
  };
}

function getTargetList(targetListId, state) {
  const listCollection = state.boardList[state.activeBoardIndex].listCollection;
  return listCollection.find((list) => list.id === targetListId);
}

function getCurrentListCollection(state) {
  return state.boardList[state.activeBoardIndex].listCollection;
}

// export default function MainListReducer(state = initialState, action) {
//   const listCollection = state.boardList[state.activeBoardIndex].listCollection;
//   switch (action.type) {
//     case "boardList/addBoard": {
//       state.boardList.push(newBoard());
//       return { ...state };
//     }
//     /////////////////////////////////////////////////
//     case "canvas/addNewList": {
//       listCollection.push(newList());

//       const newState = JSON.parse(JSON.stringify(state));
//       return newState;
//     }
//     /////////////////////////////////////////////////
//     case "list/addNewCard": {
//       const targetListId = action.payload;
//       const targetList = getTargetList(targetListId, state);

//       targetList.cardList.push(newCard());

//       //creating deep clone
//       const newState = JSON.parse(JSON.stringify(state));
//       return newState;
//     }
//     /////////////////////////////////////////////////
//     case "card/updateDetails": {
//       const targetList = getTargetList(action.payload.listIndex, state);

//       targetList.cardList.splice(action.payload.cardIndex, 1, {
//         ...action.payload.card,
//       });
//       //deep clone
//       const newState = JSON.parse(JSON.stringify(state));
//       return newState;
//     }
//     /////////////////////////////////////////////////
//     case "canvas/deleteList": {
//       const targetListId = action.payload;
//       const targetListIndex = listCollection.findIndex(
//         (list) => list.id === targetListId
//       );
//       listCollection.splice(targetListIndex, 1);

//       //deep clone
//       const newState = JSON.parse(JSON.stringify(state));
//       return newState;
//     }
//     /////////////////////////////////////////////////
//     default:
//       return state;
//   }
// }

// export function addNewBoard() {
//   return {
//     type: "boardList/addBoard",
//   };
// }

// export function addNewList() {
//   return {
//     type: "canvas/addNewList",
//   };
// }

// export function addNewCard(listId) {
//   return {
//     type: "list/addNewCard",
//     payload: listId,
//   };
// }

// export function deleteList(targetListId) {
//   return {
//     type: "canvas/deleteList",
//     payload: targetListId,
//   };
// }

// export function updateCardDetails(listIndex, cardIndex, card) {
//   return {
//     type: "card/updateDetails",
//     payload: { listIndex, cardIndex, card },
//   };
// }

const MainListSlice = createSlice({
  name: "mainList",
  initialState,
  reducers: {
    getStateFromFireBase(state, action) {
      console.log("🔥 FireBase", action.payload);
      state = action.payload;
    },
    /////////////////////////////////////////////////
    updateActiveBoard(state, action) {
      state.activeBoardIndex = action.payload;
    },
    /////////////////////////////////////////////////
    boardList_addNewBoard(state) {
      state.boardList.push(newBoard());
    },
    /////////////////////////////////////////////////
    board_updateName(state, action) {
      const board = state.boardList[state.activeBoardIndex];
      board.name = action.payload;
    },
    /////////////////////////////////////////////////
    canvas_addNewList(state) {
      const listCollection = getCurrentListCollection(state);
      listCollection.push(newList());
    },
    /////////////////////////////////////////////////
    card_updateDetails(state, action) {
      const listCollection = getCurrentListCollection(state);
      const targetList = listCollection.find(
        (list) => list.id === action.payload.listId,
      );
      const cardIndex = targetList.cardList.findIndex(
        (card) => card.id === action.payload.cardId,
      );
      targetList.cardList.splice(cardIndex, 1, action.payload.updatedCard);
    },
    /////////////////////////////////////////////////
    list_updateName(state, action) {
      const targetList = getTargetList(action.payload.listId, state);
      targetList.name = action.payload.newName;
    },
    /////////////////////////////////////////////////
    list_addNewCard(state, action) {
      console.log(action);
      const targetListId = action.payload;
      const targetList = getTargetList(targetListId, state);
      console.log(targetList);
      targetList.cardList.push(newCard());
    },
    /////////////////////////////////////////////////
    list__deleteCard(state, action) {
      const listCollection = getCurrentListCollection(state);
      const targetList = listCollection.find(
        (list) => list.id === action.payload.listId,
      );
      const cardIndex = targetList.cardList.findIndex(
        (card) => card.id === action.payload.cardId,
      );
      targetList.cardList.splice(cardIndex, 1);
    },
    /////////////////////////////////////////////////
    canvas_deleteList(state, action) {
      const listCollection = getCurrentListCollection(state);
      const targetListId = action.payload;
      const targetListIndex = listCollection.findIndex(
        (list) => list.id === targetListId,
      );
      listCollection.splice(targetListIndex, 1);
    },
    /////////////////////////////////////////////////
    handleDragDrop(state, action) {
      const { destination, source } = action.payload;
      const sourceList = getTargetList(source.droppableId, state).cardList;
      const destinationList = getTargetList(
        destination.droppableId,
        state,
      ).cardList;
      const [card] = sourceList.splice(source.index, 1);
      destinationList.splice(destination.index, 0, card);
    },
  },
});

export const {
  getStateFromFireBase,
  boardList_addNewBoard,
  board_updateName,
  canvas_deleteList,
  card_updateDetails,
  canvas_addNewList,
  list_addNewCard,
  list__deleteCard,
  list_updateName,
  updateActiveBoard,
  handleDragDrop,
} = MainListSlice.actions;
export default MainListSlice.reducer;
