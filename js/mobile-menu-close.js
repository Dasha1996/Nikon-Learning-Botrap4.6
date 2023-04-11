/* =======================
 * Title: JS For the mobile Hamburger Close Icon
 * Coders: Dasha 
 * Last update: 10/03/2022
 ======================= */
 jQuery(document).ready(function($) {  
  
    $(".toggle-mobile").click(function() {
        $(".hamburger").toggle();
        $(".hamburger-close").toggle();
    })
 function scrollAnimation(elements, classNameAndAnimationName, elementsBeingObserved) {
   elements = document.querySelectorAll(`.${classNameAndAnimationName}`);
 
   elementsBeingObserved = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if(entry.intersectionRatio > 0) {
             entry.target.style.animation = `${classNameAndAnimationName} 1s ${entry.target.dataset.delay} normal backwards ease-in`;
         }
         else {
             entry.target.style.animation = 'none';
         }
     })  
   })
   elements.forEach(element => {
     elementsBeingObserved.observe(element)
   })  
 }
 
 scrollAnimation('BOUNCE_IN_LEFT', 'bounceInLeft', 'bounceInLeft');
 scrollAnimation('BOUNCE_IN_RIGHT', 'bounceInRight', 'bounceInRight');
 scrollAnimation('FADE_IN_DOWN', 'fadeInDown', 'fadeInDown');
 scrollAnimation('BOUNCE', 'bounce', 'bounce');
 scrollAnimation('ZOOM_IN', 'zoomIn', 'zoomIn');	
 })