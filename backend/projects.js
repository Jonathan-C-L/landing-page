console.log("projects.js connected");

/*********************************************** Return Data *******************************************/
function ProjectsData(){
    let returnData = [];
    
    returnData.push(ToDoList(), Othello(), Demonstrations());

    return returnData;
}
function ProjectCardData(project){

}
/*********************************************** Data Objects *******************************************/
function ToDoList(){
    const title =   `To-Do List`;
    const id =      `to-do`;
    const desc =    `A To-Do list that uses the localstorage api to store items to be completed. 
                     The items can be filtered by time-frames (i.e. today, week, month, and all).`;
    const src =     `./assets/to-do-list.jpg`;
    const alt =     `to-do list screenshot`;

    return AddProject(title, id, desc, src, alt);
}
function Othello(){
    const title =   `Othello`;
    const id =      `othello`;
    const desc =    `Using PHP to perform server-side game logic in the board game "Othello".`;
    const src =     `./assets/othello.jpg`;
    const alt =     `othello gameboard screenshot`;
    
    return AddProject(title, id, desc, src, alt);
}
function Demonstrations(){
    const title =   `Demonstrations`;
    const id =      `demos`;
    const desc =    `These demonstrations are my previous programming projects from school. 
                     I have included things here that display my programming style and generally to document my progression as a programmer.`;
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
        alt: projAlt
    };
}