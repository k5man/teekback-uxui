/**
 * objutils
 *
 * various helper functions for base object/string manipulations
 */

// Hardcore validation implementation
// Idea taken from https://github.com/NewOldMax/react-material-ui-form-validator/blob/master/src/ValidationRules.jsx
export const isExisty = (value) => {
	return value !== null && value !== undefined;
};

export const isEmpty = (value) => {
	return value === '' || value === undefined || value == null;
};

export const matchRegexp = (value, regexp) => {
	const validationRegexp = (regexp instanceof RegExp ? regexp : (new RegExp(regexp)));
	return (!isExisty(value) || isEmpty(value) || validationRegexp.test(value));
};

export const isEmail = (value) => {
	// eslint-disable-next-line
	return (matchRegexp(value, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i))
};

export const isValidPhone = (phone, minLength, pfx) => phone.length === (minLength + pfx.length);

/* eslint-disable */

// Speed up calls to hasOwnProperty
const hasOwnProperty = Object.prototype.hasOwnProperty;

export const isEmptyObj = (obj) => {
	// null and undefined are "empty"
	if (obj == null) return true;
	// Assume if it has a length property with a non-zero value
	// that that property is correct.
	if (obj.length > 0) return false;
	if (obj.length === 0) return true;
	// If it isn't an object at this point
	// it is empty, but it can't be anything *but* empty
	// Is it empty?  Depends on your application.
	if (typeof obj !== 'object') return true;
	console.log(obj);

	// Otherwise, does it have any properties of its own?
	// Note that this doesn't handle
	// toString and valueOf enumeration bugs in IE < 9
	for (const key in obj) {
		if (hasOwnProperty.call(obj, key)) return false;
	}
	console.log(obj);
	return true;
};

/* eslint-enable */
