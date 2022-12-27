console.log('product');
const productList = document.querySelector('.productList');
const cartList = document.querySelector('.cartList');
const counter = document.querySelector('.cartCounter');
let allProducts = [];
let cartProduct = [];


const displayProduct = () => {
  allProducts.forEach((product, idx) => {
    const item =
      `
 <div class="col-12 col-md-6 col-xl-3 ">
    <div class="card h-100">
      <img src="${product.thumbnail}" class="card-img-top h-50" alt="...">
      <div class="card-body">
        <h5 class="card-title text-center">${product.title}</h5>
        <div class="badge bg-success-subtle  ms-auto" style="width: 6rem; color:green;">
          ${product.discountPercentage}OFF.
        </div>
        <div class="text">
          <h3>$${product.price}</h3>
          <p class="text-truncate">${product.description}</p>
        </div>
        <div class="row ">
          <div class="col">
            <img src="./img/Vector.png" alt="">
            <img src="./img/Vector.png" alt="">
            <img src="./img/Vector.png" alt="">
            <img src="./img/Vector.png" alt="">
            <img src="./img/Vector.png" alt="">
            <p>${product.rating}</p>
            
          </div>
          <div class="col ms-auto">
            <button class="btn btn-outline-primary" onclick="cart(${idx})" >
             Add cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
    productList.innerHTML += item
  }
  )
};

const getProducts = async () => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  allProducts = data.products;
  displayProduct();
  console.log(data);
}
getProducts();





const displayCart = () => {
  cartList.innerHTML = "";
  cartProduct.forEach((product) => {
    const cartItem = `
    <div class="offcanvas-body">
                <div class="card mb-3" style="max-width: 540px;" >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="${product.thumbnail}" alt="..." style="max-width: 120px; height: 210px" >
                    </div>
                    <div class="col-md-6">
                      <div class="card-body">
                        <h5 class="card-title">${product.title} <title></title></h5>
                        <h3>$${product.price}</h3>
                        <div class="counter">
                          <button class="btn btn-light ">-</button>
                          <span class="m-3" id="product-count">0</span>
                          <button class="btn btn-light" onclick="countAdd(this)">+</button>
                        </div>
                        <hr>
                        <div class=" mt-2 d-flex justify-content-between">
                          <p>Total price</p>
                          <span>$</span>
                        </div>
                      </div>
                    </div>
                    <button type="button" class="btn-close ms-auto" data-bs-dismiss="offcanvas-body" aria-label="Close" onclick="deleteCart(this)"  ></button>
                  </div>
                </div>
              </div>`
    cartList.innerHTML += cartItem;

  }
  )
};

const deleteCart =(e) =>{
  const parent= e.parentNode.parentNode.parentNode
  const child = e.parentNode.parentNode
  parent.removeChild(child);
  cartProduct.length--;
  counter.innerText=cartProduct.length;
  
};

const cart = (product) => {
  console.log('cart', product);
  cartProduct.push(allProducts[product]);
  counter.innerText = cartProduct.length
  displayCart();
  // console.log(cartProduct);
};
// let haha = document.getElementById("product-count")
let count = 0;
const countAdd =(e) =>{
  count++;
  e.parentNode.children[1].textContent = count
  // haha.textContent = count;
  
}

