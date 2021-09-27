// image Slider Starts

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 3){
    counter = 1;
  }
}, 15000);

// End.....
// var backdrop = document.querySelector('.backdrop');


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";  
  // dots[slideIndex-1].className += " active";
}


// ==========================================================================================

 
// if($(window).height() > $("body").height()){
//   $("footer").css("position", "fixed");
// } else {
//   $("footer").css("position", "static");
// }









var backdrop = document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.plan button')
var togglebutton =document.querySelector('.toggle-button')
var mobNav =document.querySelector('.mobile-nav')

for (var i=0; i<selectPlanButtons.length; i++)
{
    selectPlanButtons[i].addEventListener('click', function(){
        // modal.style.display='block';  //we could use whether this code or the below one.
        // backdrop.style.display='block'
      
        backdrop.style.display='block';
       setTimeout(function(){
        backdrop.classList.add('open');
       },10)
    })
}


// for closing the button:
backdrop.addEventListener('click', function(){
    // mobNav.style.display='none';
    mobNav.classList.remove('open')
    closeModal();
});




function closeModal(){
    // backdrop.style.display='none';
    // modal.style.display='none';
backdrop.classList.remove('open');

setTimeout(function(){
    backdrop.style.display='none';
},10)

}


togglebutton.addEventListener('click', function(){
  // mobNav.style.display='block';
  // backdrop.style.display='block';
  mobNav.classList.add('open');
  setTimeout(function(){
      backdrop.classList.add('open');
  },10)
  
})






























