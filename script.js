// ======================== SKILL DATA ========================
const skillsData = {
    react: {
        title: 'React',
        description: 'Advanced React development with hooks, context, and state management solutions.',
        level: 'Expert',
        experience: '5+ years',
        emoji: '⚛️'
    },
    vue: {
        title: 'Vue.js',
        description: 'Proficient with Vue 3, composition API, and ecosystem tools.',
        level: 'Advanced',
        experience: '3+ years',
        emoji: '💚'
    },
    typescript: {
        title: 'TypeScript',
        description: 'Strong type-safe development practices and advanced TypeScript patterns.',
        level: 'Advanced',
        experience: '3+ years',
        emoji: '📘'
    },
    css: {
        title: 'CSS & Animation',
        description: 'Expert in CSS animations, GSAP, and creating fluid user experiences.',
        level: 'Expert',
        experience: '5+ years',
        emoji: '🎨'
    },
    nodejs: {
        title: 'Node.js',
        description: 'Full-stack Node.js development with Express, REST APIs, and real-time applications.',
        level: 'Expert',
        experience: '5+ years',
        emoji: '🟢'
    },
    mongodb: {
        title: 'MongoDB',
        description: 'NoSQL database design, optimization, and aggregation pipelines.',
        level: 'Advanced',
        experience: '4+ years',
        emoji: '🍃'
    },
    postgres: {
        title: 'PostgreSQL',
        description: 'Relational database design, complex queries, and performance optimization.',
        level: 'Advanced',
        experience: '3+ years',
        emoji: '🐘'
    },
    graphql: {
        title: 'GraphQL',
        description: 'GraphQL schema design, query optimization, and API development.',
        level: 'Intermediate',
        experience: '2+ years',
        emoji: '⬅️➡️'
    },
    git: {
        title: 'Git & GitHub',
        description: 'Version control, branching strategies, and collaborative workflows.',
        level: 'Expert',
        experience: '6+ years',
        emoji: '🔀'
    },
    docker: {
        title: 'Docker',
        description: 'Containerization, Docker Compose, and container orchestration.',
        level: 'Advanced',
        experience: '3+ years',
        emoji: '🐳'
    },
    'ci-cd': {
        title: 'CI/CD',
        description: 'GitHub Actions, Jenkins, and automated deployment pipelines.',
        level: 'Advanced',
        experience: '3+ years',
        emoji: '🔄'
    },
    aws: {
        title: 'AWS',
        description: 'Cloud services including EC2, S3, Lambda, and RDS.',
        level: 'Intermediate',
        experience: '2+ years',
        emoji: '☁️'
    }
};

// ======================== PROJECT DATA ========================
const projectsData = {
    ecommerce: {
        title: 'E-Commerce Platform',
        description: 'A comprehensive e-commerce platform featuring real-time inventory management, payment processing, and user authentication.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        features: [
            'Real-time inventory updates',
            'Secure payment processing',
            'User authentication & authorization',
            'Shopping cart & order management',
            'Admin dashboard for analytics'
        ]
    },
    dashboard: {
        title: 'Analytics Dashboard',
        description: 'Interactive real-time analytics dashboard with data visualization and reporting capabilities.',
        technologies: ['Vue.js', 'D3.js', 'Firebase', 'WebSocket'],
        features: [
            'Real-time data updates',
            'Interactive charts & graphs',
            'Customizable dashboards',
            'Export reports to PDF',
            'Role-based access control'
        ]
    },
    social: {
        title: 'Social Media App',
        description: 'Full-featured social platform with real-time messaging, notifications, and user engagement features.',
        technologies: ['Next.js', 'PostgreSQL', 'WebSocket', 'Redis'],
        features: [
            'Real-time messaging',
            'User profiles & followers',
            'Post creation & feeds',
            'Push notifications',
            'Search & recommendations'
        ]
    },
    animation: {
        title: 'Animation Library',
        description: 'Custom animation library providing advanced motion controls and effects.',
        technologies: ['GSAP', 'Three.js', 'Canvas'],
        features: [
            'Timeline animations',
            '3D transformations',
            'Particle effects',
            'Physics-based motion',
            'Performance optimization'
        ]
    },
    'ui-kit': {
        title: 'Component UI Kit',
        description: 'Reusable component library with extensive documentation and Storybook integration.',
        technologies: ['React', 'Storybook', 'CSS Modules'],
        features: [
            '50+ reusable components',
            'Comprehensive documentation',
            'Storybook integration',
            'TypeScript support',
            'Accessibility compliance'
        ]
    },
    interactive: {
        title: 'Interactive Experience',
        description: 'Immersive 3D interactive web experience with WebGL rendering.',
        technologies: ['WebGL', 'GLSL', 'JavaScript'],
        features: [
            '3D graphics rendering',
            'Interactive controls',
            'Real-time performance',
            'Cross-browser compatibility',
            'Mobile optimization'
        ]
    },
    cli: {
        title: 'Developer CLI Tool',
        description: 'Powerful command-line tool designed for rapid development workflows.',
        technologies: ['Node.js', 'Commander', 'Chalk'],
        features: [
            'Project scaffolding',
            'Component generation',
            'Build automation',
            'Plugin system',
            'Configuration management'
        ]
    },
    optimizer: {
        title: 'Image Optimizer',
        description: 'Batch image optimization tool with multiple compression presets.',
        technologies: ['Sharp', 'ImageMagick', 'Express'],
        features: [
            'Batch processing',
            'Multiple formats support',
            'Compression presets',
            'Web UI interface',
            'CLI integration'
        ]
    },
    generator: {
        title: 'Code Generator',
        description: 'Scaffold project boilerplate with customizable templates.',
        technologies: ['Handlebars', 'Inquirer', 'Plop'],
        features: [
            'Template-based generation',
            'Interactive prompts',
            'Custom templates',
            'Variable substitution',
            'Git integration'
        ]
    }
};

