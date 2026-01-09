const portfolioConfig = {
    personal: {
        name: "Rayan ROZANE",
        title: "Full-Stack Developer & AI Engineer",
        email: "rayan.rozanepro@gmail.com",
        copyright: "2026 Rayan ROZANE - Portfolio réalisé dans le cadre de la formation ISEN"
    },

    navigation: [
        { id: "a-propos", label: "À propos de moi" },
        { id: "parcours", label: "Parcours & projets" },
        { id: "competences", label: "Compétences" },
        { id: "projet-marquant", label: "Projet marquant" },
        { id: "contact", label: "Contact", isButton: true }
    ],

    about: {
        title: "À propos de moi",
        paragraphs: [
            "Je m'appelle <strong>Rayan Rozane</strong>, j'ai 19 ans et je viens d'un parcours STI2D, spécialité SIN. Après le lycée, j'ai suivi des formations en Python et en HTML/CSS, tout en apprenant beaucoup en autodidacte, notamment en <strong>Haxe</strong>, qui est aujourd'hui le langage que j'utilise le plus.",
            "Passionné par le développement et les nouvelles technologies, je me suis naturellement orienté vers une formation liée à l'intelligence artificielle, un domaine qui m'intéresse particulièrement."
        ]
    },

    parcours: {
        title: "Parcours & projets",
        paragraphs: [
            "Ce qui me représente le mieux aujourd'hui, c'est mon parcours autodidacte. Il m'a permis de prendre de bonnes habitudes de travail, de coder régulièrement et d'apprendre vite par moi-même.",
            "J'ai travaillé sur plusieurs projets personnels, notamment le développement de jeux en Haxe avec des amis. Ces expériences m'ont permis de pratiquer concrètement et de comprendre le fonctionnement d'un projet en équipe."
        ]
    },

    competences: {
        title: "Compétences",
        intro: "Je travaille avec :",
        skills: [
            { name: "Windows", description: "Système d'exploitation" },
            { name: "Python", description: "Langage utilisé pour l'automatisation, le web et les données (back-end)" },
            { name: "HTML / CSS", description: "Langage qui structure le contenu des pages web (front-end)" },
            { name: "Haxe", description: "Langage qui permet de créer des applications pour plusieurs plateformes" }
        ],
        note: "Note : Haxe est l'outil que je maîtrise le mieux."
    },

    projetMarquant: {
        title: "Projet marquant",
        subtitle: "Développement de jeu vidéo (Haxe)",
        intro: "Le projet dont je suis le plus fier est un jeu que j'ai développé. Suite au départ de plusieurs membres de l'équipe, j'ai dû reprendre une grande partie du travail seul :",
        achievements: [
            "Apprentissage approfondi du langage Haxe sous pression.",
            "Mise en place des backgrounds et animation des spritesheets.",
            "Correction globale des bugs pour respecter la deadline."
        ],
        conclusion: "Cette expérience m'a appris à m'adapter rapidement et à mener un projet à son terme."
    },

    contact: {
        title: "Me contacter",
        subtitle: "Pas besoin de prompt complexe pour me contacter. Décrivez-moi simplement votre projet, je m'occupe du reste.",
        form: {
            nameLabel: "Votre nom",
            emailLabel: "Votre email",
            messageLabel: "Votre message",
            submitButton: "Envoyer"
        }
    },

    emailjs: {
        publicKey: "23FMcdu05_uZGFccA",
        serviceId: "service_7lzd2co",
        templateId: "template_0htyb2c"
    }
};
