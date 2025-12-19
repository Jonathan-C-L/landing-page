/**
 * Summary: index.js is the main entry point for the rest of the js files and will render the client-side elements
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 */
console.log("index.js connected");
const body = $("body");

// render elements onload
$(document).ready(()=>{
    RenderModal();
    RenderMainPage();
});

function RenderModal(){
    console.log("Render Modal"); // diagnostics
    AppendAll(body, AddNewModal()); // adding new modal to the landing-page
    ModalEvents(); // event handler for the modal
}
function RenderMainPage(){
    console.log("Render Main Page"); // diagnostics

}
