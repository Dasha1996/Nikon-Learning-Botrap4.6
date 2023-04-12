/* =======================
 * Title: JS For the mobile Hamburger Close Icon
 * Coders: Dasha 
 * Last update: 12/03/2022
 ======================= */
 jQuery(document).ready(function($) { 
    $(".toggle-mobile").click(function() {
        $(".hamburger").toggleClass("hamburger-hide-js");
        $(".hamburger-close").toggleClass("hamburger-show-js");
    })
    $(document).click(function(){
      $(".hamburger-close").removeClass("hamburger-show-js");
      $(".hamburger").removeClass("hamburger-hide-js");  
    })
  })