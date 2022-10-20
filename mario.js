
let heightOfPyramid;
heightOfPyramid = prompt("How tall would you like your pyramid?")
// TODO #2
// Take in user input for the height


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function createPyramid(rows)
{
    for (let i = 0; i < rows; i++) {
        var output = '';
        for (let j =0; j < rows - i; j++) output += '  ';
        for (let k = 0; k <= i; k++) output += '##';
        console.log(output);  
    } 
}

createPyramid(heightOfPyramid) // pass number as row of pyramid you want