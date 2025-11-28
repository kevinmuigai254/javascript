
let productsHTML='';

products.forEach((product)=>{
    productsHTML += `
<p><img class="b1" src="/users/Ambrose/Downloads/one";>  </p>
<p class="b2">Basket ball for sale</p>
<p class="b3">$20.95</p>
<button class="b4">1  ^</button>
<button class="b5 f" data-product-name="Basket ball for sale">Add to cart</button>

<p > <img  class="c1" src="/users/Ambrose/Downloads/two";></p>
<p class="c2">Adults Plain T-shirt</p>
<p class="c3">$7.99</p>
<button class="c4">1  ^</button>
<button class="c5 f" data-product-name="Adults Plain T-shirt" >Add to cart</button>

<p> <img class="d1" src="/users/Ambrose/Downloads/three";>    </p>
<p class="d2">New home toaster</p>
<p class="d3">$18.99</p>
<button class="d4">1  ^</button>
<button class="d5 f " data-product-name="New home toaster">Add to cart</button>
    `;
    });

document.querySelector('.e').innerHTML = productsHTML;

document.querySelectorAll('.f').forEach((button)=>{
            button.addEventListener('click',() => {
               const productName= button.dataset.productName;
        let matchingItem;
                    ca.forEach((cartItem)=>{
                        if (productName===cartItem.productName) {matchingItem=cartItem;}
                    });
                        if (matchingItem) {matchingItem.quantity +=1;} else {
                                                                                 ca.push({
                                                                                productName: productName,
                                                                                quantity:1 });}
         let cq = 0;                                                                       
                    ca.forEach((cartItem) =>{
                        cq += cartItem.quantity; });
            document.querySelector('.g')
                .innerHTML = cq;             });        });
