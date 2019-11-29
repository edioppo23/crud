const nodemailer = require("nodemailer")

class SendMailtrap {
    constructor(params) {
        this.params = params
    }
    async exec() {
        try {
            const options = {
                host: process.env.EMAIL_HOST,
                port: process.env.EMAIL_PORT,
                secure: false,
                auth: {
                    user: process.env.EMAIL_USERNAME,
                    pass: process.env.EMAIL_PASSWORD
                }
            }

            const transporter = await nodemailer.createTransport(options)

            const data = {
                to: this.params.to.toString(),
                from: 'no-reply@demodock.com',
                subject: this.params.subject,
                text: this.params.text,
                html: this.params.html
            }

            setTimeout(async () => {
                // kirim email
                return await transporter.sendMail(data, (error, res) => {
                    if (error) {
                        console.log(error)
                    }
                })
            }, 600)

        } catch (err) {
            throw err
        }
    }
}

module.exports = SendMailtrap







