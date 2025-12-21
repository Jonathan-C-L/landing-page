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
    main = $("main");
    header = $("header");
    footer = $("footer");
    RenderWelcome();
    RenderMainPage();
});

function RenderWelcome(){
    AppendAll(main, OnloadModal()); // adding new modal to the landing-page
    WelcomeModalEvents(); // event handler for the modal
}
function RenderMainPage(){
    console.log("Render Main Page"); // diagnostics

}
function WelcomeModalEvents(){
    const welcomeDialog = document.querySelector("#welcome");

    welcomeDialog.showModal();
    console.log("Modal Events"); // diagnostics
    $("#close").click((e)=>{
        welcomeDialog.close();
    });
}
function MainPageEvents(){
    console.log("Main Page Events"); // diagnostics

}