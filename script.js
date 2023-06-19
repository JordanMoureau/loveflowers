window.addEventListener('scroll', function (){
  const parallax = document. querySelector('.parallax');
  let scrollPosition = window.pageYOffset;

  parallax.style.transform = 'translateY(' + scrollPosition * -1.2 + 'px)';
});

window.addEventListener('scroll', function(){
  const flowers = document.querySelector('.parallax-flowers');
  let scrollPosition = window.pageYOffset;
});

//begin script for custom dropdown

function hamBurger(x) {
  x.classList.toggle("change");
  document.getElementById("mobileMenu").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.hamburger')) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}

//slider!

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  

}