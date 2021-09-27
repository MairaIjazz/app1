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



