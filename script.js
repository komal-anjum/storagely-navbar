$(document).ready(function() {
    // Toggle the navbar menu on click for mobile
    $('#navbar-menu-icon').click(function() {
        $(this).toggleClass('open');
        $('#navbar-menu').toggleClass('open');
    });

    // Toggle dropdowns on click for mobile
    $('.navbar-item.dropdown > .navbar-link, .dropdown-item.dropdown > .dropdown-link').click(function(e) {
        if ($(window).width() <= 1160) {
            e.preventDefault();

            var $dropdown = $(this).parent();
            var $subMenu = $dropdown.children('.dropdown-menu');
            var $icon = $(this).find('.mobile-plus-minus');

            // Toggle the dropdown menu and icon
            if ($dropdown.hasClass('open')) {
                $dropdown.removeClass('open');
                $subMenu.slideUp();
                $icon.removeClass('fa-minus').addClass('fa-plus');
            } else {
                $dropdown.addClass('open');
                $subMenu.slideDown();
                $icon.removeClass('fa-plus').addClass('fa-minus');
            }
        }
    });

    // Close dropdowns when clicking outside
    $(document).click(function(e) {
        if ($(window).width() <= 768 && !$(e.target).closest('.navbar').length) {
            $('.dropdown').removeClass('open');
            $('.dropdown-menu').slideUp();
            $('.mobile-plus-minus').removeClass('fa-minus').addClass('fa-plus');
        }
    });

    // Prevent dropdown closing when clicking inside the menu
    $('.dropdown-menu').click(function(e) {
        e.stopPropagation();
    });

    // Initialize all dropdown icons to plus by default
    $('.dropdown-menu').each(function() {
        $(this).siblings('.dropdown-link').find('.mobile-plus-minus').addClass('fa-plus').removeClass('fa-minus');
    });
});
