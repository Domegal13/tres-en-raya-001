const ganar = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const tablero = Array.from(document.querySelectorAll(".boton"));
const btnNewGame = document.querySelector(".newGame");
const btnReset = document.querySelector(".reset");
const contadores = document.querySelector(".contadores");

const p = document.createElement("p");
const p1 = document.createElement("p");

let turno = 0;
let currentPlayer = "";
let contPlayerO = 0;
let contPlayerX = 0;

tablero.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (!element.textContent) {
      turno++;
      if (turno % 2 === 0) {
        element.textContent = "O";
        element.style.background = "#ff0000";
        currentPlayer = "O";
      } else {
        element.textContent = "X";
        element.style.background = "lime";
        currentPlayer = "X";
      }
      // console.log(element);
      ganador();
    }
  });
});

const ganador = () => {
  ganar.forEach((element) => {
    if (
      tablero[element[0]].textContent &&
      tablero[element[0]].textContent === tablero[element[1]].textContent &&
      tablero[element[0]].textContent === tablero[element[2]].textContent
    ) {
      // console.log(`El ganador es: ${currentPlayer}`);

      if (currentPlayer === "O") {
        contPlayerO++;
      }

      if (currentPlayer === "X") {
        contPlayerX++;
      }
      p.innerHTML = `Player 'X' ha ganado: <strong>${contPlayerX}</strong>`;
      p1.innerHTML = `Player 'O' ha ganado: <strong>${contPlayerO}</strong>`;
      // console.log(contPlayerX);
      // console.log(contPlayerO);
    }
  });
};

p.innerHTML = `Player 'X' ha ganado: <strong>${contPlayerX}</strong>`;
p1.innerHTML = `Player 'O' ha ganado: <strong>${contPlayerO}</strong>`;
contadores.appendChild(p);
contadores.appendChild(p1);

const clear = () => {
  tablero.forEach((item) => {
    item.textContent = "";
    item.style.background = "#ddd";

    // turno = 0;
  });
};

btnNewGame.addEventListener("click", () => {
  clear();
});

btnReset.addEventListener("click", () => {
  clear();
  contPlayerO = 0;
  contPlayerX = 0;
  p.innerHTML = `Player 'X' ha ganado: <strong>${contPlayerX}</strong>`;
  p1.innerHTML = `Player 'O' ha ganado: <strong>${contPlayerO}</strong>`;
});

// const clear = () => {
//   tablero.forEach((item) => {
//     item.textContent = "";
//     item.style.background = "#ddd";

//     turno = 0;
//   });
// };

// btnNewGame.addEventListener("click", () => {
//   clear();
// });

// btnReset.addEventListener("click", () => {
//   clear();
//   contPlayerO = 0;
//   contPlayerX = 0;
// });

// const p = document.createElement("p");
// const p1 = document.createElement("p");
// p.innerHTML = `Player X ha ganado ${contPlayerX}`;
// p1.textContent = `Player O ha ganado ${contPlayerO}`;
// contadores.appendChild(p);
// contadores.appendChild(p1);
