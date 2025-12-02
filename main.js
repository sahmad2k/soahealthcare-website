// Syed's of America - Main JavaScript File
// Handles all interactive functionality, animations, and user interactions

document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeScrollEffects();
    initializeNavigation();
    initializeCharts();
    initializeServiceCards();
});

// Initialize text animations and reveals
function initializeAnimations() {
    // Initialize Splitting.js for text animations
    if (typeof Splitting !== 'undefined') {
        Splitting();
    }
    
    // Animate hero title
    const heroTitle = document.querySelector('[data-splitting]');
    if (heroTitle) {
        anime({
            targets: heroTitle.querySelectorAll('.char'),
            opacity: [0, 1],
            translateY: [50, 0],
            delay: anime.stagger(50),
            duration: 800,
            easing: 'easeOutExpo'
        });
    }
    
    // Animate service cards on load
    anime({
        targets: '.service-card',
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(200, {start: 500}),
        duration: 600,
        easing: 'easeOutQuart'
    });
}

// Initialize scroll-based reveal animations
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Add staggered animation for multiple elements
                const siblings = entry.target.parentElement.querySelectorAll('.reveal');
                siblings.forEach((sibling, index) => {
                    if (sibling === entry.target) {
                        anime({
                            targets: sibling,
                            opacity: [0, 1],
                            translateY: [30, 0],
                            delay: index * 100,
                            duration: 600,
                            easing: 'easeOutQuart'
                        });
                    }
                });
            }
        });
    }, observerOptions);
    
    // Observe all reveal elements
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

// Initialize navigation functionality
function initializeNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to navigation
    let lastScrollY = window.scrollY;
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        lastScrollY = window.scrollY;
    });
}

// Initialize ECharts for data visualization
function initializeCharts() {
    const chartElement = document.getElementById('impact-chart');
    if (chartElement && typeof echarts !== 'undefined') {
        const chart = echarts.init(chartElement);
        
        const option = {
            title: {
                text: 'Healthcare Consulting Impact Metrics',
                left: 'center',
                textStyle: {
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#374151'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['Before Consulting', 'After Consulting'],
                bottom: 10
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '15%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['Cost Efficiency', 'Patient Satisfaction', 'Operational Efficiency', 'Compliance Score', 'Revenue Optimization'],
                axisLabel: {
                    rotate: 45,
                    fontSize: 12
                }
            },
            yAxis: {
                type: 'value',
                max: 100,
                axisLabel: {
                    formatter: '{value}%'
                }
            },
            series: [
                {
                    name: 'Before Consulting',
                    type: 'bar',
                    data: [45, 60, 50, 70, 55],
                    itemStyle: {
                        color: '#9CA3AF'
                    }
                },
                {
                    name: 'After Consulting',
                    type: 'bar',
                    data: [85, 90, 80, 95, 88],
                    itemStyle: {
                        color: '#3B82F6'
                    }
                }
            ],
            animationDuration: 2000,
            animationEasing: 'cubicOut'
        };
        
        chart.setOption(option);
        
        // Make chart responsive
        window.addEventListener('resize', () => {
            chart.resize();
        });
    }
}

// Initialize service card interactions
function initializeServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.02,
                translateY: -8,
                duration: 300,
                easing: 'easeOutQuart'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                translateY: 0,
                duration: 300,
                easing: 'easeOutQuart'
            });
        });
        
        // Add click interaction for service cards
        card.addEventListener('click', function() {
            // Add a subtle pulse effect on click
            anime({
                targets: this,
                scale: [1, 1.05, 1],
                duration: 400,
                easing: 'easeOutQuart'
            });
            
            // Navigate to services page after animation
            setTimeout(() => {
                window.location.href = 'services.html';
            }, 200);
        });
    });
}

// Calendar functionality for appointment booking
class CalendarManager {
    constructor() {
        this.currentDate = new Date();
        this.selectedDate = null;
        this.availableSlots = this.generateAvailableSlots();
    }
    
    generateAvailableSlots() {
        const slots = {};
        const today = new Date();
        
        // Generate available slots for the next 30 days
        for (let i = 1; i <= 30; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            
            // Skip weekends
            if (date.getDay() === 0 || date.getDay() === 6) continue;
            
            const dateStr = date.toISOString().split('T')[0];
            slots[dateStr] = [
                '9:00 AM', '10:00 AM', '11:00 AM', 
                '2:00 PM', '3:00 PM', '4:00 PM'
            ];
        }
        
        return slots;
    }
    
