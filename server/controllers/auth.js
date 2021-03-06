const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const sendToken = require("../utils/sendToken");

module.exports = {
	register: async (req, res, next) => {
		const { username, email, password } = req.body;
		try {
			const user = await User.create({
				username,
				email,
				password,
			});
			sendToken(user, 201, res);
		} catch (err) {
			next(err);
		}
	},
	login: async (req, res, next) => {
		const { email, password } = req.body;
		if (!email || !password) {
			next(new ErrorResponse("Please provide an email and/or password.", 400));
		}

		try {
			const user = await User.findOne({ email }).select("+password");
			if (!user) {
				next(new ErrorResponse("Invalid credentials.", 404));
			}
			const isMatch = await user.comparePassword(password);
			if (!isMatch) {
				next(new ErrorResponse("Invalid credentials.", 401));
			} else {
				sendToken(user, 200, res);
			}
		} catch (err) {
			next(err);
		}
	},
	forgotPassword: (req, res, next) => {
		res.send("Forgot Password Route");
	},
	resetPassword: (req, res, next) => {
		res.send("Reset Password Route");
	},
};
