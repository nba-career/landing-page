const navItems = [
	{
		text: 'Home',
		link: '/'
	},
	{
		text: 'About Us',
		link: '/about-us.html'
	},
	{
		text: 'Login',
		link: 'https://nbacp.netlify.com/login'
	},
	{
		text: 'Register',
		link: 'https://nbacp.netlify.com/register'
	}
];

function NavItem(navData) {
	return `<a href="${navData.link}">${navData.text}</a>`;
}

function NavItemList(navItems) {
	return navItems.map(NavItem).join('');
}

document.querySelector('.main-navigation').innerHTML = NavItemList(navItems);

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
