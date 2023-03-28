// Write your code here...
let menuItems = document.querySelector("#menu-items")
let dishImage = document.querySelector("#dish-image") //dish-image
let dishText = document.querySelector("#dish-text") //dish-text
let dishName = document.querySelector("#dish-name") //dish-name
let dishDesc = document.querySelector("#dish-description") //dish-description
let dishPrice = document.querySelector("#dish-price") //dish-price
let form = document.querySelector("#cart-form")
let cartAmount = document.querySelector("#cart-amount")
let alreadyInBag = document.querySelector("#number-in-cart")

//section dish???
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/menu')
        .then((res) => res.json())
        .then((data) =>
        {data.forEach(function (item) {
                // renderItems(data)
            })
            renderItems(data)
        })


})

function renderItems(menu){
    menu.forEach(function(item) {
        let newItem = document.createElement('span')
        newItem.textContent = item.name
        if(item.id == 1) {
             dishImage.src = item.image
             dishName.textContent = item.name;
             dishDesc.textContent = item.description;
             dishPrice.textContent = `$${item.price}`
        }
        newItem.addEventListener('click', () =>{
            dishImage.src = item.image
             dishName.textContent = item.name;
             dishDesc.textContent = item.description;
             dishPrice.textContent = `$${item.price}`
        })
        menuItems.append(newItem)
    })

}

form.addEventListener('submit',(e) =>{
    e.preventDefault()
    let addOn = parseInt(alreadyInBag.textContent) + parseInt(e.target["cart-amount"].value)
    alreadyInBag.textContent = `${addOn}`
}
)
