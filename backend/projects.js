console.log("projects.js connected");

/*********************************************** Return Data *******************************************/
function ProjectsData(){
    let returnData = [];
    
    returnData.push(ToDoList(), Othello(), Demonstrations());

    return returnData;
}
// this is for the modal pop up for each project that is clicked
function ProjectCardData(project){

}
/*********************************************** Data Objects *******************************************/
function ToDoList(){
    const title =   `To-Do List`;
    const id =      `to-do`;
    let desc =      `A To-Do list that uses the localStorage API to store items to be completed. 
                     The items can be filtered by time-frames (i.e. today, week, month, and all).<br>`;
    desc +=         `<br><i>Learned: Node.js, scripting, localStorage API, modular design, webpack for dependencies</i><br>`;
    desc +=         `<br>Repo: <a target='_blank' href='https://github.com/Jonathan-C-L/to-do-list'>https://github.com/Jonathan-C-L/to-do-list</a>`;
    const src =     `./assets/to-do-list.jpg`;
    const alt =     `to-do list screenshot`;

    return AddProject(title, id, desc, src, alt);
}
function Othello(){
    const title =   `Othello`;
    const id =      `othello`;
    let desc =      `Using PHP to perform server-side game logic processing for the board game "Othello".<br>`;
    desc +=         `<br><i>Learned: PHP, data cleaning, server-side validation, client-server communication</i><br>`;
    desc +=         `<br>Repo: <a target='_blank' href='https://github.com/Jonathan-C-L/othello'>https://github.com/Jonathan-C-L/othello</a>`;
    const src =     `./assets/othello.jpg`;
    const alt =     `othello gameboard screenshot`;
    
    return AddProject(title, id, desc, src, alt);
}
function Demonstrations(){
    const title =   `Demonstrations`;
    const id =      `demos`;
    let desc =      `These demonstrations are my previous programming projects from school. 
                     I have included things here that display my programming style and generally to document my progression as a programmer.<br>`;
    desc +=         `<br><i>Learned: Object Oriented Programming, REST APIs, Full-Stack web dev, .NET Framework, Embedded Systems programming, memory management, data structures, sorting algorithms</i><br>`;
    desc +=         `<br>Repo: <a target='_blank' href='https://github.com/Jonathan-C-L/demonstrations'>https://github.com/Jonathan-C-L/demonstrations</a>`;
    const src =     `./assets/demos.jpg`;
    const alt =     `billards screenshot`;
    
    return AddProject(title, id, desc, src, alt);
}
/*********************************************** Object Factory Function *******************************************/
function AddProject(projTitle, projId, projDesc, projSrc, projAlt){
    return {
        title: projTitle,
        id: projId,
        desc: projDesc,
        src: projSrc,
        alt: projAlt,
    };
}