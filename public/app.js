var createCatSection = function() {
  var catSection = document.createElement('ul');
  catSection.classList.add('cat');
  return catSection;
};

var createCatName = function(name){
  var catName = document.createElement('li');
  catName.innerText = name;
  return catName;
};

var createCatFood = function(food){
  var catFood = document.createElement('li');
  catFood.innerText = food;
  return catFood;
};

var createCatImage = function(image){
  var catImage = document.createElement('img');
  catImage.width = 500;
  catImage.height = 380;
  catImage.src = image;
  return catImage;
};

var appendElements = function(cats, catSection, catName, catFood, image){
  catFood.appendChild(image)
  catName.appendChild(catFood);
  catSection.appendChild(catName);
  cats.appendChild(catSection);
};


var addCat = function(name, food, image){
  var catSection = createCatSection();
  var catName = createCatName(name);
  var catFood = createCatFood(food);
  var image = createCatImage(image);
  var cats = document.getElementById('cats');
  appendElements(cats, catSection, catName, catFood, image);
};

var cats = [
{name: "Boba",
food: "Sock Fluff",
image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
{name: "Max",
food: "Whiskers Temptations",
image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
{name: "Trevor Nelson",
food: "Corn Flakes",
image: "https://i.ytimg.com/vi/jaEI_7nEh9E/hqdefault.jpg"},
{name: "Moomin",
food: "Celery",
image: "http://www.ihanaiset.fi/product_pictures/medium/Moomin+magnet+Snorkmaiden++cat-5749.jpg"}];

var app = function () {
  for(cat of cats){
    addCat("Name: " + cat.name,"Favourite food: " + cat.food + "\n", cat.image)
  }
};


window.onload = app;