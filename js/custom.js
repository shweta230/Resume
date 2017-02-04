/* Write here your custom javascript codes */
$(document).ready(function() {    



////////////////SKILLS HIGHLIGHT ANIMATION//////////////////
$(".talview").on("click",function(){    
    $(".talview").attr('src','js/t_talview3.png');
    $(".talview").removeClass("highlight"); 
    $(".talview").addClass("unhighlight");     
  });



 $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });




});

////////////////SOFTWARE NAME ON HOVER//////////////////
 document.addEventListener('DOMContentLoaded', function() {
  $('.skill_img').on('mouseenter',function(){
    $($(this).attr('src',$(this).data('target-src')));
    });
  $('.skill_img').on('mouseleave',function(){
    $($(this).attr('src',$(this).data('target-src1')));     
    });
  
 ////////////////SOFTWARE NAME ON HOVER END//////////////////
});
///////////////////////////CHANGE BULL IMAGE IN IE//////////////////////////////////////
 document.addEventListener('DOMContentLoaded',function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        $('.bull_ie').attr('src','js/bull.png')
    }
    
    return false;


 });
//////////////////////////////////////////////////////////////////////////
