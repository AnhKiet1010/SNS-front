document.addEventListener('DOMContentLoaded', function () {
    $('.card-header').on('click', '[data-fa-i2svg]', function () {
        $("#sidebar-content")
                .removeClass("w-200")
                .width($("#sidebar").width());
        $("#sidebar").css({"flex" : "none"});
        $("#sidebar").animate({
            width: "toggle"
            }, 600, function() {
                    $("#sidebar").css({"flex" : '', "width" : ''});
                    $("#sidebar-content")
                                .css("width", "")
                                .addClass("w-200");
            });
    });
    
    $("#search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#friend-list li .username").filter(function() {
            $(this).parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    var nowBrowerWidth = $(window).width();
    if(nowBrowerWidth < 575) {
        $("#sidebar-content")
                .removeClass("w-200")
                .width($("#sidebar").width());
        $("#sidebar").css({"flex" : "none"});
        $("#sidebar").animate({
            width: "toggle"
            }, 600, function() {
                    $("#sidebar").css({"flex" : '', "width" : ''});
                    $("#sidebar-content")
                                .css("width", "")
                                .addClass("w-200");
            });
    }
});