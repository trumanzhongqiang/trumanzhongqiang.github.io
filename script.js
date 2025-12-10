const translations = {
    en: {
        logo: "ZHONGQIANG",
        nav_about: "About",
        nav_experience: "Experience",
        nav_work: "Work",
        nav_contact: "Contact",
        hero_subtitle: "Hi, my name is",
        hero_title: "zhongqiang.",
        hero_subtitle_2: "I build things for the web.",
        hero_desc: "I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.",
        btn_about: "About Me",
        btn_watch: "Watch Intro",
        section_about: "About Me",
        about_p1: "Hello! My name is zhongqiang and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS was pretty fun!",
        about_p2: "Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences.",
        about_p3: "Here are a few technologies I've been working with recently:",
        section_experience: "Where I've Worked",
        job1_title: "Senior Engineer",
        job1_desc1: "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        job1_desc2: "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        job1_desc3: "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
        job2_title: "Web Developer",
        job2_desc1: "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
        job2_desc2: "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
        job2_desc3: "Clients included Pitchfork, mic.com, The New Yorker, and more",
        section_work: "Some Things I've Built",
        project1_title: "Halcyon Theme",
        project1_desc: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
        project2_title: "Time to Have More Fun",
        project2_desc: "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
        project3_title: "Spotify Profile",
        project3_desc: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information of each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
        view_all: "View All Projects",
        section_contact_next: "What's Next?",
        contact_title: "Get In Touch",
        contact_desc: "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
        btn_say_hello: "Say Hello",
        footer_credit: "Designed & Built by zhongqiang"
    },
    zh: {
        logo: "忠强",
        nav_about: "关于",
        nav_experience: "经历",
        nav_work: "作品",
        nav_contact: "联系",
        hero_subtitle: "你好，我是",
        hero_title: "忠强。",
        hero_subtitle_2: "我为网络构建事物。",
        hero_desc: "我是一名软件工程师，专注于构建（偶尔设计）卓越的数字体验。目前，我专注于构建可访问的、以人为本的产品。",
        btn_about: "关于我",
        btn_watch: "观看介绍",
        section_about: "关于我",
        about_p1: "你好！我叫忠强，我喜欢在互联网上创造事物。我对Web开发的兴趣始于2018年，当时我决定尝试编辑自定义Tumblr主题——结果发现将HTML和CSS拼凑在一起非常有趣！",
        about_p2: "快进到今天，我有幸在一家广告代理公司、一家初创公司、一家大型企业和一个学生主导的设计工作室工作。这些天我的主要关注点是构建可访问的、包容性的产品和数字体验。",
        about_p3: "以下是我最近使用的一些技术：",
        section_experience: "工作经历",
        job1_title: "高级工程师",
        job1_desc1: "为各种客户和内部项目编写现代、高性能、可维护的代码",
        job1_desc2: "使用各种不同的语言、平台、框架和内容管理系统，如JavaScript、TypeScript、Gatsby、React、Craft、WordPress、Prismic和Netlify",
        job1_desc3: "每天与工程师、设计师、制作人和客户的多学科团队沟通",
        job2_title: "Web开发人员",
        job2_desc1: "主要使用HTML、CSS、Sass、JavaScript和jQuery开发和维护内部和客户网站的代码",
        job2_desc2: "在各种浏览器和移动设备中手动测试网站，以确保跨浏览器兼容性和响应能力",
        job2_desc3: "客户包括Pitchfork、mic.com、The New Yorker等",
        section_work: "我构建的一些东西",
        project1_title: "Halcyon主题",
        project1_desc: "VS Code、Sublime Text、Atom、iTerm等的极简深蓝色主题。可在Visual Studio Marketplace、Package Control、Atom Package Manager和npm上获得。",
        project2_title: "Time to Have More Fun",
        project2_desc: "一个帮助我选择旅行地点的单页Web应用程序，使用Next.js、Firebase和Tailwind CSS构建",
        project3_title: "Spotify个人资料",
        project3_desc: "用于可视化个性化Spotify数据的Web应用程序。查看您的热门艺术家、热门曲目、最近播放的曲目以及每首曲目的详细音频信息。根据您现有的播放列表创建并保存推荐曲目的新播放列表等。",
        view_all: "查看所有项目",
        section_contact_next: "下一步是什么？",
        contact_title: "保持联系",
        contact_desc: "我目前正在寻找新的机会，我的收件箱随时开放。无论您有问题还是只是想打个招呼，我都会尽力回复您！",
        btn_say_hello: "打招呼",
        footer_credit: "设计与构建 by 忠强"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // --- i18n Logic ---
    let currentLang = 'en';
    const langToggleBtn = document.getElementById('lang-toggle');
    
    function updateLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        langToggleBtn.textContent = lang === 'en' ? 'EN / 中' : '中 / EN';
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'zh' : 'en';
            updateLanguage(newLang);
        });
    }

    // --- Mobile Menu Toggle ---
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

    // --- Smooth Scrolling ---
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

    // --- Scroll Animation ---
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

    // --- Video Modal Logic ---
    const watchIntroBtn = document.getElementById('watch-intro-btn');
    if (watchIntroBtn) {
        watchIntroBtn.addEventListener('click', () => {
            alert('Video modal placeholder: This would open a video player.');
        });
    }

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

    // --- Particle Network Animation ---
    const canvas = document.getElementById('bg-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(100, 255, 218, 0.1)';
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const particleCount = Math.floor(window.innerWidth / 10); // Responsive count
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            particles.forEach((p, index) => {
                p.update();
                p.draw();

                // Draw connections
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(100, 255, 218, ${0.1 - distance / 1000})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', () => {
            resize();
            initParticles();
        });

        resize();
        initParticles();
        animate();
    }
});
