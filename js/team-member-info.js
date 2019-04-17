const teamMemberInfo = [
	{
		name: 'Troy Bradley',
		img: 'https://github.com/bitcointroy.png',
		title: 'Team Lead',
		bio: 'Lorem ipsum stuff'
	},
	{
		name: 'Brooks Vinyard',
		img: 'https://github.com/brooksvinyard.png',
		title: 'Backend Developer',
		bio: 'Lorem ipsum stuff'
	},
	{
		name: "Daniel O'Neill",
		img: 'https://github.com/danpatrickoneill.png',
		title: 'Frontend Developer',
		bio: 'Lorem ipsum stuff'
	},
	{
		name: 'Seth Lachman',
		img: 'https://github.com/stlachman.png',
		title: 'UI Developer',
		bio: 'I developed the User Interface for this marketing site!'
	},
	{
		name: 'Rick Clayton',
		img: 'https://github.com/rick1270.png',
		title: 'Data Science',
		bio: 'Lorem ipsum stuff'
	},
	{
		name: 'Daniel Carter',
		img: 'https://github.com/tesseract314.png',
		title: 'Data Science',
		bio: 'Lorem ipsum stuff'
	},
	{
		name: 'Christopher Tolbert',
		img: 'https://github.com/hughjafro.png',
		title: 'Data Science',
		bio: 'Lorem ipsum stuff'
	}
];

class TeamMember {
	constructor(teamCard, teamMemberInfo) {
		this.teamCard = teamCard;
		this.name = this.teamCard.querySelector('h3');
		this.title = this.teamCard.querySelector('h4');
		this.image = this.teamCard.querySelector('img');
		this.content = this.teamCard.querySelector('.modal--content p');

		this.teamMemberInfo = teamMemberInfo;
		this.name.textContent = teamMemberInfo.name;
		this.title.textContent = teamMemberInfo.title;
    this.image.src = teamMemberInfo.img;
    this.image.alt = teamMemberInfo.name;
		this.content.textContent = teamMemberInfo.bio;
	}
}

const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach((member, index) => {
	new TeamMember(member, teamMemberInfo[index]);
});
