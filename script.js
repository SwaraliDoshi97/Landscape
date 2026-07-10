const hamburger = document.querySelector('.hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your message has been submitted successfully!");
});


const workCards = document.querySelectorAll(".work-card");

workCards.forEach((card) => {

    // Detect the cursor position inside the card
    card.addEventListener("mousemove", (event) => {

        const cardPosition = card.getBoundingClientRect();

        const mouseX = event.clientX - cardPosition.left;

        const halfWidth = cardPosition.width / 2;


        // Expand the Before image when the cursor is on the left side
        if (mouseX < halfWidth) {

            card.classList.add("show-before");
            card.classList.remove("show-after");

        }

        // Expand the After image when the cursor is on the right side
        else {

            card.classList.add("show-after");
            card.classList.remove("show-before");

        }

    });


    // Reset both images when the cursor leaves the card
    card.addEventListener("mouseleave", () => {

        card.classList.remove("show-before");
        card.classList.remove("show-after");

    });

});