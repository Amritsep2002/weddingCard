// Function to show the respective page
function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(`page-${pageNumber}`).classList.add('active');
}

// Show the first page on load
document.addEventListener('DOMContentLoaded', () => {
    showPage(1);
});
