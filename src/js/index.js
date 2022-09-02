const formatter = new Intl.NumberFormat('en-US', {
   minimumFractionDigits: 2,
   maximumFractionDigits: 2
});

const check_total = document.querySelector('output');
const check_amount = document.querySelector('#check-amount');
const percentage_amount = document.querySelector('#percentage-amount');

const calc_btn = document.querySelector('#calc-btn');
calc_btn.addEventListener('click', function() { 
   const check_amount_value = parseFloat(check_amount.value);
   const percentage_amount_value = parseFloat(percentage_amount.value);
   const percentage_amount_value_decimal = percentage_amount_value / 100;
   
   const check_total_value = check_amount_value + check_amount_value * percentage_amount_value_decimal;

   check_total.value = formatter.format(check_total_value);
});
