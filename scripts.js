jQuery("document").ready(function($){

    var menuBtn = $(".menu-icon"), 
        menu = $(".navigation ul");

    menuBtn.click(function() {   

        if(menu.hasclass("show")){

            menu.removeclass("show");
        } else {

        

        menu.addclass("show");

        }

    });


});