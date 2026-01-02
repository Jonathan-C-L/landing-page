console.log("contact.js connected");

/**
 * ContactData provides data for the About Me display
 * data: id, title, description 
 * @returns 
 */
function ContactData(){
    let contactInfo = ``;
    contactInfo += `<u>Phone</u>: <a id='780-655-6719'>780-655-6719</a>`;
    contactInfo += `<br><u>Email</u>: <a id='jonathanlemain@gmail.com'>jonathanlemain@gmail.com</a>`;
    contactInfo += `<br><u>Github</u>: <a target='_blank' href='https://github.com/Jonathan-C-L'>https://github.com/Jonathan-C-L</a>`;


    const contactId = `contact`;
    const contactTitle = `Contact`;
    
    return {
        desc: contactInfo,
        id: contactId,
        title: contactTitle
    };
}