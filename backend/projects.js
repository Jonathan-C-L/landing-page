console.log("projects.js connected");

// Project screenshots mapped by id (base64 would go here; using placeholder gradient instead)
const PROJECT_SCREENSHOTS = {
  "to-do":  null,
  "othello": null,
  "demos":   null
};

function ProjectsData(){
  return [
    {
      title: "To-Do List",
      id: "to-do",
      desc: "A To-Do list that uses the localStorage API to store items to be completed. Items can be filtered by time-frames (today, week, month, all).",
      learned: "Node.js, scripting, localStorage API, modular design, webpack",
      src: "https://raw.githubusercontent.com/Jonathan-C-L/to-do-list/HEAD/preview.jpg",
      localSrc: "./assets/to-do-list.jpg",
      repo: "https://github.com/Jonathan-C-L/to-do-list"
    },
    {
      title: "Othello",
      id: "othello",
      desc: "Using PHP to perform server-side game logic processing for the classic board game Othello.",
      learned: "PHP, data cleaning, server-side validation, client-server communication",
      src: "https://raw.githubusercontent.com/Jonathan-C-L/othello/HEAD/preview.jpg",
      localSrc: "./assets/othello.jpg",
      repo: "https://github.com/Jonathan-C-L/othello"
    },
    {
      title: "Demonstrations",
      id: "demos",
      desc: "Previous programming projects from school that display my programming style and document my progression as a developer.",
      learned: "OOP, REST APIs, Full-Stack web dev, .NET Framework, Embedded Systems, memory management, data structures, sorting algorithms",
      src: "https://raw.githubusercontent.com/Jonathan-C-L/demonstrations/HEAD/preview.jpg",
      localSrc: "./assets/demos.jpg",
      repo: "https://github.com/Jonathan-C-L/demonstrations"
    }
  ];
}