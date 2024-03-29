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
const modal = document.querySelector("dialog");
const pModal = document.querySelector(".p-modal");
const closeModal = document.querySelector(".close-modal");

let turno = 0;
let currentPlayer = "";
let contPlayerO = 0;
let contPlayerX = 0;

tablero.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (!element.textContent) {
      turno++;
      if (turno % 2 === 0) {
        element.innerHTML = "O";
        element.style.background = "#ff0000";
        currentPlayer = "O";
      } else {
        element.innerHTML = "X";
        element.style.background = "#1414f1";
        currentPlayer = "X";
      }

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
      if (currentPlayer === "O") {
        contPlayerO++;
        pModal.innerHTML = `El jugador  "${currentPlayer}" ha Ganado`;
        modal.showModal();
      }

      if (currentPlayer === "X") {
        contPlayerX++;
        pModal.innerHTML = `El jugador  "${currentPlayer}" ha Ganado`;
        modal.showModal();
      }
      p.innerHTML = `<strong>${contPlayerX}</strong>`;
      p1.innerHTML = ` <strong>${contPlayerO}</strong>`;
    }
  });
};

p.innerHTML = ` <strong>${contPlayerX}</strong>`;
p1.innerHTML = ` <strong>${contPlayerO}</strong>`;
p1.setAttribute("class", "p-o");
contadores.appendChild(p);
contadores.appendChild(p1);

const clear = () => {
  tablero.forEach((item) => {
    item.textContent = "";
    item.style.background = "#ddd";
  });
};

btnNewGame.addEventListener("click", () => {
  clear();
});

btnReset.addEventListener("click", () => {
  clear();
  contPlayerO = 0;
  contPlayerX = 0;
  p.innerHTML = `<strong>${contPlayerX}</strong>`;
  p1.innerHTML = ` <strong>${contPlayerO}</strong>`;
});

closeModal.addEventListener("click", () => {
  modal.close();
  clear();
});
