// This file to take data from config.js and show them on HTML

document.addEventListener('DOMContentLoaded', function() {
    renderCV();
});

function renderCV() {
    // personal info
    document.getElementById('name').textContent = cvData.personalInfo.name;
    document.getElementById('title').textContent = cvData.personalInfo.title;
    document.getElementById('email').textContent = cvData.personalInfo.email;
    document.getElementById('phone').textContent = cvData.personalInfo.phone;
    const linkedinUrl = cvData.personalInfo.linkedin;
    document.getElementById('linkedin').innerHTML = `<a href="${linkedinUrl}" target="_blank" rel="noopener noreferrer">LinkedIn</a>`;
    const githubUrl = cvData.personalInfo.github;
    document.getElementById('github').innerHTML = `<a href="${githubUrl}" target="_blank" rel="noopener noreferrer">Github</a>`;
    document.getElementById('location').textContent = cvData.personalInfo.location;

    // profesional profile
    document.getElementById('profile').textContent = cvData.profile;

    // experience
    renderExperience();

    // education
    renderEducation();

    // skills
    renderSkills();

    // projects
    renderProjects();

    // certifications
    renderCertifications();

    // languages
    renderLanguages();
}

function renderExperience() {
    const container = document.getElementById('experience-container');
    container.innerHTML = '';

    cvData.experience.forEach(exp => {
        const expDiv = document.createElement('div');
        expDiv.className = 'experience-item';

        const header = document.createElement('div');
        header.className = 'experience-header';

        const jobTitle = document.createElement('div');
        jobTitle.className = 'job-title';
        jobTitle.textContent = exp.position;

        const companyInfo = document.createElement('div');
        companyInfo.className = 'company-info';
        companyInfo.textContent = `${exp.company}, ${exp.location} | ${exp.period}`;

        header.appendChild(jobTitle);
        header.appendChild(companyInfo);

        const achievementsUl = document.createElement('ul');
        exp.achievements.forEach(achievement => {
            const li = document.createElement('li');
            li.textContent = achievement;
            achievementsUl.appendChild(li);
        });

        expDiv.appendChild(header);
        expDiv.appendChild(achievementsUl);
        container.appendChild(expDiv);
    });
}

function renderEducation() {
    const container = document.getElementById('education-container');
    container.innerHTML = '';

    cvData.education.forEach(edu => {
        const eduDiv = document.createElement('div');
        eduDiv.className = 'education-item';

        const degreeTitle = document.createElement('div');
        degreeTitle.className = 'degree-title';
        degreeTitle.textContent = edu.degree;

        const institutionInfo = document.createElement('div');
        institutionInfo.className = 'institution-info';
        institutionInfo.textContent = `${edu.institution}, ${edu.location} | ${edu.period}`;

        eduDiv.appendChild(degreeTitle);
        eduDiv.appendChild(institutionInfo);

        if (edu.additional) {
            const additional = document.createElement('div');
            additional.className = 'additional-info';
            additional.textContent = edu.additional;
            eduDiv.appendChild(additional);
        }

        container.appendChild(eduDiv);
    });
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = '';

    const skillsGrid = document.createElement('div');
    skillsGrid.className = 'skills-grid';

    Object.keys(cvData.skills).forEach(category => {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill-category';

        const categoryName = document.createElement('span');
        categoryName.className = 'skill-category-name';
        categoryName.textContent = category;

        const skillItems = document.createElement('span');
        skillItems.className = 'skill-items';
        skillItems.textContent = cvData.skills[category].join(', ');

        skillDiv.appendChild(categoryName);
        skillDiv.appendChild(skillItems);
        skillsGrid.appendChild(skillDiv);
    });

    container.appendChild(skillsGrid);
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';

    cvData.projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-item';

        const projectName = document.createElement('div');
        projectName.className = 'project-name';
        projectName.textContent = project.name;

        const projectDesc = document.createElement('div');
        projectDesc.className = 'project-description';
        projectDesc.textContent = project.description;

        const projectTech = document.createElement('div');
        projectTech.className = 'project-tech';
        projectTech.textContent = `Technologies: ${project.technologies}`;

        projectDiv.appendChild(projectName);
        projectDiv.appendChild(projectDesc);
        projectDiv.appendChild(projectTech);
        container.appendChild(projectDiv);
    });
}

function renderCertifications() {
    const list = document.getElementById('certifications-list');
    list.innerHTML = '';

    cvData.certifications.forEach(cert => {
        const li = document.createElement('li');
        li.textContent = cert;
        list.appendChild(li);
    });
}

function renderLanguages() {
    const container = document.getElementById('languages-container');
    container.innerHTML = '';

    const languagesGrid = document.createElement('div');
    languagesGrid.className = 'languages-grid';

    cvData.languages.forEach(language => {
        const langDiv = document.createElement('div');
        langDiv.className = 'language-item';

        const langName = document.createElement('span');
        langName.className = 'language-name';
        langName.textContent = language.lang;

        const langLevel = document.createElement('span');
        langLevel.className = 'language-level';
        langLevel.textContent = ` - ${language.level}`;

        langDiv.appendChild(langName);
        langDiv.appendChild(langLevel);
        languagesGrid.appendChild(langDiv);
    });

    container.appendChild(languagesGrid);
}