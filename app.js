'use strict';

const calcbtn = document.getElementById('calculate');
const bill = document.getElementById('bill');
const tip = document.getElementById('tip');
const totalSpan = document.getElementById('total');

const calculateTotalAmount = function () {
  const billVlue = bill.value;
  const tipValue = tip.value;

  const totalValue = billVlue * (1 + tipValue / 100);
  totalSpan.innerText = '$' + totalValue.toFixed(2);
};

calcbtn.addEventListener('click', calculateTotalAmount);
