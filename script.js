// Define all available sections for the resume
const resumeSections = {
    profile: "Professional Summary",
    career_goal: "Career Goal",
    experience: "Experience",
    education: "Education",
    projects: "Projects & Certifications",
    skills: "Technical Skills & Tools",
    competencies: "Core Competencies",
    ai: "AI Tools Experience",
    research: "Research & Content Creation",
    languages: "Languages",
    hobbies: "Hobbies & Interests",
    references: "References",
};

// --- This runs when the page first loads ---
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('checkbox-container');
    for (const [key, value] of Object.entries(resumeSections)) {
        container.innerHTML += `
            <div class="checkbox-item">
                <input type="checkbox" id="chk-${key}" value="${key}" checked>
                <label for="chk-${key}">${value}</label>
            </div>
        `;
    }
});

function proceedToForm() {
    // Hide all optional form groups and resume sections first
    document.querySelectorAll('.form-group, #resume section').forEach(el => {
        el.style.display = 'none';
    });

    // Show only the selected sections
    for (const key in resumeSections) {
        const checkbox = document.getElementById(`chk-${key}`);
        if (checkbox && checkbox.checked) {
            // Show the form group
            const formGroup = document.querySelector(`.form-group[data-section="${key}"]`);
            if (formGroup) formGroup.style.display = 'block';

            // Show the resume section
            const resumeSection = document.querySelector(`#resume section[data-section="${key}"]`);
            if (resumeSection) resumeSection.style.display = 'block';
        }
    }

    // Switch views
    document.getElementById('selection-section').style.display = 'none';
    document.getElementById('form-section').style.display = 'flex';
}


function generateResume() {
    // Basic Info
    document.getElementById("r-name").innerText = document.getElementById("name").value;
    document.getElementById("r-title").innerText = document.getElementById("title").value;
    document.getElementById("r-contact").innerText = document.getElementById("contact").value;
    document.getElementById("r-links").innerText = document.getElementById("links").value;

    // Dynamically fill data for all available sections
    for (const key in resumeSections) {
        const inputElement = document.getElementById(key);
        const outputElement = document.getElementById(`r-${key}`);
        if (inputElement && outputElement) {
             // Use innerHTML to preserve line breaks from textarea
            outputElement.innerHTML = inputElement.value.replace(/\n/g, '<br>');
        }
    }
    
    // Switch views
    document.getElementById("form-section").style.display = "none";
    document.getElementById("resume-section").style.display = "block";
}


function downloadPDF() {
    // Hide buttons during PDF generation
    const buttons = document.querySelector('.buttons');
    buttons.style.display = 'none';

    const element = document.getElementById("resume");
    const options = {
        margin: [0, 0, 0, 0], // Remove all margins
        filename: "My_Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, scrollY: 0 }, // Prevent scroll offset
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    };

    html2pdf().from(element).set(options).save().then(() => {
        buttons.style.display = 'flex';
    });
}

function editAgain() {
    // Go back to the very first screen
    document.getElementById("resume-section").style.display = "none";
    document.getElementById("selection-section").style.display = "block";
}
