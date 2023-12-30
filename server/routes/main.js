const express = require('express');

const router = express.Router();

router.get('', (req, res) => {
    const locals = {
        title: "Blog app with NodeJs",
        description: "Blog app with NodeJS, express, MongoDB and JWT"
    }
    res.render('index', { locals})
})

router.get('/about', (req, res) => {
    res.render('about')
})

module.exports = router;