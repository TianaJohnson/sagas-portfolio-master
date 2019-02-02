const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (rec, res) => {
        const queryText = 'SELECT * FROM projects';
        pool.query(queryText)
          .then((result) => { res.send(result.rows); })
          .catch((err) => {
            console.log('Error completing SELECT projescts query', err);
            res.sendStatus(500);
          });
});

module.exports = router;