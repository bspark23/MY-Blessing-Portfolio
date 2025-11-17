// Personal Information and Data
const PERSONAL_INFO = {
    name: 'Blessing Mbata',
    title: 'Full Stack Software Developer',
    tagline: 'Full Stack Developer · Web Designer · Graphic Designer · Learning Animation',
    bio: "I'm a passionate full stack developer and designer with 3+ years building user-centered web applications. I combine code and design to create responsive, high-performance experiences. I enjoy solving problems, learning new technologies, and shipping products that matter.",
    location: 'Port Harcourt, Nigeria',
    experience: '3+ years',
    email: 'adaoma2826@gmail.com',
    whatsapp: '+2348036630578',
    github: 'https://github.com/bspark23'
};

const SKILLS = [
    { name: 'React', level: 99, category: 'Frontend', icon: 'fab fa-react' },
    { name: 'Next.js', level: 95, category: 'Frontend', icon: 'fas fa-arrow-right' },
    { name: 'TypeScript', level: 88, category: 'Language', icon: 'fab fa-js-square' },
    { name: 'JavaScript', level: 95, category: 'Language', icon: 'fab fa-js-square' },
    { name: 'Node.js', level: 85, category: 'Backend', icon: 'fab fa-node-js' },
    { name: 'Express.js', level: 85, category: 'Backend', icon: 'fas fa-server' },
    { name: 'Spring Boot', level: 80, category: 'Backend', icon: 'fas fa-leaf' },
    { name: 'Angular', level: 85, category: 'Frontend', icon: 'fab fa-angular' },
    { name: 'PostgreSQL', level: 82, category: 'Database', icon: 'fas fa-database' },
    { name: 'MongoDB', level: 80, category: 'Database', icon: 'fas fa-database' },
    { name: 'Tailwind CSS', level: 92, category: 'Frontend', icon: 'fab fa-css3-alt' },
    { name: 'Java', level: 76, category: 'Language', icon: 'fab fa-java' },
    { name: 'PHP', level: 75, category: 'Language', icon: 'fab fa-php' },
    { name: 'Docker', level: 60, category: 'Tools', icon: 'fab fa-docker' },
    { name: 'AWS', level: 50, category: 'Cloud', icon: 'fab fa-aws' },
    { name: 'Git', level: 99, category: 'Tools', icon: 'fab fa-git-alt' },
    { name: 'ChatGPT', level: 95, category: 'AI', icon: 'fas fa-robot' },
    { name: 'Gemini AI', level: 99, category: 'AI', icon: 'fas fa-robot' },
    { name: 'Claude AI', level: 90, category: 'AI', icon: 'fas fa-robot' },
    { name: 'Canva Magic Studio', level: 99, category: 'AI', icon: 'fas fa-robot' },
    { name: 'Cursor AI', level: 90, category: 'AI', icon: 'fas fa-robot' },
    { name: 'Lovable AI', level: 99, category: 'AI', icon: 'fas fa-robot' },
    { name: 'Bolt AI', level: 99, category: 'AI', icon: 'fas fa-robot' },
    { name: 'Replit AI', level: 99, category: 'AI', icon: 'fas fa-robot' },
];

