/**
 * Summary: modal.js contains all of the js functions that are related to the dom creations and manipulations of the modal dialog of the landing-page
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 */
console.log("modal.js connected"); // diagnostics

class Modal{
    constructor(title = null, id, message = null, inputs = null, buttons = null){
        this.dialog = $(`<dialog class='modal' id='${id}'></dialog>`);
        if(title != null)
            this.SetTitle(title);
        if(message != null)
            this.SetMessage(message);
        if(inputs != null)
            this.SetInputs(inputs);
        if(buttons != null)
            this.SetButtons(buttons);
    }
    /**
     * SetTitle places the argument string into a header element
     * @param {string} title string to be inserted into the h2 tag
     * @returns h2 element with the argument text within
     */
    SetTitle(title){
        this.dialog.append($(`<h2>${title}</h2>`));
    }
    /**
    * SetMessage places the argument text into a paragraph element
    * @param {string} text string to be inserted into the paragraph
    * @returns paragraph element with the text inside
    */
    SetMessage(text){
        this.dialog.append($(`<p>${text}</p>`));
    }
    /**
    * SetInputs allows for specification of the label (key) and the input type (value)
    * @param {object} inputs key-value pairs for the label and input type
    * @returns a div with the label+inputs within them
    */
    SetInputs(inputs){
        const modalBodyContainer = $(`<div>`);
        Object.keys(inputs).forEach(label => {
            const newInputDiv = $(`<div>`); // new container for inputs
            const newLabel = $(`<label for='${label}'>${label}</label>`); // label
            const newInput = $(`<input name='${label}' type='${inputs[label]}'>`); // input
            AppendAll(newInputDiv, newLabel, newInput); // append everything to the input container
            modalBodyContainer.append(newInputDiv); // append to parent container to be returned
        });
        this.dialog.append(modalBodyContainer);
    }
    /**
    * SetButtons allows for button creation with an id (key) and text (value)
    * @param {object} buttons key-value pair for the button id and button text
    * @returns a div with the button(s) within them
    */
    SetButtons(buttons){
        const newButtonDiv = $(`<div>`);
        Object.keys(buttons).forEach(button =>{
            const newButton = NewElement("button", button);
            newButton.text(buttons[button]);
            newButtonDiv.append(newButton);
        });
        this.dialog.append(newButtonDiv);
    }
}

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

