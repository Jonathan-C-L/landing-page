console.log("header.js connected");


function RenderHeader(){
    console.log("Render Header"); // diagnostics

    header.append(NewHeader("Jonathan", {"About": "", "Projects": "", "Contact": ""}));
    HeaderEvents();
}
function HeaderEvents(){
    header.click(e=>{
        console.log(e.target.id);
        switch(e.target.id){
            case "about":
                RenderAboutMe(ProjectsData());
                break;
            case "projects":
                RenderProjects(AboutMeData());
                break;
            case "contact":
                break;
        }
    });
}
function NewHeader(logo, links){
    // parent divs for flex styling
    const header = $(`<div class='container' id='header'></div>`);
    const headerLogo = $(`<div id='logo'>${logo}</div>`);
    const headerOptions = $(`<div class='container' id='options'></div>`);

    // assigning titles and hrefs
    Object.keys(links).forEach(title =>{
        // href='${links[title]}' for when links are ever incorporated
        const tempLink = $(`<a id='${title.toLowerCase().replaceAll(" ", "_")}'>${title}</a>`);
        headerOptions.append(tempLink);
    });

    // appended together and returned
    AppendAll(header, [headerLogo, headerOptions]);
    return header;
}