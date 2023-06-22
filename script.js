const productsArray = [
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },

  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },

  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$99,00",
    type: "Paintings",
  },

  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$275,00",
    type: "Paintings",
  },

  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "Pacman",
    price: "R$160,00",
    type: "Paintings",
  },

  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smartwatch",
    price: "R$120,00",
    type: "Paintings",
  },

  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$700,00",
    type: "Action Figures",
  },

  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$950,00",
    type: "Action Figures",
  },

  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$1.030,00",
    type: "Action Figures",
  },

  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$870,00",
    type: "Action Figures",
  },

  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$510,00",
    type: "Action Figures",
  },
];

const actionFiguresArray = [];
const paintingsArray = [];

function separateItems(productsArray) {
  for (let i = 0; i < productsArray.length; i++) {
    const product = productsArray[i];
    if (product.type === "Action Figures") {
      actionFiguresArray.push(product);
    } else if (product.type === "Paintings") {
      paintingsArray.push(product);
    }
  }
}

separateItems(productsArray);
console.log(separateItems(productsArray));
const actionFiguresList = document.querySelector("#action_figures_list");
const paintingsList = document.querySelector("#paintings_list");

function createProductCard(product) {
  const newElementLi = document.createElement("li");
  const newElementImg = document.createElement("img");
  const newElementH3 = document.createElement("h3");
  const newElementP = document.createElement("p");

  newElementImg.src = product.image;
  newElementImg.alt = product.name;
  newElementH3.textContent = product.name;
  newElementP.textContent = product.price;

  newElementLi.appendChild(newElementImg);
  newElementLi.appendChild(newElementH3);
  newElementLi.appendChild(newElementP);

  return newElementLi;
}

function createProductList(array, listElement) {
  for (let i = 0; i < array.length; i++) {
    const product = array[i];
    const productCard = createProductCard(product);
    listElement.appendChild(productCard);
  }
}

createProductList(actionFiguresArray, actionFiguresList);
createProductList(paintingsArray, paintingsList);
