/**
 * Contabiliza la aparición de los términos de busqueda dentro
 * de cada elemento en el rango seleccionado
 *
 * @param {range} a range of strings to be searched separated by spaces
 * @param {string} an string with search terms to look into the array
 * @return A sorted array woth ocurrence counting of contained tokens
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