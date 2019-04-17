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

class TeamMember {
	constructor(teamCard, teamMemberInfo) {
		this.teamCard = teamCard;
		this.name = this.teamCard.querySelector('h3');
		this.title = this.teamCard.querySelector('h4');
    this.image = this.teamCard.querySelector('img');
    this.modalName = this.teamCard.querySelector('.modal--content h3');
    this.content = this.teamCard.querySelector('.modal--content p');
    this.githubLink = this.teamCard.querySelector('.modal--content a');
  

		this.teamMemberInfo = teamMemberInfo;
		this.name.textContent = teamMemberInfo.name;
    this.title.textContent = teamMemberInfo.title;
    this.modalName.textContent = teamMemberInfo.name;
    this.image.src = teamMemberInfo.img;
    this.image.alt = teamMemberInfo.name;
    this.content.textContent = teamMemberInfo.bio;
    this.githubLink.href = teamMemberInfo.link;
	}
}

const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach((member, index) => {
	new TeamMember(member, teamMemberInfo[index]);
});
