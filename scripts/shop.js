let listOfProducts = []; //list of objects to store product info.
const numOfProductContainers = 11; // num of products in the HTML page
let clearCart = false; // boolean control variable for clear button

// Method that creates an object with the specific product info.
// Takes the number of the product as an argument.
// Stores the object in the listOfProducts object.
function createProductObject(productNum) {
    let name = document.querySelector("#title"+productNum).textContent.trim();
    let price = document.querySelector("#price"+productNum).textContent.trim();
    let gender = document.querySelector("#gender"+productNum).textContent.trim();
    let imgSrc = document.querySelector("#img"+productNum).getAttribute("src");
    let color = document.querySelector("#color"+productNum).options[document.querySelector("#color"+productNum).selectedIndex].textContent;
    let size = document.querySelector("#size"+productNum).options[document.querySelector("#size"+productNum).selectedIndex].textContent;
    let quantity = document.querySelector("#quantity"+productNum).options[document.querySelector("#quantity"+productNum).selectedIndex].textContent;
    console.log(name, price, color, size, quantity);

    const productObj = { name: name, price: price, gender:gender.charAt(0), imgSrc:imgSrc, color: color, size: size, quantity: quantity };
    listOfProducts.push(productObj);
}

// Method that displays the item info in the HTML page.
// Takes purpose (basket/checkout) as an argument.
function displayItemsInfo(purpose) {
    let fullSum = 0;

    if (purpose === "checkout" && listOfProducts.length<=0 && clearCart===false){
        alert("Please select at least one product to checkout.")
    }
    // display product in the basket
    if (purpose === "basket") {
        document.querySelector(".basket-items-container").innerHTML = `<div class="basket-item"><div>Product</div><div>Size/Color</div><div>Quantity</div></div>`;
        for (let i = 0; i < listOfProducts.length; i++) {
            let product = listOfProducts[i];
            document.querySelector(".basket-items-container").innerHTML += `<div class="basket-item"><div>${product.name}</div><div>${product.size}  [${product.color}]</div><div>x ${product.quantity}</div></div>`
        }
    }
    // display product in checkout section. display total as well.
    else if (purpose === "checkout") {
        document.querySelector(".checkout-items-container").innerHTML = `<div class="checkout-item"><div>Image</div><div>Product</div><div>Quantity</div><div>Total</div></div>`;
        for (let i = 0; i < listOfProducts.length; i++) {
            let product = listOfProducts[i];

            let total = parseFloat(product.price.replace("$","")) * parseInt(product.quantity);
            fullSum += total;
            document.querySelector(".checkout-items-container").innerHTML += `<div class="checkout-item"><div><img src="${product.imgSrc}" alt=""></div><div>${product.name} [S${product.size}]  [${product.color}] [${product.gender}]</div><div>x ${product.quantity}</div><div>$${total.toFixed(2)}</div></div>`
        }
        document.querySelector("#checkout-total-display").innerHTML = `<div>Net Total:</div><div>$${fullSum.toFixed(2)}</div>`
    }
    clearCart = false;
}

// Method to clear basket and checkout containers
function clearBasketAndCheckout(){
    listOfProducts = [];
    fullSum = 0;
    clearCart = true;
    displayItemsInfo("basket")
    clearCart = true;
    displayItemsInfo("checkout")
}
// event listeners for clear button
document.querySelector("#clear-btn-basket").addEventListener("click", ()=>{
    clearBasketAndCheckout()
})
document.querySelector("#clear-btn-checkout").addEventListener("click", ()=>{
    clearBasketAndCheckout()
})

// event listener for checkout button
document.querySelector("#checkout-btn-basket").addEventListener("click", ()=>{
    displayItemsInfo("checkout")
})
// event listenrs for proceed button
document.querySelector("#proceed-btn").addEventListener("click",()=>{
    confirm("Are you sure you want to proceed?")
})

// loop that creates an event listener for each product's add to cart button.
// products are numbered from 1-11. this number is used to access each product item uniquely.
for( let prodNum=1; prodNum<=numOfProductContainers; prodNum++){
    document.querySelector("#add"+prodNum).addEventListener("click", ()=>{
        createProductObject(prodNum)
        displayItemsInfo("basket")
        document.querySelector(".checkout-items-container").innerHTML = '<div class="checkout-item"><div>Image</div><div>Product</div><div>Quantity</div><div>Total</div></div>'
        document.querySelector("#checkout-total-display").innerHTML = `<div>Net Total:</div><div>$0.00</div>`
    } );
}