const PROJECTS = [
    {
        id: 1,
        title: 'Mental Health App',
        description: 'A comprehensive mental health platform with therapy booking and wellness tracking',
        liveUrl: 'https://mental-heathapp-r418.vercel.app/',
        githubUrl: 'https://github.com/bspark23/Mental-Heathapp.git',
        tags: ['React'],
        category: 'Frontend'
    },
    {
        id: 2,
        title: 'Finical App',
        description: 'Personal finance management application with budget tracking and analytics',
        liveUrl: 'https://finicalapp.netlify.app/',
        githubUrl: '',
        tags: ['React', 'TypeScript', 'Chart.js'],
        category: 'Frontend'
    },

    {
        id: 4,
        title: 'MBA Tech Global',
        description: 'My Personal Website',
        liveUrl: 'https://helpful-conkies-3af667.netlify.app/',
        githubUrl: "",
        tags: ['HTML, CSS, JAVASCRIPT, OTHERS'],
        category: 'Fullstack'
    },

    {
        id: 4,
        title: 'Student  Management System',
        description: 'Collaborative Student management platform with real-time updates',
        liveUrl: 'https://github.com/bspark23/student-processing-backend.git',
        githubUrl: 'https://github.com/bspark23/student-processing-frontend.git',
        tags: ['Angular', 'java', 'PostgreSQL'],
        category: 'Fullstack'
    },
    {
        id: 5,
        title: 'Harvestlink',
        description: 'Agricultural networking platform connecting farmers with buyers and suppliers',
        liveUrl: 'https://agronetapp.netlify.app/',
        githubUrl: 'https://github.com/bspark23/agronet-app',
        tags: ['Nextjs', 'C#',],
        category: 'Frontend'


    },
    {
        id: 5,
        title: 'Weather Mobile App',
        description: 'Weather Mobile App',
        liveUrl: '',
        githubUrl: 'https://github.com/bspark23/Weatherapp.git',
        tags: ['Flutter',],
        category: 'Mobile'


    },
    {
        id: 6,
        title: 'Hires Holding',
        description: 'Corporate website for recruitment and HR services company',
        liveUrl: 'https://hiresholding.netlify.app/',
        githubUrl: '',
        tags: ['Next.js', 'Tailwind CSS'],
        category: 'Frontend'
    },
    {
        id: 7,
        title: 'Civic Vote',
        description: 'Digital voting platform ',
        liveUrl: 'https://civic-vote.netlify.app/',
        githubUrl: '',
        tags: ['Nextjs'],
        category: 'Frontend'
    },
    {
        id: 8,
        title: 'NexaFlow App',
        description: 'An AI powered UV cheacker ',
        liveUrl: 'https://nexaflowapp.netlify.app/',
        githubUrl: 'https://github.com/bspark23/NexaFlow.git',
        tags: ['Nextjs'],
        category: 'Frontend'
    },


];

// Global Variables
let currentSkillFilter = 'All';
let currentProjectFilter = 'All';
let typewriterIndex = 0;
let typewriterText = PERSONAL_INFO.tagline;
let isDeleting = false;
let typewriterSpeed = 100;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    setupScrollProgress();
    setupNavbar();
    setupParticleBackground();
    setupTypewriter();
    setupSkillsGrid();
    setupProjectsGrid();
    setupContactForm();
    setupScrollAnimations();
    setupFloatingButtons();

    // Add scroll event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
}

// Scroll Progress
function setupScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');

    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }

    window.addEventListener('scroll', updateScrollProgress);
}

// Navbar Functionality
function setupNavbar() {
    const navbar = document.getElementById('navbar');

    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateNavbar);
}

// Mobile Menu
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menuIcon');

    mobileNav.classList.toggle('active');

    if (mobileNav.classList.contains('active')) {
        menuIcon.className = 'fas fa-times';
    } else {
        menuIcon.className = 'fas fa-bars';
    }
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menuIcon');

    mobileNav.classList.remove('active');
    menuIcon.className = 'fas fa-bars';
}

// Smooth Scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Particle Background
function setupParticleBackground() {
    const particleContainer = document.getElementById('particleBackground');
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = '#00ffff';
    particle.style.borderRadius = '50%';
    particle.style.opacity = Math.random() * 0.6 + 0.2;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';

    // Animate particle
    const duration = Math.random() * 20 + 10;
    particle.style.animation = `float ${duration}s ease-in-out infinite`;

    container.appendChild(particle);
}

// Typewriter Effect
function setupTypewriter() {
    const typewriterElement = document.getElementById('typewriter');

    function typeWriter() {
        const currentText = typewriterText.substring(0, typewriterIndex);
        typewriterElement.textContent = currentText;

        if (!isDeleting && typewriterIndex < typewriterText.length) {
            typewriterIndex++;
            setTimeout(typeWriter, typewriterSpeed);
        } else if (isDeleting && typewriterIndex > 0) {
            typewriterIndex--;
            setTimeout(typeWriter, typewriterSpeed / 2);
        } else if (!isDeleting && typewriterIndex === typewriterText.length) {
            setTimeout(() => {
                isDeleting = true;
                typeWriter();
            }, 2000);
        } else if (isDeleting && typewriterIndex === 0) {
            isDeleting = false;
            setTimeout(typeWriter, 500);
        }
    }

    typeWriter();
}

// Skills Grid
function setupSkillsGrid() {
    renderSkills();
}

function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    const filteredSkills = currentSkillFilter === 'All'
        ? SKILLS
        : SKILLS.filter(skill => skill.category === currentSkillFilter);

    skillsGrid.innerHTML = '';

    filteredSkills.forEach((skill, index) => {
        const skillCard = createSkillCard(skill, index);
        skillsGrid.appendChild(skillCard);
    });

    // Animate skill progress bars
    setTimeout(() => {
        animateSkillBars();
    }, 100);
}

