let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Caramel-Macchiato',
        image: 'Caramel-Macchiato.jpg',
        price: 120.00

    },
    {
        id: 2,
        name: 'Iced Americano',
        image: 'Americano.jpg',
        price: 100.00

    },
    {
        id: 3,
        name: 'Iced Coffee Vanilaa',
        image: 'Iced-coffee-Vanilla.jpg',
        price: 129.00

    },
    {
        id: 4,
        name: 'Spanish Latte',
        image: 'Spanish-Latte.jpg',
        price: 139.00

    },
    {
        id: 5,
        name: 'Strawberry Milk',
        image: 'strawberry-milk.png',
        price: 150.00

    },
    {
        id: 6,
        name: 'Iced Matcha',
        image: 'iced-matcha.webp',
        price: 119.00

    }
];
let listCards = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src= "${value.image}"/>
            <div class = "title">${value.name}</div>
            <div class = "price">${value.price.toLocaleString()}</div>
            <button onclick = "addToCard(${key})">Add to Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();

function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity =1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) =>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src = "${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>${value.quantity}</div>
                <div>
                    <button onclick = "changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class = "count">${value.quantity}</div>
                    <button onclick = "changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity
        listCards[key].price = quantity * products[key].price
    }
    reloadCard();
}

var navbar = document.querySelector('nav');


window.addEventListener('scroll', function() {
    if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
function scrollToMenu() {
    const targetElement = document.getElementById('menu');
    if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}
function closeMenu() {
    const checkbox = document.getElementById('check');
    checkbox.checked = false; 
}




