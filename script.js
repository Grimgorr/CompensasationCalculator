var datosTropas = [
  { tipo: 'T1', tropa: 'Infantry', food: 30, wood: 0, stone: 60, gold: 15, time: 3, speedUp: 34722 },
  { tipo: 'T1', tropa: 'Archer', food: 0, wood: 60, stone: 30, gold: 15, time: 3, speedUp: 34722 },
  { tipo: 'T1', tropa: 'Cavalry', food: 60, wood: 30, stone: 0, gold: 15, time: 3, speedUp: 34722 },
  { tipo: 'T2', tropa: 'Infantry', food: 60, wood: 0, stone: 120, gold: 30, time: 5, speedUp: 57870 },
  { tipo: 'T2', tropa: 'Archer', food: 0, wood: 120, stone: 60, gold: 30, time: 5, speedUp: 57870 },
  { tipo: 'T2', tropa: 'Cavalry', food: 120, wood: 60, stone: 0, gold: 30, time: 5, speedUp: 57870 },
  { tipo: 'T3', tropa: 'Infantry', food: 90, wood: 0, stone: 180, gold: 45, time: 10, speedUp: 115741 },
  { tipo: 'T3', tropa: 'Archer', food: 0, wood: 180, stone: 90, gold: 45, time: 10, speedUp: 115741 },
  { tipo: 'T3', tropa: 'Cavalry', food: 180, wood: 90, stone: 0, gold: 45, time: 10, speedUp: 115741 },
  { tipo: 'T4', tropa: 'Infantry', food: 180, wood: 0, stone: 360, gold: 90, time: 20, speedUp: 231481 },
  { tipo: 'T4', tropa: 'Archer', food: 0, wood: 360, stone: 180, gold: 90, time: 20, speedUp: 231481 },
  { tipo: 'T4', tropa: 'Cavalry', food: 360, wood: 180, stone: 0, gold: 90, time: 20, speedUp: 231481 },
  { tipo: 'T5', tropa: 'Infantry', food: 360, wood: 0, stone: 720, gold: 180, time: 40, speedUp: 462963 },
  { tipo: 'T5', tropa: 'Archer', food: 0, wood: 720, stone: 360, gold: 180, time: 40, speedUp: 462963 },
  { tipo: 'T5', tropa: 'Cavalry', food: 720, wood: 360, stone: 0, gold: 180, time: 40, speedUp: 462963 }
];

function generarFilasTabla() {
  var tabla = document.getElementById('tablaTropas');

  for (var i = 0; i < datosTropas.length; i++) {
    var fila = document.createElement('tr');

    var tipoCelda = document.createElement('td');
    tipoCelda.textContent = datosTropas[i].tipo;
    fila.appendChild(tipoCelda);

    var tropaCelda = document.createElement('td');
    tropaCelda.textContent = datosTropas[i].tropa;
    fila.appendChild(tropaCelda);

    var foodCelda = document.createElement('td');
    foodCelda.textContent = datosTropas[i].food;
    fila.appendChild(foodCelda);

    var woodCelda = document.createElement('td');
    woodCelda.textContent = datosTropas[i].wood;
    fila.appendChild(woodCelda);

    var stoneCelda = document.createElement('td');
    stoneCelda.textContent = datosTropas[i].stone;
    fila.appendChild(stoneCelda);

    var goldCelda = document.createElement('td');
    goldCelda.textContent = datosTropas[i].gold;
    fila.appendChild(goldCelda);

    var timeCelda = document.createElement('td');
    timeCelda.textContent = datosTropas[i].time;
    fila.appendChild(timeCelda);

    var speedUpCelda = document.createElement('td');
    speedUpCelda.textContent = datosTropas[i].speedUp;
    fila.appendChild(speedUpCelda);

    tabla.appendChild(fila);
  }
}

function calcularCompensacion() {
  var filas = document.getElementById('tablaTropas').rows;
  var compensacionTotal = 0;

  for (var i = 1; i < filas.length; i++) {
    var cantidadPerdida = parseInt(filas[i].cells[8].querySelector('input').value);
    var speedUpValue = datosTropas[i - 1].speedUp;
    var compensacionTropa = cantidadPerdida * speedUpValue;
    compensacionTotal += compensacionTropa;
  }
  
  document.getElementById('resultado').innerHTML = 'La compensación total es: ' + compensacionTotal;
}

generarFilasTabla();

  document.getElementById('resultado').innerHTML = 'La compensación total es: ' + compensacionTotal;
}

generarFilasTabla();

