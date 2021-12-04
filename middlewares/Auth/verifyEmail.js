const verifyEmail = (req,res,next) => {
    try {
        console.log(verifyUser);
    } catch (error) {
        res.status(400).send({status:"failed",message: error.message, error});
    }
}