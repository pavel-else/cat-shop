"use strict";

// Обработка сщстояний карточки
var cards = document.querySelectorAll(".card");
var cardBody = document.querySelectorAll(".card__wrap");
var cardLink = document.querySelectorAll(".card__link");


for (var i = 0; i < cards.length; i++) {
	(function (i) {
		cardBody[i].addEventListener("click", function(evt) {
			if (!cards[i].matches(".disabled")) {
				cards[i].classList.toggle("selected");
			};
		});
		cardLink[i].addEventListener("click", function(evt) {
			evt.preventDefault();
			if (!cards[i].matches(".disabled")) {
				cards[i].classList.toggle("selected");
			};
		});

	})(i);
}

function x(evt) {
if (!cards[i].matches(".disabled")) {
				cards[i].classList.toggle("selected");
			};	
}