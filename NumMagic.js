/***Números mágicos**
--------------------------------
Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero. 
*/


let opciones = [0,1,2,3];
let jugador = null;
let bot = null;

function playGame() {
  //lo que decida la computadora
  //lo que decida el jugador
  console.log("Juego en acción");
  seleccionBot();
  seleccionJugador();
}

function seleccionBot() {
  //definir la opcion elegida por el bot
  return (bot = Math.round(Math.random() * 3));
}

function seleccionJugador() {
  //manejo lo que decida el jugador
  jugador =document.getElementById("userText").value
  while (jugador == null || jugador == "") {
    jugador =swal("ERROR!", "Debe ingresar un número entre 0 y 2", "error");
  }

  if (!isNaN(jugador)) {
    if (jugador >= 0 && jugador <= 3) {
      switch (true) {
        case jugador == bot:
          mensajeAlert("Ganaste");
          break;
          case jugador > bot:
          mensajeAlert("PERDiSTE");
          break;
        case jugador < bot:
          mensajeAlert("PERDISTE");
          break;
          case jugador === "":
          mensajeAlert("error");
          break;
        default:
          break;
      }
    } else {
      //cuando es otro numero
      mensajeAlert("noOpcion");
    }
  } else {
    //cuando no sea un numero
    mensajeAlert("noNumero");
  }
}

function mensajeAlert(resultado) {
  //devuelve el mensaje en pantalla
  if (resultado === "noOpcion") {
    swal("ERROR!", "No existe la opción elegida", "error");
  }
  if (resultado === "noNumero") {
    swal("ERROR!", "Debe ingresar un número entre 0 y 2", "error");
  }

  if (resultado === "PERDiSTE") {
    swal(
      "PERDISTE!",
      `Tu numero ${opciones[jugador]} es mayor al numero magico`,
      "error"
    );
  }

  if (resultado === "PERDISTE") {
    swal(
      "PERDISTE!",
      `Tu numero ${opciones[jugador]} es menor al numero magico`,
      "error"
    );
  }

  
  if (resultado === "Ganaste") {
    swal(
      "GANASTE",
      `Tu numero fue ${opciones[jugador]} y el numero magico es ${opciones[bot]}`,
      "success"
    );
  }
}