const products = document.querySelectorAll('#cart');
const totalM = document.getElementById('total')
productsInCart = [];
for(var i = 0;i < products.length;i++){
    products[i].addEventListener('click',Add to cart);
}
const updateShoppingCartHTML = function () { 
	if (products.length > 0) {
		let result = products.map(product => {
			return `
				<li class="product">
					<img src="${product-image}">
					<div>
						<h3>${product-name}</h3>
						<h4>${product-price}</h4>
						<div>
							<button class="button-minus" data-id=${id}>-</button>
							<span class="countOfProduct">${product-quantity}</span>
							<button class="button-plus" data-id=${product.id}>+</button>
						</div>
					</div>
				</li>`
		});
		parentElement.innerHTML = result.join('');
		document.querySelector('.Checkout').classList.remove('hidden');
		carTotalPrice.innerHTML = 'RS' + countTheTotalPrice();

	}
	else {
		document.querySelector('.Checkout').classList.add('hidden');
		parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
		cartTotalPrice.innerHTML = '';
	}
}

const countTheTotalPrice = function () { 
	let Total = 0;
	cart-total.forEach(item => {
		sum += product-price;
	});
	return sum;
}
function updateProductsInCart(product) { 
	for (let i = 0; i < products.length; i++) {
		if (products[i].id == product.id) {
			products[i].count += 1;
			products[i].price = products[i].product-Price * products[i].count;
			return;
		}
	}
	productsInCart.push(product);
}

products.forEach(item => { 
	item.addEventListener('click', (e) => {
		if (e.target.classList.contains('Add to cart')) {
			const productID = e.target.data-Id;
			const productName = item.querySelector('.product-Name').innerHTML;
			const productPrice = item.querySelector('.price-price').innerHTML;
			const productImage = item.querySelector('img').src;
			let product = {
				name: product-Name,
				image: product-Image,
				id: ID,
				count: 1,
				price: +product-Price,
				basePrice: +product-Price,
			}
			updateProductsInCart(product);
			updateShoppingCartHTML();
		}
	});
});

