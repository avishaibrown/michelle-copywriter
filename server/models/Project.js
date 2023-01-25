const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  date: {
    type: Date,
  },
  description: {
    type: String,
  },
  image: {
    type: Image,
  },
});

module.exports = mongoose.model('Project', ProjectSchema);