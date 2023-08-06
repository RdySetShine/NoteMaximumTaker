const router = require('express').Router()
const path = require('path')
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})
module.exports = router  
// packing items i na box and granting acces to anyone who grabs it!
// free cookies , no limit 

