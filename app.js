"use strict";
// app.js

// Make mobile navigation work

//Click: btn-mobile-nav

//Add: nav-open

//ON: .header

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
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

const myText = document.querySelector(".hero");

gsap.to([".hero", ".small-star"], {
  opacity: 1,
  delay: 0.5,
  duration: 0.8,
  ease: "ease-out", // or use a custom cubic bezier value
});

//! when you need to manipulate styles on a page
//! always export the style in to a class and then use the class in js
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

// ! Add more
const showMoreCoursesLink = document.getElementById("all-courses-link");
const hiddenCourses = document.querySelectorAll(".hidden-course");

showMoreCoursesLink.addEventListener("click", function (event) {
  event.preventDefault();
  handleCategoryClick(courses, coursAllBtn);

  // Toggle the hidden class for each additional course
  hiddenCourses.forEach((course) => {
    course.classList.toggle("hidden-course");
  });

  // You can also update the link text based on the current state
  const isHidden = hiddenCourses[0].classList.contains("hidden-course");
  showMoreCoursesLink.textContent = isHidden
    ? "See all courses →"
    : "Hide courses ↑";
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
