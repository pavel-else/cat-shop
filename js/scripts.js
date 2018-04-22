"use strict";

// Обработка сщстояний карточки
var cards = document.querySelectorAll(".card");
var cardBody = document.querySelectorAll(".card__wrap");
var cardLink = document.querySelectorAll(".card__link");


for (var i = 0; i < cards.length; i++) {
	setTogle(cardBody[i], cards[i]);
	setTogle(cardLink[i], cards[i]);
}

function setTogle(list, obj) {
	list.addEventListener("click", function () {
		obj.classList.toggle("selected");
	});	
}
