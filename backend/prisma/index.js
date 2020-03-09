const projects = [
  {
    title: "Code'n'Tell",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'Code'n'Tell' project",
    learning_objectives:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    subjects: ["design", "computer science"],
    tags: ["Featured", "Coding"],
    grades: [5, 6]
  },
  {
    title: "Lifting & Moving",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'Lifting & Moving' project",
    learning_objectives:
      "Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Et ligula ullamcorper malesuada proin libero. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Nisi est sit amet facilisis. Sed libero enim sed faucibus turpis in eu mi bibendum. Gravida cum sociis natoque penatibus et magnis dis. Urna et pharetra pharetra massa massa. Tempor orci dapibus ultrices in iaculis nunc. Quam viverra orci sagittis eu volutpat. Pellentesque pulvinar pellentesque habitant morbi tristique. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. A condimentum vitae sapien pellentesque habitant morbi tristique. Sit amet consectetur adipiscing elit ut aliquam. Eu nisl nunc mi ipsum faucibus vitae. Quis enim lobortis scelerisque fermentum.",
    subjects: ["design", "maths", "science"],
    tags: ["Featured", "Science"],
    grades: [7]
  },
  {
    title: "Keeping birds safe",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'Keeping birds safe' project",
    learning_objectives:
      "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Quam quisque id diam vel quam elementum pulvinar etiam non. Dictum varius duis at consectetur lorem donec massa. Amet est placerat in egestas erat. At volutpat diam ut venenatis tellus. Sit amet facilisis magna etiam tempor orci eu lobortis. Sit amet mauris commodo quis imperdiet massa tincidunt. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Nisi vitae suscipit tellus mauris a diam maecenas sed. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Vitae ultricies leo integer malesuada. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Tristique senectus et netus et malesuada fames. Et ultrices neque ornare aenean euismod elementum nisi quis.",
    subjects: ["design", "maths", "Science"],
    tags: ["Featured", "Science", "Wood-working"],
    grades: [7, 8]
  },
  {
    title: "Challenging the Future",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'Keeping birds safe' project",
    learning_objectives:
      "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Quam quisque id diam vel quam elementum pulvinar etiam non. Dictum varius duis at consectetur lorem donec massa. Amet est placerat in egestas erat. At volutpat diam ut venenatis tellus. Sit amet facilisis magna etiam tempor orci eu lobortis. Sit amet mauris commodo quis imperdiet massa tincidunt. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Nisi vitae suscipit tellus mauris a diam maecenas sed. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Vitae ultricies leo integer malesuada. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Tristique senectus et netus et malesuada fames. Et ultrices neque ornare aenean euismod elementum nisi quis.",
    subjects: ["design", "maths", "Science"],
    tags: ["Featured", "Innovation", "Entrepreuneurship"],
    grades: [7, 8]
  },
  {
    title: "The 27th letter",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'Keeping birds safe' project",
    learning_objectives:
      "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Quam quisque id diam vel quam elementum pulvinar etiam non. Dictum varius duis at consectetur lorem donec massa. Amet est placerat in egestas erat. At volutpat diam ut venenatis tellus. Sit amet facilisis magna etiam tempor orci eu lobortis. Sit amet mauris commodo quis imperdiet massa tincidunt. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Nisi vitae suscipit tellus mauris a diam maecenas sed. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Vitae ultricies leo integer malesuada. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Tristique senectus et netus et malesuada fames. Et ultrices neque ornare aenean euismod elementum nisi quis.",
    subjects: ["design", "maths", "Science"],
    tags: ["Featured", "Graphics", "Design"],
    grades: [7, 8]
  },
  {
    title: "Make it Better",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'Keeping birds safe' project",
    learning_objectives:
      "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Quam quisque id diam vel quam elementum pulvinar etiam non. Dictum varius duis at consectetur lorem donec massa. Amet est placerat in egestas erat. At volutpat diam ut venenatis tellus. Sit amet facilisis magna etiam tempor orci eu lobortis. Sit amet mauris commodo quis imperdiet massa tincidunt. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Nisi vitae suscipit tellus mauris a diam maecenas sed. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Vitae ultricies leo integer malesuada. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Tristique senectus et netus et malesuada fames. Et ultrices neque ornare aenean euismod elementum nisi quis.",
    subjects: ["design", "maths", "Science"],
    tags: ["Featured", "Science"],
    grades: [4]
  },
  {
    title: "The House of the Future",
    imageURL: "https://via.placeholder.com/150",
    description:
      "This is the description of the 'The House of the Future' project",
    learning_objectives:
      "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Quam quisque id diam vel quam elementum pulvinar etiam non. Dictum varius duis at consectetur lorem donec massa. Amet est placerat in egestas erat. At volutpat diam ut venenatis tellus. Sit amet facilisis magna etiam tempor orci eu lobortis. Sit amet mauris commodo quis imperdiet massa tincidunt. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Nisi vitae suscipit tellus mauris a diam maecenas sed. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Vitae ultricies leo integer malesuada. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Tristique senectus et netus et malesuada fames. Et ultrices neque ornare aenean euismod elementum nisi quis.",
    subjects: ["design", "maths", "Science"],
    tags: ["Featured", "Science", "Maths", "Wood-working"],
    grades: [8]
  },
  {
    title: "Medium is the Message",
    imageURL: "https://via.placeholder.com/150",
    description:
      "This is the description of the 'Medium is the Message' project",
    learning_objectives:
      "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Quam quisque id diam vel quam elementum pulvinar etiam non. Dictum varius duis at consectetur lorem donec massa. Amet est placerat in egestas erat. At volutpat diam ut venenatis tellus. Sit amet facilisis magna etiam tempor orci eu lobortis. Sit amet mauris commodo quis imperdiet massa tincidunt. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Nisi vitae suscipit tellus mauris a diam maecenas sed. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Vitae ultricies leo integer malesuada. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Tristique senectus et netus et malesuada fames. Et ultrices neque ornare aenean euismod elementum nisi quis.",
    subjects: ["design", "maths", "Science"],
    tags: ["Featured", "Science", "Electronics", "Design"],
    grades: [4]
  },
  {
    title: "Making a Toy",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'Making a Toy' project",
    learning_objectives:
      "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Quam quisque id diam vel quam elementum pulvinar etiam non. Dictum varius duis at consectetur lorem donec massa. Amet est placerat in egestas erat. At volutpat diam ut venenatis tellus. Sit amet facilisis magna etiam tempor orci eu lobortis. Sit amet mauris commodo quis imperdiet massa tincidunt. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Nisi vitae suscipit tellus mauris a diam maecenas sed. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Vitae ultricies leo integer malesuada. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Tristique senectus et netus et malesuada fames. Et ultrices neque ornare aenean euismod elementum nisi quis.",
    subjects: ["design", "maths", "Science"],
    tags: ["Featured", "Innovation", "Wood-working"],
    grades: [4]
  },
  {
    title: "Moving a Dot",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'Moving a Dot' project",
    learning_objectives:
      "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Quam quisque id diam vel quam elementum pulvinar etiam non. Dictum varius duis at consectetur lorem donec massa. Amet est placerat in egestas erat. At volutpat diam ut venenatis tellus. Sit amet facilisis magna etiam tempor orci eu lobortis. Sit amet mauris commodo quis imperdiet massa tincidunt. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Nisi vitae suscipit tellus mauris a diam maecenas sed. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Vitae ultricies leo integer malesuada. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Tristique senectus et netus et malesuada fames. Et ultrices neque ornare aenean euismod elementum nisi quis.",
    subjects: ["design", "maths", "Science"],
    tags: ["Featured", "Art", "Graphics"],
    grades: [4]
  }
];

const { prisma } = require("./generated/prisma-client");

// A `main` function so that we can use async/await
async function main() {
  projects.forEach(async project => {
    await prisma
      .createProject({
        title: project.title,
        imageURL: project.imageURL,
        description: project.description,
        learning_objectives: project.learning_objectives,
        subjects: { set: project.subjects },
        tags: { set: project.tags },
        grades: { set: project.grades }
      })
      .then(res => {
        console.log(res);
      })
      .catch(e => console.error(e.result));
  });
}

main().catch(e => console.error(e.result));
