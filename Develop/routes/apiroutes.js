const router = require('express').Router()

// packing items i na box and granting acces to anyone who grabs it!
// free cookies , no limit 

// project 11 mini projects for assistance with the applicable routes
const fs = require('fs')
const path = require('path')

router.get('/notes', (req, res) => {

    res.sendFile(path.join(__dirname, '../db/db.json'));
})

// router.get('*', (req, res) => {

//     res.sendFile(path.join(__dirname, '../public/index.html'));
// })

// packing items i na box and granting acces to anyone who grabs it!
// free cookies , no limit 

router.post('/notes', (req, res) => {


    let db = fs.readFileSync(path.join(__dirname, '../db/db.json'));

    db = JSON.parse(db);

   
    let userNotes = { title: req.body.title, text: req.body.text }

    db.push(userNotes);
    fs.writeFileSync('db/db.json', JSON.stringify(db))

    res.json(db)

})

module.exports = router