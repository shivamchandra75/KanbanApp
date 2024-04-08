import { v4 as uuidv4 } from "uuid";
export const data = {
  activeBoardIndex: 0,
  boardList: [
    {
      id: uuidv4(), //board id
      name: "🔴 DEMO", //board name
      listCollection: [
        {
          id: uuidv4(), //list id
          name: "TODO", //list name
          cardList: [
            {
              id: uuidv4(), //card id
              imgSource: "/react.svg",
              heading: "Built Using React.js",
              description:
                "I have Build multiple projects using react js(Javascript library.)",
              priority: "high",
              tag: "",
              assignee: "shivam",
              deadline: "December 8",
            },
          ],
        },
        {
          id: uuidv4(),
          name: "In Progress",
          cardList: [
            {
              id: uuidv4(),
              imgSource: "/redux.svg",
              heading: "Redux(RTK) | Remote state management",
              description: "Add card description",
              priority: "low",
              tag: "",
              assignee: "shivam",
              deadline: "December 3",
            },
          ],
        },
        {
          id: uuidv4(),
          name: "Done",
          cardList: [
            {
              id: uuidv4(),
              imgSource: "/firebase.svg",
              heading: "Firebase | Save data b/w reloads",
              description: "Add card description",
              priority: "low",
              tag: "",
              assignee: "shivam",
              deadline: "December 8",
            },
          ],
        },
      ],
    },
  ],
};
