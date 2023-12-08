products = JSON.parse(localStorage.getItem("products"));
let cart = []; //everything being purchased must be added here

let items = document.querySelector("[data-items]");

function productDisplay(prod) {
  let p = prod.map(function (item, index) {
    console.log(item);
    return `
                             <div class="col">
                                <div class="card h-100 w-75">
                                         <img src="${item.url}" class="card-img-top " >
                                            <div class="card-body">
                                                <h5 class="card-title">${item.name}</h5>
                                                <p class="card-text">${item.description}.</p>
                                                <p class="price">R${item.price}</p>
                                                <button 'class='w-50' id='btnAdd' value=${index} data-add>Cart</button>
                                            </div>
                                          </div>
                                        </div>
                                                        `;
  });
  //join will join the trs together
  items.innerHTML = p.join("");
}
productDisplay(products);

let sortbtn = document.querySelector("[data-sort]");

//sort function
sortbtn.addEventListener("click", sortPrice);

function sortPrice(event) {
  event.preventDefault();

  let sortedPrice = products.sort((a, b) => {
    return parseInt(a.price) - parseInt(b.price);
  });

  productDisplay(sortedPrice);
  alert("Items will be sorted by price from low to high");
  console.log(sortedPrice);
}

//search function
let inputV = document.querySelector("[data-input]");
function find() {
  let findItem = document.querySelector("[data-input]").value.toLowerCase();

  let searchFilter = products.filter((item) => {
    return item.name.toLowerCase().includes(findItem);
  });
  productDisplay(searchFilter);
}
inputV.addEventListener("keyup", find);

let loader = document.querySelector("[data-spinner]");

if (products.length === 0) {
  items.innerHTML = `
    *<div class="d-flex justify-content-center">
    <div class="spinner-border p-5 " id="spinner"  role="status">
      <span class="visually-hidden" data-spinner>Loading...</span>
    </div>
  </div>`;
} else {
  productDisplay(products);
}

function add(index) {
  cart.push(products[index]);
  localStorage.setItem("cart", JSON.stringify(cart));
}
// add event listener on parent
items.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-add")) {
    // alert('button pressed')
    add(event.target.value);
  }
});
