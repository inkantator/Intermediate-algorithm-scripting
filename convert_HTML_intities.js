/*Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */

    const entities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '\"': '&quot;',
        '\'': '&apos;'
};

function convertHTML(str) {
    return str.split('').map(element => (entities[element] === undefined) ? element : entities[element]).join('');
}


//console.log(convertHTML("<>"));
//console.log(convertHTML("Schindler's List"));
//console.log(convertHTML('Stuff in "quotation marks"'));

