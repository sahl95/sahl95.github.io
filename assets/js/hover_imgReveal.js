document.querySelectorAll('.texthover a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        const img = link.querySelector('img');
        if (!img) return;

        const rect = link.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        // Remove old hover classes
        link.classList.remove(
            'hover-left', 'hover-center', 'hover-right',
            'hover-below-left', 'hover-below-center', 'hover-below-right'
        );

        const below = rect.top < vh / 2 ? '-below' : '';

        if (rect.left < vw / 3) {
            link.classList.add(`hover${below}-left`);
        } else if (rect.left < (2 * vw) / 3) {
            link.classList.add(`hover${below}-center`);
        } else {
            link.classList.add(`hover${below}-right`);
        }
    });

    link.addEventListener('mouseleave', () => {
        // Remove classes so image transitions back to default
        link.classList.remove(
            'hover-left', 'hover-center', 'hover-right',
            'hover-below-left', 'hover-below-center', 'hover-below-right'
        );
    });
});
