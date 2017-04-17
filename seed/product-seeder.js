var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopcart');

var products = [
  new Product({
  imagePath: 'http://cdn.maypalo.com/wp-content/uploads/2016/01/Gear-S2.png',
  title: 'Samsung Gear Watch',
  description: 'Awesome Smartwatch ever!!!!',
  price: 365
  }),

  new Product({
  imagePath: 'http://icdn8.digitaltrends.com/image/photo-mar-24-1-14-12-pm-edited-1500x1000.jpg',
  title: 'Iphone Red Wdition',
  description: 'Awesome Iphone ever!!!!',
  price: 978
  }),

  new Product({
  imagePath: 'http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/14591909_335163916836190_4793481160749481984_n.jpg?ig_cache_key=MTI5NzQwNTAxNTMyOTg5MzYzOA%3D%3D.2',
  title: 'New MacbookPro',
  description: 'Awesome MacbookPro ever!!!!',
  price: 1365
  }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function (err, res) {
    done++;
    if(done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
