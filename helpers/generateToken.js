import jwt from 'jsonwebtoken';

const generateToken = async (userId, role) => {
	// create a signed Token for the user.
	const signedToken = await jwt.sign(
		{
			userId: userId,
			role: role,
		},
		process.env.SECRET_KEY,
		{  expiresIn: '48h' }
	);
	return signedToken;
};

export default generateToken;
 