document.addEventListener('DOMContentLoaded', async () => {
    const projects = await fetch('src/projects.json')
        .then(response => response.json())
        .then(data => { return data; })
        .catch(() => { return []; });

    const container = document.getElementById('projects-container');

    projects.forEach(project => {
        const cardHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">${project.description}</p>
                    <a href="projects/${project.path}" target="_blank" class="btn" aria-label="Visitar ${project.name}">Visitar</a>
                </div>
            </div>
        `;

        container.innerHTML += cardHTML;
    });
});