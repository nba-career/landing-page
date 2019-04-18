// Show random player on each home page refresh
function randomPlayer() {
	const players = [
		'Lebron James',
		"Shaquille O'Neal",
		'Kevin Love',
		'Dwyane Wade',
		'James Harden',
		'Andre Iguodala',
		'Vince Carter',
		'Kobe Bryant',
		'Larry Bird',
		'Ray Allen',
		'Kevin Durant',
		'Tim Duncan',
		'Allen Iverson',
		'Michael Jordan',
		'Magic Johnson',
		'Dirk Nowitzki',
		'Steve Nash'
	];
	const player = document.querySelector('.random-player');
	let random = Math.floor(Math.random() * players.length);
	player.textContent = players[random];
}

randomPlayer();