    renderCalendar() {
        const calendarElement = document.getElementById('calendar-grid');
        if (!calendarElement) return;
        
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();
        
        let calendarHTML = '<div class="grid grid-cols-7 gap-2 mb-4">';
        
        // Day headers
        const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayHeaders.forEach(day => {
            calendarHTML += `<div class="text-center font-semibold text-gray-600 p-2">${day}</div>`;
        });
        
        calendarHTML += '</div><div class="grid grid-cols-7 gap-2">';
        
        // Empty cells for days before the first day of the month
        for (let i = 0; i < startingDayOfWeek; i++) {
            calendarHTML += '<div class="p-2"></div>';
        }
        
        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dateStr = date.toISOString().split('T')[0];
            const isAvailable = this.availableSlots[dateStr] && this.availableSlots[dateStr].length > 0;
            const isPast = date < new Date().setHours(0, 0, 0, 0);
            
            let dayClass = 'p-2 text-center cursor-pointer rounded-lg transition-all ';
            if (isPast) {
                dayClass += 'text-gray-400 cursor-not-allowed';
            } else if (isAvailable) {
                dayClass += 'hover:bg-blue-100 text-blue-600 font-semibold';
            } else {
                dayClass += 'text-gray-400';
            }
            
            calendarHTML += `<div class="${dayClass}" data-date="${dateStr}" ${isAvailable && !isPast ? 'onclick="selectDate(\'' + dateStr + '\')"' : ''}>${day}</div>`;
        }
        
        calendarHTML += '</div>';
        calendarElement.innerHTML = calendarHTML;
    }
    
    selectDate(dateStr) {
        this.selectedDate = dateStr;
        this.renderTimeSlots(dateStr);
        
        // Update visual selection
        document.querySelectorAll('[data-date]').forEach(el => {
            el.classList.remove('bg-blue-600', 'text-white');
        });
        document.querySelector(`[data-date="${dateStr}"]`).classList.add('bg-blue-600', 'text-white');
    }
    
    renderTimeSlots(dateStr) {
        const slotsContainer = document.getElementById('time-slots');
        if (!slotsContainer) return;
        
        const slots = this.availableSlots[dateStr] || [];
        
        if (slots.length === 0) {
            slotsContainer.innerHTML = '<p class="text-gray-500">No available time slots for this date.</p>';
            return;
        }
        
        let slotsHTML = '<h4 class="font-semibold mb-3">Available Time Slots:</h4><div class="grid grid-cols-2 gap-2">';
        
        slots.forEach(slot => {
            slotsHTML += `<button class="time-slot p-2 border border-gray-300 rounded hover:bg-blue-50 hover:border-blue-300 transition-all" onclick="selectTimeSlot('${slot}')">${slot}</button>`;
        });
        
        slotsHTML += '</div>';
        slotsContainer.innerHTML = slotsHTML;
    }
    
    nextMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        this.renderCalendar();
        document.getElementById('current-month').textContent = this.currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    }
    
    prevMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        this.renderCalendar();
        document.getElementById('current-month').textContent = this.currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    }
}

// Form handling for appointment booking
class AppointmentForm {
    constructor() {
        this.formData = {};
        this.currentStep = 1;
        this.totalSteps = 3;
    }
    
    nextStep() {
        if (this.validateCurrentStep()) {
            if (this.currentStep < this.totalSteps) {
                this.hideStep(this.currentStep);
                this.currentStep++;
                this.showStep(this.currentStep);
                this.updateProgressBar();
            }
        }
    }
    
    prevStep() {
        if (this.currentStep > 1) {
            this.hideStep(this.currentStep);
            this.currentStep--;
            this.showStep(this.currentStep);
            this.updateProgressBar();
        }
    }
    
    showStep(step) {
        const stepElement = document.getElementById(`step-${step}`);
        if (stepElement) {
            stepElement.classList.remove('hidden');
            anime({
                targets: stepElement,
                opacity: [0, 1],
                translateX: [50, 0],
                duration: 400,
                easing: 'easeOutQuart'
            });
        }
    }
    
    hideStep(step) {
        const stepElement = document.getElementById(`step-${step}`);
        if (stepElement) {
            anime({
                targets: stepElement,
                opacity: [1, 0],
                translateX: [0, -50],
                duration: 300,
                easing: 'easeInQuart',
                complete: () => {
                    stepElement.classList.add('hidden');
                }
            });
        }
    }
    
    updateProgressBar() {
        const progress = (this.currentStep / this.totalSteps) * 100;
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            anime({
                targets: progressBar,
                width: `${progress}%`,
                duration: 400,
                easing: 'easeOutQuart'
            });
        }
        
