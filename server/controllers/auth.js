const User = require("../models/User");

module.exports = {
	register: async (req, res, next) => {
		const { username, email, password } = req.body;
		res.send("Register Route");
		try {
			const user = await User.create({
				username,
				email,
				password,
			});
			res.status(201).json({
				success: true,
				user,
			});
		} catch (error) {
			res.status(500).json({
				success: false,
				error: error.message,
			});
		}
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
