
        // Mobile Menu Toggle
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const navMenu = document.getElementById('nav-menu');

        mobileNavToggle.addEventListener('click', () => {
            navMenu.classList.toggle('mobile-nav-active');
        });

        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu if open
                navMenu.classList.remove('mobile-nav-active');
            });
        });

        // Login Modal Functionality
        const loginBtn = document.getElementById('login-btn');
        const loginModal = document.getElementById('login-modal');
        const closeModal = document.querySelector('.close-modal');
        const switchToSignup = document.getElementById('switch-to-signup');
        const switchToLogin = document.getElementById('switch-to-login');
        const loginForm = document.getElementById('login-form');
        const signupForm = document.getElementById('signup-form');

        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'flex';
        });

        closeModal.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });

        switchToSignup.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
        });

        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
        });

        // Form Submission (for demonstration)
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Login functionality would be implemented with backend integration.');
        });

        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            alert('Sign-up functionality would be implemented with backend integration.');
        });

        // Newsletter Form
        const newsletterForm = document.querySelector('.newsletter-form');
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input').value;
            alert(`Thank you for subscribing with ${email}! You will now receive our updates.`);
            newsletterForm.reset();
        });

        // Animation for stats (simple counter animation)
        const stats = document.querySelectorAll('.stat-number');
        
        function animateStats() {
            stats.forEach(stat => {
                const target = parseInt(stat.textContent);
                const increment = target / 50;
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        if (target > 1000) {
                            stat.textContent = Math.ceil(current).toLocaleString() + '+';
                        } else {
                            stat.textContent = Math.ceil(current) + (stat.textContent.includes('+') ? '+' : '');
                        }
                        setTimeout(updateCounter, 30);
                    } else {
                        stat.textContent = target.toLocaleString() + (stat.textContent.includes('+') ? '+' : '');
                    }
                };

                updateCounter();
            });
        }

        // Simple intersection observer to trigger animations when elements are in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('stats')) {
                        animateStats();
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        // Observe elements that should trigger animations
        document.querySelectorAll('.stats').forEach(element => {
            observer.observe(element);
        });