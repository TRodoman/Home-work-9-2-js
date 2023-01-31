
let slideIndex = 1;
let timer = null;
showSlides(slideIndex);


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
  let dots = document.getElementsByClassName("slider-dots_item");
 
  if (n && n > slides.length) {
    slideIndex = 1;
  }
  if (n && n < 1) {
    slideIndex = slides.length;
  }
 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
 
  if (slideIndex <= 0) slideIndex = slides.length;
 
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
 
  afterTime(3000);
}
 
function afterTime(delay) {
  clearInterval(timer);
  timer = setInterval(() => {
    slideIndex++;
    showSlides();
  }, delay);
}