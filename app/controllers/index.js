function toggle() {
	$.drawer.toggleLeftWindow();
}

function changeTitle(_id) {
	var title = '';

	switch (_id) {
		case 'attention':
			title = '注目';
			break;
		case 'column':
			title = 'コラム';
			break;
		case 'favorite':
			title = 'お気に入り';
			break;
		case 'curators':
			title = 'キュレーター一覧';
			break;
		case 'curator':
			title = 'キュレーター';
			break;
		case 'setting':
			title = '設定';
			break;
		case 'notice':
			title = 'お知らせ';
			break;
		case 'login':
			title = 'ログイン';
			break;
	}

	$.main.applyProperties({
		title: title
	});
}

$.menu.on('menu', function(e){
	changeTitle(e.id);
	toggle();
});

$.drawer.open();