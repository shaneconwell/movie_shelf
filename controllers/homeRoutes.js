const router = require('express').Router();
const { Movie, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    
        res.render('sandbox');
      });

module.exports = router;