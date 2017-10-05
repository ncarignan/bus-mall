'use strict';
//changes were made
//object
var allProducts = [];
var productPickHistory = [[]];
var lastPicked = [];
var currentProductPickHistory = [[]];

// localStorage.clear();
function localStorageAlign1(){
  if(!localStorage.allProducts){
    newInstances();
    localStorage.setItem('allProducts', JSON.stringify(allProducts));
    // console.log('created local' + localStorage.allProducts);
  }else{
    allProducts = JSON.parse(localStorage.getItem('allProducts'));
    // console.log('pulled from local' + allProducts);
  }
}
localStorageAlign1();

function localStorageAlign2(){
  if(!localStorage.productPickHistory){
    localStorage.setItem('productPickHistory', JSON.stringify(productPickHistory));
    // console.log('created local' + localStorage.productPickHistory);
  }else{
    productPickHistory = JSON.parse(localStorage.getItem('productPickHistory'));
    // console.log('pulled from local' + productPickHistory);
  }
}
localStorageAlign2();




//
// function localStorageAlign2(variableID){
//   if(!localStorage.variableID){
//     console.log(variableID);
//     localStorage.setItem('variableID', variableID);
//     localStorage.variableID = variableID;
//   }
// else{
//   variableID = localStorage.variableID;
// }
// }
// localStorageAlign2(allProducts);
// console.log(allProducts);
// localStorageAlign2(productPickHistory);
// console.log(productPickHistory);
// localStorageAlign2(testerVariable);
// console.log(testerVariable);
// console.log(localStorage.testerVariable);

// var
// localStorageAlign2(lastPicked);


function Product(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.count = 0;
  this.picked = 0;
  allProducts.push(this);
}

//rand display pictures

//array to store objects//

//listener, something to be clicked
var imgEl1 = document.getElementById('productPic1');
var imgEl2 = document.getElementById('productPic2');
var imgEl3 = document.getElementById('productPic3');

var titles = [];
var picked = [];

// imgEl1.addEventListener('click', function(){randomProduct();productChoiceLogger(1);});

//new instances
function newInstances(){
  new Product('R2D2 Bag', 'img/bag.jpg');
  new Product('Banana Slicer', 'img/banana.jpg');
  new Product('Toilet Paper Ipad', 'img/bathroom.jpg');
  new Product('Toeless Boots', 'img/boots.jpg');
  new Product('Coffee Toaster', 'img/breakfast.jpg');
  new Product('Meatball Bubblegum', 'img/bubblegum.jpg');
  new Product('butt bumper', 'img/chair.jpg');
  new Product('cthulhu', 'img/cthulhu.jpg');
  new Product('dog duck', 'img/dog-duck.jpg');
  new Product('dragon meat', 'img/dragon.jpg');
  new Product('pentencile', 'img/pen.jpg');
  new Product('pet swiffer', 'img/pet-sweep.jpg');
  new Product('pizza scizzors', 'img/scissors.jpg');
  new Product('shark bag', 'img/shark.jpg');
  new Product('baby swiffer', 'img/sweep.png');
  new Product('tauntaun bag', 'img/tauntaun.jpg');
  new Product('unicorn meat', 'img/unicorn.jpg');
  new Product('naughty arm', 'img/usb.gif');
  new Product('water can', 'img/water-can.jpg');
  new Product('wine glass', 'img/wine-glass.jpg');
}
//etc


function randomProduct(){
  lastPicked = [];
  for(var i = 0; i < 3; i++){
    var randomIndex = Math.floor(Math.random() * allProducts.length);
    // console.log('pickhistory length is ' + currentProductPickHistory.length);
    if (lastPicked.includes(randomIndex) || currentProductPickHistory[currentProductPickHistory.length - 1].includes(randomIndex) ){
      i--;
      // console.log('already picked ' + randomIndex);
    }else{
      lastPicked.push(randomIndex);
      // console.log('a picture gets ' + lastPicked);
      // console.log(i);
      if (i === 0){
        imgEl1.src = allProducts[randomIndex].filepath;
        allProducts[randomIndex].count++;
        // console.log(allProducts[randomIndex].count);
      }else if(i === 1){
        imgEl2.src = allProducts[randomIndex].filepath;
        allProducts[randomIndex].count++;
      }else if(i === 2){
        imgEl3.src = allProducts[randomIndex].filepath;
        allProducts[randomIndex].count++;
      }
    }

  }currentProductPickHistory.push(lastPicked);
  // productPickHistory=productPickHistory.slice(4:);
  // console.log('prodpickhist' + productPickHistory);
}
randomProduct();

function productChoiceLogger(imgElNumber){
  if (imgElNumber == 1){
    allProducts[(lastPicked[0])].picked++;
  }else if (imgElNumber === 2) {
    allProducts[lastPicked[1]].picked++;
  }else if (imgElNumber === 3){
    allProducts[ lastPicked[2] ].picked++;
  }
  if (currentProductPickHistory.length > 26){
    imgEl1.removeEventListener('click', handleClick1);
    imgEl2.removeEventListener('click', handleClick2);
    imgEl3.removeEventListener('click', handleClick3);

    productPickHistory = productPickHistory.concat(currentProductPickHistory);
    localStorage.allProducts = JSON.stringify(allProducts);
    localStorage.productPickHistory = JSON.stringify(productPickHistory);
    // var ulEl = document.getElementById('clickStats');
    // for(var i in allProducts){
    //   var liEl = document.createElement('li');
    //   liEl.textContent = allProducts[i].name + ' was displayed ' + allProducts[i].count + ' times and was picked ' + allProducts[i].picked + ' times';
    //   ulEl.appendChild(liEl);

    // }
    updateChartArrays();
    drawChart();
  }
}

//votes[i] =allProducts[i].votes

//chart stuff

function updateChartArrays(){
  for(var i in allProducts){
    titles[i] = allProducts[i].name;
    picked[i] = allProducts[i].picked;
  }
  // console.log(titles, picked);
}

function drawChart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: titles,
      datasets: [{
        label: 'Number of times Product was Picked',
        backgroundColor: 'red',
        hoverBackgroundColor: 'gold',
        data: picked,
      }]
    },

    // Configuration options go here
    options: {
      maintainAspectRatio: true,
      color:'black',
      legend: {
        labels: {
          fontColor:'black',
        }
      }
    }
  });
}




//onclick adds an event handler function that  pulls the event click in the chart
imgEl1.addEventListener('click', handleClick1);
imgEl2.addEventListener('click', handleClick2);
imgEl3.addEventListener('click', handleClick3);

function handleClick1(){
  randomProduct();
  productChoiceLogger(1);
}
function handleClick2(){
  randomProduct();
  productChoiceLogger(2);
}
function handleClick3(){
  randomProduct();
  productChoiceLogger(3);
}
// handleClick();
