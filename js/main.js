(() => {
	console.log("fired");

	let button = document.querySelector("#hamenu"),
			burgerCon = document.querySelector("#burgerCon"),
      selector = document.querySelectorAll(".seemento"),
      proms = document.querySelector("#ads");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

  function animateBanner() {

    console.log("works");

    proms.style.right = `${this.dataset.offset* 400}px`;
  }

  selector.forEach(sel => sel.addEventListener("click", animateBanner));
	button.addEventListener("click", hamburgerMenu);
	//button.addEventListener("click", blurer);
	//button.addEventListener("click", hamburgerMenu);
})();
