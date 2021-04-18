let input = prompt('Todo List - 명령을 입력해주세요');
const todos = [];

// 입력이 없는 경우와 취소버튼 클릭할 경우 처리
const isEmpty = function (value) {
	return value == '' ? true : false;
};

const isNull = function (value) {
	return value == null ? true : false;
};

while (input !== 'quit' && input !== 'q') {
	if (isNull(input)) {
		break;
	} else if (isEmpty(input)) {
		alert('명령을 입력해주세요!');
	} else if (input === 'list') {
		console.log('==================');
		for (let i = 0; i < todos.length; i++) {
			console.log(`${i}: ${todos[i]}`);
		}
		console.log('==================');
	} else if (input === 'new') {
		const newTodo = prompt('추가할 toDo를 입력해주세요.');
		todos.push(newTodo);
		console.log(`toDo List에 ${newToDo}가 추가.`);
	} else if (input === 'delete') {
		const index = parseInt(prompt('삭제할 todo의 번호를 입력해주세요'));
		if (!Number.isNaN(index)) {
			const deleted = todos.splice(index, 1);
			console.log(`${deleted}가 삭제됐습니다.`);
		} else {
			console.log('존재하지 않는 index입니다.');
		}
	}
	input = prompt('Todo List - 명령을 입력해주세요');
}
console.log('toDoList 종료!');
