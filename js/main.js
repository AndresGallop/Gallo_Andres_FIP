(() => {
	// "use strict";
	console.log("fired");

	let button = document.querySelector("#button"),
			burgerCon = document.querySelector("#burgerCon"),
      selector = document.querySelectorAll(".seemento"),
      proms = document.querySelector("#ads");

	//function hamburgerMenu() {
	//	burgerCon.classList.toggle("slideToggle");
	//	button.classList.toggle("expanded");
	//}

  function animateBanner() {

    console.log("works");

    proms.style.right = `${this.dataset.offset* 400}px`;



    //and also show the house name
  //  houseName.textContent = `House ${houseInfo[this.dataset.offset][0]}`;
  //  houseBio.textContent = `${houseInfo[this.dataset.offset][1]}`;
    //debugger;
  }

  selector.forEach(sel => sel.addEventListener("click", animateBanner));
	//button.addEventListener("click", hamburgerMenu);
})();
