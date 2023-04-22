const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
let current = 0;
const ImageNumber = document.querySelector(".banner-img")
const ImageText = document.querySelector("#banner p")


function printitSlide(n) {
	const slide = slides[n];
	let Image = slide.image;
	ImageNumber.src = "./assets/images/slideshow/"+ Image;
	ImageText.innerHTML = slide.tagLine;
  
	const dots = document.querySelectorAll(".dot");
	dots.forEach((dot) => {
	  dot.classList.remove("dot_selected");
	});
	dots[n].classList.add("dot_selected");
  }

arrowLeft.addEventListener("click", function () {
	current--; // Décrémente la variable `current` de 1
	if (current < 0) { // Si `current` est inférieur à 0 (i.e. on est sur la première diapositive), alors...
	  current = slides.length - 1; // On met `current` à l'index de la dernière diapositive dans le tableau `slides`
	}
	printitSlide(current);
  });
	  
	// Right arrow click
arrowRight.addEventListener("click", function () {
		current++; //Incrémente la variable `currentSlide` de 1
  if (current > slides.length - 1) {
    current = 0;
  }
  printitSlide(current);
});


function initSlider() {
	const dots = document.querySelector(".dots"); 
	
	for (let i = 0; i < slides.length; i++) { // Pour chaque diapositive dans le tableau `slides`
	  const dotsContainer = document.createElement("div"); // Crée un nouvel élément HTML `div` et le stocke dans la variable `dotsContainer`
	  dotsContainer.classList.add("dot"); // Ajoute la classe "dot" à l'élément `dotsContainer`
	  if (i === current) { // Si l'index actuel est égal à la variable `current`
		dotsContainer.classList.add("dot_selected"); // Ajoute la classe "dot_selected" à l'élément `dotsContainer`
	  }
	  dotsContainer.addEventListener("click", () => { // Ajoute un écouteur d'événement pour le clic sur l'élément `dotsContainer`
		printitSlide(i); // Appelle la fonction `printitSlide()` avec l'index de la diapositive correspondante en tant qu'argument
	  });
		
	  dots.appendChild(dotsContainer); // Ajoute l'élément `dotsContainer` à l'élément `dots` sélectionné précédemment
	}
	
	printitSlide(current); // Appelle la fonction `printitSlide()` avec l'index de la diapositive actuelle en tant qu'argument pour afficher la diapositive
  }
  
  initSlider();
  

 








