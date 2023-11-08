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

$(document).ready(function(){
    $(".shop-dd").click(function(){
        $(this).toggleClass('active');
        $(".shop-dd-menu").toggleClass('active');
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

const transElements = document.querySelectorAll('.trans, .show');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const threshold = windowHeight;
    const topThreshold = threshold;
    const bottomThreshold = windowHeight - threshold;

    return (
        (rect.top <= topThreshold && rect.bottom >= topThreshold) ||
        (rect.top <= bottomThreshold && rect.bottom >= bottomThreshold)
    );
}

function toggleActiveClass() {
    transElements.forEach(function (element) {
        if (isInViewport(element)) {
            element.classList.add('active');
        } //else {
        //     element.classList.remove('active');
        // }
    });
}

window.addEventListener('scroll', toggleActiveClass);
window.addEventListener('resize', toggleActiveClass);
window.addEventListener('inviewport', toggleActiveClass);
toggleActiveClass();




// Certified JS

$(".certified-link-flex").click(function(){
  
  $(".certified-modal-box").addClass("active");
});

$(".certified-cross-modal-link").click(function(){
  console.log("hello");
  $(".certified-modal-box").removeClass("active");
});











