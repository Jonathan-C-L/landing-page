// parent or superclass for all display elements for this page
class Display{
    constructor(element = "div", title = null, id = null, text = null){
        this.display = $(`<${element}>`);
        if(id != null){
            this.display.attr("id", id);
        }
        if(title != null){
            this.title = this.SetTitle(title);
        }
        if(text != null){
            this.text = this.SetText(text);
        }
        this.Assemble(); // assemble when first created
    }
    /**
     * Assemble will append the html elements in the necessary order for display
     */
    Assemble(){
        Object.keys(this).forEach(item => {
            this.display.append(this[item]);
        });
    }
    /**
     * SetTitle will return the argument string as a jQuery header object
     * @param {string} title string for the title to be displayed
     * @returns h2 jQuery object with the argument string embedded within
     */
    SetTitle(title){
        return $(`<h2>${title}</h2>`);
    }
    /**
     * SetText returns the argument string as a jQuery paragraph object
     * @param {string} text string for the text to be displayed
     * @returns p jQuery object with the argument string embedded within
     */
    SetText(text){
        return $(`<p>${text}</p>`);
    }
}