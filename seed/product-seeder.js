const Product = require('../models/product');
const mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopcart');

let products = [
  new Product({
  imagePath: 'http://cdn.maypalo.com/wp-content/uploads/2016/01/Gear-S2.png',
  title: 'Samsung Gear Watch',
  description: 'Awesome Smartwatch ever!!!!',
  price: 365
  }),

  new Product({
  imagePath: 'http://icdn8.digitaltrends.com/image/photo-mar-24-1-14-12-pm-edited-1500x1000.jpg',
  title: 'Iphone Red edition',
  description: 'Awesome Iphone ever!!!!',
  price: 978
  }),

  new Product({
  imagePath: 'http://assets.otomotifnet.com/media/article_image/cover/original/65767-wuih-motor-yamaha-motogp-2017-lebih-banyak-warna-hijau.jpg',
  title: 'Motor 100cc',
  description: 'Awesome Motor ever!!!!',
  price: 9978
  }),

  new Product({
  imagePath: 'https://product1.djicdn.com/uploads/photos/114/medium_4058afad-4331-40ab-9a4e-30b49c72447b.jpg',
  title: 'Dji Mavic Pro',
  description: 'Awesome Drone ever!!!!',
  price: 1978
  }),

  new Product({
  imagePath: 'http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/14591909_335163916836190_4793481160749481984_n.jpg?ig_cache_key=MTI5NzQwNTAxNTMyOTg5MzYzOA%3D%3D.2',
  title: 'New MacbookPro',
  description: 'Awesome MacbookPro ever!!!!',
  price: 1365
  })
];

let done = 0;
for (let i = 0; i < products.length; i++) {
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
