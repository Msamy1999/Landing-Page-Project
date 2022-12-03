/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const count = document.getElementsByTagName("section").length;
const btnSections = [];
const sections = Array.from(document.getElementsByTagName("section"));

//console.log(count);
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
//

// function to check where are we in the page
function update() {
  //getting location of first section
  //debugger;
  const section1Position = sections[0].getBoundingClientRect().top;
  //removing class from all list
  topPage.classList.remove("active");
  //adding class at specific button depends where we are in the page
  for (let i = 1; i <= count; i++) {
    btnSections[i].classList.remove("active");
    sections[i - 1].classList.remove("your-active-class");
    if (
      sections[i - 1].getBoundingClientRect().top <= 1 &&
      sections[i - 1].getBoundingClientRect().bottom >= 1
    ) {
      btnSections[i].classList.add("active");
      sections[i - 1].classList.add("your-active-class");
    } else if (sections[0].getBoundingClientRect().top > 0) {
      topPage.classList.add("active");
    }
  }
}

// build the nav
//define first element in nvarbar
const node = document.createElement("li");
// Create a text node:
const textnode = document.createTextNode("Top");
// Append the text node to the "li" node:
node.appendChild(textnode);
node.id = "topPage";
// Append the "li" node to the list:
document.getElementById("navbar__list").appendChild(node);
//debugger;

//define Sections buttons

for (let i = 1; i <= count; i++) {
  // Create an "li" node:
  const node = document.createElement("li");
  // Create a text node:
  const textnode = document.createTextNode("section" + i);
  // Append the text node to the "li" node:
  node.appendChild(textnode);
  node.id = "btnSection" + i;
  // Append the "li" node to the list:
  document.getElementById("navbar__list").appendChild(node);
}
//putting them in Variables
const topPage = document.getElementById("topPage");
for (let i = 0; i <= count; i++) {
  btnSections[i] = document.getElementById("btnSection" + i);
}
//making click function for each button to scroll
topPage.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
for (let i = 1; i <= count; i++) {
  btnSections[i].addEventListener("click", function () {
    const sec = document.getElementById("section" + i);
    sec.scrollIntoView({ block: "start", behavior: "smooth" });
  });
}
// Add class 'active' to section when near top of viewport
topPage.classList.add("active");
// Scroll to anchor ID using scrollTO event
document.addEventListener("scroll", update);
