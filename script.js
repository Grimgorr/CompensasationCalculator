var datosTropas = [
  { tropa: 'T1 Infantry', food: 30, wood: 0, stone: 60, gold: 15, time: 3, speedUp: 34722 },
  { tropa: 'T1 Archer', food: 0, wood: 60, stone: 30, gold: 15, time: 3, speedUp: 34722 },
  { tropa: 'T1 Cavalry', food: 60, wood: 30, stone: 0, gold: 15, time: 3, speedUp: 34722 },
  // Resto de tropas...
];

function generarFilasTabla() {
  var tabla = document.getElementById('tablaTropas');
  
  for (var i = 0; i < datosTropas.length; i++) {
    var fila = tabla.insertRow(i + 1);
    var tropaCell = fila.insertCell(0);
    var foodCell = fila.insertCell(1);
    var woodCell = fila.insertCell(2);
    var stoneCell = fila.insertCell(3);
    var goldCell = fila.insertCell(4);
    var timeCell = fila.insertCell(5);
    var speedUpCell = fila.insertCell(6);
    var cantidadCell = fila.insertCell(7);
    
    tropaCell.innerHTML = datosTropas[i].tropa;
    foodCell.innerHTML = datosTropas[i].food;
    woodCell.innerHTML = datosTropas[i].wood;
    stoneCell.innerHTML = datosTropas[i].stone;
    goldCell.innerHTML = datosTropas[i].gold;
    timeCell.innerHTML = datosTropas[i].time;
    speedUpCell.innerHTML = datosTropas[i].speedUp;
    cantidadCell.innerHTML = '<input type="number" min="0" value="0">';
  }
}

function calcularCompensacion() {
  var tabla = document.getElementById('tablaTropas');
  var filas = tabla.rows;
  var compensacionTotal = 0;
  
  for (var i = 1; i < filas.length; i++) {
    var cantidadPerdida = parseInt(filas[i].cells[7].querySelector('input').value);
    var speedUpValue = datosTropas[i - 1].speedUp;
    var compensacionTropa = cantidadPerdida * speedUpValue;
    compensacionTotal += compensacionTropa;
  }
  
  document.getElementById('resultado').innerHTML = 'La compensación total es: ' + compensacionTotal;
}

generarFilasTabla();
