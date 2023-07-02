const router = require("express").Router();

router.get('/', (req, res) => {
    res.json({message: "this is home route"})
})
router.post('/', (req, res) => {
    const {name, email} = req.body;
    res.json({name, email})
})

module.exports = router