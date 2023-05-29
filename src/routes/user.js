const { Router } = require ('express');
const router = Router ();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const json_users = JSON.parse(fs.readFileSync('src/users.json', 'utf-8'));
const users = [];
//let users = JSON.parse(json_users);

router.get('/', (req, res) => {
    res.json(json_users);
});



/*router.get('/new-entry', (req, res) => {
    res.render('new-entry');
});*/


router.post('/', (req, res) => {
    const { name } = req.body;
    /*if (!title || !comment1|| !image ) {
        res.status(400).send("Los campos son obligatorios");
        return;
      }*/
    let newUser = {
        id: uuidv4(),
        name
    }
    users.push(newUser);
    const json_users = JSON.stringify(users);
    fs.writeFileSync('src/users.json', json_users, 'utf-8');
    //res.redirect('/');
});




module.exports = router;