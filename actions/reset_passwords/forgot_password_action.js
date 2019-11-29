const ResetPassowrd = require("../../models/reset_password_model")
const User = require("../../models/user.model")
const { randomKey } = require("../../lib/generatorkey")
const SendMail = require("../emails/send_mailtrap.action")

class ForgotPassword {
    constructor(email) {
        this.email = email
    }
    async exec() {
        try {
            let user = await User.findOne({
                email: this.email
            }).exec()
            if (user === null) {
                throw new Error("User not found / tidak ditemukan")
            }
            let token = randomKey(54, 'aA#')
            let password = new ResetPassword({
                email: this.email,
                token
            })
            await password.save()

            let request_data = {
                to: this.email,
                subject: 'Forgot Password',
                text: `Your token for reset password is : ${token}`,
                html: ''
            }

            await new SebdMail(request_data).exec()
            return password
        } catch (err) {
            throw err
        }

    }
}


module.exports = ForgotPassword



