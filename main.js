// script.js
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
    gsap.from('#' + sectionId, { opacity: 0, y: 50, duration: 1 });
}


function toggleMemory(element) {
    gsap.to(element, { scale: 1.1, duration: 0.3, yoyo: true, repeat: 1 });
    alert('Memory: ' + element.innerText);
}


document.addEventListener("DOMContentLoaded", () => {
    const chocolates = document.querySelectorAll(".choco");
    
    chocolates.forEach(choco => {
        choco.addEventListener("mouseover", () => {
            choco.style.transform = "scale(1.2)";
        });

        choco.addEventListener("mouseout", () => {
            choco.style.transform = "scale(1)";
        });
    });
});


