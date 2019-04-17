const navItems = [
	{
		nav1: 'Home',
		href: '/'
	},
	{
		nav2: 'About Us',
		href: '/about-us.html'
	},
	{
		nav3: 'Login',
		href: 'https://nbacp.netlify.com/login'
	},
	{
		nav4: 'Register',
		href: 'https://nbacp.netlify.com/register'
	}
];

const navigation = document.querySelectorAll('.main-navigation a');

// Convert nodelist to array
Array.from(navigation).map((navItem, index) => {
	// Set text content of each navigation item
	navItem.textContent = navItems[`${index}`][`nav${index + 1}`];
	// Set href of each navigation item
	navItem.href = navItems[`${index}`].href;
});

function showMobile(event) {
	const hero = document.querySelector('.hero');
	const mobileMenu = document.querySelector('.nav-bar');
	// If scroll position on y axis is greater than the height of the hero element, add class to reduce height of navbar
	if (window.scrollY > hero.offsetHeight) {
		mobileMenu.classList.add('in-view');
	} else {
		mobileMenu.classList.remove('in-view');
	}
}

window.addEventListener('scroll', showMobile);

// Set current year for Copyright
const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();

// Set up animate on scroll library
AOS.init({
	disable: 'mobile'
});
