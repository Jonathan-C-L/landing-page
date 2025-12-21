/**
 * Summary: modal.js contains all of the js files that are related to the dom creations and manipulations of the modal dialog of the landing-page
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 */
console.log("modal.js connected"); // diagnostics

function OnloadModal(){
    // initial dialog container 
    const newDialog = $(`<dialog class='modal'></dialog>`);
    newDialog.attr("id", "welcome");

    let data = {};
    const header = ModalHeader("Welcome");
    const text = ModalBodyText("Hello");
    const buttons = ModalButtons({"close": "Close"});

    // diagnostics
    data["header"] = header;
    data["text"] = text;
    data["buttons"] = buttons;
    console.log(data);

    AppendAll(newDialog, header, text, buttons);
    return newDialog;
}

// modal modular components
function ModalHeader(title){
    return $(`<h3>${title}</h3>`);
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

