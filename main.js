document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { name: 'Projeto 1', path: 'personal/grid-table/index.html' },
        { name: 'Projeto 2', path: 'personal/responsive-table/index.html' },
        { name: 'Projeto 3', path: 'personal/sorted-table/index.html' },
        { name: 'Projeto 4', path: 'external/button-interaction-animation/index.html' },
        { name: 'Projeto 5', path: 'external/card-flip-effect/index.html' },
        { name: 'Projeto 6', path: 'external/container-reveal/index.html' },
        { name: 'Projeto 7', path: 'external/day-night/index.html' },
        { name: 'Projeto 8', path: 'external/scroll-snap-type/index.html' },
        { name: 'Projeto 9', path: 'external/simple-responsive-navbar/index.html' },
        { name: 'Projeto 10', path: 'external/spin-loading-animation/index.html' },
        { name: 'Projeto 11', path: 'external/text-blink/index.html' }
    ];

    const container = document.getElementById('projects-container');

    projects.forEach(project => {
        const cardHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">Teste</p>
                    <a href="${project.path}" target="_blank" class="btn" aria-label="Visitar ${project.name}">Visitar</a>
                </div>
            </div>
        `;

        container.innerHTML += cardHTML;
    });
});