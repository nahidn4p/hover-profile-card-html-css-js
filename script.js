// Add smooth scroll behavior and any additional interactions
document.addEventListener('DOMContentLoaded', function() {
    const profileCard = document.querySelector('.profile-card');
    
    // Add click event for mobile devices (since hover doesn't work well on touch)
    if (window.innerWidth <= 768) {
        let isExpanded = false;
        
        profileCard.addEventListener('click', function(e) {
            if (!isExpanded) {
                this.classList.add('mobile-expanded');
                isExpanded = true;
            } else {
                this.classList.remove('mobile-expanded');
                isExpanded = false;
            }
        });
        
        // Close when clicking outside
        document.addEventListener('click', function(e) {
            if (!profileCard.contains(e.target) && isExpanded) {
                profileCard.classList.remove('mobile-expanded');
                isExpanded = false;
            }
        });
    }
    
    // Add parallax effect on mouse move
    profileCard.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    profileCard.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

