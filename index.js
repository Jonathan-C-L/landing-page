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
    RenderWelcome(); // remember to uncomment this
    RenderHeader();
    RenderMain();
});
function RenderWelcome(){
    const welcomeMessage = `I'm currently a Computer Engineering Technology (CNT) student at NAIT
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
    // adding the welcome modal dialog to the page
    const welcomeModal = new MessageModal("Welcome to my projects landing page", "welcome", welcomeMessage, {"close": "Close"});
    AppendAll(main, welcomeModal.display);
    WelcomeModalEvents(); // event handler for the modal
}
function WelcomeModalEvents(){
    const welcomeDialog = document.querySelector("#welcome");

    welcomeDialog.showModal(); // display modal onload
    $("#close").click(()=>{
        welcomeDialog.close();
    });
}
function RenderMain(){
    console.log("Render Main"); // diagnostics
    const mainPage = $("<div id='content'></div>"); 
    AppendAll(main, mainPage);
}

function MainEvents(){
    console.log("Main Events"); // diagnostics
}
function RenderHeader(){
    console.log("Render Header"); // diagnostics
    header.text("Hello");
}