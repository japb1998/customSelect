import Select from './select.js';

const selectElements = document.querySelectorAll("[data-custom]");

// const select = new Select(selectElement);


selectElements.forEach( selectElement => {
    new Select(selectElement);
});


//testing why querySelectorAll do not return an array and making it an array;

// console.log(selectElements[0].querySelectorAll('option'));
//  var options = [...selectElements[0].querySelectorAll('option')].map(element => element);
//  console.log(options)

