import { CREATE_NEWS } from "./tinkerNewsConstants";

const initialState = [
  {
    id: "1",
    title: "Weekly challenge!",
    description:
      "We're going way way wayyyy back to Prehistory. Make a project about things that lived thousand (or millions) of year ago!"
  },
  {
    id: "2",
    title: "3D printer Tutorial Update",
    description: "Have a look at our improved 3D printer tutorial!"
  },
  {
    id: "3",
    title: "Hello Banana!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper."
  },
  {
    id: "4",
    title: "Hello Toto!",
    description:
      "Miaourem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper."
  }
];

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEWS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default newsReducer;
