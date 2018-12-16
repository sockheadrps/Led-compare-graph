var ledJsonData =[
    {
        make: "Bridgelux",
        model: "Vero 29 gen 7",
        mfgNum: "BXRC-40E10K0-D-73",
        cct: 4000,
        voltage: 37.7,
        amperage: 2100,
        lpw: 143,
        price: 28
    },
    {
        make: "Cree",
        model: "CXB3590",
        mfgNum: "CXB3590-0000-000N0HCD40G",
        cct: "4000",
        voltage: 36,
        amperage: 2400,
        lpw: 145,
        price: 38
    }
]


var table = "";
var rows = 7;
var cols = 2;
var numOfProps = 0
ledIndex = 0

for(var dataType in Object.keys(ledJsonData[ledIndex])){
    dataType = Object.keys(ledJsonData[ledIndex])[numOfProps]
    dataValue = ledJsonData[ledIndex][Object.keys(ledJsonData[ledIndex])[numOfProps]]
    numOfProps++
    table += '<tr>';
    table += '<td>' + dataType + '</td>'
    table += '<td>' + dataValue + '</td>'
    table += '</tr>';
}

document.getElementById("table1").innerHTML = '<table>' + table + '</table>';


