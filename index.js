/**
 * Summary: index.js is the main entry point for the rest of the js files and will render the client-side elements
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 */
console.log("index.js connected");
// global access variables
let main = null;
let header = null;
let footer = null;

// render elements onload
$(document).ready(()=>{
    // assigning global to get global access to these html elements
    main = $("main");
    header = $("header");
    footer = $("footer");
    RenderHeader();
    RenderProjects();
    RenderWelcome(); // remember to uncomment this
});
function RenderWelcome(){
    const welcomeMessage = `My name is Jonathan and welcome to my projects page!<br>
                            Here you'll find some of the things that will display my programming abilities.
                            I have stuff from my education to side projects completed on my own time.<br>`;
    // adding the welcome modal dialog to the page
    const welcomeModal = new MessageModal("Hello :^)", "welcome", welcomeMessage, {"close": "Close"});
    welcomeModal.Assemble();
    AppendAll(main, [welcomeModal.display]);
    WelcomeModalEvents(); // event handler for the modal
}
function WelcomeModalEvents(){
    const welcomeDialog = document.querySelector("#welcome");

    welcomeDialog.showModal(); // display modal onload
    $("#close").click(()=>{
        welcomeDialog.close();
    });
}
// thinking of having a database store project information, then have an ajax call to pull that information and display it here
function RenderProjects(){
    main.html("");
    console.log("Projects"); // diagnostics
    const mainHeader = new Display("h2", "Projects", "projects-page", null); // header for the main page - can change this to make it more flexible
    mainHeader.Assemble();
    // NEED TO FIGUER THIS OUT LATERRRR

    // TEST FOR THE DISPLAY
    const description = `A To-Do list that uses the localstorage api to store items to be completed. 
                         The items can be filtered by time-frames (i.e. today, week, month, and all).`;
    const project1 = new ProjectCard("To-Do List", "to-do", description, "./assets/to-do-list.jpg", "to-do list screenshot");
    project1.Assemble();
    const project2 = new ProjectCard("Othello", "othello", "Using PHP to perform server-side game logic in the board game 'Othello'.", "./assets/othello.jpg", "othello gameboard screenshot");
    project2.Assemble();
    const project3 = new ProjectCard("BLAH", "blah3", "blah blah blah blah blah blah blah", "./assets/to-do-list.jpg", "to-do list screenshot");
    project3.Assemble();

    AppendAll(main, [mainHeader.display, project1.display, project2.display, project3.display]);
    MainEvents();
}
function MainEvents(){
    console.log("Main Events"); // diagnostics
    main.click((e)=>{
        if(e.target.className == "card")
            console.log(e.target.id);
    });
}
function RenderHeader(){
    console.log("Render Header"); // diagnostics

    header.append(NewHeader("Jonathan", {"About": "", "Projects": "", "Contact": ""}));
    HeaderEvents();
}
function HeaderEvents(){
    header.click(e=>{
        console.log(e.target.id);
        switch(e.target.id){
            case "about":
                RenderAboutMe();
                break;
            case "projects":
                RenderProjects();
                break;
            case "contact":
                break;
        }
    });
}
function RenderAboutMe(){
    const aboutDescription = `I'm currently a Computer Engineering Technology (CNT) student at NAIT
                             and will be officially graduating in April 2026.
                             As a brief summary, I have roughly 3 years of experience programming
                             from my educational journey, with proficiencies in embedded and
                             web development. I love going low-level and understanding computers in the
                             most fundamentals ways, because that's where all the interesting bits are
                             happening.<br><br>
                             <u>Current languages</u>: HTML/CSS/Javascript, C, PHP, C#, python<br>
                             <u>Databases</u>: mySQL and SQL Server<br>
                             <u>Frameworks</u>: jQuery, ASP.NET (ADO and Entity)<br>
                             <u>Technologies</u>: Git, Github, VSCode, Azure (limited)<br>`;
    main.html(""); // reset main
    const about = new Display("div", "About Me", "about-me", aboutDescription);
    about.Assemble();
    main.append(about.display);
}