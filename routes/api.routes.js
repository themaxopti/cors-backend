const { Router } = require('express')
const router = Router()



router.get('/someone', async (req, res) => {
    try {
        console.log('===============')
        res.json('That is cool')
    } catch (e) {
        console.log(e)
    }
})



module.exports = router

