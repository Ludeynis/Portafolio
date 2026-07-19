document.addEventListener('DOMContentLoaded', function() {
    const langBtn = document.getElementById('langBtn');
    const body = document.body;
    
    const savedLang = localStorage.getItem('language') || 'es';
    if (savedLang === 'en') {
        body.classList.add('en');
        langBtn.classList.add('en');
    }
    
    langBtn.addEventListener('click', function() {
        body.classList.toggle('en');
        langBtn.classList.toggle('en');
        
        const currentLang = body.classList.contains('en') ? 'en' : 'es';
        localStorage.setItem('language', currentLang);
    });
});