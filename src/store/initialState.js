const initialState = {
  boardData: {
    lists: [
      {
        id: "list1",
        title: "Todo",
        cards: [
          { id: "Card11", title: "Implement internationalization in all pages" },
          { id: "Card21", title: "Ads graphic creation" },
          { id: "Card31", title: "Make landing pages live for search and detail"}
        ]
      },
      {
        id: "list2",
        title: "In Progress",
        cards: [
          { id: "Card12", title: "Automated integeration testing of user flow" },
          { id: "Card22", title: "Manual testing" },
          { id: "Card32", title: "Bug fixing" },
          { id: "Card42", title: "XYZ feature" },
          { id: "Card52", title: "Debugging yeterday's null user production issue" }
        ]
      },
      {
        id: "list3",
        title: "Done",
        cards: [
          { id: "Card13", title: "Unit test cases for all the common library components" },
          { id: "Card23", title: "Dev testing" },
          { id: "Card33", title: "Checkout flow with payment gateaway integeration" },
        ]
      }
    ],
    openAddCardListID : undefined
  }
};

export default initialState