$(document).ready(function() {
    // Toggle the navbar menu on click for mobile
    $('#navbar-menu-icon').click(function() {
        $(this).toggleClass('open');
        $('#navbar-menu').toggleClass('open');
        
       

       // Check if navbar-menu-icon has the open class
     if (!$(this).hasClass('open')) {
        $('.mobile-menu').removeClass('active');
        $('.mobile-navbar-container').css('display', 'none');

    }
  
    });


    // Prevent dropdown closing when clicking inside the menu
    $('.dropdown-menu').click(function(e) {
        e.stopPropagation();
    });


    $(document).ready(function() {
        $('.navbar-item.dropdown').click(function() {
            $('.mobile-menu').addClass('active');
        });
    });

    
});


$(document).ready(function() {
    // Show dropdown content in mobile-navbar-container
    $('.navbar-link').click(function(e) {
        e.preventDefault(); // Prevent the default action

        var targetId = $(this).data('target');
        var content = $('#' + targetId).html();
        $('.mobile-navbar-container').html(content).slideDown();

        // Re-attach event handler for newly added dropdown links
        attachDropdownHandlers();
    });

    function attachDropdownHandlers() {
        // Unbind any existing handlers to prevent duplicate handling
        $('.mobile-navbar-container .dropdown-link').off('click');

      
        // Handle click event on dropdown links in the mobile-navbar-container
        $('.mobile-navbar-container .dropdown-link').on('click', function(e) {
            e.preventDefault(); // Prevent the default action

            var $this = $(this);
            var $subMenu = $this.next('.dropdown-menu');
            var $icon = $this.find('.mobile-plus-minus');

            // Toggle the visibility of the dropdown menu
            if ($subMenu.is(':visible')) {
                $subMenu.slideUp();
                $icon.removeClass('fa-minus').addClass('fa-plus');
                $this.addClass('activeline');
            } else {
                $subMenu.slideDown();
                $icon.removeClass('fa-plus').addClass('fa-minus');
                $this.removeClass('activeline');
            }

            // Close other open submenus and reset their icons
            $subMenu.parent().siblings().find('.dropdown-menu').slideUp();
            $subMenu.parent().siblings().find('.mobile-plus-minus').removeClass('fa-minus').addClass('fa-plus');
            $subMenu.parent().siblings().find('.dropdown-link').addClass('activeline');
        });
    }

    // Initial attachment of handlers
    attachDropdownHandlers();
});




