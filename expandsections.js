jQuery(document).ready(function( $ ){
  
 var acc = document.getElementsByClassName("ld-item-list-section-heading");
 var i;

 for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function() {
     this.classList.toggle("active");
     var panel = this.nextElementSibling;
     if (panel.style.display === "block") {
       panel.style.display = "none";
    } else {
       panel.style.display = "block";
     }
   });
 };
  
  
  var acc2 = document.getElementsByClassName("ld-lesson-item-section-heading");
 var i;

 for (i = 0; i < acc2.length; i++) {
   acc2[i].addEventListener("click", function() {
     this.classList.toggle("active");
     var panels = this.nextElementSibling;
     if (panels.style.display === "block") {
       panels.style.display = "none";
     } else {
       panels.style.display = "block";
     }
  });
 };
 });



var acc = document.querySelectorAll(".ld-item-list-section-heading");
var lessonHeading = document.querySelectorAll(".ld-lesson-item-section-heading");
var acc2 = document.querySelectorAll(".ld-item-list-item");

acc.forEach(header=>{
    hideUnhide(header, 'none', 'ld-item-list-item') 
})

 lessonHeading.forEach(header=>{
     hideUnhide(header, 'none', 'ld-lesson-item') 
 })


function hideUnhide (element, display, className){
  var nextElement = element.nextElementSibling
  if(!nextElement || !nextElement.classList.contains(className)){
    return
  }else{
      nextElement.style.display = display;
      hideUnhide(nextElement, display, className);
  }
}

 acc.forEach(header=>{
   header.addEventListener('click', (e)=>{
     e.target.classList.toggle('active');
     var isActive = e.target.classList.contains('active');
     
     if(isActive){
       hideUnhide(e.target, 'block', 'ld-item-list-item')
     }else{
       hideUnhide(e.target, 'none', 'ld-item-list-item')
     }   
   })
  })

 lessonHeading.forEach(header=>{
   header.addEventListener('click', (e)=>{
     e.target.classList.toggle('active');
     var isActive = e.target.classList.contains('active');
     
     if(isActive){
       hideUnhide(e.target, 'block', 'ld-lesson-item')
     }else{
       hideUnhide(e.target, 'none', 'ld-lesson-item')  
     }   
   })
  })


var ldExpandButton = document.querySelector(".ld-expand-button");
ldExpandButton.addEventListener('click', function(e){
  e.target.classList.toggle('expanded');
  var isActive = e.target.classList.contains('expanded');
  if(isActive){
      acc.forEach(item=>{
        item.classList.add('active');
       hideUnhide(item, 'block', 'ld-item-list-item')
      })
    }else{
      acc.forEach(item=>{
        item.classList.remove('active');
        hideUnhide(item, 'none', 'ld-item-list-item');
      })
    }
  
 })
