'use strict';

const totalPrice = function(price) {
  const tax = 0.1
  let total = price + price * tax
  return total;
}

let text1 = document.querySelector('#output1');
let text2 = document.querySelector('#output2');
text1.textContent=`コーヒーメーカーの金額は${totalPrice(8000)}円です`;
text2.textContent=`コーヒーフィルターの金額は${totalPrice(200)}円です`;
