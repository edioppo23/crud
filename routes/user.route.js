const express = require('express')
const router = express.Router()
const { Create, Get_all, Detail, Edit, Destroy } = require('../actions/User/CRUD.action')
const { check, validationResult, body } = require('express-validator')

router.post('/create',
    [
        check('name')
            .not()
            .isEmpty(),
        check('username')
            .not()
            .isEmpty(),
        check('email')
            .not()
            .isEmpty()
            .isEmail(),
        check('gender')
            .not()
            .isEmpty(),
        check('phone')
            .not()
            .isEmpty(),
        check('password')
            .not()
            .isEmpty()
            .isLength({ min: 6 }),
        body("password_confirmation").custom((value, { req }) => {
            if (value != req.body.password) {
                throw new Error("Password confirmation doesn't match")
            } else {
                return value
            }
        })

    ],

    async (req, res) => {
        const errors = validationResult(req)

        if (!error.isEmpty()) {
            return res.send({
                code: 400,
                status: 'Error',
                message: errors.array()
            })
        } try {
            let data = await new Create(req).exec()
            return res.send({
                code: 201,
                status: 'Sukses',
                message: " User account has created successfully",
                data
            })

        } catch (err) {
            return res.send({
                code: 400,
                status: 'Something went wrong',
                message: err.message
            })
        }
    })

router.get('/list', async (req, res) => {
    try {
        let data = await new Get_all(req).exec()
        return res.send({
            code: 200,
            status: " These are user's account data",
            data
        })
    } catch (err) {
        return res.send({
            code: 400,
            status: " something went wrong",
            message: err.message
        })
    }
})

router.post('/', async (req, res) => {
    try {
        let data = await new Details(reg).exec()
        return res.send({
            code: 200,
            status: " Here is the details of user's account data",
            data
        })
    } catch (err) {
        return res.send({
            code: 400,
            status: " Something went wrong",
            message: err.message

        })
    }
})

router.put('/:id', async (req, res) => {
    let { id } = req.params
    let updatedData = {
        name: req.body.name,
        phone: req.body.phone,
    }

    try {
        let data = await new Edit(id, updatedData).exec()
        return res.send({
            code: 200,
            status: "Success",
            message: "You have updated user's data successfully ",
            data

        })
    } catch (err) {
        return res.send({
            code: 400,
            status: "Something went wrong",
            message: err.message
        })
    }
})


router.delete("/:id", async (req, res) => {
    let { id } = req.params

    try {
        let data = await new Destroy(id).exec()

        return res.send({
            code: 200,
            status: "Success",
            message: "Here we go, user's account has deleted 😉",
            data

        })
    } catch (err) {
        return res.send({
            code: 400,
            status: " Something went wrong",
            message: err.message
        })
    }
})

module.exports = router







