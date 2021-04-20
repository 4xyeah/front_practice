const p1 = {
	score: 0,
	button: document.querySelector('#p1Btn'),
	display: document.querySelector('#p1'),
};

const p2 = {
	score: 0,
	button: document.querySelector('#p2Btn'),
	display: document.querySelector('#p2'),
};

const resetBtn = document.querySelector('#resetBtn');

const winningScoreSelect = document.querySelector('#playTo');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
	if (!isGameOver) {
		player.score += 1;
		if (player.score === winningScore) {
			isGameOver = true;
			player.classList.add('winner');
			opponent.classList.add('loser');
		}
		player.innerText = player.score;
	}
}

const reset = () => {
	isGameOver = false;
	p1.score = 0;
	p2.score = 0;
	p1.display.innerText = p1.score;
	p2.display.innerText = p2.score;
	p1.display.classList.remove('winner', 'loser');
	p2.display.classList.remove('winner', 'loser');
};

p1.button.addEventListener('click', function () {
	updateScores(p1, p2);
});

p2.button.addEventListener('click', function () {
	updateScores(p2, p1);
});

winningScoreSelect.addEventListener('change', function () {
	console.log(this);
	winningScore = parseInt(this.value);
	reset();
});

resetBtn.addEventListener('click', reset);
