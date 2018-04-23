"use strict";

// Обработка состояний карточки
var cards = document.querySelectorAll(".card");
var cardBody = document.querySelectorAll(".card__wrap");
var cardLink = document.querySelectorAll(".card__link");

for (var i = 0; i < cards.length; i++) {
	setToggle(cardBody[i], cards[i]);
	setToggle(cardLink[i], cards[i]);
}

function setToggle(listener, elem) {
	if (!isDisabled(elem)) {		
		listener.addEventListener("click", function () {
			elem.classList.toggle("selected");
		});	
	}
}

function isDisabled (elem) {
	var arr = elem.getAttribute('class').split(' ');

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 'disabled') {
			return true;
		}
	}

	return false;
}