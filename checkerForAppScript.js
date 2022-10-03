/**
 * Contabiliza la aparición de los términos de busqueda dentro
 * de cada elemento en el rango seleccionado.
 * Por: andresrokp
 *
 * @param {range} a range of strings to be searched separated by spaces
 * @param {string} an string with search terms to look into the array
 * @return A sorted array woth ocurrence counting of contained tokens
 * @customfunction
 */

 function afrpChecker(range,searchKey){
    let searchStr = searchKey.toUpperCase().replace(",","")
    let resourcesArray = range.flat()
    let resultDict = {}

    for(let rsr of resourcesArray){
        for(let word of searchStr.split(" ")){
            if(rsr.includes(word)){
                resultDict[rsr] = (resultDict[rsr] || 0) + 1
            } 
        }
    }

    return dictToSortedMatrix(resultDict)

    // return range.filter(n => n[0].includes()) // JSON.stringify(range)
    // return [["a",1],["b",2],["c",3]];   --->>> succesful data structure for get a matrix
    // return range.flat()
}
  
  /**
   * Contabiliza las primeras palabras de los items
   * Por: andresrokp
   *
   * @param {range} a range of strings to be searched separated by spaces
   * @return A sorted array with counting of first words
   * @customfunction
   */
  
function classesCounter(range){
    let resourcesArray = range.flat()
    let resultDict = {}

    for(let rsr of resourcesArray){
        let className = rsr.split(",")[0].split(" ")[0]
        resultDict[className] = (resultDict[className] || 0) + 1
    }

    return dictToSortedMatrix(resultDict)
}
  
  /**
  * Helpers
  */
  
function dictToSortedMatrix(dict){
    let keysArray = Object.keys(dict)
    let valuesArray = Object.values(dict)
    let resultMatrix = keysArray.map( (name, idx) => [valuesArray[idx], name])
    
    return resultMatrix.sort( (pairA, pairB) => pairB[0] - pairA[0])
}