var args = arguments[0] || {};

function curator() {
	$.trigger('menu', {
		id: 'curator'
	});
}

$.menu.addEventListener('click', function(e){
	if (!e.rowData) {
		return;
	}

	$.trigger('menu', {
		id: e.rowData.id
	});
});