const imag = document.getElementById('imag');

const img =[ 
  "https://new-science.ru/wp-content/uploads/2020/03/4848-4.jpg",
  "https://universetoday.ru/wp-content/uploads/2018/10/Mercury.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.jpg",
  "https://nnst1.gismeteo.ru/images/2020/07/shutterstock_1450308851-640x360.jpg"
];

for (let i = 0; i < img.length; ++i) {
  let div = document.createElement("div");  
  
  let image = document.createElement("img");
  image.src = img[i];
  
  div.classList.add('item');
  
  div.appendChild(image);
  
  document.querySelector(".slider").appendChild(div);
}

const a1 = document.createElement("a");
document.querySelector(".slider").appendChild(a1);
a1.classList.add("prev");
a1.textContent = "<";


const a2 = document.createElement("a");
document.querySelector(".slider").appendChild(a2);
a2.classList.add("next");
a2.textContent = ">";

// ---------------------------------------------------------------------

let slideIndex = 1;
let timer = null;
showSlides(slideIndex);

document.querySelector(".prev").addEventListener('click',minusSlide);
document.querySelector(".next").addEventListener('click',plusSlide);


function plusSlide() {
  showSlides((slideIndex += 1));
}
 
function minusSlide() {
  showSlides((slideIndex -= 1));
}
 
function currentSlide(n) {
  console.log(n);
  showSlides((slideIndex = n));
}
 
function showSlides(n) {

  let slides = document.getElementsByClassName("item");
 
 
  if (n && n > slides.length) {
    slideIndex = 1;
  }
  if (n && n < 1) {
    slideIndex = slides.length;
  }
 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }


  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
 
  if (slideIndex <= 0) slideIndex = slides.length;
 
  slides[slideIndex - 1].style.display = "block";
 
  afterTime(3000);
}
 
function afterTime(delay) {
  clearInterval(timer);
  timer = setInterval(() => {
    slideIndex++;
    showSlides();
  }, delay);
}