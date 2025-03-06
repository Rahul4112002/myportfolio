$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     // slide-up script
     $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

        // typing text animation script
        var typed = new Typed(".typing", {
            strings: ["Learner", "Developer", "Coder"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });

        var typed = new Typed(".typing-2", {
            strings: ["Learner", "Developer", "Coder"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });


    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('#btn i').toggleClass("active");
    })

    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    })


});

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     // slide-up script
     $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

        // typing text animation script
        var typed = new Typed(".typing", {
            strings: ["Learner", "Developer", "Coder"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });

        var typed = new Typed(".typing-2", {
            strings: ["Learner", "Developer", "Coder"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });


    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // Project carousel functionality
    const projectsContainer = document.getElementById('projects-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const paginationDots = document.querySelectorAll('.pagination-dot');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Calculate how many cards to show and scroll per click based on screen size
    let cardsToShow = 4; // Default to 4 for desktop
    let scrollAmount = 4; // Default scroll amount for desktop
    
    // Function to update cards to show based on screen width
    function updateCardsToShow() {
        if (window.innerWidth < 768) {
            cardsToShow = 2; // Show 2 cards on mobile
            scrollAmount = 1; // Scroll by 1 card on mobile
        } else {
            cardsToShow = 4; // Show 4 cards on desktop
            scrollAmount = 4; // Scroll by 4 cards on desktop
        }
        // Reset current index and update UI
        currentIndex = 0;
        scrollToCurrentCards();
        updatePaginationDots();
        updateButtonVisibility();
    }
    
    let currentIndex = 0;
    const totalPages = Math.ceil(projectCards.length / cardsToShow);
    
    // Initial call to set the correct number of cards
    updateCardsToShow();
    
    // Handle next button click
    nextBtn.addEventListener('click', () => {
        if (currentIndex < projectCards.length - cardsToShow) {
            currentIndex += scrollAmount;
            if (currentIndex > projectCards.length - cardsToShow) {
                currentIndex = projectCards.length - cardsToShow;
            }
            scrollToCurrentCards();
            updatePaginationDots();
        }
    });
    
    // Handle previous button click
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= scrollAmount;
            if (currentIndex < 0) {
                currentIndex = 0;
            }
            scrollToCurrentCards();
            updatePaginationDots();
        }
    });
    
    // Handle pagination dot clicks
    paginationDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                // For mobile, move by pairs of cards
                currentIndex = index * 2;
                if (currentIndex > projectCards.length - cardsToShow) {
                    currentIndex = projectCards.length - cardsToShow;
                }
            } else {
                // For desktop, move to show all cards for that page
                currentIndex = index * cardsToShow;
            }
            scrollToCurrentCards();
            updatePaginationDots();
        });
    });
    
    // Scroll to current cards
    function scrollToCurrentCards() {
        const cardWidth = projectCards[0].offsetWidth;
        const gap = 24; // Match the gap-6 in Tailwind (6 * 4px = 24px)
        const scrollPosition = currentIndex * (cardWidth + gap);
        
        projectsContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        
        // Update button visibility based on position
        updateButtonVisibility();
    }
    
    // Update pagination dots to show current page
    function updatePaginationDots() {
        const currentPage = Math.floor(currentIndex / (window.innerWidth < 768 ? 2 : cardsToShow));
        paginationDots.forEach((dot, index) => {
            if (index === currentPage) {
                dot.classList.add('active');
                dot.style.opacity = 1;
            } else {
                dot.classList.remove('active');
                dot.style.opacity = 0.5;
            }
        });
    }
    
    // Update the visibility of prev/next buttons
    function updateButtonVisibility() {
        prevBtn.style.display = currentIndex > 0 ? 'block' : 'none';
        nextBtn.style.display = currentIndex < projectCards.length - cardsToShow ? 'block' : 'none';
    }
    
    // Initialize button visibility
    updateButtonVisibility();
    
    // Handle resize events to adjust mobile/desktop behavior
    window.addEventListener('resize', updateCardsToShow);
});