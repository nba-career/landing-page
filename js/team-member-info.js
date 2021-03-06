const teamMemberInfo = [
	{
		name: 'Troy Bradley',
		img: 'https://github.com/bitcointroy.png',
		link: 'https://github.com/bitcointroy',
		title: 'Team Lead',
		bio: 'Troy was the team leader for this project.'
	},
	{
		name: 'Brooks Vinyard',
		img: 'https://github.com/brooksvinyard.png',
		link: 'https://github.com/brooksvinyard',
		title: 'Backend Developer',
		bio: 'Brooks Vinyard is a full stack developer currently living in San Francisco, CA.'
	},
	{
		name: "Daniel O'Neill",
		img: 'img/dan-oneill-cropped.jpg',
		link: 'https://github.com/danpatrickoneill',
		title: 'Frontend Developer',
		bio: 'Dan developed the React application for this project. He is a full stack developer living in Long Island, NY'
	},
	{
		name: 'Seth Lachman',
		img: 'https://github.com/stlachman.png',
		link: 'https://github.com/stlachman',
		title: 'UI Developer',
		bio: 'Seth designed and developed the User Interface for this marketing site. He also wrote the copy for this site and isn\'t accustomed to referring to himself in the third person. Seth loves to experiment with the latest web technologies on Codepen. Checkout his latest projects on Github.'
	},
	{
		name: 'Rick Clayton',
		img: 'https://github.com/rick1270.png',
		link: 'https://github.com/rick1270',
		title: 'Data Scientist',
		bio: 'After a successful 25 years in sales and management, in which Rick relied heavily on quantifiable objectives and metrics, Rick made the decision to combine this experience with his love of data and become a data scientist. This portion of that journey has begun at Lambda School where Rick\'s decision has turned into a passion.'
	},
	{
		name: 'Daniel Carter',
		img: 'img/daniel-carter.jpg',
		link: 'https://github.com/tesseract314',
		title: 'Data Scientist',
		bio: 'Daniel is a data scientist with a background in finance. His interests are markets, history and robotics. For this project, Daniel used Random Forest Regression to predict the career longevity of NBA players.'
	},
	{
		name: 'Christopher Tolbert',
		img: 'https://github.com/hughjafro.png',
		link: 'https://github.com/hughjafro',
		title: 'Data Scientist',
		bio: 'Chris is a data enthusiast with a penchant for storytelling with numbers. Though classically trained in the fine art of spreadsheet manipulation, Chris is being transformed into a data science stalwart. He loves long nights of web scraping, data wrangling by the fireplace and sipping on Perrier while developing predictive models.'
	}
];

function TeamCard(cardData) {
	return `<div class="team-member">
          <img src="${cardData.img}" alt="${cardData.title}">
          <h3>${cardData.name}</h3>
          <h4>${cardData.title}</h4>
          <button class="button button--green button--small">Read Bio</button>
          <div class="modal" style="display: none">
            <div class="overlay"></div>
            <div class="modal--content">
              <h3>${cardData.name}</h3>
              <p>${cardData.bio}</p>
              <a href="${cardData.link}" class="link"><i class="fab fa-github"></i> Github Profile</a>
              <button title="Close" class="close-modal">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>`;
}

function TeamMemberList(teamMembers) {
	return teamMembers.map(TeamCard).join('');
}

document.querySelector('.team-member-info').innerHTML = TeamMemberList(teamMemberInfo);
