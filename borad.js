const { application } = require('express');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello Board');
});

module.exports = router;

