const RecruiterService = require('../services/recruiter-service');

const recruiterService = new RecruiterService();

const create = async (req,res) => {
    try {
        const response = await recruiterService.create({
            name: req.body.name,
            companyName: req.body.companyName,
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            success: true,
            message: "Successfully created a new user",
            data: response,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
           success: false,
           message: "Something went wrong in controllers",
           data: {},
           err: error
        });
    }
}

const signIn = async (req,res) => {
    try {
        const response = await recruiterService.signIn(req.body.email, req.body.password);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully signed in'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message,
            data: {},
            success: false,
            err: error.explanation
        });
    }
}

const destroy = async (req,res) => {
    try {
        console.log(req.params);
        const response = await recruiterService.deleteRecruiter(req.params.id);
        console.log(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a recruiter',
            err: {}
        });
    } catch (error) {
        console.log(error); 
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the recruiter',
            err: error
        });        
    }
}

module.exports = {
    create,
    signIn,
    destroy
} ;