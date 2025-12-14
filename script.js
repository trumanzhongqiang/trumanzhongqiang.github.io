document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Logic ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // --- Scroll Animations ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });


    // --- Markdown Loader Logic ---
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
                    // Fix relative image paths
                    const lastSlashIndex = docName.lastIndexOf('/');
                    if (lastSlashIndex !== -1) {
                        const basePath = docName.substring(0, lastSlashIndex + 1);
                        // Regex to find markdown images: ![alt](url) and replace relative urls
                        text = text.replace(/!\[(.*?)\]\((?!http|https|\/)(.*?)\)/g, `![$1](${basePath}$2)`);
                    }

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

    // --- Theme Toggle Logic ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    // Determine default theme based on Beijing Time (UTC+8)
    // Rule: Light Mode 6:00 - 18:00, Dark Mode 18:00 - 6:00
    function getBeijingHour() {
        const date = new Date();
        const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
        const beijingDate = new Date(utc + (3600000 * 8));
        return beijingDate.getHours();
    }

    let defaultTheme = 'dark';
    const hour = getBeijingHour();
    if (hour >= 6 && hour < 18) {
        defaultTheme = 'light';
    }

    // Check for saved theme preference, otherwise use time-based default
    const currentTheme = localStorage.getItem('theme') || defaultTheme;

    // Apply the saved theme
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';

            if (isLight) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            }
        });
    }

    // --- Particle Network Animation ---
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.fillStyle = 'rgba(100, 255, 218, 0.5)'; // Match highlight color
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < 50; i++) {
                particles.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.update();
                p.draw();

                // Draw connections
                particles.forEach(p2 => {
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(100, 255, 218, ${0.1 * (1 - distance / 100)})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();
    }

    // --- Internationalization (i18n) Logic ---
    const translations = {
        zh: {
            "nav.back": "返回",
            "intro.title": "你好！我是 <span class=\"sticker\">@忠强</span>",
            "intro.role": "实战型 AI 产品专家 | 10年+ 经验 | Vibe Coding 践行者",
            "intro.desc": "擅长将模糊需求转化为工程化落地的产品方案。从 K12 到 Sales Coach，始终致力于通过 AI 技术解决真实的业务痛点。",
            "section.writings": "思考",
            "projects.p1": "企业培训产品的 AI-Native 重构实践",
            "projects.p2": "AI 助理 (独立开发)",
            "projects.p3": "AI 智慧笔 (IF红点奖)",
            "timeline.title": "经历",
            "exp.job1.title": "AI 产品经理 @ 企业级 AI SaaS 平台",
            "exp.job1.desc": "负责 AI Native 产品规划。主导与某头部协同办公平台的战略合作，交付 AI 教练标杆产品。",
            "exp.job2.title": "独立开发者 @ 个人工作室",
            "exp.job2.desc": "全职研究 LLM 应用层。开发小AI助理，跑通 AI工具+知识付费 闭环，积累 Prompt/RAG 实战经验。",
            "exp.job3.title": "AI/智能硬件产品经理 @ 某头部K12在线教育公司",
            "exp.job3.desc": "主导 AI 智慧笔(IF奖)及AI运营中台搭建。",
            "exp.job4.title": "产品经理 @ 某移动互联网创业公司",
            "exp.job4.desc": "主导直播APP产品和PLG产品的功能设计。",
            "exp.job5.title": "产品运营 @ 某上市职业教育公司",
            "exp.job5.desc": "负责微信公众号与直播栏目。通过数据驱动优化页面逻辑，显著提升转化率。",
            "footer.text": "Designed & Built by DaLin"
        },
        en: {
            "nav.back": "Back",
            "intro.title": "Hi！I'm <span class=\"sticker\">@DaLin</span>",
            "intro.role": "AI Product Expert | 10+ Years Exp | Vibe Coding Practitioner",
            "intro.desc": "Specializing in transforming ambiguous requirements into engineered product solutions. From K12 to Sales Coach, dedicated to solving real business problems with AI technology.",
            "section.writings": "Writings",
            "projects.p1": "AI-Native Refactoring of Corporate Training Products",
            "projects.p2": "AI Assistant (Indie Dev)",
            "projects.p3": "AI Smart Pen (IF Award)",
            "timeline.title": "Experience",
            "exp.job1.title": "AI Product Manager @ Enterprise AI SaaS Platform",
            "exp.job1.desc": "Leading AI Native product planning. Delivered AI Coach for a top collaboration platform.",
            "exp.job2.title": "AI Product Exploration @ Personal Studio",
            "exp.job2.desc": "Full-time LLM research. Built Little AI Assistant & Paid Community. Mastered Prompt/RAG.",
            "exp.job3.title": "AI/Hardware PM @ Leading K12 EdTech Co.",
            "exp.job3.desc": "Led AI Smart Pen (IF Award) & AI Operation Platform development.",
            "exp.job4.title": "Product Manager @ Mobile Internet Startup",
            "exp.job4.desc": "Led feature design for live streaming app and PLG product.",
            "exp.job5.title": "Product Operations @ Listed Voc-Ed Co.",
            "exp.job5.desc": "Managed WeChat official account & live streaming. Data-driven page optimization.",
            "footer.text": "Designed & Built by DaLin"
        }
    };

    const langToggleBtn = document.getElementById('lang-toggle');
    // Check for saved language preference, default to English
    let currentLang = localStorage.getItem('lang') || 'en';

    function updateContent() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                el.innerHTML = translations[currentLang][key];
            }
        });
        if (langToggleBtn) {
            langToggleBtn.textContent = currentLang === 'zh' ? 'EN / 中' : '中 / EN';
        }
    }

    // Initial update on load
    updateContent();

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'zh' ? 'en' : 'zh';
            localStorage.setItem('lang', currentLang);
            updateContent();
        });
    }
});
