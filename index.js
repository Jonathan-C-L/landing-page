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
let body = null;

// render elements onload
$(document).ready(()=>{
    // assigning global to get global access to these html elements
    body = $("body");
    main = $("main");
    header = $("header");
    footer = $("footer");
    RenderHeader();
    RenderFooter();
    RenderAboutMe(AboutMeData());
    CallAjax("https://api.github.com/users/Jonathan-C-L/repos", "get", {}, "json", Test, AjaxError);
    // RenderWelcome(); // remember to uncomment this
});
function Test(response){
    console.log(response);
}
// function RenderWelcome(){
//     const welcomeMessage = `My name is Jonathan and welcome to my projects page!<br>
//                             Here you'll find some of the things that will display my programming abilities.
//                             I have stuff from my education to side projects completed on my own time.<br>`;
//     // adding the welcome modal dialog to the page
//     const welcomeModal = new MessageModal("Hello :^)", "welcome", welcomeMessage, {"close": "Close"});
//     welcomeModal.Assemble();
//     AppendAll(main, [welcomeModal.display]);
//     WelcomeModalEvents(); // event handler for the modal
// }
// function WelcomeModalEvents(){
//     const welcomeDialog = document.querySelector("#welcome");

//     welcomeDialog.showModal(); // display modal onload
//     $("#close").click(()=>{
//         welcomeDialog.close();
//     });
// }



