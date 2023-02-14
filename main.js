const menu = [
  {
    id: 1,
    title: 'fanta',
    category: 'drinks',
    price: '2.50',
    img: './images/drinks1.webp',
  },
  {
    id: 2,
    title: 'cola',
    category: 'drinks',
    price: '4.00',
    img:'./images/drinks1.webp',
  },
  {
    id: 3,
    title: 'lavash',
    category: 'foods',
    price: '12.00',
    img:'./images/foodsimg.jpg',
  },
  {
    id: 4,
    title: 'burger',
    category: 'foods',
    price: '14.00',
    img:'./images/foodsimg.jpg',
  },
  {
    id: 5,
    title: 'ice-cream',
    category: 'sweets',
    price: '5.99',
    img:'./images/sweetsimg.jpg',
  },
  {
    id: 6,
    title: 'snicers-cream',
    category: 'sweets',
    price: '15.00',
    img:'./images/sweetsimg.jpg',
  },
]

const saved = [

]


const checkMenu = document.querySelector('.box')


window.addEventListener('DOMContentLoaded',function(){
  let menuDisplay = menu.map(function(item){
    return `<div class="box">
    <div class="card">
      <img src= ${item.img} alt="">
      <h4>${item.title}</h4>
      <h4 class="price">$${item.price}</h4>
      <button onclick="addToPush(${item.id})" class="buy" >buy</button>
      <button class="cancellation">cancellation</button>
    </div>
  </div>`
  })
  menuDisplay = menuDisplay.join('')
  checkMenu.innerHTML = menuDisplay
})

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
      <button class="buy")>buy</button>
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
      <button class="buy" onclick="addToPush(${item.id})" >buy</button>
      <button class="cancellation">cancellation</button>
    </div>
  </div>`
    }
    
  })
  menuDisplay = menuDisplay.join('')
  checkMenu.innerHTML = menuDisplay
})

const menukorzinka = document.querySelector('.menu-korzinka')

function addToPush(item) {
  console.log(item);
  saved.push(item);

  console.log(menu[item-1].title);

  let menuDisplay = saved.map(function(item){
      return `
       <img src= ${menu[item-1].img} alt="">
      `
    
  })
  menuDisplay = menuDisplay.join('')
  menukorzinka.innerHTML = menuDisplay
}













