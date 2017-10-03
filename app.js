'use strict';
//changes were made
//object
function Product(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.count = 0;
  this.picked = 0;
  Product.allProducts.push(this);
}
Product.allProducts = [];
Product.productPickHistory = [[]];
Product.lastPicked = [];

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
new Product('tentacle meat', 'img/unicorn.jpg');
new Product('naughty arm', 'img/usb.gif');
new Product('water can', 'img/water-can.jpg');
new Product('wine glass', 'img/wine-glass.jpg');
//etc


function randomProduct(){
  Product.lastPicked = [];
  for(var i = 0; i < 3; i++){
    var randomIndex = Math.floor(Math.random() * Product.allProducts.length);
    if (Product.lastPicked.includes(randomIndex) || Product.productPickHistory[Product.productPickHistory.length - 1].includes(randomIndex) ){
      i--;
      console.log('already picked ' + randomIndex);
    }else{
      Product.lastPicked.push(randomIndex);
      console.log('a picture gets ' + Product.lastPicked);
      console.log(i);
      if (i === 0){
        imgEl1.src = Product.allProducts[randomIndex].filepath;
        Product.allProducts[randomIndex].count++;
        console.log(Product.allProducts[randomIndex].count);
      }else if(i === 1){
        imgEl2.src = Product.allProducts[randomIndex].filepath;
        Product.allProducts[randomIndex].count++;
      }else if(i === 2){
        imgEl3.src = Product.allProducts[randomIndex].filepath;
        Product.allProducts[randomIndex].count++;
      }
    }

  }Product.productPickHistory.push(Product.lastPicked);
  // Product.productPickHistory=Product.productPickHistory.slice(4:);
  // console.log('prodpickhist' + Product.productPickHistory);
}

function productChoiceLogger(imgElNumber){
  if (imgElNumber == 1){
    Product.allProducts[(Product.lastPicked[0])].picked++;
  }else if (imgElNumber === 2) {
    Product.allProducts[Product.lastPicked[1]].picked++;
  }else if (imgElNumber === 3){
    Product.allProducts[ Product.lastPicked[2] ].picked++;
  }
  if (Product.productPickHistory.length > 25){
    imgEl1.removeEventListener('click', handleClick1);
    imgEl2.removeEventListener('click', handleClick2);
    imgEl3.removeEventListener('click', handleClick3);

    // var ulEl = document.getElementById('clickStats');
    // for(var i in Product.allProducts){
    //   var liEl = document.createElement('li');
    //   liEl.textContent = Product.allProducts[i].name + ' was displayed ' + Product.allProducts[i].count + ' times and was picked ' + Product.allProducts[i].picked + ' times';
    //   ulEl.appendChild(liEl);

    // }
    updateChartArrays();
    drawChart();
  }
}

//votes[i] =Product.allProducts[i].votes

//chart stuff

function updateChartArrays(){
  for(var i in Product.allProducts){
    titles[i] = Product.allProducts[i].name;
    picked[i] = Product.allProducts[i].picked;
  }
  console.log(titles, picked);
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
        backgroundColor: 'navy',
        hoverBackgroundColor: 'gold',
        data: picked,
      }]
    },

    // Configuration options go here
    options: {
    }
  });
}
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
