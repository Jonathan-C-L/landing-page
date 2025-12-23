/**
 * Summary: main.js contains all of the js functions that are related to the dom creations and manipulations of the main page of the landing-page
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 */
console.log("main.js connected");

class ProjectCard extends Display{
    constructor(title = null, id = null, description = null, img = null, alt = "image"){
        super("div", title, id, description);
        this.display.addClass("card"); // adding card class for easy consistent styling

        if(img != null){
            this.src = img;
            this.alt = alt;
            this.SetImage(img, alt);
        }    
    }
    /**
     * SetImage places the argument path for the image, along with it's description, within the display
     * @param {string} src string that represents the file path for the image
     * @param {string} alt string that describes the image being displayed
     */
    SetImage(src, alt){
        this.display.append($(`<img src='${src}' alt='${alt}'>`));
    }
}

/*********************************************** modular components *******************************************/
function NewProjectCard(title = null, description = null, link = null, img = null){
    const newCard = $(`<div class='card'></div>`);
    return newCard;
}



