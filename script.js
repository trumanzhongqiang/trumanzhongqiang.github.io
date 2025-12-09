document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    const body = document.body;

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            nav.classList.toggle('active');
            body.classList.toggle('no-scroll');
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Animation (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .hero-content, .project-card, .job-card').forEach(el => {
        el.classList.add('hidden-fade');
        observer.observe(el);
    });
    // Video Modal Logic
    const watchIntroBtn = document.getElementById('watch-intro-btn');
    if (watchIntroBtn) {
        watchIntroBtn.addEventListener('click', () => {
            alert('Video modal placeholder: This would open a video player.');
        });
    }

    // Markdown Loader Logic
    const markdownContainer = document.getElementById('markdown-content');
    if (markdownContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const docName = urlParams.get('doc');

        if (docName) {
            fetch(docName)
                .then(response => {
                    if (!response.ok) throw new Error('Network response was not ok');
                    return response.text();
                })
                .then(text => {
                    if (window.marked) {
                        markdownContainer.innerHTML = marked.parse(text);
                    } else {
                        markdownContainer.innerHTML = '<p>Error: Markdown parser not loaded.</p><pre>' + text + '</pre>';
                    }
                })
                .catch(error => {
                    console.error('Error loading document:', error);
                    markdownContainer.innerHTML = '<p>Error loading project details. Please try again later.</p>';
                });
        } else {
            markdownContainer.innerHTML = '<p>No project selected.</p>';
        }
    }
});
