const express = require('express');

const RecruiterController = require('../../controllers/recruiter-controller');
// const { AuthRequestValidators } = require('../../middlewares/index');
console.log(RecruiterController);
const router = express.Router();

router.post(
    '/signup',
    async function(req, res){
        try {
            const result = await RecruiterController.create(req, res);
            // You can use the result if needed
        } catch (error) {
            // Handle any errors
            console.error(error);
            res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message
            });
        }
    }
);
router.post(
    '/signin',
    async function(req, res){
        try {
            const result = await RecruiterController.signIn(req, res);
            // You can use the result if needed
        } catch (error) {
            // Handle any errors
            console.error(error);
            res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message
            });
        }
    } 
);

router.delete(
    '/recruiter/:id',
    async function(req, res){
        try {
            const result = await RecruiterController.destroy(req,res);
            // You can use the result if needed
        } catch (error) {
            // Handle any errors
            console.error(error);
            res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message
            });
        }
    } 
);

// router.get(
//     '/isAuthenticated',
//     UserController.isAuthenticated
// )

// router.get(
//     '/isAdmin',
//     AuthRequestValidators.validateIsAdminRequest,
//     UserController.isAdmin
// );

module.exports = router;