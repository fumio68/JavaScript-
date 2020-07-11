'use strict';
let jsbook = {title: 'JavaScript', price: 2500, stock: 3};
// for(let p in jsbook) {
//   console.log(`${p}=${jsbook[p]}`)
// }
document.querySelector('#title').textContent = jsbook.title;
document.querySelector('#price').textContent = jsbook.price + '円';
document.querySelector('#stock').textContent = jsbook.stock;
