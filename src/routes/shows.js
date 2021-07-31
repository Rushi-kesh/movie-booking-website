const express = require('express');
const auth = require('../middlewares/auth');
const Show = require('../models/show');

const router = new express.Router();

// Create a show
router.post('/shows', auth.enhance, async (req, res) => {
  const show = new Show(req.body);
  try {
    await show.save();
    res.status(201).send(show);
  } catch (e) {
    res.status(400).send(e);
  }
});
module.exports = router;

// Get shows
router.get('/shows/:id', auth.enhance, async (req, res) => {
    const _id = req.params.id;
    try {
      const shows = await Show.find({user_id:_id});
      if (!shows) return res.sendStatus(404);
      res.send(shows);
    } catch (e) {
      res.sendStatus(400);
    }
  });