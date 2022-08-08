const x4n = require('excel4node');

const wb = new x4n.Workbook();
const ws = wb.addWorksheet('Sheet 1');

tipo =['BOLA', 'BOLA CON AGUJERO CARACTERÍSTICO', 'COMPUERTA', 'CORTINA', 'GLOBO', 'MARIPOSA']
diametros = [ '1/4"', '3/8"','1/2"', '3/4"','1"', '1-1/4"','1-1/2"', '2"', '2-1/2"', '3"', '4"']
clases = ['CLASE 150', 'CLASE 300', 'CLASE 600']
conexiones = ['ROSCADA BSSP', 'ROSCADA NPT-M', 'SOLDABLE', 'ROSCADA BSP', 'ROSCADA BSF']
materiales = [ 'ACERO AL CARBONO','ACERO GALVANIZADO', 'ACERO INOX', 'BRONCE', 'LATÓN' ];

let rowCounter = 1;
tipo.forEach((tipo) => {
    diametros.forEach((diametro) => {
        clases.forEach((clase) => {
            conexiones.forEach((conexion) => {
                materiales.forEach((material) => {
                    ws.cell(rowCounter, 1).string(tipo);
                    ws.cell(rowCounter, 2).string(diametro);
                    ws.cell(rowCounter, 3).string(clase);
                    ws.cell(rowCounter, 4).string(conexion);
                    ws.cell(rowCounter, 5).string(material);
                    rowCounter++;
                });
            });
        });
    });
});

wb.write('permutations.xlsx');

// for(let i = 0; i < titles.length; i++){
//     ws.cell(i+1,1).number(titles[i]);
//     ws.cell(i+1,2).string(descs[i]);
// }
