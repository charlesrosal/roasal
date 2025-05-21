
function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("active");
}


document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("nav-menu").classList.remove("active");
    });
});

function showSection(sectionId) {
    
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
    });

   
    document.getElementById(sectionId).classList.add('active');
}

function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out!");
});
