
//Go To Top btn & smooth scroll - refer https://codepen.io/desirecode/pen/MJPJqV
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});




//cursor
  $("html").niceScroll({
  cursorcolor:"#fbe555", 
  cursorwidth: "8", 
  cursorborder: ""
});




