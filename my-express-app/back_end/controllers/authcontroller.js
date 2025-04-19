/** @format */

import bcrypt from "bcryptjs"; // Corrected import statement
import User from "../model/user.js";

export async function register(req, res) {
	const { username, password } = req.body;
	const hashedPassword = await bcrypt.hash(password, 10); // bcryptjs usage

	try {
		const user = await User.create({ username, password: hashedPassword });
		res
			.status(201)
			.json({ message: "User registered successfully", userId: user.id });
	} catch (error) {
		res.status(500).json({ error: "User registration failed" });
	}
}

export async function login(req, res) {
	const { username, password } = req.body;

	try {
		const user = await User.findOne({ where: { username } });
		if (user && (await bcrypt.compare(password, user.password))) {
			res.status(200).json({ message: "Login successful", userId: user.id });
		} else {
			res.status(401).json({ error: "Authentication failed" });
		}
	} catch (error) {
		res.status(500).json({ error: "Authentication failed" });
	}
}