        // Update step indicators
        for (let i = 1; i <= this.totalSteps; i++) {
            const stepIndicator = document.getElementById(`step-indicator-${i}`);
            if (stepIndicator) {
                if (i <= this.currentStep) {
                    stepIndicator.classList.add('bg-blue-600', 'text-white');
                    stepIndicator.classList.remove('bg-gray-300', 'text-gray-600');
                } else {
                    stepIndicator.classList.remove('bg-blue-600', 'text-white');
                    stepIndicator.classList.add('bg-gray-300', 'text-gray-600');
                }
            }
        }
    }
    
    validateCurrentStep() {
        const currentStepElement = document.getElementById(`step-${this.currentStep}`);
        if (!currentStepElement) return false;
        
        const requiredFields = currentStepElement.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                this.showFieldError(field, 'This field is required');
                isValid = false;
            } else {
                this.clearFieldError(field);
            }
        });
        
        return isValid;
    }
    
    showFieldError(field, message) {
        field.classList.add('border-red-500');
        let errorElement = field.parentNode.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message text-red-500 text-sm mt-1';
            field.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
    }
    
    clearFieldError(field) {
        field.classList.remove('border-red-500');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    async submitForm() {
        if (!this.validateCurrentStep()) return;
        
        // Collect all form data
        const formData = new FormData();
        const form = document.getElementById('appointment-form');
        
        // Add Google Form integration
        const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
        
        try {
            // Show loading state
            const submitBtn = document.getElementById('submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual Google Forms integration)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            this.showSuccessMessage();
            
        } catch (error) {
            console.error('Form submission error:', error);
            this.showErrorMessage('Failed to submit appointment. Please try again.');
        } finally {
            const submitBtn = document.getElementById('submit-btn');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }
    
    showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4';
        successDiv.innerHTML = `
            <strong>Success!</strong> Your appointment request has been submitted. 
            You will receive a confirmation email shortly.
        `;
        
        const form = document.getElementById('appointment-form');
        form.parentNode.insertBefore(successDiv, form);
        
        // Scroll to success message
        successDiv.scrollIntoView({ behavior: 'smooth' });
        
        // Hide form
        form.style.display = 'none';
    }
    
    showErrorMessage(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4';
        errorDiv.innerHTML = `<strong>Error:</strong> ${message}`;
        
        const form = document.getElementById('appointment-form');
        form.parentNode.insertBefore(errorDiv, form);
        
        // Remove error message after 5 seconds
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }
}

// Global functions for calendar interaction
let calendarManager;
let appointmentForm;

function initializeCalendar() {
    calendarManager = new CalendarManager();
    calendarManager.renderCalendar();
    
    // Set initial month display
    const monthDisplay = document.getElementById('current-month');
    if (monthDisplay) {
        monthDisplay.textContent = calendarManager.currentDate.toLocaleDateString('en-US', { 
            month: 'long', 
            year: 'numeric' 
        });
    }
}

function selectDate(dateStr) {
    calendarManager.selectDate(dateStr);
}

function selectTimeSlot(slot) {
    // Update visual selection
    document.querySelectorAll('.time-slot').forEach(el => {
        el.classList.remove('bg-blue-600', 'text-white');
    });
    event.target.classList.add('bg-blue-600', 'text-white');
    
    // Store selected time
    if (appointmentForm) {
        appointmentForm.formData.selectedTime = slot;
    }
}

function nextMonth() {
    calendarManager.nextMonth();
}

function prevMonth() {
    calendarManager.prevMonth();
}

function nextStep() {
    appointmentForm.nextStep();
}

function prevStep() {
    appointmentForm.prevStep();
}

function submitAppointment() {
    appointmentForm.submitForm();
}

// Initialize appointment form when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('appointment-form')) {
        appointmentForm = new AppointmentForm();
        initializeCalendar();
    }
});

// Utility functions
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

// Add smooth scroll behavior for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for page transitions
window.addEventListener('beforeunload', function() {
    document.body.style.opacity = '0.7';
});

// Initialize tooltips and help text
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'absolute bg-gray-900 text-white px-2 py-1 rounded text-sm z-50';
            tooltip.textContent = this.getAttribute('data-tooltip');
            tooltip.id = 'tooltip';
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 5) + 'px';
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = document.getElementById('tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeTooltips();
    
    // Add fade-in animation to body
    anime({
        targets: 'body',
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutQuart'
    });
});