/**
 * Summary: modal.js contains all of the js files that are related to the dom creations and manipulations of the modal dialog of the landing-page
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 */
console.log("modal.js connected"); // diagnostics

function AddNewModal(){
    console.log("Modal Container"); // diagnostics
    const newDialog = $(`<dialog></dialog>`);
    AppendAll(newDialog, ModalHeader(), ModalBody(), ModalButtons());
    return newDialog;
}
function ModalHeader(){
    console.log("Modal Header"); // diagnostics
}
function ModalBody(){
    console.log("Modal Body"); // diagnostics
}
function ModalButtons(){
    console.log("Modal Buttons"); // diagnostics
}
function ModalEvents(){
    console.log("Modal Events"); // diagnostics
}
