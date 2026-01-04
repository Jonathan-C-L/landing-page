console.log("about.js connected");

/**
 * AboutMeData provides data for the About Me display
 * data: id, title, description 
 * @returns 
 */
function AboutMeData(){
    const aboutDescription = `I'm currently a Computer Engineering Technology (CNT) student at NAIT
                             and will be officially graduating in April 2026.
                             As a brief summary, I have approximately 3 years of experience programming
                             from my educational journey, with proficiencies in embedded and
                             web development. I love going low-level and understanding computers in the
                             most fundamentals ways, because that's where all the interesting bits are
                             happening.<br><br>
                             <u>Current languages</u>: HTML/CSS/Javascript, C, PHP, C#, python<br>
                             <u>Databases</u>: mySQL and SQL Server<br>
                             <u>Frameworks</u>: jQuery, ASP.NET (ADO and Entity)<br>
                             <u>Technologies</u>: Git, Github, VSCode, Azure (limited)<br>`;
    const aboutId = "about-me";
    const aboutTitle = "About Me";
    
    return {
        desc: aboutDescription,
        id: aboutId,
        title: aboutTitle
    };
}