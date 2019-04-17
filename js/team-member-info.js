const teamMemberInfo = [
	{
		name: 'Troy Bradley',
		img: 'https://github.com/bitcointroy.png',
		link: 'https://github.com/bitcointroy',
		title: 'Team Lead',
		bio: 'Troy was the team lead on this project.'
	},
	{
		name: 'Brooks Vinyard',
		img: 'https://github.com/brooksvinyard.png',
		link: 'https://github.com/brooksvinyard',
		title: 'Backend Developer',
		bio: 'Brooks developed the API endpoints for this application.'
	},
	{
		name: "Daniel O'Neill",
		img: 'https://github.com/danpatrickoneill.png',
		link: 'https://github.com/danpatrickoneill',
		title: 'Frontend Developer',
		bio: 'Dan developed the React application for this project.'
	},
	{
		name: 'Seth Lachman',
		img: 'https://github.com/stlachman.png',
		link: 'https://github.com/stlachman',
		title: 'UI Developer',
		bio: 'Seth designed and developed the User Interface for this marketing site.'
	},
	{
		name: 'Rick Clayton',
		img: 'https://github.com/rick1270.png',
		link: 'https://github.com/rick1270',
		title: 'Data Science',
		bio: 'Rick gathered data and created the model for this project.'
	},
	{
		name: 'Daniel Carter',
		img: 'https://github.com/tesseract314.png',
		link: 'https://github.com/tesseract314',
		title: 'Data Science',
		bio: 'Daniel gathered data and created the model for this project.'
	},
	{
		name: 'Christopher Tolbert',
		img: 'https://github.com/hughjafro.png',
		link: 'https://github.com/hughjafro',
		title: 'Data Science',
		bio: 'Christopher gathered data and created the model for this project.'
	}
];

function TeamCard(cardData) {
	return `<div class="team-member">
          <img src="${cardData.img}" alt="${cardData.title}">
          <h3>${cardData.name}</h3>
          <h4>${cardData.title}</h4>
          <button class="button button--white button--small">Read Bio</button>
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
