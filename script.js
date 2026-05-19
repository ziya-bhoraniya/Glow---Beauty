/* =========================
   GLOWÉ BEAUTY - SCRIPT.JS
========================= */

// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close mobile menu when link clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// ==========================
// STICKY NAVBAR EFFECT
// ==========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ==========================
// FAQ ACCORDION
// ==========================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
  question.addEventListener("click", () => {

    const answer =
      question.nextElementSibling;

    const isOpen =
      answer.style.maxHeight;

    // Close all
    document
      .querySelectorAll(".faq-answer")
      .forEach(item => {
        item.style.maxHeight = null;
      });

    // Open clicked
    if (!isOpen) {
      answer.style.maxHeight =
        answer.scrollHeight + "px";
    }
  });
});

// ==========================
// TESTIMONIAL SLIDER
// ==========================

const testimonials =
  document.querySelectorAll(".testimonial");

let currentIndex = 0;

function showTestimonial(index) {

  testimonials.forEach(item => {
    item.classList.remove("active");
  });

  testimonials[index]
    .classList.add("active");
}

setInterval(() => {

  currentIndex++;

  if (currentIndex >= testimonials.length) {
    currentIndex = 0;
  }

  showTestimonial(currentIndex);

}, 3000);

// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const reveals =
  document.querySelectorAll(".reveal");

function revealElements() {

  reveals.forEach(element => {

    const windowHeight =
      window.innerHeight;

    const top =
      element.getBoundingClientRect().top;

    const visible =
      100;

    if (top < windowHeight - visible) {
      element.classList.add("active");
    }

  });
}

window.addEventListener(
  "scroll",
  revealElements
);

revealElements();

// ==========================
// NEWSLETTER FORM
// ==========================

const newsletterForm =
  document.querySelector(".newsletter-box form");

newsletterForm.addEventListener(
  "submit",
  function (e) {

    e.preventDefault();

    const input =
      this.querySelector("input");

    const email =
      input.value.trim();

    if (email === "") {
      alert("Please enter your email.");
      return;
    }

    alert(
      "✨ Welcome to Glowé Beauty! You're subscribed."
    );

    input.value = "";
  }
);

// ==========================
// HERO BUTTON HOVER EFFECT
// ==========================

const buttons =
  document.querySelectorAll(".btn");

buttons.forEach(button => {

  button.addEventListener(
    "mouseenter",
    () => {
      button.style.transform =
        "translateY(-4px) scale(1.03)";
    }
  );

  button.addEventListener(
    "mouseleave",
    () => {
      button.style.transform =
        "translateY(0) scale(1)";
    }
  );

});

// ==========================
// SMOOTH SCROLL FOR SAFARI
// ==========================

document.querySelectorAll('a[href^="#"]')
  .forEach(anchor => {

    anchor.addEventListener(
      "click",
      function (e) {

        e.preventDefault();

        const target =
          document.querySelector(
            this.getAttribute("href")
          );

        if (target) {
          target.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    );

  });