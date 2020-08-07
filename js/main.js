(() => {
	console.log("fired");

	let button = document.querySelector("#hamenu"),
			burgerCon = document.querySelector("#burgerCon"),
			changer = document.querySelectorAll(".see"),
			prods = document.querySelector("#prods"),
      selector = document.querySelectorAll(".seemento"),
      proms = document.querySelector("#ads"),
			productName = document.querySelector(".product-name"),
			productPrice = document.querySelector(".product-price");

	const productPrices =	[
		["Notebook whit pen", `$15.99`],
		 ["Gehwol T-shirt", `$20.99`],
		  ["Classic beer glass", `$35.99`],
			 ["Gift card", `You choose the price`],
			  ["Bags", `$2.99 each one`],
				 ["G cap", `$25.99`]
	];

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

  function animateBanner() {

    console.log("works");

    proms.style.right = `${this.dataset.offset* 400}px`;

  }

	function animateProducts() {

		console.log("now");

		prods.style.right = `${this.dataset.offset* 355}px`;

		productName.textContent = `${productPrices[this.dataset.offset][0]}`;
	  productPrice.textContent = `${productPrices[this.dataset.offset][1]}`;

	}

	changer.forEach(chan => chan.addEventListener("click", animateProducts));
  selector.forEach(sel => sel.addEventListener("click", animateBanner));
	button.addEventListener("click", hamburgerMenu);
	//button.addEventListener("click", blurer);
	//button.addEventListener("click", hamburgerMenu);
})();
