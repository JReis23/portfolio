// let validate = require('validate.js');

export const validateEmail = (email, constraints) => {
	constraints = {
		from: {
			email: {
				message: "doesn't look like a valid email"
			}
		}
	};
};
