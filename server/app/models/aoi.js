var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var aoiSchema = new Schema({
  Title:  String,
  Authors: String,
  Abstract:   String,
  URL:  String,
});

// create the model for users and expose it to our app
module.exports = mongoose.model('aoi', aoiSchema);