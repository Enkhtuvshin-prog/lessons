const table =document.getElementById('product');
let allProducts = [];

const displayProduct = () => {
    allProducts.forEach((product) => {
      const item =
        `
        <tr>
        <th scope="row"></th>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td>${product.category}</td>
        <td>${product.isSpecial}</td>
        <td> <button class="btn btn-success">Засах</button><button class="btn btn-danger ms-2">Устгах</button></td>
      </tr>   
    `
      table.innerHTML += item
    }
    )
  };
  
const getProducts = async () => {
    const response = await fetch('http://192.168.1.220:4040/product');
    const data = await response.json();
    allProducts = data.product;
    displayProduct();
    console.log(data);
  }
  getProducts();
//   location = "./newProduct.html"
  
