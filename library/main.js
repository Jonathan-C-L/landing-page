/**
 * Summary: main.js contains all of the js functions that are related to the dom creations and manipulations of the main page of the landing-page
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 */
console.log("main.js connected");

class ProjectCard extends Display{
    constructor(title = null, id = null, description = null, src = null, alt = "image"){
        super("div", title, id, description);
        this.display.addClass("card"); // adding card class for easy consistent styling

        if(src != null){
            this.image = this.AddImage(src, alt);            
        }    
    }
    /**
     * AddImage places the argument path for the image, along with it's description, within the display
     * @param {string} src string that represents the file path for the image
     * @param {string} alt string that describes the image being displayed
     */
    AddImage(src, alt){
        return $(`<div class='card-image'><img src='${src}' alt='${alt}'></div>`);
    }
}




