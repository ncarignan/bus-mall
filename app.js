'use strict';

//object
function Product(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.count = 0;
  this.picked = 0;
  Product.allProducts.push(this);
}
Product.allProducts = [];

//rand display pictures

//array to store objects//

//listener, something to be clicked
var imgEl1 = document.getElementById('productPic1');
var imgEl2 = document.getElementById('productPic2');
var imgEl3 = document.getElementById('productPic3');

imgEl1.addEventListener('click', randomProduct);
imgEl2.addEventListener('click', randomProduct);
imgEl3.addEventListener('click', randomProduct);


//new instances

new Product('R2D2 Bag', 'img/bag.jpg');
new Product('Banana Slicer', 'img/banana.jpg');
new Product('Toilet Paper Ipad', 'img/bathroom.jpg');
new Product('Banana Slicer', 'img/boots.jpg');
new Product('R2D2 Bag', 'img/breakfast.jpg');
new Product('Banana Slicer', 'img/bubblegum.jpg');
new Product('R2D2 Bag', 'img/chair.jpg');
new Product('Banana Slicer', 'img/cthulhu.jpg');
new Product('R2D2 Bag', 'img/dog-duck.jpg');
new Product('Banana Slicer', 'img/dragon.jpg');
new Product('R2D2 Bag', 'img/pen.jpg');
new Product('Banana Slicer', 'img/pet-sweep.jpg');
new Product('R2D2 Bag', 'img/scissors.jpg');
new Product('Banana Slicer', 'img/shark.jpg');
new Product('R2D2 Bag', 'img/sweep.png');
new Product('Banana Slicer', 'img/tauntaun.jpg');
new Product('R2D2 Bag', 'img/unicorn.jpg');
new Product('Banana Slicer', 'img/usb.gif');
new Product('R2D2 Bag', 'img/water-can.jpg');
new Product('Banana Slicer', 'img/wine-glass.jpg');
//etc

var productPickHistory = [[],[],[],[],[],[]];
var lastPicked = [];

function randomProduct(){
  lastPicked = [];

  for(var i = 0; i < 3; i++){

    var randomIndex = Math.floor(Math.random() * Product.allProducts.length);

    if (lastPicked.includes(randomIndex) || productPickHistory[productPickHistory.length - 1].includes(randomIndex) ){
      i--;
      console.log('already picked ' + randomIndex);
    }else{
      lastPicked.push(randomIndex);
      console.log('a picture gets ' + lastPicked);
      imgEl1.src = Product.allProducts[randomIndex].filepath;
    //   if (i = 0){
    //   }else if(i = 1){
    //     imgEl2.src = Product.allProducts[randomIndex].filepath;
    //   }else if(i = 2){
    //     imgEl3.src = Product.allProducts[randomIndex].filepath;
    //   }
    // }
    }
  }productPickHistory.push(lastPicked);
  // productPickHistory=productPickHistory.slice(4:);
  console.log('prodpickhist' + productPickHistory);
}
//   var randomIndex = Math.floor(Math.random() * Product.allProducts.length);
//   imgEl1.src = Product.allProducts[randomIndex].filepath;
//   randomIndex = Math.floor(Math.random() * Product.allProducts.length);
//   imgEl2.src = Product.allProducts[randomIndex].filepath;
//   randomIndex = Math.floor(Math.random() * Product.allProducts.length);
//   imgEl3.src = Product.allProducts[randomIndex].filepath;
//
// }



//each image selected becomes the first image, if happens 3 times, new image
//these are three unique images each time//
//next 3 are also not the same as first 3
//percentage of times clicked/shown
//votes and views in Product object
