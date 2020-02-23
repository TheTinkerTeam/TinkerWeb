import { CREATE_TUTO } from "./tutorialsConstants";

const initialState = [
  {
    id: "1",
    title: "Intro to 3D Printing",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'Intro to 3d Printing' tuto",
    tags: ["3D printer"]
  },
  {
    id: "2",
    title: "How to use a hand saw",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'How to use a hand saw' tuto",
    tags: ["Wood-working", "Tools"],
  },
  {
    id: "3",
    title: "How to use Scratch",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'How to use Scratch' tuto",
    tags: ["Coding"],
  },
];

const tutoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TUTO:
      return [...state, action.payload]
    default:
      return state
  }
}

export default tutoReducer;