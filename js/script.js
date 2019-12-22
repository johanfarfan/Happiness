$(document).ready(function(){
    $('#sideBar').hide();
    $('.art2-f').hide();
    $('.art2-w').hide();
    $('.art2-r').hide();
    $('.art2-i').hide();
    var initTogglerF = true;
    var initTogglerW = true;
    var initTogglerR = true;
    var initTogglerI = true;

    //showers
    $('.toggler-on-f').click(function(){
        $('.art2-f').slideToggle('slow');
        if (initTogglerF == true){
            $('.toggler-on-f').text('Click here to hide this section');
            initTogglerF = false;
        }else{
            $('.toggler-on-f').text('Click here to read more..');
            initTogglerF = true;
        }
    });
    $('.toggler-on-w').click(function(){
        $('.art2-w').slideToggle('slow');
        if (initTogglerW == true){
            $('.toggler-on-w').text('Click here to hide this section');
            initTogglerW = false;
        }else{
            $('.toggler-on-w').text('Click here to read more..');
            initTogglerW = true;
        }
    });
    $('.toggler-on-r').click(function(){
        $('.art2-r').slideToggle('slow');
        if (initTogglerR == true){
            $('.toggler-on-r').text('Click here to hide this section');
            initTogglerR = false;
        }else{
            $('.toggler-on-r').text('Click here to read more..');
            initTogglerR = true;
        }
    });
    $('.toggler-on-i').click(function(){
        $('.art2-i').slideToggle('slow');
        if (initTogglerI == true){
            $('.toggler-on-i').text('Click here to hide this section');
            initTogglerI = false;
        }else{
            $('.toggler-on-i').text('Click here to read more..');
            initTogglerI = true;
        }
    });

    //hidders
    $('.toggler-off-f').click(function(){
        $('.art2-f').slideToggle('slow');
    });
    $('.toggler-off-w').click(function(){
        $('.art2-w').slideToggle('slow');
    });
    $('.toggler-off-r').click(function(){
        $('.art2-r').slideToggle('slow');
    });
    $('.toggler-off-i').click(function(){
        $('.art2-i').slideToggle('slow');
    });

    //sidebar animation
    $('#sideBar').hover(function(){ 
        $(this).stop().animate({left:'-20', backgroundColor:'rbg(27,45,94)'}, 500); 
    }, function(){ 
        $(this).stop().animate({left:'-120px', backgroundColor:'rbg(255,211,224)'}, 1500);
    });

    $(document).scroll(function() {
        var x = $(this).width();
        if (x > 1200){
            var y = $(this).scrollTop();
            if (y > 900) {
            $('#sideBar').fadeIn();
            } else {
            $('#sideBar').fadeOut();
            }
        }
    });
});