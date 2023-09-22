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
    // Event delegation for .remove
    $(document).on('click', '.remove', function() {
        // Find the closest .cart_prod ancestor and then locate .cart-remove-confirm within it
        var $cartProd = $(this).closest('.cart_prod');
        $cartProd.find(".cart-remove-confirm").addClass("active");
    });

    // Event delegation for .remove-active
    $(document).on('click', '.remove-active', function() {
        // Find the closest .cart_prod ancestor and then locate .cart-remove-confirm within it
        var $cartProd = $(this).closest('.cart_prod');
        $cartProd.find(".cart-remove-confirm").removeClass("active");
    });
});








