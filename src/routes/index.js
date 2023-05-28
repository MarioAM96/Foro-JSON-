const { Router } = require ('express');
const router = Router ();
const fs = require('fs');

const comments = [];

router.get('/', (req, res) => {
    res.render('index.ejs', {
        comments
    });
});

router.get('/new-entry', (req, res) => {
    res.render('new-entry');
});

router.post('/new-entry', (req, res) => {
    const { title, comment1, image } = req.body;

    if (!title || !comment1|| !image ) {
        res.status(400).send("Los campos son obligatorios");
        return;
      }

    let newComment = {
        title, 
        comment1, 
        image 
    }

    comments.push(newComment);

    const json_comments = JSON.stringify(comments);
    fs.writeFileSync('src/comments.json', json_comments, 'utf-8')

    res.send('received');
});

module.exports = router;