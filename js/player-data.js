const statData = [
	{
		playerName: 'Lebron James',
		currentYears: '16',
		position: 'Small Forward',
		remainingYears: '5'
	},
	{
		playerName: 'Kyrie Irving',
		currentYears: '8',
		position: 'Point Guard',
		remainingYears: '10'
	},
	{
		playerName: 'Stephen Curry',
		currentYears: '10',
		position: 'Point Guard',
		remainingYears: '7'
	},
	{
		playerName: 'Kevin Durant',
		currentYears: '12',
		position: 'Small Forward',
		remainingYears: '6'
	}
];

function PlayerItem(playerData) {
	return `<div class="card" data-aos="flip-left" data-aos-duration="650" data-aos-easing="ease-in-sine">
            <h3>${playerData.playerName}</h3>
            <ul>
              <li><span class="bold">Years in the NBA:</span> ${playerData.currentYears}</li>
              <li><span class="bold">Position:</span> ${playerData.position}</li>
              <li><span class="bold">Years Remaining:</span> ${playerData.remainingYears}</li>
            </ul>
          </div>`;
}

function PlayerItemList(statData) {
	return statData.map(PlayerItem).join('');
}

document.querySelector('.cards .container').innerHTML = PlayerItemList(statData);
