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

const button_1 = document.querySelector(".arrow_left")
const button_2 = document.querySelector(".arrow_right")
let index_1 = 0;
let banniere=document.querySelector('#banner p')
let dots = document.querySelector(".dots")
for (i=0; i <slides.length; i++){
	let dot = document.createElement("span");
	dots.append(dot);
	dot.classList.add("dot");

	if (i==0){
		dot.classList.add("dot_selected");
	}
}

button_1.addEventListener("click", function(event){
	console.log("clique gauche");
	if(index_1==0){
		index_1=slides.length-1;
	}else{
		index_1--;
	}
	console.log(index_1);
	let dot_array = document.querySelectorAll(".dot").forEach((dot, index )=> {
		if(index==index_1){
			dot.classList.add("dot_selected");
		}else{
			dot.classList.remove("dot_selected");
		}
	})
	let img = document.querySelector('.banner-img').setAttribute('src', "./assets/images/slideshow/"+slides[index_1]["image"]);
	banniere.innerHTML=slides[index_1]["tagLine"];
})


button_2.addEventListener("click", function(event){
	console.log("clique droit");
	if(index_1==slides.length-1){
		index_1=0;
	}else{
	index_1++;
	}
	console.log(index_1);
	let dot_array = document.querySelectorAll(".dot").forEach((dot, index )=> {
		if(index==index_1){
			dot.classList.add("dot_selected");
		}else{
			dot.classList.remove("dot_selected");
		}
	})
	let img = document.querySelector('.banner-img').setAttribute('src', "./assets/images/slideshow/"+slides[index_1]["image"]);
	banniere.innerHTML=slides[index_1]["tagLine"];
})



