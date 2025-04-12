// filter.js - JavaScript for the project filtering functionality

document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality
    const categoryDropdown = document.getElementById('category-dropdown');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const selectedCategory = document.getElementById('selected-category');
    const categoryItems = document.querySelectorAll('.category-item');
    const projectCards = document.querySelectorAll('.project-card');
    const projectsGrid = document.getElementById('projects-grid');
    
    // Toggle dropdown menu
    categoryDropdown.addEventListener('click', function() {
        dropdownMenu.classList.toggle('hidden');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!categoryDropdown.contains(event.target)) {
            dropdownMenu.classList.add('hidden');
        }
    });
    
    // Filter projects based on selected category
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            selectedCategory.textContent = this.textContent;
            dropdownMenu.classList.add('hidden');
            
            // Filter projects
            filterProjects(category);
            
            // Add animation effect
            animateFilterChange();
        });
    });
    
    // Filter projects function
    function filterProjects(category) {
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'all' || cardCategory === category) {
                card.classList.remove('hidden');
                card.classList.add('block');
            } else {
                card.classList.add('hidden');
                card.classList.remove('block');
            }
        });
        
        // Check if no projects are visible and show a message
        checkEmptyResults();
    }
    
    // Check if there are no visible projects
    function checkEmptyResults() {
        const visibleProjects = document.querySelectorAll('.project-card:not(.hidden)');
        const noResultsMessage = document.getElementById('no-results');
        
        if (visibleProjects.length === 0) {
            if (!noResultsMessage) {
                const message = document.createElement('div');
                message.id = 'no-results';
                message.className = 'col-span-full text-center py-10';
                message.innerHTML = `
                    <p class="text-gray-400 text-lg">No projects found in this category.</p>
                `;
                projectsGrid.appendChild(message);
            }
        } else {
            if (noResultsMessage) {
                noResultsMessage.remove();
            }
        }
    }
    
    // Add animation effect to filter changes
    function animateFilterChange() {
        projectsGrid.classList.add('opacity-0');
        setTimeout(() => {
            projectsGrid.classList.remove('opacity-0');
        }, 100);
    }
    
    // Scroll-up button functionality
    const scrollUpBtn = document.querySelector('.scroll-up-btn');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollUpBtn.classList.add('opacity-100');
            scrollUpBtn.classList.remove('opacity-0');
        } else {
            scrollUpBtn.classList.remove('opacity-100');
            scrollUpBtn.classList.add('opacity-0');
        }
    });
    
    scrollUpBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add hover effects to project cards
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('shadow-lg');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('shadow-lg');
        });
    });
});