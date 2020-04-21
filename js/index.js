// ITERATION 1



function updateSubtotal(product) {
  
  // console.log('Calculating subtotal, yey!');
  
  const $price = product.querySelector('.price span');
  const price = Number($price.innerText);
  
  const $quantity = product.querySelector('.quantity input');
  const quantity = $quantity.valueAsNumber;
  
  const subtotal = price * quantity;
  const $subtotal = product.querySelector('.subtotal span');
  $subtotal.innerText = subtotal
  
  return subtotal;  
  
}

function calculateAll() {
  
  const allProducts = document.querySelectorAll('.product');
  
  let total = 0;
  
  for (let i=0; i < allProducts.length; i++) {
    total = total + updateSubtotal(allProducts[i]);   
  }
  
  const $total = document.querySelector('#total-value span');
  $total.innerText = total;
}

// ITERATION 4

window.addEventListener('click', () => {
  const itemDeleteButton = document.querySelectorAll('.btn .btn-remove');
  
  itemDeleteButton.addEventListener('click', () => {
    const $itemDeleteButton = target; 
    const $cellProduct = $itemDeleteButton.parentNode;
    const $productLine = $cellProduct.parentNode;

    $productLine.removeChild($cellProduct);
  });

  //... your code goes here
});


function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    //... your code goes here

  }
    
    
    
    // ITERATION 5
    
    function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
