/**
 * Summary: modal.js contains all of the js files that are related to the dom creations and manipulations of the modal dialog of the landing-page
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 */
console.log("modal.js connected"); // diagnostics

function MessageModal(title = "", message = "", buttons = {}){
    // initial dialog container 
    const newDialog = $(`<dialog class='modal'></dialog>`);
    newDialog.attr("id", "welcome");

    AppendAll(newDialog, ModalHeader(title), ModalBodyText(message), ModalButtons(buttons));
    return newDialog;
}

// modal modular components
function ModalHeader(title){
    return $(`<h2>${title}</h2>`);
}
function ModalBodyInputs(bodyElements){
    const modalBodyContainer = $(`<div>`);
    Object.keys(bodyElements).forEach(label => {
        const newInputDiv = $(`<div>`); // new container for inputs
        const newLabel = $(`<label for='${label}'>${label}</label>`); // label
        const newInput = $(`<input name='${label}' type='${bodyElements[label]}'>`); // input
        AppendAll(newInputDiv, newLabel, newInput); // append everything to the input container
        modalBodyContainer.append(newInputDiv); // append to parent container to be returned
    });
    return modalBodyContainer;
}
function ModalBodyText(text){
    return $(`<p>${text}</p>`);
}
function ModalButtons(buttons){
    const newButtonDiv = $(`<div>`);
    Object.keys(buttons).forEach(button =>{
        const newButton = NewElement("button", button);
        newButton.text(buttons[button]);
        newButtonDiv.append(newButton);
    });
    return newButtonDiv;
}

