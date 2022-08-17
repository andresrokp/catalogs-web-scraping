const x4n = require('excel4node');

function permutarTornillos(){

    const wb = new x4n.Workbook();
    const ws = wb.addWorksheet('Valvulas');

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

    wb.write('permutationsTornillos.xlsx');
}

function permutarTuercasANSI(){

    const wb = new x4n.Workbook();
    const ws = wb.addWorksheet('Tuercas');

    let ANSI_diam = ['1/4"','5/16"','3/8"','7/16"','1/2"','9/16"','5/8"','3/4"','7/8"','1"','1-1/8"','1-1/4"','1-5/16"','1-3/8"','1-7/16"','1-1/2"','1-9/16"','1-5/8"','1-3/4"','1-7/8"','2"','2-1/8"','2-1/4"','2-5/16"','2-3/8"','2-7/16"','2-1/2"','2-9/16"','2-5/8"','2-3/4"','2-7/8"','3"','3-1/8"','3-1/4"','3-5/16"','3-3/8"','3-7/16"','3-1/2"','3-9/16"','3-5/8"','3-3/4"','3-7/8"','4"','4-1/8"','4-1/4"','4-5/16"','4-3/8"','4-7/16"','4-1/2"','4-9/16"','4-5/8"','4-3/4"','4-7/8"','5"'];
        
    let ANSI_thread = ["UNC", "UNF"];
    let ANSI_thick = ["PESADA", "LIVIANA"];

    let material = ["Acero al carbono","Acero inoxidable A304","Acero inoxidable A316","Aluminio","Bronce","Cobre"];
    let grado = ["12.9","2","5","6.8","8","8.8"];
    let acabado = ["CROMADO","GALVANIZADO EN CALIENTE","GALVANIZADO EN FRIO","PAVONADO","TROPICALIZADO","ZINCADO"];
    
    let rowCounter = 1;
    ANSI_diam.forEach((diam) => {
        ANSI_thread.forEach((thread) => {
            ANSI_thick.forEach((thick) => {
                material.forEach((mat) => {
                    ws.cell(rowCounter, 1).string(diam);
                    ws.cell(rowCounter, 2).string(thread);
                    ws.cell(rowCounter, 3).string(thick);
                    ws.cell(rowCounter, 4).string(mat);
                            
                    if(mat == "Acero al carbono"){
                        grado.forEach((grado) => {
                            ws.cell(rowCounter, 1).string(diam);
                            ws.cell(rowCounter, 2).string(thread);
                            ws.cell(rowCounter, 3).string(thick);
                            ws.cell(rowCounter, 4).string(mat);
                            ws.cell(rowCounter, 5).string(grado);
                            rowCounter++;
                        });
                        acabado.forEach((acab) => {
                            ws.cell(rowCounter, 1).string(diam);
                            ws.cell(rowCounter, 2).string(thread);
                            ws.cell(rowCounter, 3).string(thick);
                            ws.cell(rowCounter, 4).string(mat);
                            ws.cell(rowCounter, 6).string(acab);
                            rowCounter++;
                        });
                        rowCounter--;
                    }
                    rowCounter++;
                } );
            } );
        } );
    } );

    wb.write('permutacionTuercas.xlsx');
}


function permutarTuercasISO(){

    const wb = new x4n.Workbook();
    const ws = wb.addWorksheet('Tuercas');

    let diam = ['3mm','4mm','5mm','6mm','7mm','8mm','10mm','12mm','14mm','16mm','18mm','20mm','22mm','24mm','27mm','30mm','33mm','36mm','39mm','42mm','45mm','48mm','52mm','56mm','60mm','64mm']


    let paso = {
        '3mm':[0.5],
        '4mm':[0.7],
        '5mm':[0.8],
        '6mm':[1],
        '7mm':[1],
        '8mm':[1, 1.25, 1.5],
        '10mm':[1.25, 1.5],
        '12mm':[1.5, 1.75],
        '14mm':[1.5, 1.75, 2],
        '16mm':[1.5, 1.75, 2],
        '18mm':[1.5, 1.75, 2, 2.5],
        '20mm':[2.5],
        '22mm':[2.5],
        '24mm':[2.5],
        '27mm':[3],
        '30mm':[3, 3.5],
        '33mm':[3.5],
        '36mm':[4],
        '39mm':[4],
        '42mm':[4.5],
        '45mm':[4.5],
        '48mm':[5],
        '52mm':[5],
        '56mm':[5.5],
        '60mm':[5.5],
        '64mm':[6]
    };
    let thick = ["PESADA", "LIVIANA"];
    let material = ["Acero al carbono","Acero inoxidable A304","Acero inoxidable A316","Aluminio","Bronce","Cobre"];
    let grado = ["12.9","2","5","6.8","8","8.8"];
    let acabado = ["CROMADO","GALVANIZADO EN CALIENTE","GALVANIZADO EN FRIO","PAVONADO","TROPICALIZADO","ZINCADO"];
    
    let rowCounter = 1;
    diam.forEach((diam) => {
        paso[diam].forEach((paso) => {
            thick.forEach((thick) => {
                material.forEach((mat) => {
                    ws.cell(rowCounter, 1).string(diam);
                    ws.cell(rowCounter, 2).number(paso);
                    ws.cell(rowCounter, 3).string(thick);
                    ws.cell(rowCounter, 4).string(mat);
                            
                    if(mat == "Acero al carbono"){
                        grado.forEach((grado) => {
                            ws.cell(rowCounter, 1).string(diam);
                            ws.cell(rowCounter, 2).number(paso);
                            ws.cell(rowCounter, 3).string(thick);
                            ws.cell(rowCounter, 4).string(mat);
                            ws.cell(rowCounter, 5).string(grado);
                            rowCounter++;
                        });
                        acabado.forEach((acab) => {
                            ws.cell(rowCounter, 1).string(diam);
                            ws.cell(rowCounter, 2).number(paso);
                            ws.cell(rowCounter, 3).string(thick);
                            ws.cell(rowCounter, 4).string(mat);
                            ws.cell(rowCounter, 6).string(acab);
                            rowCounter++;
                        });
                        rowCounter--;
                    }
                    rowCounter++;
                } );
            } );
        } );
    } );

    wb.write('permutacionTuercasMetricas.xlsx');
    
}

permutarTuercasISO()