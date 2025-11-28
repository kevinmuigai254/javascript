let cartSummaryHTML = '';
ca.forEach((cartItem) => {
    const productName= cartItem.productName;
    let matchingProduct;
    products.forEach((product) => {
        if (product.Name === productName) {matchingProduct = product;}
    });
    
  cartSummaryHTML +=`
    <div class="c1">Delivery date:Tuesday ,june 21</div>
    <div class="c2">  <img class="c3" src="/users/Ambrose/Downloads/one"; >        </div>
    <div class="c4">choose a delivery option:</div>
    <div class="c5"> Basket ball for sale</div>
    <div class="c6">  $20.95   </div>
    <div class="c7">Quantity:2</div>
    <button class="c8"></button>
    <div class="c9">Tuesday,june 21</div>
    <div class="c10">FREE shipping</div>
    <button class="c11"></button>
    <div class="c12">Wednesday,june 15</div>
    <button class="c13">update</button>
    <button class="c14 Aa" data-product-name="Basket ball for sale">Delete</button>
    
    <div class="e1">Delivery date:Tuesday ,june 21</div>
    <div class="e2">  <img class="e3" src="/users/Ambrose/Downloads/two"; >        </div>
    <div class="e4">choose a delivery option:</div>
    <div class="e5">Adults Plain T-shirt </div>
    <div class="e6"> $7.99   </div>
    <div class="e7">Quantity:2</div>
    <button class="e8"></button>
    <div class="e9">Tuesday,june 21</div>
    <div class="e10">FREE shipping</div>
    <button class="e11"></button>
    <div class="e12">Wednesday,june 15</div>
    <button class="e13">update</button>
    <button class="e14 Aa" data-product-name="Adults Plain T-shirt">Delete</button>
    `;
});
document.querySelector('.Zz').innerHTML = cartSummaryHTML;
document.querySelectorAll('.Aa')
            .forEach((button) => {
              button.addEventListener('click',() => {
                const  productName= button.dataset.productName;
                console.log(productName);
              });

            });
