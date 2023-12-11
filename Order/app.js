const data = [
  {
    id: 1,
    orderid: "0001",
    product: "iPhone",
    price: "75000",
  },
  {
    id: 2,
    orderid: "0002",
    product: "MacBook",
    price: "95000",
  },
  {
    id: 3,
    orderid: "0003",
    product: "Google Pixel",
    price: "65000",
  },
];

for (let i of data) {
  console.log(i.product);
}

const tbody = document.getElementById("tbody");
const table = document.getElementById("table");
const error = document.getElementById("error");
const form = document.getElementById("form");
const inp = document.getElementById("inp");
const subbtn = document.getElementById("subbtn");
const resbtn = document.getElementById("resbtn");

let submittedValue;

document.addEventListener("DOMContentLoaded", hideTable);
form.addEventListener("submit", getData);

function hideTable() {
  table.classList.add("hide");
  error.classList.add("hide");
  console.log("Content loaded");
}

function getData(e) {
  console.log(e);
  e.preventDefault();
  submittedValue = inp.value;
  result(submittedValue);
}

  // function checkPoint(val) {
  //   for(let i of data){
  //     if(i.orderid===val){
  //         return i;
  //     }
  //   }


  // }

function result(submittedValue) {
  let foundValue;

  for(let i of data){
    if(i.orderid===submittedValue){
        foundValue = i;
    }
  }
  console.log(foundValue);

  if (foundValue) {
    let html = `
     <tr>
        <th scope="row">${foundValue.id}</th>
        <td>foundValue.orderid</td>
        <td>foundValue.product</td>
        <td>foundValue.price</td>

      </tr>
      `;

    error.classList.remove("show");
    error.classList.add("hide");

    tbody.innerHTML = html;

    table.classList.remove("hide");
    table.classList.add("show");
  } else {
    table.classList.remove("show");
    table.classList.add("hide");

    error.classList.remove("hide");
    error.classList.add("show");
  }
}

// function result(submittedValue){}


