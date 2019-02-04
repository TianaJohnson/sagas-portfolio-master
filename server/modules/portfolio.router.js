const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (rec, res) => {
  //'SELECT * FROM "tags" JOIN "projects" ON "projects"."tag_id" = "tags"."id" ;
        const queryText = 'SELECT * FROM projects JOIN tags ON "tags"."id" = "projects"."tag_id";';
        pool.query(queryText)
          .then((result) => { res.send(result.rows); })
          .catch((err) => {
            console.log('Error completing SELECT projescts query', err);
            res.sendStatus(500);
          });
});

router.get('/admin', (rec, res) => {
  const queryText = 'SELECT * FROM "projects";';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT projescts query', err);
      res.sendStatus(500);
    });
});

router.post('/admin', (rec, res) => {
  const newData = req.body;
  const queryText = 'INSERT INTO projects ("name", "description"'

})

module.exports = router;