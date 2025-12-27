console.log("header.js connected");

function NewHeader(logo, links){
    // parent divs for flex styling
    const header = $(`<div class='container' id='header'></div>`);
    const headerLogo = $(`<div id='logo'>${logo}</div>`);
    const headerOptions = $(`<div class='container' id='options'></div>`);

    // assigning titles and hrefs
    Object.keys(links).forEach(title =>{
        const tempLink = $(`<a id='${title.toLowerCase().replaceAll(" ", "_")}' href='${links[title]}'>${title}</a>`);
        headerOptions.append(tempLink);
    });

    // appended together and returned
    AppendAll(header, [headerLogo, headerOptions]);
    return header;
}