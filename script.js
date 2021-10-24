const htmlLink = "http://localhost:3000/products";

const buttonEins = document.getElementById("btn1");
count = 0;
buttonEins.onclick = function () {
  count += 1;
  buttonEins.innerText = "Add to cart " + count;
};

// const buttonZwei = document.getElementById("btn2");
// count = 0;
// buttonZwei.onclick = function () {
//   count += 1;
//   buttonZwei.innerText = count;
// };

// const buttonDrei = document.getElementById("btn3");
// count = 0;
// buttonDrei.onclick = function () {
//   count += 1;
//   buttonDrei.innerText = count;
// };

init();

function init() {
  getProductData();
  postProductData();
}

function getProductData() {
  fetch(htmlLink)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

function postProductData() {
  fetch(htmlLink, {
    method: "POST",
    body: JSON.stringify({
      id: no,
      title: someTitel,
      manufactor: anyManu,
      productdetail: someDetail,
      cart: zeroCart,
    }),
  });
}
