// Navigation active tabs
const nodes = document.getElementsByClassName("navbar_link");
for (let i = 0; i < nodes.length; i++) {
  nodes[i].addEventListener("click", divSelector);
}

function divSelector(event) {
    removeAllActives();
  event.currentTarget.className += ' active';
}

function removeAllActives() {
    const actives = document.getElementsByClassName("active");
  for (let i = 0; i < actives.length; i++) {
    actives[i].classList.remove('active');
    }
}

// @todo
// Scrolling on projects page
// const scroll_trigger = document.getElementByClassName("scroll-content");

// scroll_trigger.addEventListener("click", scrollFunction);

// function scrollFunction(e) {
//     let e = document.getElementById("scroll_to");
//     e.scrollIntoView({
//       block: 'end',
//       behavior: 'smooth',
//       inline: 'start'
//     });
// }