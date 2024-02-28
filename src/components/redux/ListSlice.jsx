// export const defaultCard = {
//   imgSource: "/card-img.jpeg",
//   heading: "Add card Heading",
//   description: "Add card description",
//   priority: "high",
//   tag: "Add Tag",
//   assignee: "shivam chandra",
//   deadline: "",
//   id: "1234",
// };

// const initialState = {
//   listName: "New List",
//   cardList: [],
// };

// export default function ListReducer(state = initialState, action) {
//   switch (action.type) {
//     case "list/updateName":
//       return {
//         ...state,
//         listName: action.payload,
//       };
//     case "list/addCardToList":
//       return {
//         ...state,
//         cardList: [...state.cardList, action.payload],
//       };
//     case "list/removeCard":
//       return {
//         ...state,
//         cardList: state.cardList.filter((card) => {
//           card.id !== action.payload;
//         }),
//       };
//     default:
//       return state;
//   }
// }
// //////////////////////    ACTION CREATOR FUNCTIONS    /////////////////////////
// export function updateListName(listName) {
//   return {
//     type: "list/updateName",
//     payload: listName,
//   };
// }

// export function addCardToList(card) {
//   return {
//     type: "list/addCardToList",
//     payload: card,
//   };
// }

// export function removeCardFromList(cardId) {
//   return {
//     type: "list/removeCardFromList",
//     payload: cardId,
//   };
// }
