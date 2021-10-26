const htmlLink = "http://localhost:3000/products";

// const buttonOne = document.getElementById("btn1");
// count = 0;
// buttonOne.onclick = function countProductbuttonOne() {
//   count += 1;
//   buttonOne.innerText = "Add to cart " + count;
// };

// const buttonTwo = document.getElementById("btn2");
// count = 0;
// buttonTwo.onclick = function countProductbuttonTwo() {
//   count += 1;
//   buttonTwo.innerText = "Add to cart " + count;
// };

// const buttonThree = document.getElementById("btn3");
// count = 0;
// buttonThree.onclick = function countProductbuttonThree() {
//   count += 1;
//   buttonThree.innerText = "Add to cart " + count;
// };

init();

function init() {
  getProductData();
  //postProductData();
  //--> einbinden in funktion um nur dann zu posten, wenn btn gedrückt wird.
}

function getProductData() {
  fetch(htmlLink)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

function postProductData(number, someTitel, theManu, someDetail, zeroCart) {
  fetch(htmlLink, {
    method: "POST",
    body: JSON.stringify({
      id: number,
      title: someTitel,
      manufactor: theManu,
      productdetail: someDetail,
      cart: zeroCart,
    }),
  });
}
