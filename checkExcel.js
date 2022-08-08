const x4n = require('excel4node');

const wb = new x4n.Workbook();
const ws = wb.addWorksheet('Sheet 1');

titles = [ 1,2,3,4,5,6,7,8,9,10 ];
descs = [ 'uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez' ];

for(let i = 0; i < titles.length; i++){
    ws.cell(i+1,1).number(titles[i]);
    ws.cell(i+1,2).string(descs[i]);
}

wb.write('test.xlsx');