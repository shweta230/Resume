/* Write here your custom javascript codes */
$(document).ready(function() {    



////////////////SKILLS HIGHLIGHT ANIMATION//////////////////
$(".talview").on("click",function(){    
    $(".talview").attr('src','img/tribal/t_talview3.png');
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
  });
 ////////////////SOFTWARE NAME ON HOVER END//////////////////