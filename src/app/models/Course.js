const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: String,
    decription : String,
    image: String,
    IdFirstVideo: String,
    slug: { type: String, slug: "name",unique:true },
    createdAt : { type: Date, default: Date.now },
    updatedAt : { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Course', Course);