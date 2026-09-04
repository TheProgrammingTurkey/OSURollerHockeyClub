document.getElementById('fullScreenArrow').addEventListener('click', function() {
    document.getElementById('mainSection').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});