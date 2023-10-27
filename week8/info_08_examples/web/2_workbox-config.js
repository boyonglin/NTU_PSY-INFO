module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{txt,html,json,js,png}'
	],
	swDest: '2_service-worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};