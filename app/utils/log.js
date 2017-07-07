export default function log(e) {
	const scope = e.type == 'noteon' ? 'note' : 'controller'
	const value = e.value != undefined ? (`${e.controller.number}, ${e.value}`)  : e.note.number
	console.group(e.type, value)
	console.log('channel: ' + e.channel)
	console.log('id: ' + e[scope].number)
	scope == 'note' && console.log('velocity: ' + e.velocity)
	console.log('name: ' + e[scope].name)
	console.groupEnd()
}