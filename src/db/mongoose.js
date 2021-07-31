const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => console.log('connected to Mongo'))

.catch((err) => console.log("Failded to connect to MongoDB".err));
