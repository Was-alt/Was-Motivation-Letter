function switchLanguage(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-btn[onclick*="${lang}"]`).classList.add('active');

    document.querySelectorAll('[data-' + lang + ']').forEach(element => {
        element.textContent = element.getAttribute('data-' + lang);
    });

    document.querySelectorAll('.animate-fade, .animate-text').forEach(element => {
        element.style.animation = 'none';
        element.offsetHeight;
        element.style.animation = null;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-fade');
        
        elements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.animationDelay = `${index * 0.2}s`;
                element.style.opacity = '1';
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    
    animateOnScroll();

    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('mouseover', () => {
            profileImg.style.transform = 'scale(1.1) rotate(5deg)';
        });

        profileImg.addEventListener('mouseout', () => {
            profileImg.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    const contactItems = document.querySelectorAll('.contact-info p');
    contactItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'translateX(10px)';
            item.style.color = getComputedStyle(document.documentElement)
                .getPropertyValue('--secondary-color');
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'translateX(0)';
            item.style.color = getComputedStyle(document.documentElement)
                .getPropertyValue('--primary-color');
        });
    });

    switchLanguage('fr'); 
    document.querySelector('.lang-btn[onclick*="fr"]').classList.add('active');

});

window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        const content = document.getElementById('content');
        
        loadingScreen.style.opacity = '0';
        
        content.style.display = 'block';
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            content.classList.add('visible');
        }, 500);
    }, 2000);
});
