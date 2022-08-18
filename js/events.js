// Declare and initialize variables
const btn = document.querySelector('button');
const summary = document.getElementById('summary');
const psummary = document.getElementById('psummary');
const nameInput = document.getElementById('customerName');
const smoothiesInput = document.getElementById('smoothies');
const sizeInput = document.getElementById('size');
const fruitsInput = document.getElementById('fruits');

// Functions
function random(number) {
    return Math.floor(Math.random()*(number + 1));
};

function payment(size) {
  let price;
  if (size =='Large') {
  return price = 5;
} else if (size =='Regular') {
  return price = 3;
} else {
  return price = 2;
}
};

function createOrder() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    var newOrder = new Smoothie(nameInput.value, smoothiesInput.value, sizeInput.value, fruitsInput.value);
    document.body.style.backgroundColor = rndCol;
    newOrder.order();
};

function Smoothie(customerName, smoothies ,size, fruits) {
  this.customerName = customerName;
  this.smoothies = smoothies;
  this.size = size;
  this.fruits = fruits;
  this.time = random(10) + ' minutes';
  this.price = payment(sizeInput.value);
  this.order = function() {
  summary.textContent =  this.customerName  + ' order summary: ' + this.size +
' of ' + this.smoothies + ' with additional ' + this.fruits + '. ';
  psummary.textContent = 'Total price is: $' + this.price + '. Wait time is ' + this.time + '.';
  }
}

//addEventListener()
btn.addEventListener('click', createOrder);
