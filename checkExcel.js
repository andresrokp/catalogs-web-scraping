const x4n = require('excel4node');

const wb = new x4n.Workbook();
const ws = wb.addWorksheet('Sheet 1');

tipo =['BOLA', 'BOLA CON AGUJERO CARACTERISTICO', 'COMPUERTA', 'CORTINA', 'GLOBO', 'MARIPOSA','PISTON']
clases= [ 'PN10', 'PN16','PN40', 'PN25','PN32']
diametros = ['N10', 'N15', 'N2O', 'N25', 'N3O', 'N35', 'N40', 'N45', 'N50', 'N55', 'N60', 'N65', 'N70', 'N75']
conexiones = ['ROSCADA BSSP', 'ROSCADA NPT-M', 'SOLDABLE', 'ROSCADA BSP', 'ROSCADA BSF']
materiales = [ 'ACERO AL CARBONO','ACERO GALVANIZADO', 'ACERO INOXIDABLE', 'BRONCE', 'LATON' ];

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

wb.write('permutationsMetrica.xlsx');
