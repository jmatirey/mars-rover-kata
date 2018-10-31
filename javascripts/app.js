// CARACTERÍSTICAS INICIALES DE NUESTRO ROVER
var rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: []
};


//GIRO Y ORIENTACIONES DEL ROVER

function turnLeft(){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
  }
  console.log("Giro a la izquierda. La nueva dirección es " + rover.direction);
}

function turnRight(){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
  console.log("Giro a la derecha. La nueva dirección es " + rover.direction);
}
//MOVIMIENTO DEL ROVER

//5 obstáculos con cordenadas x y
var obstacles = {
  x: [2, 1, 9, 4, 7],
  y: [5, 6, 4, 2, 8]
};

//     VISIÓN GENERAL DE NUESTRO TERRENO 10x10
//   Leyenda: R - Rover; X - Obstáculo; _ - Espacio libre
//       [R, _, _, _, _, _, _, _, _, _],
//       [_, _, _, _, _, _, _, _, _, _],
//       [_, _, _, _, X, _, _, _, _, _],
//       [_, _, _, _, _, _, _, _, _, _],
//       [_, _, _, _, _, _, _, _, _, X],
//       [_, _, X, _, _, _, _, _, _, _],
//       [_, X, _, _, _, _, _, _, _, _],
//       [_, _, _, _, _, _, _, _, _, _],
//       [_, _, _, _, _, _, _, X, _, _],
//       [_, _, _, _, _, _, _, _, _, _],

//Definimos qué pasa cuando hay obstáculo
function checkObstacles(){
  for(var j = 0; j < obstacles.x.length; j++){
    //Cuando coincidimos con coordenadas de obstáculos
    if(rover.x === obstacles.x[j] && rover.y === obstacles.y[j]){
      console.log("¡Cuidado, obstáculo!");
      return true;
    }
  } return false;
}
//Definimos movimientos de Avanzar y Retroceder
function moveForward(){
  console.log("Avanzar");

  //Fijamos los límites del terreno
  if(rover.direction === "N" && rover.y > 0){
    rover.y += -1;
     //Augmento o disminución de coordenadas cuando la condición checkObstacles sea cierta.
    if(checkObstacles())rover.y+= 1;
  } else if(rover.direction === "E" && rover.x < 10){
    rover.x += 1;
    if(checkObstacles())rover.x+= -1;
  } else if(rover.direction === "S" && rover.y < 10){
    rover.y+=1;
    if(checkObstacles())rover.y+= -1;
  } else if(rover.direction === "W" && rover.x > 0){
    rover.x += -1;
    if(checkObstacles())rover.x+= 1;
  } else{
    console.log("¡Prohibido salir de la cuadrícula 10x10! Posición: " + rover.x + ", " + rover.y);
  } //Añadimos historial de coordenadas.
    rover.travelLog.push("(" + rover.x + ", " + rover.y + ")");
}


function moveBackward(){
  console.log("Retroceder");
  //Fijamos límite de terreno
  if(rover.direction === "N" && rover.y < 10){
    rover.y += 1;
    //Augmento o disminución de coordenadas cuando la condición checkObstacles sea cierta.
    if(checkObstacles())rover.y+= -1;
  } else if(direction === "E" && rover.x > 0 ){
    rover.x += -1;
    if(checkObstacles())rover.x+= 1;
  } else if(direction === "S" && rover.y > 0){
    rover.y+= -1;
    if(checkObstacles())rover.y+= 1;
  } else if(direction === "W" && rover.x < 10){
    rover.x += 1;
    if(checkObstacles())rover.x+= -1;
  } else{
    console.log("¡Prohibido salir de la cuadrícula 10x10! Posición: " + rover.x + ", " + rover.y);
  }//Añadimos historial de coordenadas.
    rover.travelLog.push("(" + rover.x + ", " + rover.y + ")");
}

//DEFINIMOS LOS COMANDOS VÁLIDOS Y NO VÁLIDOS
function command(letra){

// Para comandos válidos
    for(i = 0; i < letra.length; i++){
    switch (letra[i]) {
      case 'l':
        turnLeft();
        break;
      case 'r':
        turnRight();
        break;
      case 'f':
        moveForward();
        break;
      case 'b':
        moveBackward();
        break;
    }
  } console.log('Hemos pasado por las siguientes coordenadas: ' + rover.travelLog);
  
  //Para comandos inválidos
  for(var i = 0; i < letra.length; i++){
    if(letra[i] !== "l" && letra[i] !== "r" && letra[i] !== "f" && letra[i] !== "b"){
      return "El comando es inváildo, por favor solamente usa 'l', 'r', 'f', o 'b'.";
    }
  } 
}

//Mensaje inicial con instrucciones
console.log("¡Hola viajero del más allá!. Por favor, escribe 'command()' con las siguientes órdenes 'l' , 'r', 'f', o 'b' para desplazar Rover.");