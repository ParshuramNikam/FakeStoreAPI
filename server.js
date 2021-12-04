import envVars from "dotenv";
envVars.config();
import express from "express";
import conn from "./config/conn.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRoutes from "./routes/users/users.routes.js";
import productRoutes from "./routes/products/product.routes.js";
import cartRoutes from "./routes/cart/cart.routes.js";
import path from 'path';

const app = express();
conn();   

// app.use(express.static(path.join(path.resolve(), 'public')))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.json())
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());

const corsOptions = {
	// origin: '*', 
	origin: process.env.FRONTEND_BASE_URL,
	methods: "GET,HEAD,POST,PATCH,DELETE,OPTIONS",
	credentials: true, // required to pass
	allowedHeaders: "Content-Type, Authorization, X-Requested-With, Access-Control-Allow-Origin",
};
// intercept pre-flight check for all routes
app.options("*", cors(corsOptions));	// OR // app.use(cors(corsOptions))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Origin', req.header('origin') );
	next();
});

app.use(
	cors({
		origin: true, //included origin as true
		credentials: true, //included credentials as true
	})
);

app.get('/api/forget-password/:otp/:userID', (req,res)=>{
	console.log(req.params.otp, req.params.userID);
	res.render('pages/forget-password')
})

app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);

app.listen(process.env.PORT, () => {
	console.log(`listening on ${process.env.PORT}`);
});
