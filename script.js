$(document).ready(function() {
    // Toggle the storagely-navbar menu on click for mobile
    $('#storagely-navbar-menu-icon').click(function() {
        $(this).toggleClass('open');
        $('#storagely-navbar-menu').toggleClass('open');
        
       

       // Check if storagely-navbar-menu-icon has the open class
     if (!$(this).hasClass('open')) {
        $('.mobile-menu').removeClass('active');
        $('.mobile-storagely-navbar-container').css('display', 'none');

    }
  
    });


    // Prevent storagely-dropdown closing when clicking inside the menu
    $('.storagely-dropdown-menu').click(function(e) {
        e.stopPropagation();
    });


    $(document).ready(function() {
        $('.storagely-navbar-item.storagely-dropdown').click(function() {
            $('.mobile-menu').addClass('active');
        });
    });

    
});



$(document).ready(function() {
    // Function to handle showing storagely-dropdown content
    function showstoragely-dropdownContent(targetId) {
        var content = $('#' + targetId).html();
        $('.mobile-storagely-navbar-container').html(content).show(); // Directly show without animation

        // Re-attach event handler for newly added storagely-dropdown links
        attachstoragely-dropdownHandlers();
    }

    // Show storagely-dropdown content in mobile-storagely-navbar-container on storagely-navbar-link click
    $('.storagely-navbar-link').click(function(e) {
        e.preventDefault(); // Prevent the default action
        var targetId = $(this).data('target');
        showstoragely-dropdownContent(targetId);
    });

    // Attach event handlers for storagely-dropdown links
    function attachstoragely-dropdownHandlers() {
        // Unbind any existing handlers to prevent duplicate handling
        $('.mobile-storagely-navbar-container .storagely-dropdown-link').off('click');

        // Handle click event on storagely-dropdown links in the mobile-storagely-navbar-container
        $('.mobile-storagely-navbar-container .storagely-dropdown-link').on('click', function(e) {
            e.preventDefault(); // Prevent the default action

            var $this = $(this);
            var $subMenu = $this.next('.storagely-dropdown-menu');
            var $icon = $this.find('.mobile-plus-minus');

            // Toggle the visibility of the storagely-dropdown menu
            if ($subMenu.is(':visible')) {
                $subMenu.slideUp();
                $icon.removeClass('fa-minus').addClass('fa-plus');
            } else {
                $subMenu.slideDown();
                $icon.removeClass('fa-plus').addClass('fa-minus');
            }

            // Close other open submenus and reset their icons
            $this.closest('.storagely-dropdown-item').siblings().find('.storagely-dropdown-menu').slideUp();
            $this.closest('.storagely-dropdown-item').siblings().find('.mobile-plus-minus').removeClass('fa-minus').addClass('fa-plus');
        });
    }

    // Initial attachment of handlers
    attachstoragely-dropdownHandlers();
});





