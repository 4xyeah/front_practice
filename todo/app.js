const startBtn = document.querySelector('button');

const toDoArr = [];

startBtn.addEventListener('click', () => {
	startToDo();

	console.log('toDo List 종료');
});

const startToDo = () => {
	let choice = '';
	while (choice !== 'quit') {
		choice = window.prompt('Todo List - 명령을 입력해주세요');
		if (!!choice) {
			choose(choice);
		} else {
			break;
		}
	}
};

const choose = (choice) => {
	const listDeco = '======================';
	const choiceList = ['new', 'list', 'delete', 'quit'];

	if (!choiceList.includes(choice)) {
		if (choice === '') {
			alert('명령어를 입력해주세요.');
		} else {
			alert('잘못된 명령어입니다. 다시 입력해주세요.');
			return;
		}
	} else {
		if (choice === 'new') {
			let newToDo = window.prompt('추가할 toDo를 입력해주세요.');
			toDoArr.push(newToDo);
			console.log(`toDo List에 ${newToDo}가 추가.`);
		} else if (choice === 'list') {
			console.log(listDeco);
			let i = 0;
			for (let todo of toDoArr) {
				console.log(`toDo ${++i}. ${todo}`);
			}
			console.log(listDeco);
		} else if (choice === 'delete') {
			let deleteNum = parseInt(window.prompt('삭제할 todo의 번호를 입력해주세요.'));
			if (0 < deleteNum && deleteNum <= toDoArr.length) {
				// let deleteCount = toDoArr.splice(deleteNum, 1);
				// if (deleteCount === 0) {
				// 	alert('error, nothing deleted');
				// 	return;
				// }
				console.log(`todo ${deleteNum}이 삭제됐습니다.`);
			} else {
				alert('존재하지 않는 번호입니다.');
			}
		}
	}
};
