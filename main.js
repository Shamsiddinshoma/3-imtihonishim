const menu = [
  {
    id: 1,
    title: 'fanta',
    category: 'drinks',
    price: '2.50',
    img: './images/fantaimg.png',
  },
  {
    id: 2,
    title: 'cola',
    category: 'drinks',
    price: '4.00',
    img:'./images/colaimg.jpg',
  },
  {
    id: 3,
    title: 'lavash',
    category: 'foods',
    price: '16.00',
    img:'./images/lavashimg.jpg',
  },
  {
    id: 4,
    title: 'burger',
    category: 'foods',
    price: '14.00',
    img:'./images/burger-fryer-chips-750px.jpg',
  },
  {
    id: 5,
    title: 'ice-cream',
    category: 'sweets',
    price: '5.99',
    img:'./images/icecream.jpg',
  },
  {
    id: 6,
    title: 'marmelad',
    category: 'sweets',
    price: '15.00',
    img:'./images/sweetsimg.jpg',
  },
]


const checkMenu = document.querySelector('.box')

function writeBoxes(elements_copy){
  let menuDisplay = elements_copy.map(function(item){
    return `<div class="box">
    <div class="card">
      <img src= ${item.img} alt="">
      <h4>${item.title}</h4>
      <h4 class="price">$${item.price}</h4>
      <button onclick="add(${item.id})" class="buy">buy</button>
      <button onclik= "addPop(${item.id})" class="cancellation">cancellation</button>
    </div>
  </div>`
  })
  menuDisplay = menuDisplay.join('')
  checkMenu.innerHTML = menuDisplay
}

window.addEventListener('DOMContentLoaded',function(){
  let menuDisplay = menu.map(function(item){
    return `<div class="box">
    <div class="card">
      <img src= ${item.img} alt="">
      <h4>${item.title}</h4>
      <h4 class="price">$${item.price}</h4>
      <button onclick="add(${item.id})" class="buy">buy</button>
      <button onclik= "addPop(${item.id})" class="cancellation">cancellation</button>
    </div>
  </div>`
  })
  menuDisplay = menuDisplay.join('')
  checkMenu.innerHTML = menuDisplay
})


const saved = [];

function add(id){
  saved.push(id)
  filter(menu,saved)
}

function filter(menu,saved){
  let saved_copy = modaldisplay;
  saved_copy.innerHTML = '';
  for(let i = 0; i < menu.length; i++){
    for(let k = 0; k < saved.length; k++){
      if (menu[i].id === saved[k]) {
        console.log(menu[i]);
          saved_copy.innerHTML += `
          <img>${menu[i].img}</img>
          <h1>${menu[i].title}</h1>
          <p>$${menu[i].price}</p>
          
          `
      }
    }
  }
}









const input = document.getElementById('input')
const search = document.getElementById('search')
const select = document.getElementById('select')

search.addEventListener('click',function(){
  let menuDisplay = menu.map(function(item){
    if(input.value === item.category || input.value === item.title){
      return `<div class="box">
    <div class="card">
      <img src= ${item.img} alt="">
      <h4>${item.title}</h4>
      <h4 class="price">$${item.price}</h4>
      <button onclick="add(${item.id})" class="buy">buy</button>
      <button class="cancellation">cancellation</button>
    </div>
  </div>`
    }
    
  })
  menuDisplay = menuDisplay.join('')
  checkMenu.innerHTML = menuDisplay
})


select.addEventListener('click',function(){
  let menuDisplay = menu.map(function(item){
    if(select.value === item.category){
      return `<div class="box">
    <div class="card">
      <img src= ${item.img} alt="">
      <h4>${item.title}</h4>
      <h4 class="price">$${item.price}</h4>
      <button onclick="add(${item.id})" class="buy">buy</button>
      <button class="cancellation">cancellation</button>
    </div>
  </div>`
    }
    
  })
  menuDisplay = menuDisplay.join('')
  checkMenu.innerHTML = menuDisplay
})

const foods = document.querySelector(".foods")
const drinks = document.querySelector(".drinks")
const sweets = document.querySelector(".sweets")

foods.addEventListener('click',function(){
  let menuDisplay = menu.map(function(item){
    if(item.category === 'foods'){
      return `<div class="box">
    <div class="card">
      <img src= ${item.img} alt="">
      <h4>${item.title}</h4>
      <h4 class="price">$${item.price}</h4>
      <button onclick="add(${item.id})" class="buy">buy</button>
      <button class="cancellation">cancellation</button>
    </div>
  </div>`
    }
    
  })
  menuDisplay = menuDisplay.join('')
  checkMenu.innerHTML = menuDisplay
})


sweets.addEventListener('click',function(){
  let menuDisplay = menu.map(function(item){
    if(item.category === 'sweets'){
      return `<div class="box">
    <div class="card">
      <img src= ${item.img} alt="">
      <h4>${item.title}</h4>
      <h4 class="price">$${item.price}</h4>
      <button onclick="add(${item.id})" class="buy">buy</button>
      <button class="cancellation">cancellation</button>
    </div>
  </div>`
    }
    
  })
  menuDisplay = menuDisplay.join('')
  checkMenu.innerHTML = menuDisplay
})


drinks.addEventListener('click',function(){
  let menuDisplay = menu.map(function(item){
    if(item.category === 'drinks'){
      return `<div class="box">
    <div class="card">
      <img src= ${item.img} alt="">
      <h4>${item.title}</h4>
      <h4 class="price">$${item.price}</h4>
      <button onclick="add(${item.id})" class="buy">buy</button>
      <button class="cancellation">cancellation</button>
    </div>
  </div>`
    }
    
  })
  menuDisplay = menuDisplay.join('')
  checkMenu.innerHTML = menuDisplay
})






const modaldisplay = document.querySelector('.modalkorzinka')
const korzinka = document.getElementById('korzinka')
function addClass(){
  modaldisplay.classList.toggle('extra')
  filter(menu, saved);
}




const cheapSort = document.querySelector('.cheap')
const exspensiveSort = document.querySelector('.exspensive')


cheapSort.addEventListener('click', function () {
  let elements_copy = [...menu];
  const result = elements_copy.sort(function (a, b) {
      return a.price - b.price;
  })
  result;
  console.log(elements_copy);
  // (elements_copy);
  writeBoxes(elements_copy)

})



// expensiveSort.addEventListener('click', function () {
//   let elements = [...menu];
//   const result = elements_copy.sort(function (a, b) {
//       return b.price - a.price;
//   })
//   result;
//   writeBoxes(menu);
// })





