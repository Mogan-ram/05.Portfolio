"use strict";

// Logging setup
const log = (message) => console.log(`[Portfolio] ${message}`);

// DOM Elements
const navLinks = document.querySelectorAll(".nav-link-section");
const resumeLink = document.getElementById("resume-link");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

// Smooth scrolling and active link highlighting
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
            log(`Navigated to section: ${sectionId}`);
        }
    });
});

// Highlight active section on scroll
window.addEventListener("scroll", () => {
    const fromTop = window.scrollY + 100;
    navLinks.forEach(link => {
        const sectionId = link.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        }
    });
});

// Resume link error handling
resumeLink.addEventListener("click", async (e) => {
    e.preventDefault();
    const url = resumeLink.getAttribute("href");
    log(`Attempting to download resume: ${url}`);
    try {
        const response = await fetch(url, { method: "HEAD" });
        if (response.ok) {
            window.location.href = url; // Trigger download
        } else {
            alert("Resume file not found. Please contact me to request it!");
            log("Resume file not found");
        }
    } catch (error) {
        alert("Error accessing resume file. Please contact me to request it!");
        log(`Resume fetch error: ${error.message}`);
    }
});

// Contact form validation
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !subject || !message) {
        formMessage.textContent = "All fields are required!";
        formMessage.classList.remove("d-none");
        formMessage.classList.add("text-danger");
        log("Form submission failed: Missing fields");
        return;
    }

    if (!emailRegex.test(email)) {
        formMessage.textContent = "Please enter a valid email address!";
        formMessage.classList.remove("d-none");
        formMessage.classList.add("text-danger");
        log("Form submission failed: Invalid email");
        return;
    }

    formMessage.textContent = "Message sent successfully!";
    formMessage.classList.remove("d-none", "text-danger");
    formMessage.classList.add("text-success");
    contactForm.reset();
    log("Form submitted successfully");
});