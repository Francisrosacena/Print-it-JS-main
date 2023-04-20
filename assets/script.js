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
  
	currentSlide = n;
  }

arrowLeft.addEventListener("click", function () {
	current--;
	if (current < 0) {
	  current = slides.length - 1;
	}
	printitSlide(current);
  });
	  
	// Right arrow click
arrowRight.addEventListener("click", function () {
		current++;
  if (current > slides.length - 1) {
    current = 0;
  }
  printitSlide(current);
});


function initSlider() {
  const dots = document.querySelector(".dots");
  
	
	for (let i = 0; i < slides.length; i++) {
	const dotsContainer = document.createElement("div");
	dotsContainer.classList.add("dot");
	  if (i === current) {
		dotsContainer.classList.add("dot_selected");
	  }
	  dotsContainer.addEventListener("click", () => {
		printitSlide(i);
	  });
	  
	  dots.appendChild(dotsContainer);
	}
  
	printitSlide(current);
  }
  
  initSlider();
  
  

 








