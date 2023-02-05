const createETag = (tagName, className, text) => {
  const tag = document.createElement (tagName);
  tag.classList.add(className);
  tag.textContent = text;

  return tag;
}

function newPage () {

  const div1 = createETag('div', "item", "" );
  div2 = createETag('div', "item", "");
  div3 = createETag('div', "item", "");
  div4 = createETag('div', "item", "");

  img1 = createETag('img', "slide1", "");
  img2 = createETag('img', "slide2", "");
  img3 = createETag('img', "slide3", "");
  img4 = createETag('img', "slide4", "");
  
  a1 = createETag("a","prev", "<");
  a2 = createETag("a", "next", ">");
  
  document.querySelector(".slider").appendChild(div1);
  document.querySelector(".slider").appendChild(div2);
  document.querySelector(".slider").appendChild(div3);
  document.querySelector(".slider").appendChild(div4);
  document.querySelector(".slider").appendChild(a1);
  document.querySelector(".slider").appendChild(a2);

  div1.appendChild(img1);
  div2.appendChild(img2);
  div3.appendChild(img3);
  div4.appendChild(img4);

}
newPage ();

document.querySelector(".slide1").src="https://new-science.ru/wp-content/uploads/2020/03/4848-4.jpg";
document.querySelector(".slide2").src="https://universetoday.ru/wp-content/uploads/2018/10/Mercury.jpg";
document.querySelector(".slide3").src="https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2018-12/20180913_zaa_p138_057.jpg";
document.querySelector(".slide4").src="https://nnst1.gismeteo.ru/images/2020/07/shutterstock_1450308851-640x360.jpg";


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