document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.querySelector('i').className = 
            navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    });
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navToggle.querySelector('i').className = 'fas fa-bars';
            }
            
            // Update active link
            document.querySelectorAll('.nav-link').forEach(navLink => {
                navLink.classList.remove('active');
            });
            link.classList.add('active');
            
            // Scroll to section
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Typed.js Effect
    const typed = new Typed('#typed-text', {
        strings: ['Web Developer', 'UI/UX Designer', 'Frontend Engineer', 'Creative Coder'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        smartBackspace: true
    });
    
    // Initialize Particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    
    // 3D Cube Animation
    const cube = document.getElementById('floating-cube');
    let rotationX = 0;
    let rotationY = 0;
    
    document.addEventListener('mousemove', (e) => {
        rotationX = (e.clientY - window.innerHeight / 2) / 20;
        rotationY = (e.clientX - window.innerWidth / 2) / 20;
        cube.style.transform = `translate(-50%, -50%) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    });
    
    // Projects Filter and Modal
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            category: "web",
            description: "A full-featured e-commerce platform with product management, cart functionality, and secure checkout.",
            image: "https://via.placeholder.com/600x400?text=E-Commerce",
            links: [
                { name: "Live Demo", url: "#" },
                { name: "GitHub", url: "#" }
            ],
            details: "<h3>E-Commerce Platform</h3><p>This project is a complete e-commerce solution built with React, Node.js, and MongoDB. It includes features like:</p><ul><li>Product catalog with filtering</li><li>User authentication</li><li>Shopping cart</li><li>Payment processing</li><li>Admin dashboard</li></ul>"
        },
        {
            id: 2,
            title: "Fitness Tracker App",
            category: "mobile",
            description: "Mobile application for tracking workouts, nutrition, and fitness progress with data visualization.",
            image: "https://via.placeholder.com/600x400?text=Fitness+App",
            links: [
                { name: "App Store", url: "#" },
                { name: "Play Store", url: "#" }
            ],
            details: "<h3>Fitness Tracker App</h3><p>A cross-platform mobile application developed with React Native that helps users track their fitness journey. Features include:</p><ul><li>Workout logging</li><li>Nutrition tracking</li><li>Progress charts</li><li>Social sharing</li><li>Personalized recommendations</li></ul>"
        },
        {
            id: 3,
            title: "Portfolio Website Design",
            category: "design",
            description: "Modern and responsive portfolio website design for creative professionals.",
            image: "https://via.placeholder.com/600x400?text=Portfolio+Design",
            links: [
                { name: "Behance", url: "#" },
                { name: "Dribbble", url: "#" }
            ],
            details: "<h3>Portfolio Website Design</h3><p>A sleek and modern portfolio design created in Figma and Adobe XD. The design features:</p><ul><li>Responsive layout</li><li>Dark/light mode</li><li>Interactive elements</li><li>Custom animations</li><li>Case study templates</li></ul>"
        },
        {
            id: 4,
            title: "Task Management System",
            category: "web",
            description: "Collaborative task management system with real-time updates and team features.",
            image: "https://via.placeholder.com/600x400?text=Task+Management",
            links: [
                { name: "Live Demo", url: "#" },
                { name: "GitHub", url: "#" }
            ],
            details: "<h3>Task Management System</h3><p>A Kanban-style task management system built with Vue.js and Firebase. Key features:</p><ul><li>Real-time collaboration</li><li>Drag-and-drop interface</li><li>Task assignments</li><li>Progress tracking</li><li>Notifications</li></ul>"
        },
        {
            id: 5,
            title: "Weather Forecast App",
            category: "mobile",
            description: "Beautiful weather application with 5-day forecasts and severe weather alerts.",
            image: "https://via.placeholder.com/600x400?text=Weather+App",
            links: [
                { name: "App Store", url: "#" },
                { name: "Case Study", url: "#" }
            ],
            details: "<h3>Weather Forecast App</h3><p>A weather application that provides accurate forecasts using data from multiple APIs. Features include:</p><ul><li>5-day forecasts</li><li>Severe weather alerts</li><li>Location-based services</li><li>Customizable widgets</li><li>Beautiful animations</li></ul>"
        },
        {
            id: 6,
            title: "Brand Identity Package",
            category: "design",
            description: "Complete brand identity package including logo, color palette, and typography system.",
            image: "https://via.placeholder.com/600x400?text=Brand+Identity",
            links: [
                { name: "Behance", url: "#" },
                { name: "Case Study", url: "#" }
            ],
            details: "<h3>Brand Identity Package</h3><p>A comprehensive brand identity developed for a tech startup. The package includes:</p><ul><li>Logo design</li><li>Color palette</li><li>Typography system</li><li>Brand guidelines</li><li>Marketing collateral</li></ul>"
        }
    ];
    
    const projectsGrid = document.querySelector('.projects-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectModal = document.getElementById('project-modal');
    const modalBody = document.querySelector('.modal-body');
    const closeModal = document.querySelector('.close-modal');
    
    // Render projects
    function renderProjects(filter = 'all') {
        projectsGrid.innerHTML = '';
        
        const filteredProjects = filter === 'all' 
            ? projects 
            : projects.filter(project => project.category === filter);
        
        filteredProjects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.dataset.id = project.id;
            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="project-img">
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <span class="project-category">${project.category}</span>
                    <p class="project-description">${project.description}</p>
                    <div class="project-links">
                        ${project.links.map(link => `
                            <a href="${link.url}" class="project-link" target="_blank">
                                <i class="fas fa-external-link-alt"></i> ${link.name}
                            </a>
                        `).join('')}
                    </div>
                </div>
            `;
            projectsGrid.appendChild(projectCard);
            
            // Add click event to open modal
            projectCard.addEventListener('click', () => {
                openProjectModal(project);
            });
        });
    }
    
    // Open project modal
    function openProjectModal(project) {
        modalBody.innerHTML = `
            <div class="modal-img-container">
                <img src="${project.image}" alt="${project.title}">
            </div>
            ${project.details}
            <div class="modal-links">
                ${project.links.map(link => `
                    <a href="${link.url}" class="modal-link" target="_blank">
                        <i class="fas fa-external-link-alt"></i> ${link.name}
                    </a>
                `).join('')}
            </div>
        `;
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Close project modal
    function closeProjectModal() {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Filter projects
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderProjects(button.dataset.filter);
        });
    });
    
    // Close modal events
    closeModal.addEventListener('click', closeProjectModal);
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });
    
    // Initialize projects
    renderProjects();
    
    // Skills Radar Chart
    const skillsRadar = document.getElementById('skills-radar');
    const skillsList = document.querySelector('.skills-list');
    
    const skillsData = {
        labels: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'UI/UX', 'Python', 'Git'],
        datasets: [{
            label: 'Skill Level',
            data: [95, 90, 85, 80, 75, 70, 85],
            backgroundColor: 'rgba(108, 92, 231, 0.2)',
            borderColor: 'rgba(108, 92, 231, 1)',
            pointBackgroundColor: 'rgba(108, 92, 231, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(108, 92, 231, 1)'
        }]
    };
    
    const radarChart = new Chart(skillsRadar, {
        type: 'radar',
        data: skillsData,
        options: {
            scales: {
                r: {
                    angleLines: {
                        display: true,
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: {
                        display: false,
                        stepSize: 20
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    pointLabels: {
                        color: 'var(--dark-color)',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            elements: {
                line: {
                    tension: 0.1
                }
            }
        }
    });
    
    // Render skills list
    const skills = [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3/Sass', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'Git', level: 85 },
        { name: 'Figma', level: 75 },
        { name: 'Adobe XD', level: 70 },
        { name: 'Python', level: 70 }
    ];
    
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <div class="skill-name">
                <span>${skill.name}</span>
                <span>${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.level}%"></div>
            </div>
        `;
        skillsList.appendChild(skillItem);
    });
    
    // Achievements
    const achievements = [
        { icon: 'fas fa-trophy', title: 'Hackathon Winner', description: '1st place in regional coding competition' },
        { icon: 'fas fa-certificate', title: 'AWS Certified', description: 'AWS Solutions Architect Associate' },
        { icon: 'fas fa-code', title: 'Open Source', description: 'Contributed to major open source projects' },
        { icon: 'fas fa-users', title: 'Community Leader', description: 'Organizer of local developer meetups' },
        { icon: 'fas fa-graduation-cap', title: 'Mentor', description: 'Mentored 50+ junior developers' },
        { icon: 'fas fa-book', title: 'Published Author', description: 'Technical articles on Medium' }
    ];
    
    const achievementsGrid = document.querySelector('.achievements-grid');
    
    achievements.forEach(achievement => {
        const achievementCard = document.createElement('div');
        achievementCard.className = 'achievement-card';
        achievementCard.innerHTML = `
            <div class="achievement-icon">
                <i class="${achievement.icon}"></i>
            </div>
            <h4 class="achievement-title">${achievement.title}</h4>
            <p class="achievement-description">${achievement.description}</p>
        `;
        achievementsGrid.appendChild(achievementCard);
    });
    
    // Timeline Experience
    const timeline = document.querySelector('.timeline');
    
    const experiences = [
        {
            date: '2021 - Present',
            title: 'Senior Frontend Developer',
            company: 'Tech Innovations Inc.',
            description: 'Lead the frontend development team, implementing modern web applications using React and TypeScript.'
        },
        {
            date: '2019 - 2021',
            title: 'UI Developer',
            company: 'Digital Solutions LLC',
            description: 'Developed responsive user interfaces and collaborated with designers to create seamless user experiences.'
        },
        {
            date: '2017 - 2019',
            title: 'Junior Web Developer',
            company: 'Web Craft Studios',
            description: 'Built and maintained client websites, focusing on accessibility and performance optimization.'
        },
        {
            date: '2015 - 2017',
            title: 'Freelance Developer',
            company: 'Self-Employed',
            description: 'Worked with various clients to develop custom websites and small business solutions.'
        }
    ];
    
    experiences.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <p class="timeline-date">${exp.date}</p>
                <h3 class="timeline-title">${exp.title}</h3>
                <p class="timeline-company">${exp.company}</p>
                <p class="timeline-description">${exp.description}</p>
            </div>
        `;
        timeline.appendChild(timelineItem);
    });
    
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // In a real application, you would send this data to a server
        console.log({ name, email, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
    
    // AI Assistant
    const aiToggle = document.getElementById('ai-toggle');
    const aiChat = document.getElementById('ai-chat');
    const aiClose = document.getElementById('ai-close');
    const aiMessages = document.getElementById('ai-messages');
    const aiInput = document.getElementById('ai-input');
    const aiSend = document.getElementById('ai-send');
    
    // Sample responses for the AI
    const aiResponses = {
        "hello": "Hello there! I'm Nexus AI, here to help you learn more about this portfolio. How can I assist you today?",
        "projects": "I've worked on several exciting projects including e-commerce platforms, mobile apps, and design systems. You can check them out in the Projects section!",
        "skills": "My technical skills include HTML/CSS, JavaScript, React, Node.js, and more. Take a look at the Skills section for a detailed breakdown.",
        "experience": "I have over 5 years of experience in web development, working with companies like Tech Innovations and Digital Solutions. See my full journey in the Experience section.",
        "contact": "You can reach out to me through the contact form or directly via email at contact@nexusport.com. I'd love to hear from you!",
        "default": "I'm not sure I understand. You can ask me about projects, skills, experience, or how to contact me."
    };
    
    // Toggle AI chat
    aiToggle.addEventListener('click', () => {
        aiChat.classList.toggle('active');
    });
    
    // Close AI chat
    aiClose.addEventListener('click', () => {
        aiChat.classList.remove('active');
    });
    
    // Send message
    function sendMessage() {
        const message = aiInput.value.trim();
        if (!message) return;
        
        // Add user message
        addMessage(message, 'user');
        aiInput.value = '';
        
        // Simulate AI thinking
        setTimeout(() => {
            const response = getAIResponse(message);
            addMessage(response, 'bot');
        }, 1000);
    }
    
    // Handle enter key
    aiInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Handle send button
    aiSend.addEventListener('click', sendMessage);
    
    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `ai-message ${sender}`;
        messageDiv.textContent = text;
        aiMessages.appendChild(messageDiv);
        aiMessages.scrollTop = aiMessages.scrollHeight;
    }
    
    // Get AI response
    function getAIResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return aiResponses.hello;
        } else if (lowerMessage.includes('project')) {
            return aiResponses.projects;
        } else if (lowerMessage.includes('skill')) {
            return aiResponses.skills;
        } else if (lowerMessage.includes('experience') || lowerMessage.includes('job')) {
            return aiResponses.experience;
        } else if (lowerMessage.includes('contact') || lowerMessage.includes('email')) {
            return aiResponses.contact;
        } else {
            return aiResponses.default;
        }
    }
    
    // Visitor Counter (simulated)
    const visitorCount = document.getElementById('visitor-count');
    let count = Math.floor(Math.random() * 1000) + 500;
    visitorCount.textContent = count;
    
    // Simulate increasing visitor count
    setInterval(() => {
        count += Math.floor(Math.random() * 3);
        visitorCount.textContent = count;
    }, 5000);
    
    // Initialize with a welcome message
    setTimeout(() => {
        addMessage("Hi there! I'm Nexus AI. Ask me about projects, skills, or how to get in touch!", 'bot');
    }, 1000);
    
    // CTA Button Actions
    const exploreBtn = document.getElementById('explore-btn');
    const contactBtn = document.getElementById('contact-btn');
    
    exploreBtn.addEventListener('click', () => {
        document.querySelector('.nav-link[href="#projects"]').click();
    });
    
    contactBtn.addEventListener('click', () => {
        document.querySelector('.nav-link[href="#contact"]').click();
    });
    
    // Animate skill bars on scroll
    function animateSkills() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skills-section')) {
                    animateSkills();
                }
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});