/**
 * Summary: common.js is a library file that contains javascript that will be commonly used between all other js files to keep 
 * the files organized and to minimize the size of each js file
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 */
console.log("common.js connected"); // diagnostics

/**
 * AppendAll appends all jQuery childnodes to a parent node
 * @param {*} parent the parent jQuery node to be appended to
 * @param  {...any} childNodes the child jQuery nodes to append
 */
function AppendAll(parent, ...childNodes){
    childNodes.forEach(child => {
        $(parent).append(child);
    });
}