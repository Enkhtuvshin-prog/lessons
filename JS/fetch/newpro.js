const saveBtn = document.querySelector('#addBtn');
const titleEl = document.getElementById('proTitle');
const catEl = document.getElementById('proList');
const priceEl = document.getElementById('proPrice');
const img = document.getElementById('proImg');

console.log(titleEl);

// const displayProduct = () => {
//     allProducts.forEach((product) => {
//       const item =
//         `
//         <tr>
//         <th scope="row"></th>
//         <td>${product.title}</td>
//         <td>${product.price}</td>
//         <td>${product.category}</td>
//         <td>${product.isSpecial}</td>
//         <td> <button class="btn btn-success">Засах</button><button class="btn btn-danger ms-2">Устгах</button></td>
//       </tr>   
//     `
//       table.innerHTML += item
//     }
//     )
//   };
  
const postProduct = async () => {
    const response = await fetch('http://192.168.1.220:4040/product',{
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({
            title: titleEl.value,
            category: catEl.value,
            price: priceEl.value,
            imageURL: "url",
            isspecial: false,
            days: "thu",
        }),
    }
    );
    console.log(response);
    location = " ./admin.html";
};
//   getProducts();
saveBtn.addEventListener('click', postProduct)