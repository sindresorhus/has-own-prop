const has = Object.prototype.hasOwnProperty;

export default function hasOwnProperty(object, property) {
	return has.call(object, property);
}
