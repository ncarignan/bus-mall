'use strict';

function Product(name, filepath){
  this.name = name;
  this.filepath = filepath;

}
Product.allProducts = [];
//object

//rand display pictures

//array to store objects//

//listener, something to be clicked
var imgEl = document.getElementById('product-pic');

imgEl.addEventListener('click', randomProduct);


//new instances

new Product('cruisin product', 'img/cruisin-product.jpg');
//etc

function randomProduct(){
  var randomIndex = Math.floor(Math.random() * Product.allProducts.length);
  imgEl.src = ProductallGoats[rannndomImdex];

}


//each image selected becomes the first image, if happens 3 times, new image
//these are three unique images each time//
//next 3 are also not the same as first 3
//percentage of times clicked/shown
