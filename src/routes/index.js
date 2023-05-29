const { Router } = require ('express');
const router = Router ();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const json_comments = fs.readFileSync('src/comments.json', 'utf-8');

let comments = JSON.parse(json_comments);

router.get('/', (req, res) => {
    res.json(comments);
});



/*router.get('/new-entry', (req, res) => {
    res.render('new-entry');
});*/

router.post('/', (req, res) => {
    const { user, topic, comment1, comment2, comment3} = req.body;
    /*if (!title || !comment1|| !image ) {
        res.status(400).send("Los campos son obligatorios");
        return;
      }*/
    let newComment = {
        id: uuidv4(),
        user, 
        topic,
        comment1, 
        comment2,
        comment3,
    }
    comments.push(newComment);
    const json_comments = JSON.stringify(comments);
    fs.writeFileSync('src/comments.json', json_comments, 'utf-8');
    //res.redirect('/');
});

router.put('/:id'),(req,res)=>{
    const{id}=res.params;
    const { user, topic, comment1, comment2, comment3} = req.body;

    let newComment2 = {
        id: uuidv4(),
        user, 
        topic,
        comment1, 
        comment2,
        comment3,
    }
    comments.push(newComment2);
    const json_comments = JSON.stringify(comments);
    fs.writeFileSync('src/comments.json', json_comments, 'utf-8');
}

router.get('/delete/:id', (req, res) => {
    comments = comments.filter(comment => comment.id != req.params.id);
    const json_comments = JSON.stringify(comments);
    fs.writeFileSync('src/comments.json', json_comments, 'utf-8');
    res.redirect('/');
});

module.exports = router;