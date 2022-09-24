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
                resultDict[rsr] = (resultDict[rsr] || 0) + 1
            } 
        }
    }
    
    let keysArray = Object.keys(resultDict)
    let valuesArray = Object.values(resultDict)
    let resultMatrix = keysArray.map( (name, idx) => [name,valuesArray[idx]])

    return resultMatrix.sort( (pairA, pairB) => pairB[1] - pairA[1])
    // return range.filter(n => n[0].includes()) // JSON.stringify(range)
    // return [["a",1],["b",2],["c",3]];   --->>> succesful data structure for get a matrix
    // return range.flat()
}