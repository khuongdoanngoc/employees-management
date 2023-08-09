const User = require('../models/user')
const getUserName = require('../../helpers/getUserInfor.helper')

class DashboardController {
    // [GET] /
    async home(req, res, next) {
        const username = getUserName(req)
        await res.render('dashboard/dashboard', { username })
    }

    // [GET] /chatbox
    async chatbox (req, res, next) {
        const username = getUserName(req)
        await res.render('dashboard/chatbox', { username })
    }

    async sendNotify (req, res, next) {
        const username = getUserName(req)
        await res.json(req.body)
    }

}

module.exports = new DashboardController()