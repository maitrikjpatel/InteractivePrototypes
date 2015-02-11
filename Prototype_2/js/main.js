$(document).ready(function(){
    $('#sideBar').click(function() {
        console.log("1NDtOGGLE");        
        $('#content').toggle("slide",{direction:'left'},600);
    });
    $('#chartBar').click(function() {
        console.log("2NDtOGGLE");
        $('#content').toggle("slide",{direction:'left'},600);
    });
}); 
