const mongoose = require('mongoose');

const { Schema } = mongoose;
const showSchema = new Schema({
  movie_id: {
    type: String,
    required: true,
    trim: true,
  },
  movie_name: {
    type: String,
    required: true,
    trim: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  language: {
    type: String,
    required: true,
    trim: true,
  },
  showdate: {
    type: String,
    required: true,
    trim: true,
  },

  showtime: {
    type: String,
    required: true,
    trim: true,
  },
  tickets: {
    type: Number,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
});

const Show = mongoose.model('Shows', showSchema);

module.exports = Show;
