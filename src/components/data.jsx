import { v4 as uuidv4 } from "uuid";
export const data = {
  activeBoardIndex: 0,
  boardList: [
    {
      id: uuidv4(), //board id
      name: "🔑 DEMO", //board name
      listCollection: [
        {
          id: uuidv4(), //list id
          name: "TODO", //list name
          cardList: [
            {
              id: uuidv4(), //card id
              imgSource: "/card-img.jpeg",
              heading: "Add card Heading",
              description: "Add card description",
              priority: "high",
              tag: "Add Tag",
              assignee: "assignee-1",
              deadline: "",
            },
            {
              id: uuidv4(),
              imgSource: "",
              heading: "Add card Heading",
              description: "Add card description",
              priority: "high",
              tag: "Add Tag",
              assignee: "assignee-3",
              deadline: "",
            },
          ],
        },
        {
          id: uuidv4(),
          name: "In Progress",
          cardList: [
            {
              id: uuidv4(),
              imgSource: "/card-img.jpeg",
              heading: "Add card Heading",
              description: "Add card description",
              priority: "low",
              tag: "Add Tag",
              assignee: "assignee-2",
              deadline: "March 1",
            },
          ],
        },
        {
          id: uuidv4(),
          name: "Done",
          cardList: [
            {
              id: uuidv4(),
              imgSource: "/card-img.jpeg",
              heading: "Add card Heading",
              description: "Add card description",
              priority: "low",
              tag: "Add Tag",
              assignee: "assignee-2",
              deadline: "March 1",
            },
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      name: "New Board",
      listCollection: [],
    },
  ],
};
