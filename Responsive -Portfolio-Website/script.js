// Function to show a specific section and hide others
function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.box');
    sections.forEach(function (section) {
        section.classList.add('hidden');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.remove('hidden');

    // Highlight the active link
    var links = document.querySelectorAll('.navlist a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    var activeLink = document.querySelector("a[href='#'][onclick*='" + sectionId + "']");
    activeLink.classList.add('active');
}
