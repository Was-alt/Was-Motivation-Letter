// Fonction de traduction globale
function switchLanguage(lang) {
    // Mettre à jour les boutons actifs
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-btn[onclick*="${lang}"]`).classList.add('active');

    // Traduire tous les éléments avec des attributs data-fr ou data-en
    document.querySelectorAll('[data-' + lang + ']').forEach(element => {
        element.textContent = element.getAttribute('data-' + lang);
    });

    // Ajouter une animation de transition
    document.querySelectorAll('.animate-fade, .animate-text').forEach(element => {
        element.style.animation = 'none';
        element.offsetHeight; // Forcer le reflow
        element.style.animation = null;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour animer les éléments lors du défilement
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

    // Écouteur d'événement pour le défilement
    window.addEventListener('scroll', animateOnScroll);
    
    // Animation initiale
    animateOnScroll();

    // Animation du profil
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('mouseover', () => {
            profileImg.style.transform = 'scale(1.1) rotate(5deg)';
        });

        profileImg.addEventListener('mouseout', () => {
            profileImg.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // Animation des liens de contact
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

    // Définir la langue par défaut au chargement
    switchLanguage('fr'); // Initialiser avec le français
    // Activer le bouton français par défaut
    document.querySelector('.lang-btn[onclick*="fr"]').classList.add('active');
});

// Gestion de l'écran de chargement
window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        const content = document.getElementById('content');
        
        // Faire disparaître l'écran de chargement
        loadingScreen.style.opacity = '0';
        
        // Afficher le contenu
        content.style.display = 'block';
        
        // Attendre que la transition de l'écran de chargement soit terminée
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            content.classList.add('visible');
        }, 500);
    }, 2000); // Attendre 2 secondes avant de montrer le contenu
});
