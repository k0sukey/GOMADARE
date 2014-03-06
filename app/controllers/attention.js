var args = arguments[0] || {};

var photos = [
	'http://miil.me/g/21qdy.jpeg',
	'http://miil.me/g/207xx.jpeg',
	'http://miil.me/g/1zox6.jpeg',
	'http://miil.me/g/1xzrc.jpeg',
	'http://miil.me/g/1vqw8.jpeg',
	'http://miil.me/g/1tzri.jpeg',
	'http://miil.me/g/21qdy.jpeg',
	'http://miil.me/g/1s154.jpeg',
	'http://miil.me/g/1qcfk.jpeg',
	'http://miil.me/g/1ogmk.jpeg',
	'http://miil.me/g/1kz6u.jpeg',
	'http://miil.me/g/1kp43.jpeg',
	'http://miil.me/g/1jl95.jpeg',
	'http://miil.me/g/1jijk.jpeg',
	'http://miil.me/g/1jbry.jpeg',
	'http://miil.me/g/1imi5.jpeg',
	'http://miil.me/g/1gbrs.jpeg',
	'http://miil.me/g/1e01z.jpeg',
	'http://miil.me/g/1cgjv.jpeg',
	'http://miil.me/g/1c2eu.jpeg'
];

var items = [];
for (var i = 0; i < 256; i++) {
	items.push({
		template: 'attention',
		photo: {
			image: photos[i % photos.length]
		},
		name: {
			text: 'なんとか かんとか' + i
		},
		title: {
			text: 'おえらいさん' + i
		},
		message: {
			text: 'ほんとにウマいの？' + i
		},
		location: {
			text: 'どこぞのおみせ' + i + '（どこか）'
		}
	});
}

$.attentions.sections[0].items = items;