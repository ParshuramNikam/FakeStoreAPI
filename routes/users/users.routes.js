import express from "express";
const router = express.Router();

import cookieParser from "cookie-parser";
import signup from "../../middlewares/User Middlewares/signup.middleware.js";
import login from "../../middlewares/User Middlewares/login.middleware.js";
import authenticateToken from "../../middlewares/Auth/authenticateToken.js";
import logout from "../../middlewares/User Middlewares/logout.middleware.js";
import getAllUsers from "../../middlewares/User Middlewares/getAllUsers.js";
import getSingleUser from "../../middlewares/User Middlewares/getSingleUser.js";
import verifySignupCredentials from "../../middlewares/User Middlewares/verifySignupCredentials.js";
import sendOtpForForgetPassword from "../../middlewares/User Middlewares/sendOtpForForgetPassword.js";
import changeUserPassword from "../../middlewares/User Middlewares/changeUserPassword.js";

router.use(cookieParser());
router.use(express.json())
router.use(express.urlencoded({extended: true}))

// ------------------------------------------------------------------------------------------

router.post("/auth/signup", signup, (req, res) => {	
	res.status(200).send({ status: "success", message: "Email is sent to user. Check your Email and verify your credentials!" });
});

router.get("/auth/authenticate-signup/:userId/:otp", verifySignupCredentials, (req,res)=>{
	console.log(req.params.userId);
	console.log(req.params.otp);
	res.status(200).redirect(`${process.env.FRONTEND_BASE_URL}/user/login`);
	// res.status(200).send({ status: "success", message: "User verified successfully!", userId: req.params.userId });
})

router.get('/auth/forget-password/', sendOtpForForgetPassword, (req,res)=> {
	console.log("aaa");
})

router.post('/auth/change-password/:userId/:otp',changeUserPassword , (req,res)=> {
	res.send(req.params)
})

router.post('/auth/login', login, (req, res) => {
	res.status(200).json({
		status: "success",
		message: 'login success',
		user: res.locals.user
	});
})

router.post('/auth/protected',authenticateToken, async (req,res)=>{
	const user = res.locals.user;
	return res.status(302).json({status: "success", apiKey: user.apiKey, user: user, message: "User is verified!"})
})

router.delete('/auth/logout',logout, (req,res)=>{
	const user = res.locals.user;
	return res.status(200).json({status: "success", message: "Logout Succesful! & Token deleted.", user: user});
})

// ------------------------------------------------------------------------------------------

router.get('/users', getAllUsers,  (req, res) => {
	try {
		const users = res.locals.users;
		res.status(200).json({status:"successs", users: users});
	} catch (error) {
		res.status(400).send({ status: "failed", message: error.message, error });
	} 
})

router.get('/users/:userId', getSingleUser);

export default router;