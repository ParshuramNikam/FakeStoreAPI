import express from "express";
const router = express.Router();

import Cart from "../../model/cart.model.js";
import addToCart from '../../middlewares/Cart Middlewares/addToCart.js'
import checkUserType from "../../middlewares/Auth/checkUser.js";
import getAllCarts from "../../middlewares/Cart Middlewares/getAllCarts.js";
import getCartById from "../../middlewares/Cart Middlewares/getCartById.js";
import removeFromCart from "../../middlewares/Cart Middlewares/removeFromCart.js";
import getCartByCookie from "../../middlewares/Cart Middlewares/getCartByCookie.js";

// To create a new cart, you have to create a new user -> with the new user, his cart gets created automatically!

// ------------------------------------------------------------------------------------------

router.get('/carts', getAllCarts, async (req, res) => {
	try {
		const allCarts = res.locals.carts;
		res.status(200).send({status:"success", carts: allCarts});
	} catch (error) {
		res.status(400).json({ status: "failed", message: error.message, error });
	}
})


router.get('/carts/by/cookie',getCartByCookie, (req,res)=>{
	try {
		const cart = res.locals.cart;
		res.status(200).send({status:"success", cart: cart});
	} catch (error) {
		res.status(400).send({ status: "failed", message: error.message, error });
	}
})

router.get('/carts/:cartId', getCartById, async (req, res) => {
	try {
		const cart = res.locals.cart;
		console.log("==========================================");
		console.log(cart);
		if (!cart) return res.status(200).json({ message: `No card found! with cartId= ${req.params.cartId}` })
		res.status(200).json({status:"success", carts: cart});
	} catch (error) {
		res.status(400).json({ status: "failed", message: error.message, error });
	}
}) 


// ------------------------------------------------------------------------------------------

// to add product to a cart:-
// if product already in cart then increment quantity : else add new product in cart with quantity.
// added with given quantity : if not given qunatity then increment by one.
router.patch('/cart/product/add/:cartId', checkUserType, addToCart)

// to remove product from a cart with quantity :-
router.patch('/cart/product/remove/:cartId', checkUserType, removeFromCart)


// ------------------------------------------------------------------------------------------

// add feature you can delete cart if the user gets deleted from database.
router.delete("/cart/delete/:cartId", async (req, res) => {
	try {
		const cart = await Cart.findOneAndDelete({ cartId: req.params.id });
		res.status(200).json({
			status: "success",
			message: "Cart deleted succesfully",
			deletedCart: cart,
		});
	} catch (error) {
		res.status(400).send({
			status: "Failed",
			message: error.message,
			error,
		});
	}
});


export default router;