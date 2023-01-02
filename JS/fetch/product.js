
console.log('product');
const productList = document.querySelector('.productList');
const cartList = document.querySelector('.cartList');
const counter = document.querySelector('.cartCounter');
// const categorys = document.querySelector('.categorys')
const categorys =document.getElementById('categorys');
// console.log(categorys);
const cartPrice = document.querySelector('.cartPrice');
// console.log(cartPrice);
let allProducts = [];
let cartProduct = [];
let allCategorys = [];


const displayProduct = () => {
  allProducts.forEach((product, idx) => {
    const item =
      `
 <div class="col-12 col-md-6 col-xl-3">
    <div class="card h-100" style="max-height: 400px">
      <img src="${product.thumbnail}" class="card-img-top" alt="..." style="max-height: 180px">
      <div class="card-body">
        <h5 class="card-title text-center">${product.title}</h5>
        <div class="badge bg-success-subtle  ms-auto" style="width: 4rem; color:green;">
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
            <button class="btn btn-outline-primary" onclick="cart(${product.id})" >
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
    <div class="offcanvas-body" >
                <div class="card mb-3" style="max-width: 450px; height:150px " >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="${product.thumbnail}" alt="..." style="max-width: 120px; height: 150px" >
                    </div>
                    <div class="col-md-7">
                      <div class="card-body">
                        <h5 class="card-title">${product.title} <title></title></h5>
                        <h3>$${product.price}</h3>
                        <div class="counter">
                          <button class="btn btn-light" onclick="hasah(this)" >-</button>
                          <span class="m-3" id="product-count">${product.count}</span>
                          <button class="btn btn-light" onclick="countAdd(${product.id})">+</button>
                        </div>                        
                      </div>
                      </div>
                      <button type="button" class="btn-close ms-auto col-1" data-bs-dismiss="offcanvas-body" aria-label="Close" onclick="deleteCart(this)"  ></button>
                  </div>
                </div>
    </div>`
    cartList.innerHTML += cartItem;
  }
  )
  const totalCartPrice = calculateCartPrice();
  cartPrice.innerText = `$${totalCartPrice}`;
};

const deleteCart =(e) =>{
  const parent= e.parentNode.parentNode.parentNode
  const child = e.parentNode.parentNode
  parent.removeChild(child);
  cartProduct.length--;
  counter.innerText=cartProduct.length;
};

// const cart = (product) => {
//   console.log('cart', product);
//   cartProduct.push(allProducts[product]);
//   counter.innerText = cartProduct.length
//   displayCart();
//   // console.log(cartProduct);
// };

const displayCategory = () =>{
  categorys.innerHTML = "";
  allCategorys.forEach((category) =>{
    const categoryItem =  `<li><button onClick="getCategoryProduct('${category}')" class="dropdown-item" >${category} </button></li> `
    categorys.innerHTML += categoryItem;
  })
};

const getCategorys = async() =>{
  const x = await fetch('https://dummyjson.com/products/categories');
  const data = await x.json();
  allCategorys = data;
  displayCategory();
  // console.log(allCategorys);
}
getCategorys();

const getCategoryProduct = async (category) => {
  // console.log(category);
  const response = await fetch( `https://dummyjson.com/products/category/${category}`);
  const data = await response.json();
  allProducts = data.products;
  displayProduct();
};

const cart = (productId) => {
  // console.log(cartProduct);
  const findIdx = cartProduct.findIndex((item) => item.id === productId);
  if (findIdx > -1) {
    //ene baraa cartProducts array dotor bval nemehgui harin baraanii too hemjee nemne
    cartProduct[findIdx].count += 1;
  } else {
    //bhgui bol baraag nemne
    const findIndex = allProducts.findIndex((item) => item.id === productId);

    const newBaraa = { count: 1, ...allProducts[findIndex] };
    cartProduct.push(newBaraa);
  }
  counter.innerText = cartProduct.length;
  displayCart();
};


const calculateCartPrice = () => {
  let sumPrice = 0;
  for (product of cartProduct) {
    sumPrice = sumPrice + product.price * product.count;
  }
  return sumPrice;
};
 
// counter add
let countAdd = (cartId) =>{
let c = cartProduct[cartId-1].count
if(c>=0){
  c+=1;
  displayCart();
}

  console.log('x', cartProduct);
  console.log('k',cartId);
  console.log('c', c);
};
countAdd();
//pagination
