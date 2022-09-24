/**
 * Calculates the sale price of a value at a given discount.
 * The sale price is formatted as US dollars.
 *
 * @param {number} input The value to discount.
 * @param {number} discount The discount to apply, such as .5 or 50%.
 * @return The sale price formatted as USD.
 * @customfunction
 */

function akapChecker(range){
    let searchStr = searchKey.toUpperCase()
    let resourcesArray = range.flat()
    let resultDict = {}

    for(let rsr of resourcesArray){
        for(let word of searchStr.split(" ")){
            if(rsr.includes(word)){
                // console.log("resource ::", rsr)
                // console.log("\tword ::", word)
                resultDict[rsr] = (resultDict[rsr] || 0) + 1
            } 
        }
    }

    return Object.keys(resultDict)
    // return range.filter(n => n[0].includes()) // JSON.stringify(range)
    // return [["a",1],["b",2],["c",3]];   --->>> succesful data structure for get a matrix
    // return range.flat()
}