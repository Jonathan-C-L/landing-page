/**
 * Summary: modal.js contains all of the js functions that are related to the dom creations and manipulations of the modal dialog of the landing-page
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 */
console.log("modal.js connected"); // diagnostics

/**
 * MessageModal creates a modal dialog with a text message
 * @param {string} title string parameter for the title of the dialog
 * @param {string} message string parameter for the message to be included in the dialog
 * @param {object} buttons key-value pair to specify the id and text of the button
 * @returns a dialog element with the title, message, and button(s) embedded within it
 */
function MessageModal(title, message, buttons = {}){
    // initial dialog container 
    const newDialog = $(`<dialog class='modal'></dialog>`);
    newDialog.attr("id", "welcome");

    AppendAll(newDialog, AddHeader(title), AddParagraph(message), ModalButtons(buttons));
    return newDialog;
}

/*********************************************** modular components *******************************************/
/**
 * ModalBodyInputs allows for specification of the label (key) and the input type (value)
 * @param {object} input key-value pairs for the label and input type
 * @returns a div with the label+inputs within them
 */
function ModalBodyInputs(input){
    const modalBodyContainer = $(`<div>`);
    Object.keys(input).forEach(label => {
        const newInputDiv = $(`<div>`); // new container for inputs
        const newLabel = $(`<label for='${label}'>${label}</label>`); // label
        const newInput = $(`<input name='${label}' type='${input[label]}'>`); // input
        AppendAll(newInputDiv, newLabel, newInput); // append everything to the input container
        modalBodyContainer.append(newInputDiv); // append to parent container to be returned
    });
    return modalBodyContainer;
}
/**
 * ModalButtons allows for button creation with an id (key) and text (value)
 * @param {object} buttons key-value pair for the button id and button text
 * @returns a div with the button(s) within them
 */
function ModalButtons(buttons){
    const newButtonDiv = $(`<div>`);
    Object.keys(buttons).forEach(button =>{
        const newButton = NewElement("button", button);
        newButton.text(buttons[button]);
        newButtonDiv.append(newButton);
    });
    return newButtonDiv;
}

