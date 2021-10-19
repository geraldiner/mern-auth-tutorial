module.exports = {
	register: (req, res, next) => {
		res.send("Register Route");
	},
	login: (req, res, next) => {
		res.send("Login Route");
	},
	forgotPassword: (req, res, next) => {
		res.send("Forgot Password Route");
	},
	resetPassword: (req, res, next) => {
		res.send("Reset Password Route");
	},
};
