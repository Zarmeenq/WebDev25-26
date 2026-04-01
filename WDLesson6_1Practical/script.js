/*
Challenge 1: Add the appropriate images to each array below from the list of images provided.
 "beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg", "clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg","tuna.jpg", "flan.jpg", "passionberry.jpeg", "oreocup.jpg"
*/ 

//Challenge 2: Add appropriate prices for each food in their corresponding array. (Any reasonable price works) 
//Challenge 3: Add appropriate titles for each food in their corresponding array. Use the image names as a hint for the food title.

let meat_images = ["beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg"];
let meat_prices = [4.00, 5.00, 6.00, 7.00];
let meat_titles = ["beeftips", "brisket", "ribeye", "steak"];

let seafood_images = ["clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg","tuna.jpg"];
let seafood_prices = [6.00, 7.00, 8.00, 9.00, 9.50, 10.00];
let seafood_titles = ["clams", "crabs", "lobster", "scallops", "shrimp","tuna"];

let dessert_images = ["flan.jpg", "passionberry.jpeg", "oreocup.jpg"];
let dessert_prices = [5.00, 6.00, 7.00];
let dessert_titles = ["flan", "passionberry", "oreocup"];

function init(){
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafoods");
  let d = document.getElementById("desserts");
  let build = ``;

  /* Notes for Challenges 4 through 6 below:
      1) Each challenge requires its own for loop to build the output.
      2) You can reuse the build variable as long as you set it back to `` before each loop.
      3) Create a basic card with a title, image and price.
  */
  
  //Challenge 4:  Build cards for the meats. Place the build in the meat container. 
  
  
  for(let i=0 ; i<seafood_images.length; i++){
        build+=`<div class="card">
                  <h2>${seafood_titles[i]}</h2>
                  <img class= "food" src ="images/${seafood_images[i]}">
                  <h3>$${seafood_prices[i]}</h3>
                </div>;`
  }
  s.innerHTML=build;

  //Challenge 5:  Build cards for the seafoods. Place the build in the seafood container.
  build = ``;
  for(let i=0 ; i<meat_images.length; i++){
        build+=`<div class="card">
                  <h2>${meat_titles[i]}</h2>
                  <img class= "food" src ="images/${meat_images[i]}">
                  <h3>$${meat_prices[i]}</h3>
                </div>;`
  }
  m.innerHTML=build;

  //Challenge 6:  Build cards for the desserts. Place the build in the dessert container.
  build = ``;
  for(let i=0 ; i<dessert_images.length; i++){
        build+=`<div class="card">
                  <h2>${dessert_titles[i]}</h2>
                  <img class= "food" src ="images/${dessert_images[i]}">
                  <h3>$${dessert_prices[i]}</h3>
                </div>;`
  }
  d.innerHTML=build;
}
