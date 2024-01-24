const Recruiter = require('../models/Recruiter');

class RecruiterRepository {

    async create(data) {
        try {
            const user = await Recruiter.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async getByEmail(userEmail) {
        try {
            const user = await Recruiter.findOne({email: userEmail});
            if(!user) {
                throw new Error('AttributeNotFound');               
            }
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error; 
        }
    }

    async deleteRecruiter(recruiterId) {
        try{
            await Recruiter.deleteOne({
                id: recruiterId
            });
            return true;
        } catch (error) {
            console.log("Somethng went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = RecruiterRepository;