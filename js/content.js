document.addEventListener('DOMContentLoaded', function () {
    populateContent();
    initContactForm();
});

function populateContent() {
    const config = portfolioConfig;

    setTextContent('header h1', config.personal.name);
    setTextContent('header .subtitle', config.personal.title);

    renderNavigation(config.navigation);

    renderSection('a-propos', `
        <h2>${config.about.title}</h2>
        ${config.about.paragraphs.map(p => `<p>${p}</p>`).join('')}
    `);

    renderSection('parcours', `
        <h2>${config.parcours.title}</h2>
        ${config.parcours.paragraphs.map(p => `<p>${p}</p>`).join('')}
    `);

    renderSection('competences', `
        <h2>${config.competences.title}</h2>
        <p>${config.competences.intro}</p>
        <ul class="skills-list">
            ${config.competences.skills.map(skill =>
        `<li><strong>${skill.name}</strong> : ${skill.description}</li>`
    ).join('')}
        </ul>
        <p><em>${config.competences.note}</em></p>
    `);

    renderSection('projet-marquant', `
        <h2>${config.projetMarquant.title}</h2>
        <h3>${config.projetMarquant.subtitle}</h3>
        <p>${config.projetMarquant.intro}</p>
        <ul>
            ${config.projetMarquant.achievements.map(achievement =>
        `<li>${achievement}</li>`
    ).join('')}
        </ul>
        <p>${config.projetMarquant.conclusion}</p>
    `);

    renderSection('contact', `
        <div class="contact-container">
            <h2>${config.contact.title}</h2>
            <p class="contact-subtitle">${config.contact.subtitle}</p>
            <form class="contact-form">
                <div class="form-group">
                    <input id="nom" name="nom" placeholder="${config.contact.form.nameLabel}" required>
                </div>
                <div class="form-group">
                    <input id="email" name="email" type="email" placeholder="${config.contact.form.emailLabel}" required>
                </div>
                <div class="form-group">
                    <textarea id="message" name="message" placeholder="${config.contact.form.messageLabel}" rows="5" required></textarea>
                </div>
                <button type="submit" class="submit-btn">${config.contact.form.submitButton}</button>
            </form>
        </div>
    `);

    setInnerHTML('footer p', `&copy; ${config.personal.copyright}`);
}

function setTextContent(selector, content) {
    const element = document.querySelector(selector);
    if (element) element.textContent = content;
}

function setInnerHTML(selector, html) {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = html;
}

function renderSection(id, html) {
    const section = document.getElementById(id);
    if (section) section.innerHTML = html;
}

function renderNavigation(navItems) {
    const container = document.querySelector('.navbar-container');
    if (!container) return;

    const fragment = document.createDocumentFragment();
    navItems.forEach(item => {
        const link = document.createElement('a');
        link.href = `#${item.id}`;
        link.className = item.isButton ? 'nav-link nav-contact' : 'nav-link';
        link.textContent = item.label;
        fragment.appendChild(link);
    });

    container.innerHTML = '';
    container.appendChild(fragment);
}

function initContactForm() {
    emailjs.init(portfolioConfig.emailjs.publicKey);

    const form = document.querySelector('.contact-form');
    const submitBtn = document.querySelector('.submit-btn');

    if (!form || !submitBtn) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!validateForm()) return;

        const formData = {
            from_name: document.getElementById('nom').value.trim(),
            from_email: document.getElementById('email').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;

        emailjs.send(
            portfolioConfig.emailjs.serviceId,
            portfolioConfig.emailjs.templateId,
            formData
        )
            .then(() => {
                showMessage('Message envoyé avec succès ! 🎉', 'success');
                form.reset();
            })
            .catch(error => {
                console.error('Erreur EmailJS:', error);
                showMessage('Erreur lors de l\'envoi. Veuillez réessayer. ❌', 'error');
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
}

function validateForm() {
    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (nom.length < 2) {
        showMessage('Le nom doit contenir au moins 2 caractères.', 'error');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage('Veuillez entrer une adresse email valide.', 'error');
        return false;
    }

    if (message.length < 10) {
        showMessage('Le message doit contenir au moins 10 caractères.', 'error');
        return false;
    }

    return true;
}

function showMessage(message, type) {
    const existing = document.querySelector('.form-message');
    if (existing) existing.remove();

    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;

    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.parentNode.insertBefore(messageDiv, submitBtn);

    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}
