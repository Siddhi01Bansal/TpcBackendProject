const RecruiterRepository = require('../repository/recruiter-repository');

class RecruiterService {
    constructor() {
        this.RecruiterRepository = new RecruiterRepository();
    }

    async create(data) {
        try {
            const user = await this.RecruiterRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    async signIn(email, plainPassword) {
        try {
            // step 1-> fetch the user using the email
            const user = await this.RecruiterRepository.getByEmail(email);
            //step 2-> compare incoming plain password with stores encrypted password
            // const passwordsMatch = this.checkPassword(plainPassword, user.password);
            if(plainPassword!=user.password) {
                console.log("Password doesn't match");
                throw {error: 'Incorrect password'};
            }
            // step 3-> if passwords match then create a token and send it to the user
            // const newJWT = this.createToken({email: user.email, id: user.id});
            // return newJWT;
            return user;
        } catch (error) {
            if(error.name == 'AttributeNotFound') {
                throw error;
            }
            console.log("Something went wrong in the sign in process");
            throw error;
        }
    }

    async deleteRecruiter(recruiterId) {
        try {
            const response = await this.RecruiterRepository.deleteRecruiter(recruiterId);
            return response;
        } catch (error) {
            console.log("Somethng went wrong at service layer");
            throw {error};
        }
    }
}
module.exports = RecruiterService;