function createSkillCard(skill, index) {
    const card = document.createElement('div');
    card.className = 'skill-card glass-card';
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
        <div class="skill-icon">
            <i class="${skill.icon}"></i>
        </div>
        <h3 class="skill-name">${skill.name}</h3>
        <div class="skill-progress">
            <div class="skill-progress-bar" data-level="${skill.level}"></div>
        </div>
        <div class="skill-percentage">${skill.level}%</div>
        <div class="skill-category">${skill.category}</div>
    `;

    return card;
}

function animateSkillBars() {
    const progressBars = document.querySelectorAll('.skill-progress-bar');
    progressBars.forEach((bar, index) => {
        const level = bar.getAttribute('data-level');
        setTimeout(() => {
            bar.style.width = level + '%';
        }, index * 100);
    });
}

function filterSkills(category) {
    currentSkillFilter = category;

    // Update active filter button
    document.querySelectorAll('.skills-filter .filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });

    renderSkills();
}

// Projects Grid
function setupProjectsGrid() {
    renderProjects();
}

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const filteredProjects = currentProjectFilter === 'All'
        ? PROJECTS
        : PROJECTS.filter(project => project.category === currentProjectFilter);

    projectsGrid.innerHTML = '';

    filteredProjects.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card glass-card';
    card.style.animationDelay = `${index * 0.1}s`;

    const categoryIcon = getCategoryIcon(project.category);

    card.innerHTML = `
        <div class="project-content">
            <div class="project-category">
                <i class="${categoryIcon}"></i>
                ${project.category}
            </div>
            <div class="project-overlay"></div>
            <div class="project-actions">
                <a href="${project.liveUrl}" target="_blank" class="project-action-btn primary">
                    <i class="fas fa-external-link-alt"></i>
                    Live Demo
                </a>
                <a href="${project.githubUrl}" target="_blank" class="project-action-btn secondary">
                    <i class="fab fa-github"></i>
                    Code
                </a>
            </div>
        </div>
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.liveUrl}" target="_blank" class="project-link">
                    View Project →
                </a>
                <a href="${project.githubUrl}" target="_blank" class="project-github">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    `;

    return card;
}

function getCategoryIcon(category) {
    const icons = {
        'Frontend': 'fas fa-globe',
        'Backend': 'fas fa-code',
        'Fullstack': 'fas fa-layer-group',
        'Mobile': 'fas fa-mobile-alt',
        'Blockchain': 'fas fa-code'
    };
    return icons[category] || 'fas fa-globe';
}

function filterProjects(category) {
    currentProjectFilter = category;

    // Update active filter button
    document.querySelectorAll('.projects-filter .filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });

    renderProjects();
}

// Contact Form
function setupContactForm() {
    // No longer using traditional form submission
    // Form is now handled by previewMessage function
}

async function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    // Validation
    if (!data.name.trim()) {
        showToast('Please enter your name', 'error');
        return;
    }

    if (!validateEmail(data.email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }

    if (!data.subject.trim()) {
        showToast('Please enter a subject', 'error');
        return;
    }

    if (!data.message.trim()) {
        showToast('Please enter your message', 'error');
        return;
    }

    // Show loading state
    const submitBtn = e.target.querySelector('.submit-btn');
    submitBtn.classList.add('loading');

    try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
        e.target.reset();
    } catch (error) {
        showToast('Failed to send message. Please try again.', 'error');
    } finally {
        submitBtn.classList.remove('loading');
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Toast Notifications
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');

    toast.className = `toast ${type}`;
    toastMessage.textContent = message;

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.glass-card, .skill-card, .project-card, .service-card, .certificate-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Floating Buttons
function setupFloatingButtons() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    function toggleScrollButton() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', toggleScrollButton);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// External Links
function openGitHub() {
    window.open(PERSONAL_INFO.github, '_blank');
}

function openCertificate(certificateId) {
    // Map certificate IDs to local PDF files
    // Just add your certificate PDFs to the pdfs folder with these names:
    const certificateFiles = {
        'aws-developer': './pdfs/aws-developer-certificate.pdf',
        'react-advanced': './pdfs/react-advanced-certificate.pdf',
        'fullstack-web': './pdfs/fullstack-web-certificate.pdf',
        'nodejs-ibm': './pdfs/nodejs-ibm-certificate.pdf',
        'typescript-fundamentals': './pdfs/typescript-fundamentals-certificate.pdf'
    };

    const certificateUrl = certificateFiles[certificateId];
    if (certificateUrl) {
        // Check if file exists before opening
        checkPDFExists(certificateUrl).then(exists => {
            if (exists) {
                openPDFModal(certificateUrl, getCertificateTitle(certificateId));
            } else {
                showToast(`Certificate PDF not found. Please add "${certificateUrl}" to your pdfs folder.`, 'error');
            }
        });
    } else {
        showToast('Certificate not found. Please add the PDF file to the pdfs folder.', 'error');
    }
}

function getCertificateTitle(certificateId) {
    const titles = {
        'aws-developer': 'AWS Certified Developer Certificate',
        'react-advanced': 'React Advanced Patterns Certificate',
        'fullstack-web': 'Full Stack Web Development Certificate',
        'nodejs-ibm': 'Node.js Application Development Certificate',
        'typescript-fundamentals': 'TypeScript Fundamentals Certificate'
    };
    return titles[certificateId] || 'Certificate';
}

// Function to add custom PDF
function openCustomPDF(filename, title) {
    const pdfPath = `./pdfs/${filename}`;
    openPDFModal(pdfPath, title);
}

// Function to check if PDF exists
function checkPDFExists(url) {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open('HEAD', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                resolve(xhr.status === 200);
            }
        };
        xhr.send();
    });
}

// Global variable to store current PDF URL
let currentPDFUrl = '';

// PDF Modal
function openPDFModal(url, title) {
    const modal = document.getElementById('pdfModal');
    const modalTitle = document.getElementById('pdfModalTitle');
    const pdfFrame = document.getElementById('pdfFrame');
    const loadingIndicator = document.getElementById('pdfLoading');

    // Store current PDF URL for download/open actions
    currentPDFUrl = url;

    modalTitle.textContent = title;
    modal.classList.add('active');

    // Show loading indicator
    if (loadingIndicator) {
        loadingIndicator.style.display = 'flex';
    }

    // Clear previous content
    pdfFrame.src = '';

    // Set up error handling
    pdfFrame.onload = function () {
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
    };

    pdfFrame.onerror = function () {
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
        showPDFError(title);
    };

    // Load the PDF
    pdfFrame.src = url;

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function showPDFError(title) {
    const pdfFrame = document.getElementById('pdfFrame');
    const errorHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: #1e293b; color: #cbd5e1; text-align: center; padding: 2rem;">
            <i class="fas fa-file-pdf" style="font-size: 4rem; color: #ef4444; margin-bottom: 1rem;"></i>
            <h3 style="margin-bottom: 1rem; color: #ffffff;">PDF Not Found</h3>
            <p style="margin-bottom: 1rem;">The file "${title}" could not be loaded.</p>
            <p style="font-size: 0.875rem; color: #94a3b8;">Please make sure the PDF file is placed in the 'pdfs' folder with the correct filename.</p>
            <button onclick="closePDFModal()" style="margin-top: 1.5rem; padding: 0.75rem 1.5rem; background: #00ffff; color: #0f172a; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">
                Close
            </button>
        </div>
    `;

    pdfFrame.srcdoc = errorHTML;
}

