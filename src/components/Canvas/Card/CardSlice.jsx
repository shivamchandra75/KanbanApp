// import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imgSource: "/card-img.jpeg",
  heading: "Add card Heading",
  description: "Add card description",
  priority: "high",
  tag: "Add Tag",
  assignee: "shivam chandra",
  deadline: "",
  id: "1234",
};

export default function CardReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
