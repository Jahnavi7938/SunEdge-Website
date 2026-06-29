// ===============================
// SunEdge Energy Pvt Ltd
// script.js
// ===============================

// Mobile Menu
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Close menu when clicking a link
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// Sticky Header Shadow
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.12)";
        header.style.background = "#ffffff";
    } else {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
    }

});

// Active Menu Highlight
const sections = document.querySelectorAll("section");
const menuItems = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    menuItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Smooth Button Animation
const buttons = document.querySelectorAll(".btn, button");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-3px)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translateY(0)";
    });

});

// Counter Animation
const counters = document.querySelectorAll(".counter h2");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    const section = document.querySelector(".counter");

    const position = section.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = parseInt(counter.innerText);

            let count = 0;

            const increment = target / 150;

            const update = () => {

                count += increment;

                if (count < target) {

                    counter.innerText = Math.floor(count) + "+";

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", startCounter);

// Fade-in Animation
const revealElements = document.querySelectorAll(
".service-card, .testimonial, .project-grid img, .feature, .about-image, .about-content"
);

function revealOnScroll() {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;

        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// Back To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#54a51c";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
topBtn.style.boxShadow = "0 10px 20px rgba(0,0,0,.2)";
topBtn.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Image Hover Zoom
const images = document.querySelectorAll(".project-grid img");

images.forEach(img => {

    img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.08)";
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });

});

// Contact Form
const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        form.reset();

    });

}