// ======================== INITIALIZATION ========================
document.addEventListener('DOMContentLoaded', function () {
    initializeThemeToggle();
    initializeScrollToTopButton();
    initializeIntersectionObserver();
    initializeSidebarNavigation();
    initializeSkillCards();
    initializeProjectCards();
    initializeModals();
    initializeFormSubmission();
    updateActiveSection();
});

// ======================== THEME TOGGLE ========================
function initializeThemeToggle() {
    const toggleBtn = document.querySelector('.btn');
    
    // Check saved preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light');
        toggleBtn.textContent = 'Dark';
    }
    
    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const isLight = document.documentElement.classList.toggle('light');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        toggleBtn.textContent = isLight ? 'Dark' : 'Light';
    });
}

// ======================== SCROLL TO TOP BUTTON ========================
function initializeScrollToTopButton() {
    const arrowBtn = document.getElementById('arrow');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            arrowBtn.classList.remove('hidden');
        } else {
            arrowBtn.classList.add('hidden');
        }
    });
    
    arrowBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    arrowBtn.classList.add('hidden');
}

// ======================== INTERSECTION OBSERVER ========================
function initializeIntersectionObserver() {
    const options = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show', 'now');
                
                // Trigger animations for nested elements
                setTimeout(() => {
                    entry.target.querySelectorAll('.appear, .todo').forEach(el => {
                        el.classList.add('show', 'now');
                    });
                }, 100);
            } else {
                entry.target.classList.remove('show', 'now');
                entry.target.querySelectorAll('.appear, .todo').forEach(el => {
                    el.classList.remove('show', 'now');
                });
            }
        });
    }, options);
    
    // Observe all sections and animated elements
    document.querySelectorAll('.section, .appear, .todo').forEach(el => {
        observer.observe(el);
    });
}

// ======================== SIDEBAR NAVIGATION ========================
function initializeSidebarNavigation() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    // Handle click navigation
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                updateActiveSidebarLink();
            }
        });
    });
}

function updateActiveSidebarLink() {
    const sections = document.querySelectorAll('.section');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    let currentSection = 'home';
    const offset = 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop - offset && 
            window.scrollY < sectionTop + sectionHeight - offset) {
            currentSection = section.getAttribute('data-section');
        }
    });
    
    sidebarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === currentSection) {
            link.classList.add('active');
        }
    });
}

function updateActiveSection() {
    window.addEventListener('scroll', updateActiveSidebarLink);
    updateActiveSidebarLink();
}

// ======================== SKILL CARDS ========================
function initializeSkillCards() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            const skillId = card.getAttribute('data-skill');
            openSkillModal(skillId);
        });
    });
}

function openSkillModal(skillId) {
    const skill = skillsData[skillId];
    if (!skill) return;
    
    const modal = document.getElementById('skillModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalLevel = document.getElementById('modalLevel');
    const modalExperience = document.getElementById('modalExperience');
    
    modalTitle.textContent = skill.title;
    modalDescription.textContent = skill.description;
    modalLevel.textContent = skill.level;
    modalExperience.textContent = skill.experience;
    document.querySelector('.modal-icon').textContent = skill.emoji;
    
    modal.classList.remove('hidden');
}

// ======================== PROJECT CARDS ========================
function initializeProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });
}

function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    const title = document.getElementById('projectModalTitle');
    const description = document.getElementById('projectModalDescription');
    const techList = document.getElementById('projectTechs');
    const featuresList = document.getElementById('projectFeatures');
    
    title.textContent = project.title;
    description.textContent = project.description;
    
    // Clear and populate tech list
    techList.innerHTML = '';
    project.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.textContent = tech;
        techList.appendChild(span);
    });
    
    // Clear and populate features list
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    modal.classList.remove('hidden');
}

// ======================== MODALS ========================
function initializeModals() {
    const skillModal = document.getElementById('skillModal');
    const projectModal = document.getElementById('projectModal');
    const closeButtons = document.querySelectorAll('.modal-close');
    
    // Close modal when clicking close button
    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.target.closest('.modal').classList.add('hidden');
        });
    });
    
    // Close modal when clicking outside
    [skillModal, projectModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            skillModal.classList.add('hidden');
            projectModal.classList.add('hidden');
        }
    });
}

// ======================== FORM SUBMISSION ========================
function initializeFormSubmission() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const inputs = form.querySelectorAll('input, textarea');
            const data = {
                name: inputs[0].value,
                email: inputs[1].value,
                message: inputs[2].value
            };
            
            // Show success message (in real app, send to server)
            console.log('Form submitted:', data);
            alert('Thank you for your message! I\'ll get back to you soon.');
            form.reset();
        });
    }
}

// ======================== HEADER SHRINK ON SCROLL ========================
const header = document.getElementById('mainHeader');
const headerNav = document.querySelectorAll('nav .home, nav .about, nav .projects, nav .skills, nav .contact');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shrink');
        headerNav.forEach(item => {
            item.classList.add('textDisappear');
            item.classList.remove('textAppear');
        });
    } else {
        header.classList.remove('shrink');
        headerNav.forEach(item => {
            item.classList.remove('textDisappear');
            item.classList.add('textAppear');
        });
    }
});

header.addEventListener('mouseenter', () => {
    if (window.scrollY <= 50) return;
    header.classList.add('shrink');
    headerNav.forEach(item => {
        item.classList.add('textAppear');
        item.classList.remove('textDisappear');
    });
});

header.addEventListener('mouseleave', () => {
    if (window.scrollY <= 50) return;
    headerNav.forEach(item => {
        item.classList.add('textDisappear');
        item.classList.remove('textAppear');
    });
});
