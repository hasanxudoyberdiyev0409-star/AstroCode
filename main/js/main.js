// Mobile menu toggle + nav \"Kirish\" button + auth modal
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    const authModalOverlay = document.getElementById('auth-modal');
    const authModal = authModalOverlay ? authModalOverlay.querySelector('.auth-modal') : null;
    const closeModalBtn = authModalOverlay ? authModalOverlay.querySelector('.auth-modal-close') : null;

    function openAuthModal() {
        if (!authModalOverlay) return;
        authModalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        // default holat: login
        if (loginForm && signupForm) {
            loginForm.classList.add('active');
            signupForm.classList.remove('active');
        }
    }

    function closeAuthModal() {
        if (!authModalOverlay) return;
        authModalOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Nav-menyu linklariga bosilganda menyuni yopish
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }



    // Modalni yopish tugmasi
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeAuthModal);
    }

    // Overlayning bo'sh joyiga bosilganda yopish
    if (authModalOverlay && authModal) {
        authModalOverlay.addEventListener('click', function(e) {
            if (!authModal.contains(e.target)) {
                closeAuthModal();
            }
        });
    }

    // Scroll animatsiyasi (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Feature cards animatsiya
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        observer.observe(card);
    });

    // Main section cards animatsiya
    const mainSectionCards = document.querySelectorAll('.main-section-card');
    mainSectionCards.forEach(card => {
        observer.observe(card);
    });

    // Course cards animatsiya
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        observer.observe(card);
    });

    // Astronomy cards animatsiya
    const astronomyCards = document.querySelectorAll('.astronomy-card');
    astronomyCards.forEach(card => {
        observer.observe(card);
    });

    // Project cards animatsiya
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        observer.observe(card);
    });

    // Section titles animatsiya
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        observer.observe(title);
    });
});
