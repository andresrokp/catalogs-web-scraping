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
  * Helper
  */
  
  function dictToSortedMatrix(dict){
    let keysArray = Object.keys(dict)
    let valuesArray = Object.values(dict)
    let resultMatrix = keysArray.map( (name, idx) => [valuesArray[idx], name])
    
    return resultMatrix.sort( (pairA, pairB) => pairB[0] - pairA[0])
  }
  
  /**
   * Extrae la referencia luego de la expresión "REF: "
   * Por: andresrokp
   *
   * @param {element} a cell to take it's reference
   * @return the reference in the element
   * @customfunction
   */
  
  function referenceTaker(elem){
    let array = elem.split("REF: ")
    return array[array.length-1]
  }
  
  /**
   * Trae la mayor coincidencia de tokens"
   * Por: andresrokp
   *
   * @param {element} a cell to take it's reference
   * @param {range} a cell to take it's reference
   * @return the reference in the element
   * @customfunction
   */
  
  function bestMatchIdentifyer(range, searchKey){
    let cleanKey = searchKey.trim().replaceAll("  "," ").replaceAll("   "," ")
    let counterMatrix = afrpChecker(range,cleanKey)
    return [[...counterMatrix[0],...counterMatrix[1],...counterMatrix[2]]];
  }
  
  /**
   * Trae la primera palabra de la frase"
   * Por: andresrokp
   *
   * @param {element} a cell to take it's reference
   * @return the first word
   * @customfunction
   */
  
  function firstWordParent(elem){
    return elem.trim().split(" ")[0].replaceAll(",","")
  }
  
  let genericResourceDict = {
    RODAMIENTO : "REG-001",
    VALVULA : "REG-002",
    CINTA : "REG-003",
    REDUCCION : "REG-005",
    TEE : "REG-006",
    TAPON : "REG-007",
    NIPLE : "REG-008",
    UNION : "REG-009",
    BRIDA : "REG-010",
    BUJE : "REG-011",
    VARILLA : "REG-012",
    DISCO : "REG-013",
    GUANTE : "REG-014",
    CONECTOR : "REG-015",
    CORREA : "REG-016",
    LIJA : "REG-017",
    PINTURA : "REG-018",
    CUCHILLA : "REG-019",
    SENSOR : "REG-020",
    BOQUILLA : "REG-022",
    TERMINAL : "REG-023",
    TUBO : "REG-024",
    CONDULETA : "REG-026",
    FUSIBLE : "REG-027",
    BORNA : "REG-028",
    JUNTA : "REG-029",
    MARCADOR : "REG-030",
    GRAPA : "REG-031",
    ESLINGA : "REG-032",
    ALCOHOL : "REG-033",
    TORNILLO : "REG-034",
    BOLSA : "REG-035",
    EXACTO : "REG-036",
    FILTRO : "REG-037",
    PRENSA : "REG-038",
    AROMATICA : "REG-039",
    BREAKER : "REG-040",
    CLAVIJA : "REG-041",
    LUBRICANTE : "REG-042",
    MODULO : "REG-043",
    TOMACORRIENTE : "REG-044",
    BROCHA : "REG-045",
    CABO : "REG-046",
    ESCOBA : "REG-047",
    CODO : "REG-048",
    GUARDAMOTOR : "REG-049",
    LAMPARA : "REG-050",
    PAPEL : "REG-051",
    RECOGEDOR : "REG-052",
    RESALTADOR : "REG-053",
    TRANSMISOR : "REG-054",
    ANTICORROSIVO : "REG-055",
    BOLIGRAFO : "REG-056",
    LIMPIADOR : "REG-057",
    RELE : "REG-058",
    TAPA : "REG-059",
    TIJERA : "REG-060",
    VARSOL : "REG-061",
    VENTILADOR : "REG-062",
    BASE : "REG-064",
    CARPETA : "REG-065",
    CONTACTOR : "REG-066",
    DIFERENCIAL : "REG-067",
    DIFUSOR : "REG-068",
    ELECTRODO : "REG-069",
    EMPAQUE : "REG-070",
    GORRO : "REG-071",
    GRATA : "REG-072",
    MANGUERA : "REG-073",
    MONOGAFAS : "REG-074",
    PRESOSTATO : "REG-075",
    PROTECTOR : "REG-076",
    RELEVO : "REG-077",
    TRONZADORA : "REG-078",
    VIDRIO : "REG-079",
    ADHESIVO : "REG-081",
    AMONIO : "REG-082",
    BALASTRO : "REG-083",
    BATERIA : "REG-084",
    BLOQUE : "REG-085",
    BORRADOR : "REG-086",
    CEPILLO : "REG-087",
    CLIP : "REG-088",
    DISPENSADOR : "REG-089",
    EXTINTOR : "REG-090",
    GAFAS : "REG-091",
    GRAPADORA : "REG-092",
    HACHA : "REG-093",
    INSECTICIDA : "REG-094",
    INTERRUPTOR : "REG-095",
    JABON : "REG-096",
    PALUSTRE : "REG-097",
    PAÑOS : "REG-098",
    PEGANTE : "REG-099",
    PERFORADORA : "REG-100",
    PLACA : "REG-101",
    REGLA : "REG-102",
    REMOVEDOR : "REG-103",
    RIEL : "REG-104",
    SELLADOR : "REG-105",
    SEPARADOR : "REG-106",
    SIKADUR : "REG-107",
    SILICONA : "REG-108",
    SOPORTE : "REG-109",
    TABLERO : "REG-110",
    AJUSTADOR : "REG-112",
    HUELLERO : "REG-113",
    AMBIENTADOR : "REG-114",
    ARNES : "REG-115",
    ARRANCADOR : "REG-116",
    AZUCAR : "REG-117",
    BALDE : "REG-118",
    BALIZA : "REG-119",
    BANDEJA : "REG-120",
    BANDERITA : "REG-121",
    BARRA : "REG-122",
    BOBINA : "REG-123",
    BOLSILLO : "REG-124",
    BRILLADOR : "REG-125",
    CAFE : "REG-126",
    CALCULADORA : "REG-127",
    CARETA : "REG-128",
    CASCO : "REG-129",
    CATALIZADOR : "REG-130",
    CAUDALIMETRO : "REG-131",
    CAUTIN : "REG-132",
    CERA : "REG-133",
    CHALECO : "REG-134",
    CHINCHE : "REG-135",
    COLLAR : "REG-136",
    CONTROLADOR : "REG-137",
    DELANTAL : "REG-138",
    CUADERNO : "REG-139",
    TABLA : "REG-140",
    SERVILLETA : "REG-141",
    SAL : "REG-142",
    PITILLO : "REG-143",
    DESINFECTANTE : "REG-144",
    LAVALOZA : "REG-145",
    TRAPERO : "REG-146",
    DESENGRASANTE : "REG-147",
    DETECTOR : "REG-148",
    DESATORADOR : "REG-149",
    GEL : "REG-150",
    ESTOPA : "REG-151",
    MOPA : "REG-152",
    DETERGENTE : "REG-153",
    HIPOCLORITO : "REG-154",
    TOALLA : "REG-155",
    DISYUNTOR : "REG-156",
    VINAGRE : "REG-157",
    VISOR : "REG-158",
    UÑA : "REG-159",
    TRABA : "REG-160",
    TRAJE : "REG-161",
    TRANSFORMADOR : "REG-162",
    TENSOR : "REG-163",
    SELLANTE : "REG-164",
    SCANNER : "REG-165",
    RETENEDOR : "REG-166",
    RODILLO : "REG-167",
    SACAPUNTA : "REG-168",
    REJILLA : "REG-169",
    REACTANCIA : "REG-170",
    ESPUMA : "REG-171",
    ESTUCHE : "REG-172",
    EXTENSION : "REG-173",
    FERULA : "REG-174",
    FUENTE : "REG-175",
    GANCHO : "REG-176",
    GASA : "REG-177",
    GORRA : "REG-178",
    GUARDA : "REG-179",
    HUINCHA : "REG-180",
    IMPERMEABLE : "REG-181",
    INDICADOR : "REG-182",
    LAINA : "REG-183",
    LAPIZ : "REG-184",
    LIBRO : "REG-185",
    MANGA : "REG-186",
    MANGO : "REG-187",
    MARTILLO : "REG-188",
    MASCARA : "REG-189",
    MASCARILLA : "REG-190",
    MULTIMETRO : "REG-191",
    NIVEL : "REG-192",
    PEGANTE : "REG-193",
    PLUMON : "REG-194",
    PORTAMINAS : "REG-195",
    CABLE : "REG-196",
    TINTA : "REG-197",
    GRASA : "REG-198"
  }
  