// Put your application javascript here
$(document).ready(function () {
    $(".nav-cart").click(function(){
        $("#shopify-section-ajax-cart").addClass("active");
        $("body").addClass("cart-open")  
    });
    $(".cart-close").click(function(){
        $("#shopify-section-ajax-cart").removeClass("active");  
        $("body").removeClass("cart-open")  
    })     
});

$(document).ready(function () {
    $(".remove").click(function(){
        if ($(this)) {
            $(".cart-remove-confirm ").addClass("active");
        }
    });
    $(".remove-active").click(function(){
        if ($(this)) {
        $(".cart-remove-confirm").removeClass("active");  
        }
    })     
});
