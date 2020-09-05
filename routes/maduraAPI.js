const express = require('express');
const router = express.Router();

const api = require('@sl-codeblaster/nodejs-madura-api');

router.get('/',async (req,res) => {

    const result = await api.query('name');

    res.send(result);
})

module.exports = router;