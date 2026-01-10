let productsData = [
 {name:"Wireless Mouse",price:599},
 {name:"Gaming Keyboard",price:1499},
 {name:"Bluetooth Speaker",price:1299},
 {name:"Power Bank",price:1799},
 {name:"USB Cable",price:299},
 {name:"Earbuds",price:1999},
 {name:"Laptop Stand",price:799},
 {name:"Webcam",price:1399},
 {name:"Hard Disk",price:4999},
 {name:"USB Hub",price:699},
 {name:"Router",price:1899},
 {name:"Smart Watch",price:2499},
 {name:"Headphones",price:1099},
 {name:"Pendrive",price:799},
 {name:"HDMI Cable",price:349},
 {name:"Phone Stand",price:199},
 {name:"WiFi Adapter",price:899},
 {name:"Microphone",price:1599},
 {name:"Memory Card",price:1299},
 {name:"Laptop Bag",price:1499},
 {name:"Cooling Pad",price:999},
 {name:"Screen Cleaner",price:249},
 {name:"Keyboard Cover",price:199},
 {name:"Graphics Tablet",price:2999},
 {name:"Mobile Charger",price:399}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadProducts() {
 let container = document.getElementById("products");
 if(!container) return;

 container.innerHTML = "";
 productsData.forEach((p,i)=>{
  container.innerHTML += `
   <div class="product">
    <img src="https://via.placeholder.com/200">
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <button onclick="addToCart(${i})">Add to Cart</button>
   </div>`;
 });
 updateCartCount();
}

function addToCart(index){
 cart.push(productsData[index]);
 localStorage.setItem("cart",JSON.stringify(cart));
 updateCartCount();
}

function updateCartCount(){
 let el=document.getElementById("cartCount");
 if(el) el.innerText=cart.length;
}

function loadCart(){
 let items=document.getElementById("cartItems");
 if(!items) return;

 let total=0;
 items.innerHTML="";
 cart.forEach(p=>{
  items.innerHTML+=`<p>${p.name} - ₹${p.price}</p>`;
  total+=p.price;
 });
 document.getElementById("total").innerText="Total: ₹"+total;
}

function toggleDark(){
 document.body.classList.toggle("dark");
}

document.getElementById("search")?.addEventListener("keyup",e=>{
 let val=e.target.value.toLowerCase();
 document.querySelectorAll(".product").forEach(p=>{
  p.style.display=p.innerText.toLowerCase().includes(val)?"block":"none";
 });
});

loadProducts();
loadCart();