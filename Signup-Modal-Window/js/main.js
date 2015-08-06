$(document).ready(function() {
    
    /*==========  Opening and Closing of modal box  ==========*/
    $('body').on('click', '.open-btn', function (event) {
        event.preventDefault();
        var ele = $(this);
        $(this).parent().addClass('open');
        $(this).addClass('openBox');
        setTimeout(function () {
            ele.parent().siblings().fadeIn();
            $('.main-container').css("border", "1px solid rgba(255,255,255,0.1)");
            setTimeout(function () {
                ele.parent().removeClass('open');
                ele.removeClass('openBox');
            }, 800);
        }, 900);
    });
    $('body').on('click', '#close-modal', function (event) {
        $('.main-container').css("border", "none");
        $( ".modal" ).fadeOut( "slow" );
    });

    /*==========  Dropdown menu css  ==========*/
    $(".dropdown dt a").click(function() {
        var dropID = $(this).closest("dl").attr("id");
        $("#"+dropID+" dd ul").slideToggle(200);
    });

    $(".dropdown dd ul li a").click(function() {
        var dropID = $(this).closest("dl").attr("id");
        var text = $(this).html();
        var selVal = $(this).find(".dropdown_value").html();
        $("#"+dropID+" dt a span").html(text);
        $("#"+dropID+" dd ul").hide();
    // INSERT FUNCTION HERE getSelectedValue("partner_dropdown"));
    });

    $("dl[class!=dropdown]").click(function() {
        $(".dropdown dd ul").hide();
    });

    /*==========  Back & Next button of tabs  ==========*/
    $('#next-btn').on('click', function (event) {
        if( $(".tabs .tab").first().find("input").is(":checked")){
            $(this).attr("enabled","enabled");
        }
        $('#back-btn').removeAttr("disabled");
        var ele = $("input[type=radio]:checked");
        ele.parent().next().children().prop("checked",true); 
        if( $(".tabs .tab").last().find("input").is(":checked")){
            $(this).attr("disabled","disabled");
        }
    });
    $('#back-btn').on('click', function (event) {
        if( $(".tabs .tab").last().find("input").is(":checked")){
            $(this).attr("enabled","enabled");
        }
        $('#next-btn').removeAttr("disabled");
        var ele = $("input[type=radio]:checked");
        ele.parent().prev().children().prop("checked",true); 
        if( $(".tabs .tab").first().find("#tab-1").is(":checked")){
            $(this).attr("disabled","disabled");
        }
    });
});