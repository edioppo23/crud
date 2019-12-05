const jwt = require("jsonwebtoken");
const { startwith } = require("lodash");
const Role = require("../models/role.models");

module.exports = () => {
    return async (req, res, next) => {
        let token = req.header("Authorization");

        let unauthenticated = {
            status: "unauthenticated",
            message: "Invalid header token"
        };
        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
                if (err) return res.status(401).json(unauthenticated);
                return next();
            })
        } else {
            return res.status(401).json(unauthenticated);
        }
    };

};