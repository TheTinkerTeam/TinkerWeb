const categories = [
  {
    id: "1",
    name: "All"
  },
  {
    id: "2",
    name: "Science"
  },
  {
    id: "3",
    name: "Wood-working"
  },
  {
    id: "4",
    name: "Coding"
  },
  {
    id: "5",
    name: "Cooking"
  },
  {
    id: "6",
    name: "Innovation"
  }
];



const axios = require('axios');
const api = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
});

/*

const createProject = (project) => api.post('/projects', project);

projects.forEach(project => {
  createProject(project).then(res => console.log(res.data)).catch(err => {return console.log(err.message)})
});

*/