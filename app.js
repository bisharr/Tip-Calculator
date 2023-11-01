'use strict';

// My Try
// const calcBtn = document.getElementById('calculate');

// calcBtn.addEventListener('click', function () {
//   const totalamount =
//     Number(document.getElementById('bill').value) +
//     Number(document.getElementById('tip').value);
//   document.getElementById('total').textContent = totalamount;
// });

const btnEl = document.getElementById('calculate');
const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const totalSpan = document.getElementById('total');

const CalculateTotal = function () {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = billValue * (1 + tipValue / 100);
  totalSpan.innerText = '$' + totalValue.toFixed(2);
};

btnEl.addEventListener('click', CalculateTotal);