function downloadCurrentPDF() {
    if (currentPDFUrl) {
        const link = document.createElement('a');
        link.href = currentPDFUrl;
        link.download = currentPDFUrl.split('/').pop(); // Get filename from URL
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast('PDF download started!', 'success');
    }
}

function openCurrentPDFInNewTab() {
    if (currentPDFUrl) {
        window.open(currentPDFUrl, '_blank');
        showToast('PDF opened in new tab!', 'success');
    }
}

function closePDFModal() {
    const modal = document.getElementById('pdfModal');
    const pdfFrame = document.getElementById('pdfFrame');

    modal.classList.remove('active');
    pdfFrame.src = '';
    currentPDFUrl = ''; // Clear current PDF URL

    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Event Handlers
function handleScroll() {
    // Handle scroll-based animations and effects
    // Removed parallax effect to fix scrolling issues
}

function handleResize() {
    // Handle responsive adjustments
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
}

// Keyboard Navigation
document.addEventListener('keydown', function (e) {
    // Close modal on Escape key
    if (e.key === 'Escape') {
        closePDFModal();
        closeMobileMenu();
    }
});

// Click outside to close modal
document.addEventListener('click', function (e) {
    const pdfModal = document.getElementById('pdfModal');
    const mobileNav = document.getElementById('mobileNav');

    if (e.target === pdfModal) {
        closePDFModal();
    }

    if (!e.target.closest('.navbar') && mobileNav.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Smooth scroll for anchor links
document.addEventListener('click', function (e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        scrollToSection(targetId);
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll handlers
window.addEventListener('scroll', debounce(handleScroll, 10));

// Preload images for better performance
function preloadImages() {
    PROJECTS.forEach(project => {
        const img = new Image();
        img.src = project.image;
    });
}

// Initialize image preloading
setTimeout(preloadImages, 1000);

// Add loading states and error handling for external resources
function handleImageError(img) {
    console.log('Image failed to load:', img.src);

    // Special handling for portrait image
    if (img.classList.contains('portrait-img')) {
        img.src = `data:image/svg+xml,${encodeURIComponent(`
            <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#00ffff;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#ff00ff;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <circle cx="150" cy="150" r="140" fill="url(#grad1)" opacity="0.3"/>
                <circle cx="150" cy="150" r="120" fill="#1e293b"/>
                <text x="150" y="140" text-anchor="middle" fill="#00ffff" font-family="Arial" font-size="24" font-weight="bold">Blessing</text>
                <text x="150" y="165" text-anchor="middle" fill="#00ffff" font-family="Arial" font-size="16">Mbata</text>
                <text x="150" y="185" text-anchor="middle" fill="#cbd5e1" font-family="Arial" font-size="12">Full Stack Developer</text>
            </svg>
        `)}`;
    } else {
        img.src = `data:image/svg+xml,${encodeURIComponent(`
            <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="#1e293b"/>
                <rect x="50" y="50" width="300" height="100" rx="10" fill="#00ffff" opacity="0.2"/>
                <text x="200" y="110" text-anchor="middle" fill="#00ffff" font-family="Arial" font-size="16">Image Not Available</text>
            </svg>
        `)}`;
    }
}

// Add error handling to all images
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', () => handleImageError(img));
        img.addEventListener('load', () => {
            console.log('Image loaded successfully:', img.src);
        });
    });

    // Special handling for portrait image
    const portraitImg = document.querySelector('.portrait-img');
    if (portraitImg) {
        console.log('Portrait image found:', portraitImg.src);

        // Check if image loads
        if (portraitImg.complete && portraitImg.naturalHeight !== 0) {
            console.log('Portrait image already loaded');
        } else {
            console.log('Portrait image loading...');
        }
    }
});

// Console welcome message
console.log(`
🚀 Welcome to Blessing Mbata's Portfolio!
📧 Contact: ${PERSONAL_INFO.email}
🌐 GitHub: ${PERSONAL_INFO.github}
💼 Portfolio: ${PERSONAL_INFO.portfolio}

Built with ❤️ using HTML, CSS, and JavaScript
`);

// Contact Form Functions
function previewMessage() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const inquiry = document.getElementById('inquiry').value;

    // Validation
    if (!name) {
        showToast('Please enter your name', 'error');
        return;
    }

    if (!validateEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }

    if (!inquiry) {
        showToast('Please select an inquiry type', 'error');
        return;
    }

    // Generate preview message
    const message = `Hello, my name is ${name} (${email}). I would like to talk about ${inquiry}.`;

    // Show preview
    const previewContent = document.getElementById('previewContent');
    const messagePreview = document.getElementById('messagePreview');
    const contactForm = document.getElementById('contactForm');

    previewContent.textContent = message;
    contactForm.style.display = 'none';
    messagePreview.style.display = 'block';
}

function editMessage() {
    const messagePreview = document.getElementById('messagePreview');
    const contactForm = document.getElementById('contactForm');

    messagePreview.style.display = 'none';
    contactForm.style.display = 'block';
}

function sendWhatsAppMessage() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const inquiry = document.getElementById('inquiry').value;

    const message = `Hello, my name is ${name} (${email}). I would like to talk about ${inquiry}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2348036630578?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    // Reset form
    document.getElementById('contactForm').reset();
    editMessage();

    showToast('Redirecting to WhatsApp...', 'success');
}

// Make functions globally accessible
window.scrollToSection = scrollToSection;
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.filterSkills = filterSkills;
window.filterProjects = filterProjects;
window.openGitHub = openGitHub;
window.openCV = openCV;
window.openCertificate = openCertificate;
window.scrollToTop = scrollToTop;
window.showToast = showToast;
window.previewMessage = previewMessage;
window.editMessage = editMessage;
window.sendWhatsAppMessage = sendWhatsAppMessage;
window.openCustomPDF = openCustomPDF;
window.closePDFModal = closePDFModal;

// Export functions for global access (if needed)
window.portfolioApp = {
    scrollToSection,
    toggleMobileMenu,
    closeMobileMenu,
    filterSkills,
    filterProjects,
    openGitHub,
    openCV,
    openCertificate,
    scrollToTop,
    showToast,
    previewMessage,
    editMessage,
    sendWhatsAppMessage,
    hireMe,
    openCustomPDF,
    closePDFModal
};