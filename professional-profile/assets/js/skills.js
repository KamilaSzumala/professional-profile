function handleResize() {
    const screenWidth = window.innerWidth;

    // if the screen width is lower than 768, the vertical expanders will be initialized
    if (screenWidth < 768) {
        initVerticalExpanders();
    } else {
        initHorizontalExpanders(); 
    }
}

// vertical expanders
function initVerticalExpanders() {
    const sections = document.querySelectorAll('.roadmap-section');
    sections.forEach(section => {
        section.style.flexDirection = 'column'; 
        section.classList.remove('expanded');
    });
    console.log('vertical expanders initialized');
}

// horizontal expanders
function initHorizontalExpanders() {
    const sections = document.querySelectorAll('.roadmap-section');
    sections.forEach(section => {
        section.style.flexDirection = 'row'; 
        section.classList.remove('expanded');
    });
    console.log('horizontal expanders initialized');
}

// expend and collapse sections
function toggleSection(sectionId) {

    const screenWidth = window.innerWidth;
    const sections = document.querySelectorAll('.roadmap-section'); // download all sections

    // switch between sections
    sections.forEach(section => {
        if (section.id === sectionId) {
            if (section.classList.contains('expanded')) {
                // if mobile, double click will collapse the section
                if (screenWidth < 768) {
                    section.classList.remove('expanded');
                    section.classList.add('collapsed');
                }
            } else {
                // expend the section
                section.classList.add('expanded');
                section.classList.remove('collapsed');
            }
        } else {
            // collapse the sectionS
            section.classList.remove('expanded'); 
            section.classList.add('collapsed'); 
        }
    });
}

// default expanded section
window.onload = function() {
    toggleSection('bioinformatics');
}

// waiting for the window to resize
window.addEventListener('resize', handleResize);

// initial call
handleResize();
