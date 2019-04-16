// Set current year for Copyright
const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();

function showMobile(event) {
  const hero = document.querySelector('.hero');
  const mobileMenu = document.querySelector('.nav-bar');
  if (window.scrollY > (hero.offsetTop + hero.offsetHeight)) {
    mobileMenu.classList.add('in-view');
  } else {
    mobileMenu.classList.remove('in-view');
  }
}

window.addEventListener('scroll', showMobile);

// Set up animate on scroll library
AOS.init({
  disable: "mobile"
});

