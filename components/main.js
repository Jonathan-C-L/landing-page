/**
 * Summary: main.js contains all of the js functions that are related to the dom creations and manipulations of the main page of the landing-page
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 */
console.log("main.js connected");

/*********************************************** Classes *******************************************/
class ProjectCard extends Display{
    constructor(title = null, id = null, description = null, src = null, alt = "image"){
        super("div", title, id, description);
        this.display.addClass("card"); // adding card class for easy consistent styling

        if(src != null){
            this.image = this.AddImage(src, alt);            
        }    
        this.Assemble(); // assemble when first created
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
/*********************************************** DOM Functions *******************************************/
function RenderAboutMe(responseData){
    main.html(""); // reset main
    const about = new Display("div", responseData["title"], responseData["id"], responseData["desc"]);
    main.append(about.display);
}
// thinking of having a database store project information, then have an ajax call to pull that information and display it here
function RenderProjects(responseData){
    main.html(""); // reset main
    console.log("Projects"); // diagnostics
    const mainHeader = new Display("div", "Projects", "projects-page", null); // header for the main page - can change this to make it more flexible
    main.append(mainHeader);

    responseData.forEach(project => {
        console.log(project);
        const newProject = new ProjectCard(project["title"], project["id"], project["desc"], project["src"], project["alt"]);
        main.append(newProject.display);
    });

    ProjectsEvents();
}
function RenderContact(){

}
/*********************************************** Event Handlers *******************************************/
function ProjectsEvents(){
    main.click((e)=>{
        if(e.target.className == "card")
            console.log(e.target.id);
    });
}
function ContactEvents(){

}