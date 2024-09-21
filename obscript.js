const myImage = document.getElementById('myImage');
const myImage2 = document.getElementById('myImage2');
const counterElement = document.getElementById('counter');
const priceElement = document.getElementById('price');
const price2Element = document.getElementById('price2'); // Get the price2 element
const price3Element = document.getElementById('price3'); // Get the price3 element
let counter = 0;
let intervalId = null; // Store the interval ID
let intervalId2 = null; // Store the interval ID
let intervalId3 = null; // Store the interval ID
let intervalAmountP1 = 1
let intervalAmountP2 = 5
let intervalAmountP3 = 15
let price = 10; // Initial price
let price2 = 60; // Initial price2
let price3 = 150; // Initial price3
let additionalDecreasePrice = 0; // Initialize additional decrease for price
let additionalDecreasePrice2 = 0; // Initialize additional decrease for price2
let additionalDecreasePrice3 = 0; // Initialize additional decrease for price3
myImage.addEventListener('click', () => {
  counter++;
  counterElement.textContent = counter;
});

myImage2.addEventListener('click', () => {
  if (counter >= 10 + additionalDecreasePrice) {
    counter -= 10 + additionalDecreasePrice; // Decrease counter by 20 + additional decrease
    counterElement.textContent = counter;
    
    // Start the interval if it's not already running
    if (!intervalId) {
      intervalId = setInterval(() => {
        counter += intervalAmountP1; // Increase counter by intervalAmount
        counterElement.textContent = counter;
      }, 700); // 700 milliseconds (0.7 second)
    } else {
      // Increase the interval amount
      intervalAmountP1++ ;
    }
    
    // Increase the price by 10
    price += 10;
    priceElement.textContent = price;
    // Increase the additional decrease amount for the next click
    additionalDecreasePrice += 10;
  }
});

// Event listener for the third image
// This code assumes that the third image is clickable
const thirdImage = document.querySelector('.third-image-container img');
thirdImage.addEventListener('click', () => {
  if (counter >= 60 + additionalDecreasePrice2) {
    counter -= 60 + additionalDecreasePrice2; 
    counterElement.textContent = counter;
    
    // Start the interval if it's not already running
    if (!intervalId2) {
      intervalId2 = setInterval(() => {
        counter += intervalAmountP2; 
        counterElement.textContent = counter;
      }, 700); // 700 milliseconds (0.7 seconds)
    } else {
      // Increase the interval amount
      intervalAmountP2 += 5; // Increase by 5 each time
    }
    // Increase the price2 by 10
    price2 += 20;
    price2Element.textContent = price2; 
    // Increase the additional decrease amount for the next click
    additionalDecreasePrice2 += 20;
  }
});

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  document.body.style.backgroundPositionY = scrollTop + 'px';
});


const fourthImage = document.querySelector('.fourth-image-container img');
fourthImage.addEventListener('click', () => {
  if (counter >= 150 + additionalDecreasePrice3) {
    counter -= 150 + additionalDecreasePrice3; 
    counterElement.textContent = counter;

    // Start the interval if it's not already running
    if (!intervalId3) {
      intervalId3 = setInterval(() => {
        counter += intervalAmountP3; 
        counterElement.textContent = counter;
      }, 700); // 700 milliseconds (0.7 seconds)
    } else {
      // Increase the interval amount
      intervalAmountP3 += 15; // Increase by 15 each time
    }
    // Increase the price3 by 75
    price3 += 75;
    price3Element.textContent = price3; 
    // Increase the additional decrease amount for the next click
    additionalDecreasePrice3 += 75;
  }
});
