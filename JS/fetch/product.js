console.log('product');
const productList = document.querySelector('.productList');
let allProducts= [];

const cart =(e) =>{
  const parent = e.parentNode.parentNode.parentNode
  console.log(parent);
}

const displayProduct = () =>{
    allProducts.forEach((product) =>{
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
            <button class="btn btn-outline-primary" onclick="cart(this)">
             Сагсанд нэмэх
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
 
const getProducts= async () =>{
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    allProducts = data.products;
    displayProduct();
    console.log(data);
}
getProducts();

