import { ob } from "./intersectionObserver.js";
("use strict");
const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".btn-mobile-nav");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
  document.body.classList.toggle("nav-open");
});

/////////////////////////////////////////
// Stick navigation

const sectionHeroEl = document.querySelector(".hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

window.addEventListener("load", function () {
  // Hide the preloader after all resources are loaded
  var preloader = document.getElementById("preloader");
  // Add the dynamic LI elements and apply animations
  const book = preloader.querySelector(".book");
  console.log(book);
  const ulPre = document.createElement("ul");
  ulPre.style.margin = "0";
  ulPre.style.padding = "0";
  ulPre.style.listStyle = "none";
  ulPre.style.position = "absolute";
  ulPre.style.left = "50%";
  ulPre.style.top = "0";

  const numLIs = 19;

  for (let i = 1; i < numLIs; i++) {
    const li = document.createElement("li");
    li.className = "dynamic-li";
    li.style.animationName = `page-${i}`;
    li.style.animationDuration = "6.8s"; // Adjust duration as needed
    li.style.animationTimingFunction = "ease";
    li.style.animationIterationCount = "infinite";
    li.style.height = "4px";
    li.style.borderRadius = "2px";
    li.style.transformOrigin = "100% 2px";
    li.style.width = "48px";
    li.style.right = "0";
    li.style.top = "-10px";
    li.style.position = "absolute";
    li.style.background = "#fff"; // Adjust color as needed
    ulPre.appendChild(li);
  }

  // Add dynamic keyframes
  for (let i = 1; i < numLIs; i++) {
    const delay = i * 1.86;
    const delayAfter = i * 1.74;

    const keyframes = `@keyframes page-${i} {
      ${4 + delay}% {
        transform: rotateZ(0deg) translateX(-18px);
      }
      ${13 + delayAfter}%, ${54 + delay}% {
        transform: rotateZ(180deg) translateX(-18px);
      }
      ${63 + delayAfter}% {
        transform: rotateZ(0deg) translateX(-18px);
      }
    }`;

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }

  book.appendChild(ulPre);
  // Add this line to hide the preloader
  preloader.style.display = "none";
});
// GSA
// Function to apply parallax effect
function parallaxIt(e, target, movement) {
  var $this = target.parentElement;
  var boundingRect = $this.getBoundingClientRect();
  var relX = e.pageX - boundingRect.left;
  var relY = e.pageY - boundingRect.top;
  var scrollTop = window.scrollY || document.documentElement.scrollTop;

  target.style.transform =
    "translate(" +
    ((relX - boundingRect.width / 2) / boundingRect.width) * movement +
    "px, " +
    ((relY - boundingRect.height / 2 - scrollTop) / boundingRect.width) *
      movement +
    "px)";
}

// Function to call parallax effect on specific element
function callParallax(e, $buttonMagnetic) {
  parallaxIt(e, $buttonMagnetic.querySelector(".button"), 60);
  parallaxIt(e, $buttonMagnetic.querySelector(".button .text"), 80);
}

// Function to handle mouseenter event
function handleMouseEnter(element) {
  var $this = element;
  if (
    $this.classList.contains("btn-black") ||
    $this.classList.contains("btn-purple") ||
    $this.classList.contains("img-anim")
  ) {
    gsap.to($this, 0.3, { transformOrigin: "0 0", scale: 1 });
    gsap.to($this.querySelector(".button"), 0.3, { scale: 1.1 });
    gsap.to($this.querySelector(".button .text"), 0.3, { color: "#040404" });
    gsap.to($this.querySelector(".button"), 0.3, {
      background: "rgba(255,255,255,0)",
    });
  }
}
// Function to handle mouseleave event
function handleMouseLeave(element) {
  var $this = element;
  if (
    $this.classList.contains("btn-black") ||
    $this.classList.contains("btn-purple") ||
    $this.classList.contains("img-anim")
  ) {
    gsap.to($this, 0.3, { scale: 1 });

    gsap.to($this.querySelectorAll(".button, .button .text"), {
      duration: 0.3,
      scale: 1,
      x: 0,
      y: 0,
      clearProps: "all",
    });

    gsap.to($this.querySelector(".button .text"), {
      duration: 0.3,
      color: "#fff",
    });

    gsap.to($this.querySelector(".button"), {
      duration: 0.3,
      background: $this.classList.contains("btn-black") ? "#000" : "#6E5AFD",
    });

    // Revert the scale back to normal
    gsap.to($this.querySelector(".button"), { duration: 0.3, scale: 1 });
  }
}

// Function to handle mousemove event
function handleMouseMove(e, element) {
  callParallax(e, element);
}

// Event listeners
document.querySelectorAll(".button-magnetic").forEach(function (element) {
  element.addEventListener("mouseenter", function (e) {
    handleMouseEnter(element);
  });

  element.addEventListener("mouseleave", function (e) {
    handleMouseLeave(element);
  });

  element.addEventListener("mousemove", function (e) {
    handleMouseMove(e, element);
  });
});

const categories = document.querySelectorAll(".category-box");
const coursABtn = document.querySelector(`.cat-c-1`);
const coursBBtn = document.querySelector(`.cat-c-2`);
const coursCBtn = document.querySelector(`.cat-c-3`);
const courses = document.querySelectorAll(".course");
const courseA = document.querySelector(`.c-1`);
const courseB = document.querySelector(`.c-2`);
const courseC = document.querySelector(`.c-3`);
const courseACollection = document.querySelectorAll(`.c-1`); // [firsc1 , secondc1]
const courseBCollection = document.querySelectorAll(`.c-2`);
const courseCCollection = document.querySelectorAll(`.c-3`);
const coursAllBtn = document.querySelector(`.cat-c-0`);

// ! SUBER Enhanced Filter Courses

const coursesCategoriesStr = ["cat-c-0", "cat-c-1", "cat-c-2", "cat-c-3"];
//                           varable         varable
const handleCategoryClick = (cACollectionsElements, coursABtnElement) => {
  for (let category of categories) category.classList.remove("active-category");
  for (let course of courses) course.classList.add("hidden");
  for (let cACollection of cACollectionsElements)
    cACollection.classList.remove("hidden");
  coursABtnElement.classList.add("active-category");
};

coursABtn.addEventListener("click", (e) => {
  e.target.classList.contains(coursesCategoriesStr[1]) &&
    handleCategoryClick(courseACollection, coursABtn);
});

coursBBtn.addEventListener("click", (e) => {
  e.target.classList.contains(coursesCategoriesStr[2]) &&
    handleCategoryClick(courseBCollection, coursBBtn);
});

coursCBtn.addEventListener("click", (e) => {
  e.target.classList.contains(coursesCategoriesStr[3]) &&
    handleCategoryClick(courseCCollection, coursCBtn);
});

const handleResetClick = (coursABtnElement) => {
  for (let category of categories) {
    category.classList.remove("active-category");
  }
  for (let course of courses) course.classList.remove("hidden");
  coursABtnElement.classList.add("active-category");
};

coursAllBtn.addEventListener("click", (e) => {
  e.target.classList.contains(coursesCategoriesStr[0]) &&
    handleResetClick(coursAllBtn);
});

//! when you need to manipulate styles on a page

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");

const openModal = function (course) {
  // Ensure the expected structure exists
  const titleElement = course.querySelector(".course-title");
  const descriptionElement = course.querySelector(".course-description");
  const descriptionDetailsElement = course.querySelector(
    ".course-description-details"
  );
  const imgElement = course.querySelector(".course-img");
  const priceElement = course.querySelector(".course-price");

  if (
    !titleElement ||
    !descriptionElement ||
    !imgElement ||
    !priceElement ||
    !descriptionDetailsElement
  ) {
    console.error("Invalid course structure:", course);
    return;
  }

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  // Extract information from the clicked course element
  const title = titleElement.textContent;
  const descriptionDetails = descriptionDetailsElement.textContent;
  const imgSrc = imgElement.src;
  const price = priceElement.textContent;

  // Update modal content with the extracted information
  modal.querySelector(".modal-title").textContent = title;
  modal.querySelector(".modal-img").src = imgSrc;
  modal.querySelector(".modal-price").textContent = price;
  modal.querySelector(".modal-text-details").textContent = descriptionDetails;
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// it will be called the sec you click the btn
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
// Keyboard event (gloab event)
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

// Opening the modal
// Add an event listener for each course
courses.forEach((course) => {
  course.addEventListener("click", function () {
    openModal(course);
    // Scroll to the Modal element
    modal.scrollIntoView({ behavior: "smooth" });
  });
});

// FLOATING ICONS

const socialBtnEl = document.querySelector(".social-btn");
const Btns = document.querySelector(".btns");
const add = document.getElementById("add");
const remove = document.getElementById("remove");
const btn = document.querySelector(".btns").querySelectorAll("a");

socialBtnEl.addEventListener("click", () => {
  Btns.classList.toggle("open");
  if (Btns.classList.contains("open")) {
    remove.style.display = "block";
    add.style.display = "none";
    btn.forEach((e, i) => {
      setTimeout(() => {
        let bottom = 40 * i; // Declare 'bottom' using 'let'
        e.style.bottom = bottom + "px";
      }, 100 * i);
    });
  } else {
    add.style.display = "block";
    remove.style.display = "none";
    btn.forEach((e, i) => {
      e.style.bottom = "0px";
    });
  }
});

// add translator

import translations from "./translations.js";

const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
  // Clear existing styles

  if (language === "ar") {
    modal.style.paddingRight = "0";
    modal.style.paddingLeft = "6rem";
  } else {
    modal.style.paddingRight = "6rem";
    modal.style.paddingLeft = "0";
  }

  console.log(language);
};

// gsap animation

// insure the plugin and the gsap lib work together
gsap.registerPlugin(ScrollTrigger);

//Start Animated Hero section

// selector targets all direct children of the .hero-text-box
gsap.from(".hero-text-box > *", {
  opacity: 0,
  duration: 0.6,
  ease: "power2.inOut",
  stagger: 0.2,
});

gsap.from(".hero-left", {
  opacity: 0,
  duration: 0.8,
  x: -500,
  ease: "power2.inOut",
});

gsap.from(".hero-right", {
  opacity: 0,
  duration: 0.8,
  x: 500,
  ease: "power2.inOut",
});

// Reveal section
const allSection = document.querySelectorAll(".section--reveal");
const optionsList = {
  root: null,
  threshold: 0.1,
};
ob(allSection, "element--hidden", optionsList);

// Magnatic effect

const magneticButton = document.getElementById("magnetic-btn");

magneticButton.addEventListener("mousemove", (e) => {
  let x = e.offsetX,
    y = e.offsetY;
  let btnWidth = magneticButton.width;
  let btnHeight = magneticButton.height;
});
